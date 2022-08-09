<template>
<div class="py-12">
  <v-container>
    <app-form :form="activeForm">
      <template v-slot:form-submit>
        <v-col cols="12">
          <v-btn  class="app-btn" @click.prevent="submit()">{{$t('submit')}}</v-btn>
        </v-col>
      </template>
    </app-form>
  </v-container>
</div>
</template>
<script lang="ts">
import AppForm from '@/components/form/Form.vue'
import EditAdd from '@/utils/crud/editAdd'
import bus from "@/bus";
// import {snackBar} from '@/utils/Helpers'
export default {
 
  
 props:{
     d:{
         required: true,
         type:EditAdd
     }
 },
 computed:{
   activeForm(){
    if (this.$route.params.id) {
     return this.d.editForm
    }
    return this.d.form
   }
 },
 methods:{
    async submit(){
      const isFormValid = await this.d.form.validate()
      if(!isFormValid){
        return
      }

       this.d.submit().then(res => {
         if(this.d.callBack != null){
           this.d.callBack(this.d.form.state)
         } else {
           this.$router.back()
         }
       }).catch(e => {
         this.d.form.error = e
       })
    }
  },
 components:{
     "app-form":AppForm
 },
 async created(){
   if (this.$route.params.id) {
     await this.d.setId(parseInt(this.$route.params.id))
   }
   bus.$on("editAddFind", async (id : number) => {
      await this.d.setId(id)
    })
 }
}
</script>
