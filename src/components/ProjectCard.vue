<template>
  <q-card>
    <q-card-section class="row bg-grey-4">
      <div class="col text-grey-8 text-body2">
        {{ gameDescription }}
      </div>
      <div class="col-3 flex flex-center">
        <q-btn
          type="a"
          :href="refLink"
          size="sm"
          class="text-teal-13 bg-black"
          target="_blank"
        >
          view
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    gameDescription: {
      type: String,
      required: true
    },
    refLink: {
      type: String,
      required: true
    }
  }
};
</script>
