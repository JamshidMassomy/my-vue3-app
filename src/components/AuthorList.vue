<template>
  <table class="author-tbl">
    <thead>
      <tr>
        <th v-for="(column, index) in authorColumns" :key="index">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in sharedData" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.firstname }}</td>
        <td>{{ item.lastname }}</td>
        <td>
          <UiButton @click="updateAuthor(item)">edit</UiButton>
          <UiButton @click="deleteAuthor(item)">delete</UiButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import UiButton from './UiButton.vue'
import { ref, inject } from 'vue'
export default {
  name: 'AuthorList',
  setup(_, context) {
    const authorColumn = ref([
      { label: 'id' },
      { label: 'fistname' },
      { label: 'lastname' },
      { label: 'action' }
    ])
    const sharedData = inject('authorData')

    function updateAuthor(author) {
      console.log('editing author', author)
      context.emit('updateAuthor', author)
    }
    function deleteAuthor(author) {
      console.log('deleting author', author)
    }

    return {
      authorColumn,
      sharedData,
      updateAuthor,
      deleteAuthor
    }
  },
  components: { UiButton }
}
</script>
<style lang="scss" scoped>
table {
  max-width: 800px;
  margin: 0 auto;
}

.author-tbl {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.author-tbl th,
.author-tbl td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}

.author-tbl th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.author-tbl tr:nth-child(even) {
  background-color: #f9f9f9;
}

.nice-table tr:hover {
  background-color: #e6e6e6;
}
</style>
