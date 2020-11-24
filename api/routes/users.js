const bcrypt = require('bcryptjs')
let salt = bcrypt.genSaltSync(10);
const { addUser } = require('./helpers/setters')

/* GET home page. */

module.exports = (db, router) => {
  router.get('/test', (req, res, next) => {
    res.send('Hi there')
  })
  router.post('/register', (req, res, next) => {
    const user = req.body;
    user.password = bcrypt.hashSync("B4c0/\/", salt);
    console.log('adding user...')
    addUser(db, user)
    .then((user) => {
      console.log('user added...')
      if (!user) {
        res.send({error: "error"});
        return;
      }
      res.send(String(user[0].id))
  }).catch((err) => {
    console.log(err)
  })
});

router.post('/login', (req, res) => {
  const {email, password} = req.body;
  db.query('SELECT * FROM users WHERE email=$1', [email])
    .then(result => {
      if (!result) {
        res.send({error: "error"});
        return;
      }
      if (bcrypt.compareSync(password, result.rows[0].password)) {
        console.log('passwords match')
        res.status(200).send(String(result.rows[0].id))
      } else {
        console.log('passwords dont match')
        res.status(403).send('nope')
      }
    })
    .catch(e => res.send(e));
});

router.get('/:id/favourites', (req, res, next) => {
  db.query('SELECT * FROM characters JOIN favourites ON favourites.character_id = characters.id WHERE favourites.user_id=$1', [req.params.id]).then((result) => {
    console.log(result.rows)
    res.send(result.rows)
  }).catch((err) => {
    console.log(err)
    console.log(err)
  })
})

router.delete(`/:user_id/favourites/:char_id`, (req, res, next) => {
  db.query('DELETE FROM favourites WHERE user_id=$1 AND character_id=$2 RETURNING *', [req.params.user_id, req.params.char_id]).then((result) => {
    res.send(result.rows)
  }).catch(err => console.log(err))
})

router.post(`/:user_id/favourites/:char_id`, async(req, res, next) => {

  const alreadyExists = await db.query('SELECT * FROM favourites WHERE user_id=$1 AND character_id=$2', [req.params.user_id, req.params.char_id]).then((result) => {
    console.log(result.rows)
    return result.rows
  }).catch((err) => {
    return err
  })

  if (alreadyExists.length === 0) {
    db.query('INSERT INTO favourites(user_id, character_id) VALUES($1, $2) RETURNING *', [req.params.user_id, req.params.char_id]).then((result) => {
      res.send(result.rows)
    }).catch(err => console.log(err))
  } else {
    res.status(403).send('already favorited')
  }

})
  return router;
};
