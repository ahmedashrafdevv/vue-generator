import form from "./components/form/Form.vue";

const HelloWorldSimple = {
 install(Vue : any) {
  Vue.component("hello-world", form);
 }
};


export default HelloWorldSimple;