import { AbstractControl, ValidationErrors } from "@angular/forms";

export class noSpace{
    static noSpaceValidations(control: AbstractControl): ValidationErrors | null{
        let controlValue = control.value as String;

        if(controlValue.indexOf(' ') >= 0){
            console.log('xxxxxxxx')
            return { noSpaceValidator: true}
        }else{
            console
            return null
        }
    }
}