import { Phone } from "./phone";

export class Person {
    phones: Phone[] = [];
   
     constructor(public firstName: string, public lastName: string, public email: string,
     public age?: number, phones?: Phone[]) {
       if (phones) {
         this.phones = phones;
       }
     }
      addPhone(phone: Phone): void {
       this.phones.push(phone);
     }
   
     listPhones(): void {
       this.phones.forEach(phone => {
         console.log("Type:"+ phone.type + "Number" +phone.number);
       });
     }

     fullName():string{
      return this.firstName + " " + this.lastName
     }
    }
 