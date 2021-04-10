function solve(classToExtent){

    classToExtent.prototype.species = 'Human';
    classToExtent.prototype.toSpeciesString = function (){
        return `I am a ${this.species}. ${this.toString()}`
    }
    
}