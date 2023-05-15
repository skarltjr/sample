import readline from "readline";
import { Contact } from "../address/Contact.js";

export class Inputter{
    static PROCESS_SELECTION = '[1] : ADD [2] : REMOVE [3] : LIST [0] : EXIT';
    static PROCESS_GET_CONTACT = "이름과 연락처를 입력해주세요."
    static PROCESS_REMOVE = "지우고자할 연락처 이름을 입력해주세요."
    constructor(){
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    getProcess(){
        console.log(Inputter.PROCESS_SELECTION);
        return new Promise((resolve,reject) =>{
            this.rl.question("Enter your input : ",(input)=>{
                resolve(input);
            })
        })
    }

    getNameToRmove(){
        console.log(Inputter.PROCESS_REMOVE);
        return new Promise((resolve,reject)=>{
            this.rl.question("Enter your input : ",(name)=>{
                resolve(name);
            })
        })
    }
    getContact(){
        console.log(Inputter.PROCESS_GET_CONTACT);
        return new Promise((resolve,reject) =>{
            let contactName;
            let contactNumber;
            this.rl.question("Enter name : ",(name)=>{
                contactName = name;
                this.rl.question("Enter phone number : ",(phone)=>{
                    contactNumber = phone;
                    resolve(new Contact(contactName,contactNumber));
                })
            })
        })
    }
}