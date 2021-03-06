import React from 'react';

import Item from '../components/Item';

const item = 
{"verified":false,"w":1,"h":1,"icon":"https://web.poecdn.com/image/Art/2DItems/Rings/DemigodsBand2.png?v=173f6bb13c211fc376a770b5d12c72e4&w=1&h=1&scale=1","league":"Hardcore","id":"4f8c5076263f5cbdc0a1bb087a9b52ef255673bbcbfbb454bd435f79e7b56cec","name":"Demigod's Eye","typeLine":"Golden Hoop","identified":true,"ilvl":100,"requirements":[{"name":"Level","values":[["12",0]],"displayMode":0}],"implicitMods":["+8 to all Attributes"],"explicitMods":["33% increased Mana Regeneration Rate","16% increased Rarity of Items found","3% increased Character Size"],"flavourText":["#5 Overall in One Month Hardcore Flashback Event"],"frameType":3,"x":0,"y":0,"inventoryId":"Ring"};

const item2 = 
{"verified":false,"w":2,"h":3,"icon":"https://web.poecdn.com/image/Art/2DItems/Armours/Shields/DemigodsShieldAlt.png?v=26b5d682e63a0eba479baec14ee1f472&w=2&h=3&scale=1","league":"Hardcore","id":"3520051a8cb7e49cb1cff1c391d600e32a52bfe0f6830365b63ed9eb0335f050","sockets":[{"group":0,"attr":"S","sColour":"R"},{"group":0,"attr":"D","sColour":"G"},{"group":0,"attr":"S","sColour":"R"}],"name":"Demigod's Beacon","typeLine":"Golden Flame","identified":true,"ilvl":100,"properties":[{"name":"Chance to Block","values":[["20%",0]],"displayMode":0,"type":15}],"requirements":[{"name":"Level","values":[["15",0]],"displayMode":0}],"implicitMods":["+16% to Chaos Resistance"],"explicitMods":["Adds 10 to 20 Fire Damage to Attacks","12% increased Rarity of Items found","20% increased Light Radius"],"flavourText":["#4 Overall in the Hardcore Flashback Event"],"frameType":3,"x":0,"y":0,"inventoryId":"Offhand2","socketedItems":[]};

const item3 = 
{"verified":false,"w":2,"h":2,"icon":"https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?v=3a1d216d1feccd885829f6dd4d0f1d5e&w=2&h=2&scale=1","league":"Hardcore","id":"159df31450ee2866d5479bf7c2268844ea7095aaa0b1f3959c16921357bc47f7","sockets":[{"group":0,"attr":"D","sColour":"G"},{"group":0,"attr":"D","sColour":"G"},{"group":1,"attr":"I","sColour":"B"}],"name":"Goldrim","typeLine":"Leather Cap","identified":true,"ilvl":82,"properties":[{"name":"Evasion Rating","values":[["49",1]],"displayMode":0,"type":17}],"explicitMods":["+30 to Evasion Rating","10% increased Rarity of Items found","+36% to all Elemental Resistances","Reflects 4 Physical Damage to Melee Attackers"],"flavourText":["No metal slips as easily through the fingers as gold."],"frameType":3,"x":0,"y":0,"inventoryId":"Helm","socketedItems":[]};

const item4 = 
{"verified":false,"w":2,"h":2,"icon":"https://web.poecdn.com/image/Art/2DItems/Armours/Boots/Wanderlust.png?v=0ff39442b18a833e6f12db84fac2c28c&w=2&h=2&scale=1","league":"Hardcore","id":"b80dae2213087894b2131bf1d5c53bab8a8ed33dadd0dacddb31ef0b62d57ed8","sockets":[{"group":0,"attr":"G","sColour":"W"},{"group":0,"attr":"D","sColour":"G"},{"group":0,"attr":"S","sColour":"R"},{"group":0,"attr":"I","sColour":"B"}],"name":"Wanderlust","typeLine":"Wool Shoes","identified":true,"ilvl":68,"corrupted":true,"properties":[{"name":"Energy Shield","values":[["17",1]],"displayMode":0,"type":18}],"explicitMods":["+5 to Dexterity","+13 to maximum Energy Shield","21% increased Mana Regeneration Rate","20% increased Movement Speed","Cannot be Frozen"],"flavourText":["All the world is my home."],"frameType":3,"x":0,"y":0,"inventoryId":"Boots","socketedItems":[]};

