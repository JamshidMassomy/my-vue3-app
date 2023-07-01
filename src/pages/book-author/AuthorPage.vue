<template>
  <div class="author-section">
    <UiButton @click="addAuthor">Add Author </UiButton>
    <AddAuthorDialogVue
      @saveAuthor="saveAuthor"
      @closeDialog="closeAuthorDialog"
    ></AddAuthorDialogVue>
    <AuthorList @updateAuthor="updateAuthor"></AuthorList>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import AddAuthorDialogVue from '@/components/AddAuthorDialog.vue'
import UiButton from '@/components/UiButton.vue'
import AuthorList from '@/components/AuthorList.vue'

const isDialogVisible = ref(false)
const authorData = ref([
  {
    id: 1,
    firstname: 'Robert',
    lastname: 'Green'
  },
  {
    id: 2,
    firstname: 'Lisa',
    lastname: 'Mike'
  }
])
provide('authorData', authorData)
provide('isDialogVisible', isDialogVisible)
function addAuthor() {
  isDialogVisible.value = true
}
function saveAuthor(data) {
  authorData.value.push(data)
  closeAuthorDialog()
}
function closeAuthorDialog() {
  isDialogVisible.value = false
}
function updateAuthor(author) {
  console.log('updating author from parent', author)
}
</script>
<style lang="scss" scoped>
.author-section {
  margin: auto;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
</style>
