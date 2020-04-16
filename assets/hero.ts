import Class from "./plugins/class"

class Hero{
    class: HTMLElement;
    plugin: Class;
    constructor(config){
        this.plugin = config.plugin;
        
    }
}

export default Hero;