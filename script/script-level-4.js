export function level4 (nextLevelCallback) {

const mainContent = document.querySelector('.main-content');
mainContent.classList.add('main-content-level-4');

// ----------------- SCORE DISPLAY AND SCOR INIT ---------------------------------
let displayScore = document.getElementById('score');
let score = 5;
displayScore.innerHTML = score;

// ----------------- INIT POSITION OF THE WALKER ---------------------------------
const walker = {
    x: 12,
    y: 0,
    index: 300
};

// ----------------- POSITION TO WIN --------------------------------- 
const win = {
    x: 10,
    y: 0,
    index: 250
};

// ----------------- GRID LEVEL-2 --------------------------------- 

const grid = [
    ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
    ['0','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','0'],
    ['0','4','0','0','0','0','0','0','0','0','0','0','4','0','0','0','0','0','0','0','0','0','0','4','0'],
    ['0','4','0','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','0','4','0'],
    ['0','4','0','4','0','0','0','0','0','0','4','0','0','0','0','0','0','0','0','0','0','4','0','4','0'],
    ['0','4','0','4','0','4','4','4','4','4','4','0','4','4','4','4','4','4','4','4','0','4','0','4','0'],
    ['0','4','0','4','0','4','0','0','0','0','0','0','4','0','0','0','0','0','0','4','0','4','0','4','0'],
    ['0','4','0','4','0','4','0','4','4','4','4','4','4','4','4','4','4','4','0','4','0','4','0','4','0'],
    ['0','4','0','4','0','4','0','4','0','0','0','0','0','0','0','0','0','4','0','4','0','4','0','4','0'],
    ['0','4','0','4','0','4','0','4','0','4','4','4','4','4','4','4','0','4','0','4','0','4','0','4','0'],
    ['10','4','0','4','0','4','0','4','0','4','0','0','4','0','0','4','0','4','0','4','0','4','0','4','0'],
    ['0','0','0','4','0','4','0','4','0','4','0','4','4','4','0','4','0','4','0','4','4','4','0','4','0'],
    ['4','4','4','4','0','4','0','4','0','4','0','4','4','4','4','4','0','4','0','4','0','0','0','4','0'],
    ['0','4','0','4','0','4','0','4','0','4','0','6','4','4','0','4','0','4','0','4','0','4','4','4','0'],
    ['0','4','0','4','0','4','0','4','0','4','0','0','0','0','0','4','0','4','4','4','0','4','0','4','0'],
    ['0','4','0','4','0','4','0','4','0','4','4','0','4','4','4','4','0','4','0','4','0','4','0','4','0'],
    ['0','4','0','4','0','4','0','4','0','0','0','0','4','0','0','0','0','4','0','4','0','4','0','4','0'],
    ['0','4','0','4','4','4','0','4','4','4','4','0','4','4','4','4','4','4','0','4','4','4','0','4','0'],
    ['0','4','0','4','0','4','0','0','0','0','4','0','0','0','0','0','0','0','0','4','0','4','0','4','0'],
    ['0','4','0','4','0','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','0','4','0','4','0'],
    ['0','4','0','4','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','4','0','4','0'],
    ['0','4','0','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','0','4','0'],
    ['0','4','0','0','0','0','0','0','0','0','0','0','4','0','0','0','0','0','0','0','0','0','0','4','0'],
    ['0','4','4','4','4','4','4','4','4','4','4','4','4','0','4','4','4','4','4','4','4','4','4','4','0'],
    ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']

];

grid[walker.x][walker.y] = "5";


// ----------------- FUNCTION TO DRAW THE GRID --------------------------------- 

function createGrid() {
    for (let i = 0; i<grid.length; i++) {
        for (let j = 0; j<grid[i].length; j++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add('div')
            mainContent.appendChild(newDiv);
        if (grid[i][j] === '0') {
          newDiv.classList.add('wall')
        } else if (grid[i][j] === '4') {
          newDiv.classList.add('chemin')
        } else if (grid[i][j] === '1') {
          newDiv.classList.add('life')
        } else if (grid[i][j] === '3') {
          newDiv.classList.add('open-wall')
        } else if (grid[i][j] === '5') {
          newDiv.classList.add('walker-right')   
        } else if (grid[i][j] === '6') {
          newDiv.classList.add('wolf-friend')   
        } else if (grid[i][j] === '10') {
            newDiv.classList.add('exit')
            newDiv.classList.add('chemin')
        }
      }
    }
}

createGrid();


// ----------------- CREATE THE NODE LIST TO GET THE INDEX OF EACH CREATED DIV -------------------
const nodeListOfDivs = mainContent.querySelectorAll('.div')
console.log(nodeListOfDivs)


// -------------------- RUN THE WALKER WITH ARROWS KEYS ----------------------------

function moveWalker(event){

    if (event.key === 'ArrowRight') { 
        console.log('right press');
        if (nodeListOfDivs[walker.index] === nodeListOfDivs[250] && !nodeListOfDivs[336].classList.contains('life')) {
                nextLevel();
        }
     
        if (nodeListOfDivs[walker.index+1].classList.contains('chemin')
        ||nodeListOfDivs[walker.index+1].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index+1].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up');
            nodeListOfDivs[walker.index].classList.add('chemin');
            walker.index += 1;
            nodeListOfDivs[walker.index].classList.add('walker-right');
            nodeListOfDivs[walker.index].classList.remove('chemin');  
        } 
    } 

    if (event.key === 'ArrowLeft') { 
        console.log('left press');
        if (nodeListOfDivs[walker.index-1].classList.contains('chemin')
        ||nodeListOfDivs[walker.index-1].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index-1].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index -= 1;
            nodeListOfDivs[walker.index].classList.add('walker-left')
            nodeListOfDivs[walker.index].classList.remove('chemin')
        } 
    } 

    if (event.key === 'ArrowUp') { 
        console.log('up press');
        if (nodeListOfDivs[walker.index-25].classList.contains('chemin')
        ||nodeListOfDivs[walker.index-25].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index-25].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-25 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-up')
        }
    } 
    
    if (event.key === 'ArrowDown') { 
        console.log('down press');
        if (nodeListOfDivs[walker.index+25].classList.contains('chemin')
        ||nodeListOfDivs[walker.index+25].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index+25].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+25 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-down')
        }
    } 
    beginWolfFriend();
    takeLife();
    gameOver();
}

