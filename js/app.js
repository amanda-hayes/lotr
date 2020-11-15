console.log("Linked.");
// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];
const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];
const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];
const lands = [
  'The-Shire',
  'Rivendell',
  'Mordor'
];
// ============
// Chapter 1
// ============
// 1. create a section tag with an id of middle-earth
// 2. use a for loop to iterate over the lands array that does the following:
//   2a. creates an article tag (there should be one for each land when the loop is done)
//   2b. gives each land article an `id` tag of the corresponding land name
//   2c. includes an h1 with the name of the land inside each land article
//   2d. appends each land to the middle-earth section
// 3. append the section to the body of the DOM.

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  let middleEarthSectionTag = document.createElement("section");
  middleEarthSectionTag.setAttribute("id", "middle-earth");
  console.log(middleEarthSectionTag);

  for (let i = 0; i < lands.length; i++) {
    let articleTag = document.createElement("article");
    articleTag.setAttribute("id", lands[i]);
    let h1Tag = document.createElement("h1");
    h1Tag.innerHTML = lands[i];
    articleTag.appendChild(h1Tag);
    middleEarthSectionTag.appendChild(articleTag);
  }

  let bodyTag = document.getElementsByTagName("body")[0];
  bodyTag.appendChild(middleEarthSectionTag);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".
// ============
// Chapter 2
// ============
// display an `unordered list` of hobbits in the shire
// give each hobbit a class of `hobbit`
// hint: create a 'ul' outside the loop into which to append the 'li's
// hint: get 'The-Shire' by using its id
function makeHobbits() {
  console.log("2: makeHobbits");

  let listOfHobbits = document.createElement("ul");
  listOfHobbits.setAttribute("id", "listOfHobbits");

  for (let i = 0; i < hobbits.length; i++) {
    let listItem = document.createElement("li");

    listItem.classList.add("hobbit");
    listItem.setAttribute("id", hobbits[i]);
    listItem.innerHTML = hobbits[i];
    listOfHobbits.appendChild(listItem);
  }
  let shireArticle = document.getElementById(lands[0]);
  shireArticle.appendChild(listOfHobbits);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".
// ============
// Chapter 3
// ============
// create a div with an id of `'the-ring'`
// give the div a class of `'magic-imbued-jewelry'`
// add the ring as a child of `Frodo`
function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");
  const div = document.createElement("div");
  div.setAttribute("id", "the-ring");
  div.classList.add("magic-imbued-jewelry");
  let frodo = document.getElementById(hobbits[0]);
  frodo.appendChild(div);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".
// ============
// Chapter 4
// ============
// display an unordered list of baddies in Mordor
// give each of the baddies a class of "baddy"
// remember to append them to Mordor
function makeBaddies() {
  console.log("4: makeBaddies");
  let listOfBaddies = document.createElement("ul");
  for (let i = 0; i < baddies.length; i++) {
    let listItem = document.createElement("li");
    listItem.classList.add("baddies");
    listItem.setAttribute("id", baddies[i]);
    listItem.innerHTML = baddies[i];
    listOfBaddies.appendChild(listItem);
  }
  let mordorLand = document.getElementById(lands[2]);
  mordorLand.appendChild(listOfBaddies);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..
// ============
// Chapter 5
// ============
// create an `aside` tag
// put an `unordered list` of the `'buddies'` in the aside
// insert your aside as a child element of `rivendell`
function makeBuddies() {
  console.log("5: makeBuddies");
  let buddiesAsideTag = document.createElement("aside");
  let listOfBuddies = document.createElement("ul");
  listOfBuddies.setAttribute("id", "buddies");
  for (let i = 0; i < buddies.length; i++) {
    let listItem = document.createElement("li");
    listItem.classList.add("buddies");
    listItem.setAttribute("id", buddies[i]);
    listItem.innerHTML = buddies[i];
    listOfBuddies.appendChild(listItem);
    buddiesAsideTag.appendChild(listOfBuddies)
  }
  let rivendellLand = document.getElementById(lands[1]);
  rivendellLand.appendChild(buddiesAsideTag);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".
// ============
// Chapter 6
// ============
// assemble the `hobbits` and move them to `rivendell`
function leaveTheShire() {
  console.log("6: leaveTheShire");
  let listOfHobbits = document.getElementById("listOfHobbits");
  let rivendellLand = document.getElementById(lands[1]);
  rivendellLand.appendChild(listOfHobbits);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"
// ============
// Chapter 7
// ============
// change the `'Strider'` text to `'Aragorn'`
function beautifulStranger() {
  console.log("7: beautifulStranger");

  const stridersNewName = "Aragorn";

  let strider = document.getElementById(buddies[3]);
  strider.innerHTML = stridersNewName;

  buddies[3] = stridersNewName;
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"
// ============
// Chapter 8
// ============
// create a new div called `'the-fellowship'` within `rivendell`
// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
// add the list of hobbits and list of buddies to this UL
// after each character is added make an alert that they // have joined your party
// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");

  let div = document.createElement("div");
  div.setAttribute("id", "the-fellowShip");

  let rivendell = document.getElementById(lands[1]);
  let hobbitsList = document.getElementsByClassName("hobbit");
  let buddiesList = document.getElementsByClassName("buddies");

  for (let i = 0; i < hobbitsList.length; i++) {
    let hobbitsis = hobbitsList[i];
    div.appendChild(hobbitsis);
    alert("Huzzah! " + hobbitsis.innerText + " has joined The Fellowship!");
  }

  for (let i = 0; i < buddiesList.length; i++) {
    let buddiesis = buddiesList[i];
    div.appendChild(buddiesis);
    alert("Huzzah! " + buddiesis.innerText + " has joined The Fellowship!");
  }

  rivendell.appendChild(div);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"
// ============
// Chapter 9
// ============
// change the `'Gandalf'` text to `'Gandalf the White'`
// apply the following style to the element, make the // background 'white', add a grey border

function theBalrog() {
  console.log("9: theBalrog");

  let gandalf = document.getElementById(buddies[0]);
  gandalf.innerHTML = "Gandalf the White";
  buddies[3] = "Gandalf the White";

  document.getElementById(buddies[0]).style.backgroundColor = "white";
  document.getElementById(buddies[0]).style.borderColor = "grey";
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"
// ============
// Chapter 10
// ============
function hornOfGondor() {
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of Gondor has been blown. Boromir's been killed by the Uruk-hai!")
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  
  let boromir = document.getElementById(buddies[4]); 
  boromir.remove();
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"
// ============
// Chapter 11
// ============
function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  let frodo = document.getElementById(hobbits[0]);
  let samwise = document.getElementById(hobbits[1]);
  let mordorLand = document.getElementById(lands[2]);
  mordorLand.appendChild(frodo);
  mordorLand.appendChild(samwise);

  // add a div with an id of `'mount-doom'` to `Mordor`
  let div = document.createElement("div");
  div.setAttribute("id", "mount-doom");
  div.innerHTML = "Mount Doom";
  
  mordorLand.appendChild(div);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"
// ============
// Chapter 12
// ============
function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".
// ============
// Chapter 13
// ============
function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  // Move all the `hobbits` back to `the shire`
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".
// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================
document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});