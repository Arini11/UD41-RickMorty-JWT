import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  constructor(private api: CharactersService) { }

  ngOnInit(): void {
    this.api.getAll().subscribe(
      response => this.characters = response
    )
  }

}