window.addEventListener('keydown', moveWalker);

// -------- CREATE A FUNCTION FOR THE MOMENT WHERE THE WALKER TAKES THE PINK SQUARE ------------------
function beginWolfFriend() {
    if (nodeListOfDivs[walker.index].classList.contains('wolf-friend')) {
        nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
        nodeListOfDivs[walker.index].classList.add('chemin')
        nodeListOfDivs[walker.index].classList.remove('wolf-friend')
        nodeListOfDivs[walker.index].classList.add('walker-right') 
        score = score + 2;
        displayScore.innerHTML = score;
      }
}

// -------- CREATE A FUNCTION FOR THE MOMENT WHERE THE WALKER TAKES THE LIFE SQUARE ------------------
function takeLife() {
    if (nodeListOfDivs[walker.index].classList.contains('life')) {
        nodeListOfDivs[walker.index].classList.remove('life')
        score = score + 1;
        displayScore.innerHTML = score;
      }
}

// -------------- CREATE THE WOLF CONSTRUCTOR -----------------

class Wolf {
    constructor(infos) {
      this.name = infos.name;
      this.wolfX = infos.wolfX;
      this.wolfY = infos.wolfY;
      this.index = infos.index;
      this.speed = infos.speed;
    }
  }

// ------------- CREATE MERLIN THE WOLF, INSTANCE OF WOLF-----------------
const gauvain1 = new Wolf({
    name: "gauvain1",
    wolfX: 1,
    wolfY: 1,
    index: 26,
    speed: 220
}); 

const gauvain2 = new Wolf({
    name: "gauvain2",
    wolfX: 1,
    wolfY: 12,
    index: 37,
    speed: 270
}); 

const gauvain3 = new Wolf({
    name: "gauvain3",
    wolfX: 1,
    wolfY: 23,
    index: 48,
    speed: 240
}); 

const gauvain4 = new Wolf({
    name: "gauvain4",
    wolfX: 7,
    wolfY: 17,
    index: 192,
    speed: 230
}); 

const gauvain5 = new Wolf({
    name: "gauvain5",
    wolfX: 11,
    wolfY: 9,
    index: 284,
    speed: 150
}); 

const gauvain6 = new Wolf({
    name: "gauvain6",
    wolfX: 11,
    wolfY: 13,
    index: 288,
    speed: 195
}); 

const merlin = new Wolf({
    name: "merlin",
    wolfX: 12,
    wolfY: 5,
    index: 305,
    speed: 180
});

const perceval = new Wolf({
    name: "perceval",
    wolfX: 12,
    wolfY: 19,
    index: 319,
    speed: 120
}); 

const karadok = new Wolf({
    name: "karadok",
    wolfX: 17,
    wolfY: 7,
    index: 432,
    speed: 150
}); 

const lancelot = new Wolf({
    name: "lancelot",
    wolfX: 23,
    wolfY: 1,
    index: 576,
    speed: 190
}); 

const yvain = new Wolf({
    name: "yvain",
    wolfX: 23,
    wolfY: 12,
    index: 587,
    speed: 200
}); 

