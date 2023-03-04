import { Component, NgModule } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  onSubmit(f:NgForm){
    console.log(f)
  }

  getValue(f:NgModel){
    console.log(f)
  }
}
