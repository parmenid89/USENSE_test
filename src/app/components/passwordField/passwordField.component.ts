import {Component} from '@angular/core'

@Component({
    selector: 'app-passwordField',
    templateUrl: './passwordField.component.html'
})

export class PasswordFieldComponent {
    password = '';

    numbers = /[\d]/;
    letters = /[A-Za-z]/;
    specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]/;

    testInput(reg:any): any {
        if (reg.test(this.password)) {
            return true;
        } else {
            return false;
        }
      }
}


