const mainContent = document.querySelector('.main-content');
mainContent.classList.add('main-content-level-3');

// ----------------- SCORE DISPLAY AND SCOR INIT ---------------------------------
let displayScore = document.getElementById('score');
let score = 1;
displayScore.innerHTML = score;

// ----------------- INIT POSITION OF THE WALKER ---------------------------------
const walker = {
    x: 21,
    y: 0,
    index: 483
};

// ----------------- POSITION TO WIN --------------------------------- 
const win = {
    x: 1,
    y: 22,
    index: 45
};

// ----------------- GRID LEVEL-2 --------------------------------- 

const grid = [
    ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
    ['0','4','4','0','4','4','4','4','4','4','1','4','4','0','4','4','4','0','4','4','4','4','4'],
    ['0','4','4','0','4','0','0','0','4','0','0','0','0','0','4','4','4','0','4','0','0','4','0'],
    ['0','0','0','0','4','0','0','0','4','0','0','0','0','0','0','4','4','0','4','0','0','4','0'],
    ['0','4','4','4','4','4','4','4','4','4','4','4','4','4','0','0','0','0','4','0','0','4','0'],
    ['0','4','0','0','4','0','0','4','0','0','0','0','0','4','4','4','4','4','4','0','0','4','0'],
    ['0','4','0','0','4','4','4','4','4','4','0','0','0','0','4','0','0','4','4','4','3','4','0'],
    ['0','4','0','0','0','4','0','4','0','4','4','4','0','0','4','0','0','4','0','0','0','0','0'],
    ['0','4','0','0','0','4','0','4','0','4','6','4','4','4','4','0','0','4','0','0','0','0','0'],
    ['0','4','4','4','4','3','0','4','0','4','4','4','0','4','0','0','0','4','0','0','0','0','0'],
    ['4','4','0','0','0','4','0','4','0','0','0','0','0','4','0','0','0','4','4','4','4','4','4'],
    ['0','4','4','4','4','4','0','4','0','0','0','4','4','4','0','0','0','4','0','0','0','0','0'],
    ['0','4','0','0','0','4','0','4','0','0','0','4','0','4','0','0','0','3','0','0','0','0','0'],
    ['0','1','0','0','0','4','0','4','4','4','4','4','0','4','4','4','4','4','0','0','0','0','0'],
    ['0','4','0','0','0','4','0','4','0','0','0','0','0','0','0','0','0','4','0','0','0','0','0'],
    ['0','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','0','0'],
    ['0','0','0','0','0','4','0','3','0','0','0','0','0','0','0','0','4','0','4','0','0','0','0'],
    ['0','0','0','0','0','4','0','4','4','4','4','0','4','4','4','4','4','0','4','0','0','0','0'],
    ['0','4','4','4','0','4','0','4','0','0','4','0','4','0','0','0','4','0','0','4','4','4','0'],
    ['0','4','4','4','0','4','0','4','4','4','4','4','4','4','4','4','4','4','0','4','4','1','0'],
    ['0','0','0','0','0','4','0','0','0','4','0','0','0','0','0','0','0','0','0','0','0','0','0'],
    ['4','4','4','4','4','4','4','4','4','4','0','0','0','0','0','0','0','0','0','0','0','0','0'],
    ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
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
        if (nodeListOfDivs[walker.index] === nodeListOfDivs[45] && !nodeListOfDivs[33].classList.contains('life')
            && !nodeListOfDivs[300].classList.contains('life') && !nodeListOfDivs[458].classList.contains('life')) {
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
        } else if (nodeListOfDivs[walker.index+1] === nodeListOfDivs[212]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+1 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-right')            
            nodeListOfDivs[418].classList.add('chemin'); 
            nodeListOfDivs[418].classList.remove('wall'); 
            nodeListOfDivs[441].classList.add('chemin'); 
            nodeListOfDivs[441].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index+1] === nodeListOfDivs[158]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+1 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-right')            
            nodeListOfDivs[26].classList.add('chemin'); 
            nodeListOfDivs[26].classList.remove('wall'); 
            nodeListOfDivs[49].classList.add('chemin'); 
            nodeListOfDivs[49].classList.remove('wall'); 
        } 
        if (nodeListOfDivs[walker.index] === nodeListOfDivs[252]) {
            nodeListOfDivs[walker.index].classList.add('chemin')
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            walker.index = 230;
            nodeListOfDivs[walker.index].classList.add('walker-right')
        }    
    } 

    if (event.key === 'ArrowLeft') { 
        console.log('left press');
        if (nodeListOfDivs[walker.index] === nodeListOfDivs[230]) {
            nodeListOfDivs[walker.index].classList.add('chemin')
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            walker.index = 252;
            nodeListOfDivs[walker.index].classList.add('walker-left')
        }
        if (nodeListOfDivs[walker.index-1].classList.contains('chemin')
        ||nodeListOfDivs[walker.index-1].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index-1].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index -= 1;
            nodeListOfDivs[walker.index].classList.add('walker-left')
            nodeListOfDivs[walker.index].classList.remove('chemin')
        } else if (nodeListOfDivs[walker.index-1] === nodeListOfDivs[158]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index -= 1 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-left')            
            nodeListOfDivs[26].classList.add('chemin'); 
            nodeListOfDivs[26].classList.remove('wall'); 
            nodeListOfDivs[49].classList.add('chemin'); 
            nodeListOfDivs[49].classList.remove('wall'); 
        } 


    } 

    if (event.key === 'ArrowUp') { 
        console.log('up press');
        if (nodeListOfDivs[walker.index-23].classList.contains('chemin')
        ||nodeListOfDivs[walker.index-23].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index-23].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-up')
        } else if (nodeListOfDivs[walker.index-23] === nodeListOfDivs[375]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-up')            
            nodeListOfDivs[432].classList.add('chemin'); 
            nodeListOfDivs[432].classList.remove('wall'); 
            nodeListOfDivs[455].classList.add('chemin'); 
            nodeListOfDivs[455].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index-23] === nodeListOfDivs[212]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-up')            
            nodeListOfDivs[418].classList.add('chemin'); 
            nodeListOfDivs[418].classList.remove('wall'); 
            nodeListOfDivs[441].classList.add('chemin'); 
            nodeListOfDivs[441].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index-23] === nodeListOfDivs[293]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-up')            
            nodeListOfDivs[108].classList.add('chemin'); 
            nodeListOfDivs[108].classList.remove('wall'); 
            nodeListOfDivs[109].classList.add('chemin'); 
            nodeListOfDivs[109].classList.remove('wall'); 
            nodeListOfDivs[86].classList.add('chemin'); 
            nodeListOfDivs[86].classList.remove('wall'); 
        } 
    } 
    
    if (event.key === 'ArrowDown') { 
        console.log('down press');
        if (nodeListOfDivs[walker.index+23].classList.contains('chemin')
        ||nodeListOfDivs[walker.index+23].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index+23].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-down')
        } else if (nodeListOfDivs[walker.index+23] === nodeListOfDivs[375]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-down')            
            nodeListOfDivs[432].classList.add('chemin'); 
            nodeListOfDivs[432].classList.remove('wall'); 
            nodeListOfDivs[455].classList.add('chemin'); 
            nodeListOfDivs[455].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index+23] === nodeListOfDivs[212]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-down')            
            nodeListOfDivs[418].classList.add('chemin'); 
            nodeListOfDivs[418].classList.remove('wall'); 
            nodeListOfDivs[441].classList.add('chemin'); 
            nodeListOfDivs[441].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index+23] === nodeListOfDivs[293]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-down')            
            nodeListOfDivs[108].classList.add('chemin'); 
            nodeListOfDivs[108].classList.remove('wall'); 
            nodeListOfDivs[109].classList.add('chemin'); 
            nodeListOfDivs[109].classList.remove('wall'); 
            nodeListOfDivs[86].classList.add('chemin'); 
            nodeListOfDivs[86].classList.remove('wall'); 
        } 
    } 
    beginWolfFriend();
    takeLife();
    gameOver()
}

