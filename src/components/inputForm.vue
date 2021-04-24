<template>
  <q-input
    outlined
    :label="label"
    label-color="white"
    color="white"
    dark
    :type="type"
    :value="model"
    @input="$emit('update:model', $event)"
  />
</template>

<script>
export default {
  name: "inputForm",
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    }
  }
};
</script>
