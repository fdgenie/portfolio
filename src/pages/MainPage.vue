<template>
  <q-page class="q-pa-md bg-grey-10">
    <div
      v-if="!$q.platform.is.mobile"
      class="column"
      style="height: calc(100vh - 50px);"
    >
      <div class="col-3" />
      <div class="col-4 row">
        <span class="col-1" />
        <span class="col">
          <p class="text-h2 text-teal-13 abolute-center">
            Hello, my name is Aristeidis and I am a full stack developer
          </p>
          <p class="text-body1 text-grey-4" style="font-size:20px">
            {{ mainPageText }}
          </p>
        </span>
        <span class="col-4" />
      </div>
      <div class="col" />
    </div>
    <div v-else style="height: calc(100vh - 50px);">
      <div class="col-6" />
      <div class="col row">
        <span class="col q-mt-xl">
          <p class="text-h4 text-teal-13 abolute-center">
            Hello, my name is Aristeidis and I am a full stack developer
          </p>
          <p class="text-body2 text-grey-4" style="font-size:20px">
            {{ mainPageText }}
          </p>
        </span>
      </div>
      <div class="col-2" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      mainPageText: `I love building user-friendly websites and web apps. I’ve been
            involved in various projects, both as a freelancer as well as part
            of large firms. If you have a project you’d like me to help you
            with, drop me a line!`
    };
  }
};
</script>
