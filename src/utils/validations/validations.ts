
export const required = (val:string , msg:string = 'هذا الحقل مطلوب') => !!val || msg
export const num = (val:string , msg:string = 'لابد ان يكون هذا الحقل رقم') => {
    if (!val){
        return true
    }
  
    if(isNaN(parseFloat(val))) return msg


    return true
}
export const email = (val:string , msg:string = 'تحقق من البريد الالكتروني') => {
    if (!val){
        return true
    }
    if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val))) return msg


    return true
}


