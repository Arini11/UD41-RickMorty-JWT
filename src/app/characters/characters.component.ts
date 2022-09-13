import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any;

  constructor(private api: CharactersService) { }

  ngOnInit(): void {
    this.api.getCharacters().subscribe(
      response => this.characters = response.characters
    )
  }

}
