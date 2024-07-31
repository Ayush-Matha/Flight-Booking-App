import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private auth:AuthService)
  {}

  onLogin(loginCred:NgForm)
  {
    console.log(loginCred);
    console.log(loginCred.form.value.usrName);
    this.auth.login(loginCred.form.value.usrName,loginCred.form.value.pass);
  }

}
