<template>
  <div class="q-pa-md bg-grey-10">
    <div v-if="!$q.platform.is.mobile" class="column" style="height: 100vh">
      <div class="col-3" />
      <div class="col-4 row">
        <span class="col-1" />
        <span class="col">
          <p class="text-h2 text-teal-13 abolute-center">
            Hello, my name is Aristeidis and i am a full stack developer
          </p>
          <p class="text-body1 text-grey-4" style="font-size:20px">
            I love building user-friendly websites and web apps. I’ ve been
            involved in various projects, both as a freelancer as well as part
            of large firms. If you have a project you’d like me to help you
            with, drop me a line!
          </p>
        </span>
        <span class="col-4" />
      </div>
      <div class="col" />
    </div>
    <div v-else style="height: 100vh">
      <div class="col-6" />
      <div class="col row">
        <span class="col q-mt-xl">
          <p class="text-h4 text-teal-13 abolute-center">
            Hello, my name is Aristeidis and i am a full stack developer
          </p>
          <p class="text-body2 text-grey-4" style="font-size:20px">
            I love building user-friendly websites and web apps. I’ ve been
            involved in various projects, both as a freelancer as well as part
            of large firms. If you have a project you’d like me to help you
            with, drop me a line!
          </p>
        </span>
      </div>
      <div class="col-2" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
