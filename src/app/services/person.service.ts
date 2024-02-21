import { Injectable } from '@angular/core';
import { Person } from '../shared/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons = new Map<number, Person>();
  nextId = 2;
  constructor(){
    this.persons.set(0,new Person(0,"dan","levy","dan@dd",33))
    this.persons.set(1,new Person(1,"dana","cohen","dana@dd",24))
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
 

