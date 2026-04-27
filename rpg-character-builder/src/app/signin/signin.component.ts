import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  template: `
    <p>
      signin works!
    </p>
  `,
  styles: ``
})
export class SigninComponent {
  signinForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/) // same pattern as virtual-taco-stand
      ]
    ]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  onSubmit() {
    if (this.signinForm.invalid) return;

    const { email, password } = this.signinForm.value;

    const success = this.authService.signin(email!, password!);

    if (!success) {
      alert('Invalid email or password');
    }
  }
}
