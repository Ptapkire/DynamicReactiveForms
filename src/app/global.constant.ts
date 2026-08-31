import { Validators } from "@angular/forms";

export const GlobalConstant = {

    customerFormConfig : [
       {width:'col-6', name:'userId', initialValue: 0, label:'', isHidden: true, placeholder: '', type: 'number', option:[], validatorFun: []},
       {width:'col-12', name:'userName', initialValue: '', label:'Enter Your Name', isHidden: false, placeholder:'User Name', type:'text', option:[], validatorFun: [Validators.required, Validators.minLength(3)]},
       {width:'col-6', name:'userState',initialValue: '', label:'Select State', isHidden: false, placeholder:'Select', type:'select', option:["MH","Goa","Punjab"], validatorFun: [Validators.required]},
       {width:'col-6', name:'userCity', initialValue: '', label:'Select City', isHidden: false, placeholder:'Select', type:'select', option:["Pune","Nagpur","Mumbai"], validatorFun: [Validators.required]},
       {width:'col-12', name:'address', initialValue: '', label:'Enter Address', isHidden: false, placeholder:'Address', type:'textarea', option:[], validatorFun: []},
       {width:'col-6', name:'isActive',initialValue: false, label:'Select status', isHidden: false, placeholder:'', type:'checkbox', option:[], validatorFun: []},

    ]
}