window.addEventListener('keydown', moveWalker


/*(event) => {
    if (event.key === 'ArrowRight') { 
        console.log('right press');
        if (nodeListOfDivs[walker.index] === nodeListOfDivs[45] && !nodeListOfDivs[33].classList.contains('life')
            && !nodeListOfDivs[300].classList.contains('life') && !nodeListOfDivs[458].classList.contains('life')) {
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
        } else if (nodeListOfDivs[walker.index+1] === nodeListOfDivs[212]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+1 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-right')            
            nodeListOfDivs[418].classList.add('chemin'); 
            nodeListOfDivs[418].classList.remove('wall'); 
            nodeListOfDivs[441].classList.add('chemin'); 
            nodeListOfDivs[441].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index+1] === nodeListOfDivs[158]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+1 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-right')            
            nodeListOfDivs[26].classList.add('chemin'); 
            nodeListOfDivs[26].classList.remove('wall'); 
            nodeListOfDivs[49].classList.add('chemin'); 
            nodeListOfDivs[49].classList.remove('wall'); 
        } 
        if (nodeListOfDivs[walker.index] === nodeListOfDivs[252]) {
            nodeListOfDivs[walker.index].classList.add('chemin')
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            walker.index = 230;
            nodeListOfDivs[walker.index].classList.add('walker-right')
        }    
    } 

    if (event.key === 'ArrowLeft') { 
        console.log('left press');
        if (nodeListOfDivs[walker.index] === nodeListOfDivs[230]) {
            nodeListOfDivs[walker.index].classList.add('chemin')
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            walker.index = 252;
            nodeListOfDivs[walker.index].classList.add('walker-left')
        }
        if (nodeListOfDivs[walker.index-1].classList.contains('chemin')
        ||nodeListOfDivs[walker.index-1].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index-1].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index -= 1;
            nodeListOfDivs[walker.index].classList.add('walker-left')
            nodeListOfDivs[walker.index].classList.remove('chemin')
        } else if (nodeListOfDivs[walker.index-1] === nodeListOfDivs[158]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index -= 1 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-left')            
            nodeListOfDivs[26].classList.add('chemin'); 
            nodeListOfDivs[26].classList.remove('wall'); 
            nodeListOfDivs[49].classList.add('chemin'); 
            nodeListOfDivs[49].classList.remove('wall'); 
        } 


    } 

    if (event.key === 'ArrowUp') { 
        console.log('up press');
        if (nodeListOfDivs[walker.index-23].classList.contains('chemin')
        ||nodeListOfDivs[walker.index-23].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index-23].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-up')
        } else if (nodeListOfDivs[walker.index-23] === nodeListOfDivs[375]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-up')            
            nodeListOfDivs[432].classList.add('chemin'); 
            nodeListOfDivs[432].classList.remove('wall'); 
            nodeListOfDivs[455].classList.add('chemin'); 
            nodeListOfDivs[455].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index-23] === nodeListOfDivs[212]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-up')            
            nodeListOfDivs[418].classList.add('chemin'); 
            nodeListOfDivs[418].classList.remove('wall'); 
            nodeListOfDivs[441].classList.add('chemin'); 
            nodeListOfDivs[441].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index-23] === nodeListOfDivs[293]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-up')            
            nodeListOfDivs[108].classList.add('chemin'); 
            nodeListOfDivs[108].classList.remove('wall'); 
            nodeListOfDivs[109].classList.add('chemin'); 
            nodeListOfDivs[109].classList.remove('wall'); 
            nodeListOfDivs[86].classList.add('chemin'); 
            nodeListOfDivs[86].classList.remove('wall'); 
        } 
    } 
    
    if (event.key === 'ArrowDown') { 
        console.log('down press');
        if (nodeListOfDivs[walker.index+23].classList.contains('chemin')
        ||nodeListOfDivs[walker.index+23].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index+23].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-down')
        } else if (nodeListOfDivs[walker.index+23] === nodeListOfDivs[375]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-down')            
            nodeListOfDivs[432].classList.add('chemin'); 
            nodeListOfDivs[432].classList.remove('wall'); 
            nodeListOfDivs[455].classList.add('chemin'); 
            nodeListOfDivs[455].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index+23] === nodeListOfDivs[212]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-down')            
            nodeListOfDivs[418].classList.add('chemin'); 
            nodeListOfDivs[418].classList.remove('wall'); 
            nodeListOfDivs[441].classList.add('chemin'); 
            nodeListOfDivs[441].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index+23] === nodeListOfDivs[293]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+23 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-down')            
            nodeListOfDivs[108].classList.add('chemin'); 
            nodeListOfDivs[108].classList.remove('wall'); 
            nodeListOfDivs[109].classList.add('chemin'); 
            nodeListOfDivs[109].classList.remove('wall'); 
            nodeListOfDivs[86].classList.add('chemin'); 
            nodeListOfDivs[86].classList.remove('wall'); 
        } 
    } 
    beginWolfFriend();
    takeLife();
    gameOver()
}
*/
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
        score = score + 5;
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
const merlin = new Wolf({
    name: "merlin",
    wolfX: 1,
    wolfY: 1,
    index: 24,
    speed: 180
});

const perceval = new Wolf({
    name: "perceval",
    wolfX: 1,
    wolfY: 14,
    index: 37,
    speed: 120
}); 

const karadok = new Wolf({
    name: "karadok",
    wolfX: 3,
    wolfY: 15,
    index: 84,
    speed: 150
}); 

const lancelot = new Wolf({
    name: "lancelot",
    wolfX: 18,
    wolfY: 1,
    index: 415,
    speed: 190
}); 

const yvain = new Wolf({
    name: "yvain",
    wolfX: 19,
    wolfY: 20,
    index: 457,
    speed: 200
}); 

const gauvain = new Wolf({
    name: "gauvain",
    wolfX: 18,
    wolfY: 21,
    index: 435,
    speed: 200
}); 

let wolvesArr = []; // empty array to push the wolves and loop over to create them
wolvesArr.push(merlin, perceval, karadok, lancelot, yvain, gauvain)



// ----------- DRAW THE WOLVES INTO THE DOM -----------

wolvesArr.forEach(eachWolf => {
    nodeListOfDivs[eachWolf.index].classList.remove('chemin')
    nodeListOfDivs[eachWolf.index].classList.add(eachWolf.name, 'wolf')
    })


// ----------- MOVE THE WOLVES - LOOPING THROW THE ARRAY OF WOLVES -----------

wolvesArr.forEach(eachWolf => moveWolves(eachWolf))

function moveWolves(wolf){
    const directions = [-1, +1, -23, +23]; // array of the 4 differents directions
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
    window.removeEventListener('keydown', moveWalker)
        setTimeout(() => {
            createGameOverDiv()
            wolvesArr.forEach(wolf => clearInterval(wolf.timerId))
            score = 0;
        }, 500);
    }
    }

