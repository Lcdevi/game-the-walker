import { level1 } from "./script-level-1.js";
import { level2 } from "./script-level-2.js";
import { level3 } from "./script-level-3.js";


level1(()=>{
    level2(()=>{
        level3()
    })
});

let popUp;


// ----------------- RULES BUTTON FUNCTION ------------
const rulesBtn = document.getElementById("rules")

function rulesPopup() {
    //window.removeEventListener('keydown', moveWalker)
    createRulesPopup();

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
        popUp = 1;
        console.log("main croix")
        mainDivRulesPart.removeChild(newDiv);
        window.addEventListener('keydown', moveWalker);
        document.getElementById("rules").disabled = false;
        document.getElementById("map").disabled = false;
    });
}

rulesBtn.addEventListener('click', event => {
    console.log("main")
    rulesPopup()
    document.getElementById("rules").disabled = true;
    document.getElementById("map").disabled = true;
    popUp = 2;

});


    // ----------------- MAP BUTTON FUNCTION ------------
    const mapBtn = document.getElementById("map")

    function mapPopup() {
       // window.removeEventListener('keydown', moveWalker)
        createMapPopup();
    }

    function createMapPopup() {
        const newDiv = document.createElement('div');
        const mainDivMapPart = document.getElementById("game-place");
        newDiv.classList.add("map");
        newDiv.innerHTML +=
            `<img src="./images/times-solid-white.svg" alt="black-cross" width='28px' class='black-cross'>
            <img src="./images/map-02.png" alt="map" class='map-img'>`
        mainDivMapPart.appendChild(newDiv);
        const crossImg = document.querySelector('.black-cross');
        crossImg.addEventListener('click', event => {
            
            mainDivMapPart.removeChild(newDiv);
        //    window.addEventListener('keydown', moveWalker);
            document.getElementById("rules").disabled = false;
            document.getElementById("map").disabled = false;
        });
    }

    mapBtn.addEventListener('click', event => {
        mapPopup()
        document.getElementById("rules").disabled = true;
        document.getElementById("map").disabled = true;
    });

  