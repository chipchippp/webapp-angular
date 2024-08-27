import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { RegisterDto } from '../dtos/register.dto';
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
  constructor(private router: Router, private userService: UserService) { 
    this.phone = '';
    this.password = '';
    this.confirmPassword = '';
    this.fullName = '';
    this.dateOfBirth = new Date();
    this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear() - 18);
    this.address = '';
    this.isAccepted = true;
  
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
                      debugger;
    const registerDto: RegisterDto = {
                        "phone_number": this.phone,
                        "password": this.password,
                        "confirmPassword": this.confirmPassword,
                        "fullName": this.fullName,
                        "dateOfBirth": this.dateOfBirth,
                        "address": this.address,
                        "facebook_account_id": 0,
                        "google_account_id": 0,
                        "role_id": 1
          };

    this.userService.register(registerDto).subscribe({
        next: (response : any) => {
          debugger
          this.router.navigate(['/login']);
        },
        complete : () => {
          debugger
        },
        error : (error : any) => {
          alert(`cannot register ${error.error}`);
        }

    });
  }
  checkPassword() {
    if (this.password !== this.confirmPassword) {
      this.registerForm.form.controls['confirmPassword'].setErrors({ 'passwordMismatch': true });
    } else {
      this.registerForm.form.controls['confirmPassword'].setErrors(null);
    }
  }

  checkAge() {
    if(this.dateOfBirth){
      const today = new Date();
      const birthDate = new Date(this.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      let mothDiff = today.getMonth() - birthDate.getMonth();
      if(mothDiff < 0 || (mothDiff === 0 && today.getDate() < birthDate.getDate())){
        age--;
      }

      if(age < 18){
        this.registerForm.form.controls['dateOfBirth'].setErrors({ 'invalidAge': true });
      } else {
        this.registerForm.form.controls['dateOfBirth'].setErrors(null);
      }
    }
  }
}
