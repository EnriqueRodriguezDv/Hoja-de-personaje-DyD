import Hero from "./assets/hero";
import Class from "./assets/plugins/class"

inspiration: HTMLDivElement;
boxInspiration: HTMLDivElement;
pointDead: HTMLCollection;
player: Hero;
changeDead: Object;

const inspiration = document.getElementById("inspiration");
const boxInspiration = document.getElementById("boxInspiration");
const pointDead = document.getElementsByClassName("vspoint");
const roll = document.getElementById("roll");
const level = document.getElementById("level");
const maxHitPoints = document.getElementById("maxHitPoints");
const writeCompetencies = document.getElementById("writeCompetencies");
const changeDead = {
    sl: () => {
        if(pointDead.item(0).classList.contains("pointRed")){
            pointDead.item(0).classList.remove("pointRed")
        } else{
            pointDead.item(0).classList.add("pointRed")
        }
    },
    sc: () => {
        if(pointDead.item(1).classList.contains("pointRed")){
            pointDead.item(1).classList.remove("pointRed")
        } else{
            pointDead.item(1).classList.add("pointRed")
        }
    },
    sr: () => {
        if(pointDead.item(2).classList.contains("pointRed")){
            pointDead.item(2).classList.remove("pointRed")
        } else{
            pointDead.item(2).classList.add("pointRed")
        }
    },
    fl: () => {
        if(pointDead.item(3).classList.contains("pointRed")){
            pointDead.item(3).classList.remove("pointRed")
        } else{
            pointDead.item(3).classList.add("pointRed")
        }
    },
    fc: () => {
        if(pointDead.item(4).classList.contains("pointRed")){
            pointDead.item(4).classList.remove("pointRed")
        } else{
            pointDead.item(4).classList.add("pointRed")
        }
    },
    fr: () => {
        if(pointDead.item(5).classList.contains("pointRed")){
            pointDead.item(5).classList.remove("pointRed")
        } else{
            pointDead.item(5).classList.add("pointRed")
        }
    },
}

boxInspiration.addEventListener("click", changeInspiration);
pointDead.item(0).addEventListener("click", changeDead.sl);
pointDead.item(1).addEventListener("click", changeDead.sc);
pointDead.item(2).addEventListener("click", changeDead.sr);
pointDead.item(3).addEventListener("click", changeDead.fl);
pointDead.item(4).addEventListener("click", changeDead.fc);
pointDead.item(5).addEventListener("click", changeDead.fr);
document.addEventListener("change", createHero)

inspiration.classList.remove("point__characteristic__secundary--inspiration--checkbox--pointRed");

function changeInspiration(){
    if(inspiration.classList.contains("point__characteristic__secundary--inspiration--checkbox--pointRed")){
        inspiration.classList.remove("point__characteristic__secundary--inspiration--checkbox--pointRed")
    } else {
        inspiration.classList.add("point__characteristic__secundary--inspiration--checkbox--pointRed")
    }
    console.log("yea2")
};

function createHero(){
    const player = new Hero({plugin:[new Class({
        thisRoll: roll, 
        thisLevel: level,
        thisMaxHitPoints: maxHitPoints,
        thisWriteCompetencies: writeCompetencies
    })]});
}
