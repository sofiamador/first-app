import { Injectable } from '@angular/core';
import { Person } from '../shared/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons = new Map<number, Person>();
  nextId = 0;
  constructor(){
    this.persons.set(4,new Person(4,"sds","sds","sds@sdcsd",2))
    this.persons.set(5,new Person(5,"dan","rr","dan@sdcsd",2))
  }


 list(): Person[] {
  return Array.from(this.persons.values());
}

get(id: number): Person | undefined {
  return this.persons.get(id);
}

delete(id: number): void {
  this.persons.delete(id);
}

update(person: Person): void {
  if (this.persons.has(person.id)) {
    this.persons.set(person.id, person);
  }
}

  add(newPersonData:Person) {
    newPersonData.id = this.nextId
    this.persons.set(this.nextId, newPersonData);
    this.nextId++;
    }
 
}
