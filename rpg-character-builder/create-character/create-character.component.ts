import { Component } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {

  characters: any[] = [];

  character = {
    name: '',
    gender: 'Male',
    class: 'Warrior'
  };

  generateId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  addCharacter() {
    const newChar = {
      id: this.generateId(),
      name: this.character.name,
      gender: this.character.gender,
      class: this.character.class
    };

    this.characters.push(newChar);
    this.resetForm();
  }

  resetForm() {
    this.character = {
      name: '',
      gender: 'Male',
      class: 'Warrior'
    };
  }
}

