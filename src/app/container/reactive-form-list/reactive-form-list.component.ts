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
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(10)]],
    confirmPassword: ['', [Validators.required]],
    region: ['', Validators.required],
    sex: [''],
    emailPermission: false,
    additionalInfo: ['']
  });



  onSubmit(group: FormGroup) {
    console.log(this.profileForm.value);
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      confirmPassword: [''],
      region: ['', Validators.required],
      sex: [''],
      emailPermission: false,
      additionalInfo: ['']
    });
  }
}
