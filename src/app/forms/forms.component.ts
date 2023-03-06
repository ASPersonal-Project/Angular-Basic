import { Component, NgModule } from '@angular/core';
import { FormControl, NgForm, NgModel,FormGroup, Validators, FormArray,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  form:any;
  // emailRegex:any ='xxxxxxxxxxxxxxxx';

  constructor(fb:FormBuilder){
//using Formbuilder
    this.form = fb.group({
      email: ['',[
        Validators.required,
        Validators.minLength(5),
      ]],

      password: ['',[
        Validators.required
      ]],

      address: ['',[
        Validators.required
      ]],

      contactDetails: fb.group({
        city: ['',[
          Validators.required
        ]],
        mobile: ['']
      }),
      skills: fb.array
    })




    // this.form = new FormGroup({
    //   email: new FormControl('',[
    //     Validators.required,
    //     Validators.minLength(5)
    //   ]),
    //   password: new FormControl('',[
    //     Validators.required
    //   ]),
    //   address: new FormControl('',[
    //     Validators.required
    //   ]),

    //   contactDetails: new FormGroup({
    //     city: new FormControl('',[
    //       Validators.required
    //     ]),
    //     mobile: new FormControl('')
    //   }),
    //   skills: new FormArray([])


    // })
  }

  get Email(){
    return this.form.get('email')
  }

  get Password(){
    return this.form.get('password')
  }

  get Address(){
    return this.form.get('address')
  }

  get City(){
    return this.form.get('contactDetails.city')
  }

  get Skills(){
    return this.form.get('skills')
  }

  onSubmit(){
    console.log(this.form.value)
  }

  // onSubmit(f:NgForm){
  //   console.log(f)
  // }

  getValue(f:NgModel){
    console.log(f)
  }

  addSkills(skill: HTMLInputElement){
    (this.Skills as FormArray).push(new FormControl(skill.value))
    skill.value=''
  }

  removeSkill(index:number){
    this.Skills.removeAt(index)
  }
}
