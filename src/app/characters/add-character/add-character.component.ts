import { Component, OnInit } from '@angular/core';
import { faker } from "@faker-js/faker"
import { CharactersService } from 'src/app/characters.service';
import { Character } from 'src/app/model/character.model';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  character: Character = {
    name: '',
    gender: '',
    species: '',
    location: '',
    image: ''
  };
  submitted = false;

  constructor(private api: CharactersService) { }

  ngOnInit(): void {
  }

  saveCharacter() {
    const data = {
      name: this.character.name,
      gender: this.character.gender,
      species: this.character.species,
      location: this.character.location,
      image: faker.image.image()
    };

    this.api.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newCharacter() {
    this.submitted = false;
    this.character = {
      name: '',
      gender: '',
      species: '',
      location: '',
      image: ''
    }
  }

}
