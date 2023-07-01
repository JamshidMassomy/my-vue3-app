<template>
  <div class="dialog" v-if="isDialogVisible">
    <div class="dialog-wrapper">
      <div class="dialog-header">
        <span class="close-btn" @click="closeDialog">X</span>
      </div>
      <form @submit="saveAuthor">
        <div class="dialog-content">
          <UiInput :id="'id'" v-model="id" placeholder="id" />
          <UiInput
            :id="'firstname'"
            v-model="firstname"
            placeholder="first name"
          />
          <UiInput
            :id="'lastname'"
            v-model="lastname"
            placeholder="last name"
          />
        </div>
        <div class="dialog-footer">
          <UiButton @click="closeDialog">cancel</UiButton>
          <UiButton type="submit">save</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>
<script se>
import UiInput from './UiInput.vue'
import UiButton from './UiButton.vue'
import { ref, inject } from 'vue'

export default {
  name: 'AddAuthorDialog',
  components: {
    UiInput,
    UiButton
  },

  setup(_, context) {
    const id = ref('')
    const firstname = ref('')
    const lastname = ref('')
    const isDialogVisible = inject('isDialogVisible')
    function closeDialog() {
      context.emit('closeDialog')
    }
    function saveAuthor() {
      const data = {
        id: id.value,
        firstname: firstname.value,
        lastname: lastname.value
      }
      context.emit('saveAuthor', data)
    }

    return {
      id,
      firstname,
      lastname,
      isDialogVisible,
      closeDialog,
      saveAuthor
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog-wrapper {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: auto;
  width: 40%;
  height: 40%;
  padding: 2rem;
}
.close-btn {
  cursor: pointer;
  float: right;
}
.dialog-content {
  padding: 0.5rem;
}
</style>