function createGameOverDiv() {
    const newDiv = document.createElement('div');
    const mainDiv = document.querySelector(".main-content");
    newDiv.classList.add("game-over");
    newDiv.innerHTML += 
    `<h1> GAME OVER </h1>
    <br>
    <button> try again </button>`
    mainDiv.appendChild(newDiv);
   // const crossImg = document.querySelector('.black-cross');
   // crossImg.addEventListener('click', event => {
   //     mainDiv.removeChild(newDiv);
   //    });
}

// ----------------- NEXT LEVEL FUCNTION ------------
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
    `<p> Perfect, you can go to the next level </p>
    <button> next level </button>`
    mainDiv.appendChild(newDiv);
   // const crossImg = document.querySelector('.black-cross');
   // crossImg.addEventListener('click', event => {
   //     mainDiv.removeChild(newDiv);
   //    });
}

// ----------------- RULES BUTTON FUNCTION ------------
const rulesBtn = document.getElementById("rules")
function rulesPopup(){
    window.removeEventListener('keydown', moveWalker)
    createRulesPopup();
    setTimeout(() => {
        wolvesArr.forEach(wolf => clearInterval(wolf.timerId))
    }, 500);
         
     }

function createRulesPopup() {
    const newDiv = document.createElement('div');
    const mainDivRulesPart = document.getElementById("game-place");
    newDiv.classList.add("rules");
    newDiv.innerHTML += 
    `<img src="./images/times-solid.svg" alt="black-cross" width='25px' class='black-cross'>
    <h3> THE RULES </h3>
    <br><br>
    <p> Take all the<div id="rules-life"></div>
    <br>
    Be careful of the <div id="rules-wolf"></div>
    <br><br>
    or calm them with the <div id="rules-moon"></div>
    </p>
    `
    mainDivRulesPart.appendChild(newDiv);
    const crossImg = document.querySelector('.black-cross');
    crossImg.addEventListener('click', event => {
        mainDivRulesPart.removeChild(newDiv);
        window.addEventListener('keydown', moveWalker);
        wolvesArr.forEach(eachWolf => moveWolves(eachWolf))
        document.getElementById("rules").disabled = false;
        document.getElementById("map").disabled = false;  
       });
}

