import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buscador:string = "";

  constructor(private api: CharactersService,private router: Router) { }

  searchTitle() {
    this.api.findByName(this.buscador).subscribe(
      response => {this.router.navigate(['/characters/',response])}
    );
  }


}
