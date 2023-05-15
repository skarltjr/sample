export class Contact{
    constructor(name,number){
        this.name = name;
        this.number = number;
    }

    getName(){
        return this.name;
    }
    getNumber(){
        return this.number;
    }
    showInfo(){
        console.log(this.name + " " + this.number)
    }
}