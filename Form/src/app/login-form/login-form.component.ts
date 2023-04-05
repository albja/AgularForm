import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  email?: string;
  password?: string;

  submitForm() {
    alert('Bravo formulaire valide');
    return true
  }
}
