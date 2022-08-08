import AppForm from "./components/form/Form.vue";
import AppTable from "./components/form/Form.vue";
import AppEditAdd from "./components/crud/editAdd.vue";
import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/form';
import Api from '@/utils/axios/Api';

const HelloWorldSimple = {
 install(Vue : any) {
  Vue.component("app-form", AppForm);
  Vue.component("edit-add", AppEditAdd);
  Vue.component("app-table", AppTable);
 }
};


export const VForm = AppForm;
export const DTable = AppTable;
export const EditAdd = AppEditAdd;
export default {Input,Form,Api};
// export const Form = Form;
// export const Api = Api;