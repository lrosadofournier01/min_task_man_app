import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionService } from '../services/session-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  token: any;
  
  loginForm = new FormGroup({
    email_address: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private sessionService: SessionService, private router: Router) {}

  onSubmit() {
    // Because of the async nature of HTTP requests, need to subscribe
    // Lets us wait until items are recieved before acting
    this.token = this.sessionService.GetToken(this.loginForm.value).subscribe(
      tokenRsp => {
        this.token = tokenRsp
        console.log("Retrieved Token!")
        localStorage.setItem('auth_token', this.token.token);
        this.router.navigate(['/tasks'])
      }
    )
  }
}
