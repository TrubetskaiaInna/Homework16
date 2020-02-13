import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  templateUrl: './reactive-form-list.html',
  styleUrls: ['./reactive-form-list.scss']
})

export class ReactiveFormListComponent {
  constructor(private fb: FormBuilder) {
  }

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    userName: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
    region: [''],
    sex: [''],
    emailPermission: false,
    additionalInfo: ['']
  });

  onSubmit() {
    console.log(this.profileForm.value);
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      userName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      region: [''],
      sex: [''],
      emailPermission: false,
      additionalInfo: ['']
    });
  }
}
