import {Component} from '@angular/core';
import {FormBuilder, Validators, FormGroup, Validator} from '@angular/forms';

@Component({
  templateUrl: './reactive-form-list.html',
  styleUrls: ['./reactive-form-list.scss']
})


export class ReactiveFormListComponent {
  constructor(private fb: FormBuilder) {
  }

  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
    userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
    email: ['', [Validators.required, Validators.pattern('^([A-Za-z0-9_\\-.])+@([A-Za-z0-9_\\-.])+\\.([A-Za-z]{2,4})$')]],
    password: ['', [Validators.required, Validators.minLength(10)]],
    confirmPassword: ['', Validators.required],
    region: ['', Validators.required],
    sex: [''],
    emailPermission: false,
    additionalInfo: ['']
  });

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get userName() {
    return this.profileForm.get('userName');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get password() {
    return this.profileForm.get('password');
  }

  get confirmPassword() {
    return this.profileForm.get('confirmPassword');
  }

  get region() {
    return this.profileForm.get('region');
  }

  // checkPasswords(group: FormGroup) {
  //   const pass = group.controls.password.value;
  //   const confirmPass = group.controls.confirmPassword.value;
  //   return pass === confirmPass ? null : {not: true};
  // }

  onSubmit() {
    console.log(this.profileForm.value);
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      confirmPassword: ['', Validators.required],
      region: ['', Validators.required],
      sex: [''],
      emailPermission: false,
      additionalInfo: ['']
    });
  }
}
