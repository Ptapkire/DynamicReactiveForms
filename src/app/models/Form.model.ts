import { ValidatorFn } from "@angular/forms";

export interface FormConfig{
    name: string;
    label: string;
    isHidden:boolean;
    placeholder: string;
    type: string;
    option : any[];
    validatorFun: ValidatorFn[];
    initialValue : string;

}

// { name:'userId', lable:'', isHidden: true, placeholder: '', type: 'number', option:[], validatorFun: []},
