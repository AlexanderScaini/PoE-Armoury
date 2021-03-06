import Items from "./Items";
import Flasks from "./Flasks";
import LikeButton from "./LikeButton";
import Skills from "./Skills";

import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

import "./Character.scss";
import "./Skills.scss";

const classNames = require("classnames");

/* props:
  - props.character -- an object containing all character and account data
  - props.setAccount -- for setting the currently viewed account
  - props.setState -- for setting current view
  - props.cookies -- for detecting if user is logged in (cookies.user)
  - props.favourites -- an array of user's favourites (if logged in)
  - props.addFavourite -- for adding favourite
  - props.removeFavourite -- removing favourite
  - props.setMsg -- sets the message to display for favourting and unfavourting characters
  - props.msg -- the message to display for favourting and unfavourting characters
*/

export default function Character(props) {
  // windowWidth is passed as a prop to Items and Flasks for responsive css
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  // allows us to control the order in which items are served from the JSON to Items.js
  let arrangedItems = [];
  let helm;
  let gloves;
  let boots;
  let offhand;
  let weapon;
  let bodyarmour;
  let ring;
  let ring2;
  let amulet;

  for (const item of props.character.items.items) {
    if (item.inventoryId === "Helm") {
      helm = item;
    } else if (item.inventoryId === "Gloves") {
      gloves = item;
    } else if (item.inventoryId === "Boots") {
      boots = item;
    } else if (item.inventoryId === "Offhand") {
      offhand = item;
    } else if (item.inventoryId === "Weapon") {
      weapon = item;
    } else if (item.inventoryId === "BodyArmour") {
      bodyarmour = item;
    } else if (item.inventoryId === "Ring") {
      ring = item;
    } else if (item.inventoryId === "Ring2") {
      ring2 = item;
    } else if (item.inventoryId === "Amulet") {
      amulet = item;
    }
  }
  // this is the order of items when we give it to Items.js
  arrangedItems = [
    helm,
    gloves,
    boots,
    offhand,
    weapon,
    bodyarmour,
    ring,
    ring2,
    amulet,
  ];

  const filteredArrangedItems = arrangedItems.reduce(function (
    result,
    element
  ) {
    if (element) {
      result.push(element);
    }
    return result;
  },
  []);

  // removes the items that Skills.js doesnt need to output
  const gems = filteredArrangedItems.map((item) => {
    if (
      item.inventoryId === "Offhand2" ||
      item.inventoryId === "Weapon2" ||
      item.inventoryId === "Belt"
    ) {
    } else {
      if (item.socketedItems) {
        return (
          <Skills
            item={item}
            itemName={item.inventoryId}
            gems={item.socketedItems}
          />
        );
      }
    }
  });

  const charClass = props.character.class;
  const classIcon = `/icons/${charClass.toLowerCase()}_icon.png`;
  return (
    <div className="container character-container char">
      <Row className="p-5 char-title">
        <Col lg="auto">
          <img src={classIcon} alt={props.character.class} />
        </Col>
        <Col lg={9} className="my-auto">
          <h1 className="character-name">{props.character.name}</h1>
          <h5>
            {props.character.level} | {props.character.class}
          </h5>
          <h5>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                props.setAccount(props.character.account_name);
                props.setState("account");
              }}
              className="accountLink"
            >
              {props.character.account_name}
            </a>
          </h5>
        </Col>
        <Col>
          {props.cookies.user && (
            <LikeButton
              character={props.character}
              favourites={props.favourites}
              addFavourite={props.addFavourite}
              removeFavourite={props.removeFavourite}
              size="4em"
              msg={props.msg}
              setMsg={props.setMsg}
            />
          )}
        </Col>
      </Row>
      <Row className="p-3" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <Col lg={12}>
          <Row className="inventory-wrapper">
            <Items
              windowWidth={windowWidth}
              items={props.character.items.items}
            />
          </Row>
          <Row>
            <Col>
              <Flasks
                windowWidth={windowWidth}
                items={props.character.items.items}
              />
            </Col>
          </Row>
        </Col>
        <Row lg={12} xs={12} style={{ justifyContent: "center" }}>
          {gems}
        </Row>
      </Row>
    </div>
  );
}
