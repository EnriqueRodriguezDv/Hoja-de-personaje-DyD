import Hero from "../hero";

const competenciesBarbarian = `Armaduras:
armaduras ligeras y medias, escudo.

Armas:
armas sencillas y marciales.`
const competenciesBarb = `Armaduras:
armaduras ligeras.

Armas:
armas sencillas, ballestas de mano, espadas cortas, espadas largas y estoques

Herramientas:
tres instrumentos musicales a tu elección`
const competenciesSorcerer = `Armaduras:
armaduras ligeras

Armas:
armas sencillas`



class Class {
    class: HTMLElement;
    level: string;
    rollAttack: HTMLInputElement;
    maxHitPoints: HTMLInputElement;
    writeCompetencies: HTMLTextAreaElement;
    salvation: any;
    lvlNow: number;

    constructor(config) {
        this.class = document.getElementById("class");
        this.rollAttack = config.thisRoll;
        this.level = config.thisLevel;
        this.writeCompetencies = config.thisWriteCompetencies;
        this.maxHitPoints = config.thisMaxHitPoints;
        this.salvation = document.getElementsByClassName("salvation");
        this.changeClass(this.class.value);
    }

    changeClass(clases){
        switch(clases){
            case "Barbaro":
                let maxHitBarbarian = 12;
                this.rollAttack.value = `${this.level.value}d8`;
                if(this.lvlNow === 1){
                    this.maxHitPoints.value = (maxHitBarbarian).toString();
                } else {
                    this.maxHitPoints.value = (maxHitBarbarian + ((parseInt(this.level.value) -1) * 7)).toString(); 
                }
                this.writeCompetencies.innerHTML = competenciesBarbarian;
                for(let i = 0; i < 6; i++){
                    this.salvation[i].checked = false;
                }
                this.salvation[0].checked = true;
                this.salvation[2].checked = true;
            break;  
        }
        switch(clases){
            case "Bardo":
                let maxHitBard = 8;
                this.rollAttack.value = `${this.level.value}d8`;
                if(this.lvlNow === 1){
                    this.maxHitPoints.value = (maxHitBard).toString();
                } else {
                    this.maxHitPoints.value = (maxHitBard + ((parseInt(this.level.value) -1) * 5)).toString(); 
                }
                this.writeCompetencies.innerHTML = competenciesBarb;
                for(let i = 0; i < 6; i++){
                    this.salvation[i].checked = false;
                }
                this.salvation[1].checked = true;
                this.salvation[5].checked = true;
            break;  
        }
        switch(clases){
            case "Brujo":
                let maxHitSorcerer = 8;
                this.rollAttack.value = `${this.level.value}d8`;
                if(this.lvlNow === 1){
                    this.maxHitPoints.value = (maxHitSorcerer).toString();
                } else {
                    this.maxHitPoints.value = (maxHitSorcerer + ((parseInt(this.level.value) -1) * 5)).toString(); 
                }
                this.writeCompetencies.innerHTML = competenciesSorcerer;
                for(let i = 0; i < 6; i++){
                    this.salvation[i].checked = false;
                }
                this.salvation[4].checked = true;
                this.salvation[5].checked = true;
            break;  
        }
    }
}

export default Class;