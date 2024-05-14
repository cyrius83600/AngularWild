import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Login {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

@Component({
  selector: 'sign-up-component',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  login:Login= {
    firstname:"",
    lastname:"",
    email:"",
    password:""
  }

  onSubmit():void{

  }
}
