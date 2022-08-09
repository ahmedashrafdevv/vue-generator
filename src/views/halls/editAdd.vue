<template>
  <v-container>
    <edit-add :d="d"></edit-add>
  </v-container>
</template>

<script lang="ts">
import EditAdd from "@/utils/crud/editAdd";
import details from "@/cruds/groupTable";
import EditAddComponent from "@/components/crud/editAdd.vue";
export default {
  name: "groupTable",
  components: {
    "edit-add": EditAddComponent,
  },
  computed: {
    d() {
      const d = new EditAdd(details);
      return d;
    },
  },
};
</script>
