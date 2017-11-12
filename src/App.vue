<template>
  <v-app>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </v-app>
</template>

<script>
  export default {

    created () {
          this.$i18n.locale = navigator.language;
      }
  }

</script>
