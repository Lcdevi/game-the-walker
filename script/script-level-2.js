const mainContent = document.querySelector('.main-content');
mainContent.classList.add('main-content-level-2');

// ----------------- SCORE DISPLAY AND SCOR INIT ---------------------------------
let displayScore = document.getElementById('score');
let score = 5;
displayScore.innerHTML = score;

// ----------------- INIT POSITION OF THE WALKER ---------------------------------
const walker = {
    x: 8,
    y: 0,
    index: 96
};

// ----------------- POSITION TO WIN --------------------------------- 
const win = {
    x: 1,
    y: 11,
    index: 23
};

// ----------------- GRID LEVEL-2 --------------------------------- 

const grid = [
    ['0','0','0','0','0','0','0','0','0','0','0','0'],
    ['4','4','0','0','0','0','0','0','0','0','4','4'],
    ['0','4','0','1','4','0','0','0','0','0','4','0'],
    ['0','4','0','4','4','4','4','4','4','4','4','0'],
    ['0','4','0','0','0','0','4','0','0','0','0','0'],
    ['0','4','0','0','0','0','4','4','4','4','4','0'],
    ['0','4','4','4','3','4','4','0','0','0','0','0'],
    ['0','0','0','0','0','0','4','0','0','4','4','0'],
    ['4','4','4','4','4','4','4','0','0','4','4','0'],
    ['0','0','0','0','0','0','0','0','0','0','0','0']
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
        }
      }
    }
}

createGrid();


// ----------------- CREATE THE NODE LIST TO GET THE INDEX OF EACH CREATED DIV -------------------
const nodeListOfDivs = mainContent.querySelectorAll('.div')
console.log(nodeListOfDivs)


// -------------------- RUN THE WALKER WITH ARROWS KEYS ----------------------------

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { 
        console.log('right press');
        if (nodeListOfDivs[walker.index] === nodeListOfDivs[23] && !nodeListOfDivs[27].classList.contains('life')) {
            alert("you win, you can go to the next level")
        }
     
        if (nodeListOfDivs[walker.index+1].classList.contains('chemin')
        ||nodeListOfDivs[walker.index+1].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index+1].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up');
            nodeListOfDivs[walker.index].classList.add('chemin');
            walker.index += 1;
            nodeListOfDivs[walker.index].classList.add('walker-right');
            nodeListOfDivs[walker.index].classList.remove('chemin');  
        } else if (nodeListOfDivs[walker.index+1].classList.contains('open-wall')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index += 1;
            nodeListOfDivs[walker.index].classList.add('walker-right')
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[81].classList.add('chemin'); 
            nodeListOfDivs[81].classList.remove('wall'); 
            nodeListOfDivs[82].classList.add('chemin'); 
            nodeListOfDivs[82].classList.remove('wall'); 
        }   
    } 

    if (event.key === 'ArrowLeft') { 
        console.log('left press');
        if (nodeListOfDivs[walker.index] === nodeListOfDivs[12]) {
            nodeListOfDivs[walker.index].classList.add('chemin')
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            walker.index = 96;
            nodeListOfDivs[walker.index].classList.add('walker-right')
        }
        if (nodeListOfDivs[walker.index-1].classList.contains('chemin')
        ||nodeListOfDivs[walker.index-1].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index-1].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index -= 1;
            nodeListOfDivs[walker.index].classList.add('walker-left')
            nodeListOfDivs[walker.index].classList.remove('chemin')
        } else if (nodeListOfDivs[walker.index-1].classList.contains('open-wall')) {
            nodeListOfDivs[walker.index].classList.remove('walker-left')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index -= 1;
            nodeListOfDivs[walker.index].classList.add('walker-left')
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[81].classList.add('chemin'); 
            nodeListOfDivs[81].classList.remove('wall'); 
            nodeListOfDivs[82].classList.add('chemin'); 
            nodeListOfDivs[82].classList.remove('wall'); 
        } 
    } 

    if (event.key === 'ArrowUp') { 
        console.log('up press');
        if (nodeListOfDivs[walker.index-12].classList.contains('chemin')
        ||nodeListOfDivs[walker.index-12].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index-12].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-12 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-up')
        } 
    } 
    
    if (event.key === 'ArrowDown') { 
        console.log('down press');
        if (nodeListOfDivs[walker.index+12].classList.contains('chemin')
        ||nodeListOfDivs[walker.index+12].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index+12].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+12 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-down')
        }
    } 
    beginWolfFriend();
    takeLife();
}
);

