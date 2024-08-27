import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm!: NgForm;
  phone: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  dateOfBirth: Date;
  address: string;
  isAccepted: boolean;
  constructor() { 
    this.phone = '';
    this.password = '';
    this.confirmPassword = '';
    this.fullName = '';
    this.dateOfBirth = new Date();
    this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear() - 18);
    this.address = '';
    this.isAccepted = false;
  
  }
  onPhoneChange() {
    // this.phone = value;
    console.log(`phone: ${this.phone}`);
  }
  register() {
    const message = ` phone: ${this.phone}, 
                      password: ${this.password}, 
                      confirm password: ${this.confirmPassword},
                      full name: ${this.fullName},
                      date of birth: ${this.dateOfBirth}, 
                      address: ${this.address}, 
                      isAccepted: ${this.isAccepted}`;
    alert(message);
  }
}
