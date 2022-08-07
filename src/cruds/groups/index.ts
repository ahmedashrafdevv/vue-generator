import router  from '@/router';
import bus from '@/bus';
import categoryForm from '@/forms/city';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';

const callBack = (form:any) => {
    bus.$emit("getGroupsTree")
    if(router.currentRoute.name == 'items-groups-edit'){
        router.push({name : 'items-groups-create'})
    }
}
const editAddInterface :EditAddInterface = {
    title : "groups",
    table : "groups",
    form :  categoryForm,
    callBack
}
const editAddCategory = new EditAdd(editAddInterface)
export default editAddCategory