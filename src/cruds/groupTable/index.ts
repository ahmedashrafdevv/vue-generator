import router from "@/router";
import categoryForm from "@/forms/groupTable";
import EditAdd from "@/utils/crud/editAdd";
import EditAddInterface from "@/utils/crud/editAddInterface";

const callBack = (form: any) => {
  console.log("from hereeeee");
};
const editAddInterface: EditAddInterface = {
  title: "groups",
  table: "groupTable",
  form: categoryForm,
  callBack,
};
const editAddCategory = new EditAdd(editAddInterface);
export default editAddCategory;
