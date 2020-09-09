const mainContent = document.querySelector('.main-content');
mainContent.classList.add('main-content-level-1');
let displayScore = document.getElementById('score');
let score = 5;
displayScore.innerHTML = score;
//push toutes les divs dans cet array pour pouvoir retrouver chaque div avec un index.
//const arrayOfDiv = []; 
// plus besoin de cet array puisque je récupere toutes les div dans une nodelist


const walker = {
    x: 2,
    y: 0,
    index: 20
  };

const grid = [
    ['0','0','0','0','0','0','0','0','0','0'],
    ['0','0','0','0','1','0','0','0','0','0'],
    ['4','4','4','4','4','4','3','4','4','0'],
    ['0','0','0','0','0','0','0','0','0','0']
];

grid[walker.x][walker.y] = "5";


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

const nodeListOfDivs = mainContent.querySelectorAll('.div')
console.log(nodeListOfDivs)

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { 
        console.log('right press');
        if (nodeListOfDivs[walker.index] === nodeListOfDivs[29] && !nodeListOfDivs[14].classList.contains('life')) {
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
            nodeListOfDivs[29].classList.add('chemin'); 
            nodeListOfDivs[29].classList.remove('wall'); 
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
        if (nodeListOfDivs[walker.index-10].classList.contains('chemin')
        ||nodeListOfDivs[walker.index-10].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index-10].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-10 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-up')
        } else if (nodeListOfDivs[walker.index-10] === nodeListOfDivs[375]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-10 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-up')            
            nodeListOfDivs[432].classList.add('chemin'); 
            nodeListOfDivs[432].classList.remove('wall'); 
            nodeListOfDivs[455].classList.add('chemin'); 
            nodeListOfDivs[455].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index-10] === nodeListOfDivs[212]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-10 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-up')            
            nodeListOfDivs[418].classList.add('chemin'); 
            nodeListOfDivs[418].classList.remove('wall'); 
            nodeListOfDivs[441].classList.add('chemin'); 
            nodeListOfDivs[441].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index-10] === nodeListOfDivs[293]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index-10 ;
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
        if (nodeListOfDivs[walker.index+10].classList.contains('chemin')
        ||nodeListOfDivs[walker.index+10].classList.contains('wolf-friend')
        ||nodeListOfDivs[walker.index+10].classList.contains('life')) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+10 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-down')
        } else if (nodeListOfDivs[walker.index+10] === nodeListOfDivs[375]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+10 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-down')            
            nodeListOfDivs[432].classList.add('chemin'); 
            nodeListOfDivs[432].classList.remove('wall'); 
            nodeListOfDivs[455].classList.add('chemin'); 
            nodeListOfDivs[455].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index+10] === nodeListOfDivs[212]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+10 ;
            nodeListOfDivs[walker.index].classList.remove('chemin')
            nodeListOfDivs[walker.index].classList.add('walker-down')            
            nodeListOfDivs[418].classList.add('chemin'); 
            nodeListOfDivs[418].classList.remove('wall'); 
            nodeListOfDivs[441].classList.add('chemin'); 
            nodeListOfDivs[441].classList.remove('wall'); 
        } else if (nodeListOfDivs[walker.index+10] === nodeListOfDivs[293]) {
            nodeListOfDivs[walker.index].classList.remove('walker-right','walker-left','walker-down','walker-up')
            nodeListOfDivs[walker.index].classList.add('chemin')
            walker.index = walker.index+10 ;
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
        score = score + 5;
        displayScore.innerHTML = score;
      }
}