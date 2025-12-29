import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../services/user-service';

@Component({
  selector: 'app-signup',
  imports: [ FormsModule, ReactiveFormsModule ],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  user:any;
  
  userForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email_address: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl('')
  });

  constructor(private userService: UserService, private router: Router){}

  onSubmit() {
      this.userService.CreateUser(this.userForm.value).subscribe(
        newUserResp => {
          this.user = newUserResp
          console.log('Created User!')
          this.router.navigate([''])
        }
      )
    }

}
