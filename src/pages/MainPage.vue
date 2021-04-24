<template>
  <q-page class="q-pa-md bg-grey-10">
    <div class="center-left-text">
      <div>
        <p
          :class="$q.screen.gt.sm ? 'text-h2' : 'text-h4'"
          class="text-h2 text-teal-13"
        >
          Hello, my name is Aristeidis <br />
          and I am a full stack developer
        </p>
        <p class="text-body1 text-grey-4 font-md">
          I love building user-friendly websites and web apps. I’ve been
          involved in various projects, both as a freelancer as well as part of
          large firms. If you have a project you’d like me to help you with,
          drop me a line!
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "MainPage"
};
</script>

<style scoped>
.font-md {
  font-size: 20px;
}

@media screen and (min-width: 996px) {
  .center-left-text {
    position: absolute;
    top: 30%;
    right: 40%;
    left: 10%;
  }
}
</style>
