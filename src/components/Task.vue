<template>
  <li class="task">
    <input
      type="checkbox"
      v-bind:checked="task.completed"
      v-on:change="changeStatus"
    />

    <p v-bind:class="{ done: task.completed }">{{ task.text }}</p>
    <button v-on:click="deleteTask">Delete</button>
  </li>
</template>

<script>
export default {
  name: "Task",
  props: ["task"],
  emits: ["changeStatus", "deleteTask"],
  methods: {
    changeStatus() {
      this.$emit("changeStatus", { task: this.task });
    },
    deleteTask() {
      this.$emit("deleteTask", { task: this.task });
    }
  }
};
</script>

<style lang="sass" scoped>
.task
  display: flex
  justify-content: space-between
  flex-direction: row
  margin-bottom: 10px
  max-width: 500px

  .done
    text-decoration: line-through

  p
    font-size : 20px
    max-width: 300px

  button
    width: 150px
    padding: 0px
    height: 50px
    border-radius: 8px
    border: none
    color: #fff
    background-color: #42b983

  button:hover
    background-color: #fff
    color: #42b983
</style>
