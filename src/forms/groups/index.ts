import { convertToDisabled } from './../../utils/form/inputs/InputStore';
import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/form';
import {FormInterface } from '@/utils/form/interface';
import {
    imgInput,
    nameInput,
    nameEnInput,
    paretnGroupInput,
} from './inputs'

const inputs:Input[] = [
    new Input(nameInput),
    new Input(nameEnInput),
    new Input(paretnGroupInput),
    new Input(imgInput),
]

const editInputs:Input[] = [
    new Input(nameInput),
    new Input(nameEnInput),
    new Input(convertToDisabled(paretnGroupInput)),
    new Input(imgInput),
]

const params :FormInterface = {
    title:"insert_categories",
    inputs
}

const editParams :FormInterface = {
    title:"edit_categories",
    inputs : editInputs
}

const addForm = new Form(params)
const editForm = new Form(editParams)

export default {addForm , editForm}
