import { Component, NgModule } from '@angular/core';
import { FormControl, NgForm, NgModel,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  form:any;
  emailRegex:any ='xxxxxxxxxxxxxxxx';

  constructor(){
    this.form = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.email
        // Validators.pattern(this.emailRegex)
      ]),
      password: new FormControl(),
      address: new FormControl()
    })
  }

  get Email(){
    return this.form.email
  }

  onSubmit(f:NgForm){
    console.log(f)
  }

  getValue(f:NgModel){
    console.log(f)
  }
}
