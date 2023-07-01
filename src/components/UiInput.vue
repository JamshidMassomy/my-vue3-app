<template>
  <input
    :id="id"
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    @input="updateValue"
  />
</template>
<script>
export default {
  name: 'UiInput',
  props: {
    type: { type: String, required: true },
    placeholder: { type: String },
    modelValue: {
      type: [String, Number],
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue($event) {
      this.$emit('update:modelValue', $event.target.value)
    }
  },
  data() {
    return {
      isFocused: false
    }
  }
}
</script>

<style>
input {
  width: 100%;
  padding: 10px;
  margin: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.input-focused,
.label-focused {
  border-color: blue;
}

.label-focused {
  position: absolute;
  top: -12px;
  left: 10px;
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
  color: blue;
  transition: top 0.3s, left 0.3s, font-size 0.3s;
}

.input-focused + .label-focused {
  top: -20px;
  left: 5px;
  font-size: 10px;
}
</style>
