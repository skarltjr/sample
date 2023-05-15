import { Printer } from "./output/Printer.js";
import { Inputter } from "./input/Inputter.js";
import { exit } from "process";
import { Address } from "./address/Address.js";


export class Program{
    static ADD_PROCESS = "1"
    static RM_PROCESS = "2"
    static LIST_PROCESS = "3"

    constructor(){
        this.printer = new Printer();
        this.inputter = new Inputter();
        this.address = new Address();
    }
    async start(){
        while(true){

            // 진행 선택
            let process = await this.inputter.getProcess();
            await this.processDescriminator(process)
        }
    }

    async processDescriminator(process){
        if(process == Program.ADD_PROCESS){
            let contact = await this.inputter.getContact();
            this.address.addContact(contact)
        }else if(process == Program.RM_PROCESS){
            let nameToRemove = await this.inputter.getNameToRmove()
            this.address.removeContact(nameToRemove);
        }else if(process == Program.LIST_PROCESS){
            this.address.listContacts();
        }else{
            console.log('종료합니다.')
            exit();
        }
    }
}