const item5 = 
{"verified":false,"w":1,"h":1,"icon":"https://web.poecdn.com/image/Art/2DItems/Rings/MoonstoneRingUnique.png?v=81a85c443c6efb3d4410836327242bb9&w=1&h=1&scale=1","league":"Hardcore","id":"56428f54806cece03bcc8b4e638dbf973676af46d7d4e76a21c345ae66d7e518","name":"Shavronne's Revelation","typeLine":"Moonstone Ring","identified":true,"ilvl":80,"requirements":[{"name":"Level","values":[["30",0]],"displayMode":0}],"implicitMods":["+15 to maximum Energy Shield"],"explicitMods":["+60 to Intelligence","Right ring slot: You cannot Regenerate Mana","Right ring slot: Regenerate 3% of Energy Shield per second","Left ring slot: You cannot Recharge or Regenerate Energy Shield","Left ring slot: 100% increased Mana Regeneration Rate"],"flavourText":["\"Shavronne held Sanity in her right\r","hand and Revelation in her left.\r","Brutus chose the left hand.\"\r","- Kadavrus, Surgeon to the Umbra"],"frameType":3,"x":0,"y":0,"inventoryId":"Ring2"}

const item6 = 
{"verified":false,"w":2,"h":3,"icon":"https://web.poecdn.com/image/Art/2DItems/Armours/BodyArmours/TabulaRasa.png?v=c169e1ab88583925693bb3a35cc49b6b&w=2&h=3&scale=1","league":"Hardcore","id":"155270e540e4aa9a48ac9f1863c00fa4cc41192fc96a70882defb377a9a15532","sockets":[{"group":0,"attr":"G","sColour":"W"},{"group":0,"attr":"G","sColour":"W"},{"group":0,"attr":"G","sColour":"W"},{"group":0,"attr":"G","sColour":"W"},{"group":0,"attr":"G","sColour":"W"},{"group":0,"attr":"G","sColour":"W"}],"name":"Tabula Rasa","typeLine":"Simple Robe","identified":true,"ilvl":70,"frameType":3,"x":0,"y":0,"inventoryId":"BodyArmour","socketedItems":[]}

const item7 = 
{"verified":false,"w":2,"h":2,"icon":"https://web.poecdn.com/image/Art/2DItems/Armours/Gloves/GlovesDexIntUnique1.png?v=7f0286e47d36b4c4a50966ae736e58c5&w=2&h=2&scale=1","league":"Hardcore","id":"86f17492306b44fe810839c058a6ffc77545e14ba9daebb0f2eee17668cde534","sockets":[{"group":0,"attr":"I","sColour":"B"},{"group":1,"attr":"S","sColour":"R"}],"name":"Facebreaker","typeLine":"Strapped Mitts","identified":true,"ilvl":72,"properties":[{"name":"Evasion Rating","values":[["30",0]],"displayMode":0,"type":17},{"name":"Energy Shield","values":[["6",0]],"displayMode":0,"type":18}],"requirements":[{"name":"Level","values":[["16",0]],"displayMode":0}],"explicitMods":["+60% to Global Critical Strike Multiplier","10% reduced Enemy Stun Threshold","600% more Physical Damage with Unarmed Attacks","Extra gore"],"flavourText":["Fly like a Storm Crow, crush like a Rhoa"],"frameType":3,"x":0,"y":0,"inventoryId":"Gloves","socketedItems":[]}

const item8 =
{"verified":false,"w":1,"h":1,"icon":"https://web.poecdn.com/image/Art/2DItems/Amulets/Amulet7.png?v=ecac1e6f4574572eeef0379d955811cd&w=1&h=1&scale=1","league":"Hardcore","id":"6c82f1e998f9ec1aa4b2988a3236082a0ffc2bd8f9d47bb985fe4b70cbc067c0","name":"","typeLine":"Onyx Amulet","identified":true,"ilvl":37,"requirements":[{"name":"Level","values":[["20",0]],"displayMode":0}],"implicitMods":["+10 to all Attributes"],"frameType":0,"x":0,"y":0,"inventoryId":"Amulet"}

