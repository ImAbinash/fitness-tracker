import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthSerice } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  maxDate:Date;
  minDate:Date;

  constructor(private authService: AuthSerice) { 
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear,11,31);
    this.minDate = new Date(currentYear-10,0,1);
  }

  ngOnInit(): void {
  }
  onSubmit(signUp:NgForm){
    console.log(signUp.value);
    this.authService.registerUsr({
      emailId: signUp.value.emailId,
      password: signUp.value.password
    });
  }
}
