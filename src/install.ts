import AppForm from "./components/form/Form.vue";
import AppTable from "./components/form/Form.vue";
import EditAdd from "./components/crud/editAdd.vue";

const HelloWorldSimple = {
 install(Vue : any) {
  Vue.component("app-form", AppForm);
  Vue.component("edit-add", EditAdd);
  Vue.component("app-table", AppTable);
 }
};


export default HelloWorldSimple;