const uniqueItem = 
{"verified":false,"w":1,"h":1,"icon":"https://web.poecdn.com/image/Art/2DItems/Rings/DemigodsBand2.png?v=173f6bb13c211fc376a770b5d12c72e4&w=1&h=1&scale=1","league":"Hardcore","id":"4f8c5076263f5cbdc0a1bb087a9b52ef255673bbcbfbb454bd435f79e7b56cec","name":"Demigod's Eye","typeLine":"Golden Hoop","identified":true,"ilvl":100,"requirements":[{"name":"Level","values":[["12",0]],"displayMode":0}],"implicitMods":["+8 to all Attributes"],"explicitMods":["33% increased Mana Regeneration Rate","16% increased Rarity of Items found","3% increased Character Size"],"flavourText":["#5 Overall in One Month Hardcore Flashback Event"],"frameType":3,"x":0,"y":0,"inventoryId":"Ring"};

const rareItem = 
{"verified":false,"w":1,"h":1,"icon":"https://web.poecdn.com/image/Art/2DItems/Rings/DemigodsBand2.png?v=173f6bb13c211fc376a770b5d12c72e4&w=1&h=1&scale=1","league":"Hardcore","id":"4f8c5076263f5cbdc0a1bb087a9b52ef255673bbcbfbb454bd435f79e7b56cec","name":"Demigod's Eye","typeLine":"Golden Hoop","identified":true,"ilvl":100,"requirements":[{"name":"Level","values":[["12",0]],"displayMode":0}],"implicitMods":["+8 to all Attributes"],"explicitMods":["33% increased Mana Regeneration Rate","16% increased Rarity of Items found","3% increased Character Size"],"flavourText":["#5 Overall in One Month Hardcore Flashback Event"],"frameType":2,"x":0,"y":0,"inventoryId":"Ring"};

const magicItem = 
{"verified":false,"w":1,"h":1,"icon":"https://web.poecdn.com/image/Art/2DItems/Rings/DemigodsBand2.png?v=173f6bb13c211fc376a770b5d12c72e4&w=1&h=1&scale=1","league":"Hardcore","id":"4f8c5076263f5cbdc0a1bb087a9b52ef255673bbcbfbb454bd435f79e7b56cec","name":"Demigod's Eye","typeLine":"Golden Hoop","identified":true,"ilvl":100,"requirements":[{"name":"Level","values":[["12",0]],"displayMode":0}],"implicitMods":["+8 to all Attributes"],"explicitMods":["33% increased Mana Regeneration Rate","16% increased Rarity of Items found","3% increased Character Size"],"flavourText":["#5 Overall in One Month Hardcore Flashback Event"],"frameType":1,"x":0,"y":0,"inventoryId":"Ring"};

const normalItem = 
{"verified":false,"w":1,"h":1,"icon":"https://web.poecdn.com/image/Art/2DItems/Rings/DemigodsBand2.png?v=173f6bb13c211fc376a770b5d12c72e4&w=1&h=1&scale=1","league":"Hardcore","id":"4f8c5076263f5cbdc0a1bb087a9b52ef255673bbcbfbb454bd435f79e7b56cec","name":"Demigod's Eye","typeLine":"Golden Hoop","identified":true,"ilvl":100,"requirements":[{"name":"Level","values":[["12",0]],"displayMode":0}],"implicitMods":["+8 to all Attributes"],"explicitMods":["33% increased Mana Regeneration Rate","16% increased Rarity of Items found","3% increased Character Size"],"flavourText":["#5 Overall in One Month Hardcore Flashback Event"],"frameType":0,"x":0,"y":0,"inventoryId":"Ring"};

const Template = (args) => <Item {...args} />;

export default {
  title: 'Item',
  component: Item
};  


export const Ring = Template.bind({});
Ring.args = {
  item: item
};

export const Offhand = Template.bind({});
Offhand.args = {
  item: item2
};

export const Helm = Template.bind({});
Helm.args = {
  item: item3
};

export const Boots = Template.bind({});
Boots.args = {
  item: item4
};

export const Ring2 = Template.bind({});
Ring2.args = {
  item: item5
};

export const Armour = Template.bind({});
Armour.args = {
  item: item6
};

export const Gloves = Template.bind({});
Gloves.args = {
  item: item7
};
export const Amulet = Template.bind({});
Amulet.args = {
  item: item8
};

export const Unique = Template.bind({});
Unique.args = {
  item: uniqueItem
};

export const Rare = Template.bind({});
Rare.args = {
  item: rareItem
};

export const Magic = Template.bind({});
Magic.args = {
  item: magicItem
};

export const Normal = Template.bind({});
Normal.args = {
  item: normalItem
};


