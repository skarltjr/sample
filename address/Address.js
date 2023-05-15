export class Address{
    constructor(){
        this.contactList = []
    }
    addContact(contact){
        this.contactList.push(contact)
    }
    listContacts(){
        this.contactList.forEach((element) =>{
            element.showInfo();
        });
    }
    removeContact(nameToRemove){
        for (let i = 0; i < this.contactList.length; i++) {
            let contact = this.contactList[i];
            if (contact.getName() === nameToRemove) {
                console.log(contact)
                this.contactList.pop(contact)
                console.log('연락처를 삭제했습니다.');
                return;
            }
        }
        console.log('지우고자하는 연락처가 존재하지 않습니다.')
    }
}