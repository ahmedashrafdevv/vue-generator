import Form  from '@/utils/form/form';
import { FormInterface } from '@/utils/form/interface';
import { usernameInput } from './../../utils/form/inputs/InputStore';
import Input from '@/utils/form/inputs/Input';
const inputs:Input[] = [
    new Input(usernameInput),
]
const params :FormInterface = {
    inputs
}

const rolesFilters = new Form(params)

export default rolesFilters