const gauvain = new Wolf({
    name: "gauvain",
    wolfX: 23,
    wolfY: 23,
    index: 598,
    speed: 200
}); 



let wolvesArr = []; // empty array to push the wolves and loop over to create them
wolvesArr.push(merlin, perceval, karadok, lancelot, yvain, gauvain, gauvain1, gauvain2, gauvain3, gauvain4, gauvain5, gauvain6)



// ----------- DRAW THE WOLVES INTO THE DOM -----------

wolvesArr.forEach(eachWolf => {
    nodeListOfDivs[eachWolf.index].classList.remove('chemin')
    nodeListOfDivs[eachWolf.index].classList.add(eachWolf.name, 'wolf')
    })


// ----------- MOVE THE WOLVES - LOOPING THROW THE ARRAY OF WOLVES -----------

wolvesArr.forEach(eachWolf => moveWolves(eachWolf))

function moveWolves(wolf){
    const directions = [-1, +1, -25, +25]; // array of the 4 differents directions
    let direction = directions[Math.floor(Math.random() * directions.length)]; // choose randomly a direction

    wolf.timerId = setInterval(function() {
    //if the next case is not a wall or is not a life
    if (!nodeListOfDivs[wolf.index + direction].classList.contains('wall')
        && !nodeListOfDivs[wolf.index + direction].classList.contains('life')
        ) {
         //remove the wolf classes and add chemin class
         nodeListOfDivs[wolf.index].classList.remove(wolf.name)
         nodeListOfDivs[wolf.index].classList.remove('wolf')
         nodeListOfDivs[wolf.index].classList.add('chemin')
        //incrémente the index
        wolf.index += direction;
        //add the wolf class and remove the chemin class into the new index
        nodeListOfDivs[wolf.index].classList.add(wolf.name, 'wolf')
        nodeListOfDivs[wolf.index].classList.remove('chemin')
        //else choose an other direction
    } else {direction = directions[Math.floor(Math.random() * directions.length)]};

    //if the wolf is on the same case of the walker
    if (nodeListOfDivs[wolf.index].classList.contains('walker-right')
        ||nodeListOfDivs[wolf.index].classList.contains('walker-left')
        ||nodeListOfDivs[wolf.index].classList.contains('walker-up')
        ||nodeListOfDivs[wolf.index].classList.contains('walker-down')) {
        //add shake-horizontal class to de div
        nodeListOfDivs[wolf.index].classList.add('shake-horizontal');

        setTimeout(() => {
            nodeListOfDivs[wolf.index].classList.remove('shake-horizontal');
        }, 100);
       
        
        //remove 1 to the score and display it
        score = score - 1;
        displayScore.innerHTML = score;
    }
    gameOver()
  }, wolf.speed) // speed of the set interval function
}


// -------------------- GAME OVER FUNCTION ---------------

function gameOver(){
   if(score<=0){
    window.removeEventListener('keydown', moveWalker);
    createGameOverDiv();
        setTimeout(() => {    
            wolvesArr.forEach(wolf => clearInterval(wolf.timerId))
        }, 500);   
    }
}

function createGameOverDiv() {
    if(!document.querySelector('.game-over')) {
        const newDiv = document.createElement('div');
        const mainDiv = document.querySelector(".main-content");
        newDiv.classList.add("game-over");
        newDiv.innerHTML = 
        `<img src="./images/wolf-bad.png" alt="" width="30%">
        <h1> GAME OVER </h1>
        <button id="try-again-btn"> => try again <= </button>`
        mainDiv.appendChild(newDiv);
        const btnTryAgain = document.getElementById('try-again-btn')
        btnTryAgain.addEventListener('click', reset)
    
    }
}

// -------------------- RESET FUNCTIONS---------------

function reset() {
    location.reload(true);
}

// ----------------- NEXT LEVEL FUNCTION ------------
function nextLevel(){
    window.removeEventListener('keydown', moveWalker)
    createNextLevelDiv()
    setTimeout(() => {
        wolvesArr.forEach(wolf => clearInterval(wolf.timerId))
    }, 500);
         
     }

function createNextLevelDiv() {
    const newDiv = document.createElement('div');
    const mainDiv = document.querySelector(".main-content");
    newDiv.classList.add("next-level");
    newDiv.innerHTML += 
    `<img src="./images/sylvain-trans.png" alt="" width="30%">
    <p> Well, you're still alive, you can move on </p>
    <button id="btn-next-level"> next level => </button>`
    mainDiv.appendChild(newDiv);
    const btnNextLevel = document.getElementById('btn-next-level')
    btnNextLevel.addEventListener('click', ()=> {
        console.log("TO THE NEXT LEVEL")
    })
}

}