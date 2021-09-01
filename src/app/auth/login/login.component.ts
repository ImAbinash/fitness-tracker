import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthSerice } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signIn: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthSerice) {
    this.signIn = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isAcceptedTerms: [true, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get signInFormControll() {
    return this.signIn.controls;
  }


  onSubmit() {
    this.authService.login({
      emailId: this.signIn.value.emailId,
      password: this.signIn.value.password
    });
    
  }

}
