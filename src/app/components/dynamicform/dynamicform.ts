import { Component, inject } from '@angular/core';
import { FormConfig } from '../../models/Form.model';
import { GlobalConstant } from '../../global.constant';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamicform.html',
  styleUrl: './dynamicform.css',
})
export class Dynamicform {

   formFields : FormConfig[] = GlobalConstant.customerFormConfig as FormConfig[]; // datatype can be anything so we have to declared with FormConfig[];

   customerForm! : FormGroup;

   formBuilder = inject(FormBuilder); // inject service FormBuilder

   constructor(){
    this.customerForm = this.intializeForm();
   }

   intializeForm(){
    debugger;
    const formGroup:any = {};

    for(const field of this.formFields){
       formGroup[field.name] = [field.initialValue,field.validatorFun.length != 0 ? field.validatorFun:[]];
    }
    return this.formBuilder.group(formGroup);   
   }

   onSaveCustomer(){
      const formValue = this.customerForm.value;
      debugger;
   }


}
