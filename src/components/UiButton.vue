<template>
  <button class="mybutton" @click="$emit('click')">
    <slot class="mybutton-lable"></slot>
  </button>
</template>
<script>
export default {
  name: 'UiButton'
}
</script>
<style lang="scss" scoped>
button.mybutton {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  cursor: pointer;
  margin: 0.3rem 0.3rem 0.3rem 0;
}
.mybutton:hover {
  background-color: #0056b3;
}
.mybutton:active {
  background-color: #003380;
}
.mybutton:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
}
</style>
