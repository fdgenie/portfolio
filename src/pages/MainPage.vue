<template>
  <q-page class="q-pa-md bg-grey-10">
      <div class="row items-center ">
        <div class="col" style="min-height: 150px; max-height: 150px; ">
          <p class="sm-q-pt-sm text-h4 text-teal-13">
            {{ nameText }}
          </p>
          <p class="text-body2 text-grey-4 font-md">
            {{ mainText }}
          </p>
        </div>
      </div>
  </q-page>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      mainText: `I love building user-friendly websites and web apps. I’ve been
            involved in various projects, both as a freelancer as well as part
            of large firms. If you have a project you’d like me to help you
            with, drop me a line!`,
      nameText: `Hello, my name is Aristeidis and I am a full stack developer`
    };
  }
};
</script>

<style scoped>
.font-md {
  font-size: 20px;
}
</style>
