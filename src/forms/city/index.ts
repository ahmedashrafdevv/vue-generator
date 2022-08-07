// import { loginRequest, loginResponse } from './../../models/user';
// import { Login } from './../../repositories/user';
import { FormInterface } from './../../utils/form/interface';
import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/form';
import Api from '@/utils/axios/Api';
const Http = Api.getInstance();

import {
    usernameInput,
    passwordInput
} from '@/utils/form/inputs/InputStore'

const inputs: Input[] = [
    new Input(usernameInput),
    new Input(passwordInput)
]
const Login = (payload:any) :Promise<any> => {
    return new Promise((resolve, reject) => {
        Http.post('login' , payload)
        .then((d:any) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}

const submit = (form: any): Promise<any> => {
    const request = {
        username: parseInt(form.username),
        password: form.password,
    }
    return new Promise((resolve, reject) => {
        Login(request).then((res: any) => {
            localStorage.setItem("token", res.token);
            return resolve(res)
        }).catch((e => {
            return reject(e)
        }))
    })
}


const callBack = (form: any): any => {
    // router.push('/')
}

const params: FormInterface = {
    title:"auth",
    icon:"mdi-lock",
    inputs,
}

const authForm = new Form(params)

export default authForm