// -------- CREATE A FUNCTION FOR THE MOMENT WHERE THE WALKER TAKES THE PINK SQUARE ------------------
function beginWolfFriend() {
    if (nodeListOfDivs[walker.index].classList.contains('wolf-friend')) {
        nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
        nodeListOfDivs[walker.index].classList.add('chemin')
        nodeListOfDivs[walker.index].classList.remove('wolf-friend')
        nodeListOfDivs[walker.index].classList.add('walker-right') 
        score = score + 50;
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

/*
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { 
        console.log('right press');
        if (nodeListOfDivs[walker.index] === nodeListOfDivs[23] && !nodeListOfDivs[27].classList.contains('life')) {
            alert("you win, you can go to the next level")
        }
     
        if (nodeListOfDivs[walker.index+1].classList.contains('chemin')||nodeListOfDivs[walker.index+1].classList.contains('life')) {
        nodeListOfDivs[walker.index].classList.remove('walker');
        nodeListOfDivs[walker.index].classList.add('chemin');
        console.log(walker.index)
            console.log("--------------------")
        walker.index += 1;
        nodeListOfDivs[walker.index].classList.add('walker');
        nodeListOfDivs[walker.index].classList.remove('chemin');  
        console.log(walker.index)
            } 
            
    } 

    if (event.key === 'ArrowLeft') { 
        console.log('left press');
        if (nodeListOfDivs[walker.index] === nodeListOfDivs[12]) {
            nodeListOfDivs[walker.index].classList.add('chemin')
            nodeListOfDivs[walker.index].classList.remove('walker')
            walker.index = 96;
            nodeListOfDivs[walker.index].classList.add('walker')
        }
        if (nodeListOfDivs[walker.index-1].classList.contains('chemin')) {
            nodeListOfDivs[walker.index].classList.remove('walker')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index -= 1;
            nodeListOfDivs[walker.index].classList.add('walker')
            nodeListOfDivs[walker.index].classList.remove('chemin')
        } else if (nodeListOfDivs[walker.index-1].classList.contains('open-wall')) {
            nodeListOfDivs[walker.index].classList.remove('walker')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index -= 1;
            nodeListOfDivs[walker.index].classList.add('walker')
            nodeListOfDivs[82].classList.add('chemin'); 
            nodeListOfDivs[82].classList.remove('wall'); 
            nodeListOfDivs[81].classList.add('chemin'); 
            nodeListOfDivs[81].classList.remove('wall'); 
        }
        if (nodeListOfDivs[walker.index-1].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index -= 1;
            nodeListOfDivs[walker.index].classList.add('walker')
            nodeListOfDivs[27].classList.remove('life');
            score = score + 5;
            displayScore.innerHTML = score;
        }


    } 

    if (event.key === 'ArrowUp') { 
        console.log('up press');
        if (nodeListOfDivs[walker.index-12].classList.contains('chemin')) {
            nodeListOfDivs[walker.index].classList.remove('walker')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-12 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker')
        }  
        if (nodeListOfDivs[walker.index-12].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker')
            nodeListOfDivs[walker.index].classList.add('chemin')     
            walker.index = walker.index-12 ;
            nodeListOfDivs[walker.index].classList.add('walker')
            nodeListOfDivs[27].classList.remove('life');
            score = score + 5;
            displayScore.innerHTML = score;
        }
    } 
    
    if (event.key === 'ArrowDown') { 
        console.log('down press');
        if (nodeListOfDivs[walker.index+12].classList.contains('chemin')) {
            nodeListOfDivs[walker.index].classList.remove('walker')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+12 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker')
        }
    } 

}
);
*/

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
const merlin = new Wolf({
    name: "merlin",
    wolfX: 8,
    wolfY: 10,
    index: 106,
    speed: 180
});

let wolvesArr = []; // empty array to push the wolves and loop over to create them
wolvesArr.push(merlin)

// ----------- DRAW MERLIN THE WOLF INTO THE DOM -----------

wolvesArr.forEach(eachWolf => {
    nodeListOfDivs[eachWolf.index].classList.remove('chemin')
    nodeListOfDivs[eachWolf.index].classList.add(eachWolf.name, 'wolf')
    })


// ----------- MOVE MERLIN THE WOLF - LOOPING THROW THE ARRAY OF WOLVES -----------

wolvesArr.forEach(eachWolf => moveWolves(eachWolf))

function moveWolves(wolf){
    const directions = [-1, +1, -12, +12]; // array of the 4 differents directions
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
  }, wolf.speed) // speed of the set interval function
}



// request Animation Frame
/*
function moveWolves() {
    const directions = [-1, +1, -12, +12];
    let direction = directions[Math.floor(Math.random() * directions.length)];
    console.log(direction)
    //if in the next square merlin is going to go to does not have a wall
    if (!nodeListOfDivs[merlin.index + direction].classList.contains('wall')) {
         //remove the ghosts classes
         nodeListOfDivs[merlin.index].classList.remove(merlin.name)
         nodeListOfDivs[merlin.index].classList.remove('wolf')
         nodeListOfDivs[merlin.index].classList.add('chemin')
        //move into that space
        merlin.index += direction;
        nodeListOfDivs[merlin.index].classList.add(merlin.name, 'wolf')
        nodeListOfDivs[merlin.index].classList.remove('chemin')

    } else {direction = directions[Math.floor(Math.random() * directions.length)]};

      requestAnimationFrame(moveWolves);
    }
    moveWolves();
    */