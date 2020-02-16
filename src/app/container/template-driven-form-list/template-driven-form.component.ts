import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: './template-driven-form.html',
  styleUrls: ['./template-driven-form.scss']
})

export class TemplateDrivenFormComponent {
  public firstName: string;
  public lastName: string;
  public userName: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public region: string;
  public sex: string;
  public emailPermission: false;
  public additionalInfo: string;
  public errors: string;

  constructor() {
  }

  validPassword(): void {
    if (this.password !== this.confirmPassword) {
      this.errors = 'password does not match';
    } else {
      this.errors = null;
    }
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    form.resetForm('');
  }
}
