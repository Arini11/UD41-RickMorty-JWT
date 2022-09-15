import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../characters.service';
import { Character } from '../../model/character.model';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.css']
})
export class CharactersDetailComponent implements OnInit {

  id: any;
  character: Character = new Character();

  constructor(private api: CharactersService, private _router: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this._router.snapshot.paramMap.get('id');
    this.api.get(this.id).subscribe(result => {this.character = result;});
  }

  deleteCharacter(): void {
    this.api.delete(this.id).subscribe(response => {this.router.navigate(['/characters'])});
  }

  updateStatus(status: string): void {
    const data = {
      id: this.character.id,
      name: this.character.name,
      status: status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
      image: this.character.image
    };


    this.api.update(this.character.id, data)
      .subscribe(
        response => {
          this.character.status = status;
          console.log(response);
          this.router.navigate([`/characters/`]);
        },
        error => {
          console.log(error);
        });
  }

}
