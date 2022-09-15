import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.css']
})
export class CharactersDetailComponent implements OnInit {

  id: any;
  character: any;

  constructor(private api: CharactersService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');

    this.api.getCharacterById(this.id).subscribe(
    result => {
      this.character = result;
    },
    error => {
      console.log("ERROR");
    });
  }

}
