import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/Custom Validator/ConfirmPass.validator';
import { registerScreenAnimation } from '../register.animation';
import { routerTransition } from '../router.animation';

@Component({
  selector: 'app-register',
  animations: [routerTransition(),registerScreenAnimation()],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  formSubmitted: boolean = false;
  hidePassword = true;
  hideConfirmPassword = true;
  registerScreenAnimation: string = 'unchecked';

  constructor(private fb: FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]],
      confirmPassword: ['', [Validators.required]]

    },
     { validator: MustMatch('password', 'confirmPassword')});
  }
 
    get email(){
    return this.registerForm.get('email')

  }
  get password()
  {
    return this.registerForm.get('password')
  }

  get confirmPassword()
  {
    return this.registerForm.get('confirmPassword')
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.registerForm.valid) {
    this.route.navigateByUrl("/login");
    }
    else {
      this.formSubmitted = false;
      this.registerScreenAnimation = 'invalid';
    }
  }
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  setBackToUnchecked() {
    if(this.registerScreenAnimation === 'invalid') {
      this.registerScreenAnimation = 'unchecked';
    }
  }

}
