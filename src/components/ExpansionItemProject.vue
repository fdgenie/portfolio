<template>
  <q-expansion-item
    expand-separator
    :icon="icon"
    :label="label"
    class="text-teal-13 text-h5"
    :value="model"
    @input="$emit('update:model', $event)"
  >
    <slot />
  </q-expansion-item>
</template>

<script>
export default {
  name: "ExpansionItemProject",
  props: {
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    model: {
      type: Boolean,
      required: true
    }
  }
};
</script>
