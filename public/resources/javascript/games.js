const games = {
    projectList: []
  };

let key = -1;
function addProject(image, name, description, sourceCodeLink){
    key++;
    games.projectList.push({"image": image, "name": name, "description": description, "sourceCodeLink": sourceCodeLink, "key": key})
    }

addProject("./resources/javascript/jImages/wildChefMadness.png", "Wild Chef Madness", "Cooking show text adventure game", "./wildChefMadness.html");

//code to connect this to my script reference in a compiled version, and then
//put the formatted version of that into the div with id projectDisplay.
const source = document.getElementById("gamesTemplate").innerHTML;

const template = Handlebars.compile(source);

const compiledHtml = template(games);

document.getElementById("gameDisplay").innerHTML = compiledHtml;
