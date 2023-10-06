import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength: string = '';

  checkPasswordStrength() {
    if (this.password.length === 0) {
      this.passwordStrength = 'Empty';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'Short';
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*()\-+.,=_§±]/.test(this.password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.passwordStrength = 'Strong';
      } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        this.passwordStrength = 'Medium';
      } else {
        this.passwordStrength = 'Weak';
      }
    }
  }
}
