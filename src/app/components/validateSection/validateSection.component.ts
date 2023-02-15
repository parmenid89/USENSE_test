import {Component, Input} from '@angular/core'

@Component({
    selector: 'validateSection',
    templateUrl: './validateSection.component.html'
})

export class validateSectionComponent {
    numbers = /[\d]/;
    letters = /[A-Za-z]/;
    specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]/;

    @Input() password: string; 

    testInput(reg:any): any {
        if (reg.test(this.password)) {
            return true;
        } else {
            return false;
        }
    }
}


