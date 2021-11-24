import * as yup from 'yup';

let validations = yup.object().shape({
    email: yup.string().email('GEÇERLİ BİR MAİL GİRİNİZ').required('DOLDURULMASI ZORUNLU ALAN'),    
    password: yup.string().min(5).required(),
    passwordConfirm : yup.string().oneOf([yup.ref('password')]).required()
});

export default validations;