rulesBtn.addEventListener('click', event => {
    rulesPopup()
    document.getElementById("rules").disabled = true;
    document.getElementById("map").disabled = true;  
  });



// ----------------- MAP BUTTON FUNCTION ------------
const mapBtn = document.getElementById("map")

function mapPopup(){
    window.removeEventListener('keydown', moveWalker)
    createMapPopup();
    setTimeout(() => {
        wolvesArr.forEach(wolf => clearInterval(wolf.timerId))
    }, 500);
         
     }

function createMapPopup() {
    const newDiv = document.createElement('div');
    const mainDivMapPart = document.getElementById("game-place");
    newDiv.classList.add("map");
    newDiv.innerHTML += 
    `<img src="./images/times-solid.svg" alt="black-cross" width='28px' class='black-cross'>
    <h3> MAAAAP </h3>`
    mainDivMapPart.appendChild(newDiv);
    const crossImg = document.querySelector('.black-cross');
    crossImg.addEventListener('click', event => {
        mainDivMapPart.removeChild(newDiv);
        window.addEventListener('keydown', moveWalker);
        wolvesArr.forEach(eachWolf => moveWolves(eachWolf))
        document.getElementById("rules").disabled = false;
        document.getElementById("map").disabled = false;  
       });
}

mapBtn.addEventListener('click', event => {
    mapPopup()
    document.getElementById("rules").disabled = true;
    document.getElementById("map").disabled = true;  
  });