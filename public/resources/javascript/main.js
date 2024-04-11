
const projects = {
    projectList: []
  };

function addProject(image, name, dateCompleted, languagesUsed, librariesUsed, description, sourceCodeLink){
    projects.projectList.push({"image": image, "name": name, "dateCompleted": dateCompleted, "languagesUsed": languagesUsed,
    "librariesUsed": librariesUsed, "description": description, "sourceCodeLink": sourceCodeLink})
    }

addProject("./resources/javascript/jImages/songClassification.png", "Lyrics -> Song Genre Machine Learning Classifier", "December 2023", "Jupyter Notebook, Python", "Natural Language Processing, Random Forests, L-GBM", "This natural language processing project investigates how accurately songs can be classified into genres based on lyrics alone.", "https://nbviewer.org/github/clovern/Song-Classification-Natural-Language-Processing-New/blob/main/FinalProject_12_6_edited-1%20%282%29.ipynb");
addProject("./resources/javascript/jImages/SteppingStones.png", "Stepping Stone Network", "November 2023", "Python: multithreaded sockets", "", "Creates a working stepping stone network, which uses a pathway of computers to hide the true identity (IP address) of a device.", "./steppingStone.html");
addProject("./resources/javascript/jImages/myMealsPreview.png", "Meal Plan & Grocery List Creator App", "April 2023", "Python, Tkinter", "", "Generates a meal plan based on your preferences, and creates a grocery list for that meal plan.", "./myMeals.html");
addProject("./resources/javascript/jImages/articleSummarizer.png", "Wikipedia Article Summarizer", "October 2023", "Hadoop MapReduce (Java)", "", "Summarizes 1Gb of Wikipedia articles down to their 5 most relevant sentences (based on a TF-IDF weighting system)", "./articleSummarizer.html");
addProject("./resources/javascript/jImages/pageRank.png", "Mini Search Engine", "November 2023", "Apache Spark (Java)", "", "Displays the most relevant wikipedia articles for a given search term, using Google's page rank algorithm", "./miniSearchEngine.html");
addProject("./resources/javascript/jImages/tripPlannerSite.png", "Trip Planning Website", "May 2023", "React, Java Spark, SQL", "", "Website for planning trips. Features were added to an existing code base as part of a 5 person team, using github, zenhub, and SCRUM based Agile methodology for our collaboration.", "./tripPlanningSite.html");
addProject("./resources/javascript/jImages/fiveCentDevPic.png", "FiveCentDev Website", "March 2020", "JavaScript, HTML, CSS, Express (Node.js)", "", "This website! Clicking this banner will route you to the code on github.", "https://github.com/clovern/fiveCentDevFinal");
addProject("./resources/javascript/jImages/BlockAndStreamCipher.png", "Message Encryption & Decryption", "June 2022", "C++", "", "Encrypts and decrypts file through a symmetric key system, using block or stream ciphers.", "./blockStreamCipher.html");
// addProject("./resources/javascript/jImages/SymbolTable.png", "Symbol Table", "July 2021", "C", "", "C program simulating the symbol table made by the assembler, which converts assembly code into machine language addresses.", "symbolTable.html");
addProject("./resources/javascript/jImages/rentalStoreGUIPic.png", "App for Tracking Game Store Rentals", "March 2021", "Java", "", "App to help employees of a game rental store track information about customer rentals.", "./gameRental.html");
addProject("./resources/javascript/jImages/Euchre.png", "Euchre", "April 2020", "Python, Tkinter (GUI)", "", "Euchre game against 3 AI players", "./Euchre.html");
addProject("./resources/javascript/jImages/wildChefMadness.png", "Wild Chef Madness", "January 2020", "Python, Brython", "", "Text branching game simulating a cooking show", "wildChefMadness.html");

// Below are older projects which are not being displayed currently
// addProject("./resources/javascript/jImages/gladiatorPIc.png", "Gladiator Game", "April 2021", "Java", "", "Survival text game implementing queus of monsters attacking from each cardinal direction", "./gladiator.html");
// addProject("./resources/javascript/jImages/stopWatchPic.png", "Triple Stopwatch GUI", "February 2021", "Java", "", "Simple GUI running and saving/loading multiple stopwatches with various settings", "./stopWatch.html");
// addProject("./resources/javascript/jImages/pokeStats.png", "Pokemon Stats Data Analysis", "April 2020", "Python", "iPywidgets (Jupyter notebook), \
// matplotlib, pandas", "retrieves useful statistics and charts from a csv on Pokemon data", "./pokeStats.html");
// addProject("./resources/javascript/jImages/Euchre.png", "Euchre", "April 2020", "Python, Tkinter (GUI)", "", "Euchre game against 3 AI players", "./Euchre.html");
// addProject("./resources/javascript/jImages/wildChefMadness.png", "Wild Chef Madness", "January 2020", "Python, Brython", "", "Text branching game simulating a cooking show", "wildChefMadness.html");

/*this code connects this to my script reference in a compiled version for handlebars add-on, and then
put the formatted version of that into the div with id projectDisplay.*/
const source = document.getElementById("projectsTemplate").innerHTML;

const template = Handlebars.compile(source);

const compiledHtml = template(projects);

document.getElementById("projectDisplay").innerHTML = compiledHtml;

