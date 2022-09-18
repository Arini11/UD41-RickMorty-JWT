import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ROL, TOKEN, USERNAME } from '../Constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: any = 'token inicial';

  login: any = {
    username: '',
    password: ''
  };

  submitted = false;

  constructor(private loginService: AuthService) { }

  ngOnInit(): void {
  }

  logUser(): void {
    const data = {
      username: this.login.username,
      password: this.login.password,
    };

    this.loginService.login(data)
      .subscribe(
        response => {
          this.token = response;
          this.submitted = true;
          console.log(response);
          window.sessionStorage.setItem(TOKEN, this.token.token);
          window.sessionStorage.setItem(USERNAME, this.login.username);
          this.loginService.getUser(data.username).subscribe(
            response => {
              console.log(response)
              window.sessionStorage.setItem(ROL, response.role.name);
            }
          );
        },
        error => {
          console.log(error);
        });

  }

}
