import { Validators } from "@angular/forms";

export const GlobalConstant = {

    customerFormConfig : [
       { name:'userId', initialValue: 0, label:'', isHidden: true, placeholder: '', type: 'number', option:[], validatorFun: []},
       { name:'userName', initialValue: '', label:'Enter Your Name', isHidden: false, placeholder:'User Name', type:'text', option:[], validatorFun: [Validators.required, Validators.minLength(3)]},
       { name:'userState',initialValue: '', label:'Select State', isHidden: false, placeholder:'Select', type:'select', option:["MH","Goa","Punjab"], validatorFun: [Validators.required]},
       { name:'userCity', initialValue: '', label:'Select City', isHidden: false, placeholder:'Select', type:'select', option:["Pune","Nagpur","Mumbai"], validatorFun: [Validators.required]},
       { name:'address', initialValue: '', label:'Enter Address', isHidden: false, placeholder:'Address', type:'textarea', option:[], validatorFun: []},
       { name:'isActive',initialValue: false, label:'Select status', isHidden: false, placeholder:'', type:'checkbox', option:[], validatorFun: []},

    ]
}