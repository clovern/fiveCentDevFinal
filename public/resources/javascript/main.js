
const projects = {
    projectList: []
  };

function addProject(image, name, dateCompleted, languagesUsed, librariesUsed, description, sourceCodeLink){
    projects.projectList.push({"image": image, "name": name, "dateCompleted": dateCompleted, "languagesUsed": languagesUsed,
    "librariesUsed": librariesUsed, "description": description, "sourceCodeLink": sourceCodeLink})
    }

addProject("./resources/javascript/jImages/Euchre.png", "Euchre", "April 2020", "Python", "Tkinter", "Euchre game against 3 AI players", "./Euchre.html");
addProject("./resources/javascript/jImages/wildChefMadness.png", "Wild Chef Madness", "January 2020", "Python", "", "Text branching game simulating a cooking show", "wildChefMadness.html");
addProject("./resources/javascript/jImages/pokeStats.png", "Pokemon Stats Data Analysis", "April 2020", "Python", "iPywidgets (Jupyter notebook), \
matplotlib, pandas", "retrieves useful information such as stat spread, strongest pokemon per type, \nstrengths and weaknesses \
per pokemon in a table format", "./pokeStats.html");

//code to connect this to my script reference in a compiled version, and then
//put the formatted version of that into the div with id projectDisplay.
const source = document.getElementById("projectsTemplate").innerHTML;

const template = Handlebars.compile(source);

const compiledHtml = template(projects);

document.getElementById("projectDisplay").innerHTML = compiledHtml;



// linkProvider = document.getElementById("linkProvider");

// linkProvider.onclick = function(){
//   const myStorage = window.sessionStorage;
//   let link = linkProvider.getAttribute(link);
//   console.log("Hello!");
//   myStorage.setItem("link", link);
// }
