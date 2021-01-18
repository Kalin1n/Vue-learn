<template>
  <form>
    <input type="text" placeholder="Task" v-model="task" />
    <button v-on:click.prevent="createTask">Create task</button>
  </form>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      task: ""
    };
  },
  emits: ["addTask"],
  methods: {
    createTask() {
      this.$emit("addTask", { newTask: this.task });
    }
  }
};
</script>

<style lang="sass" scoped>
input
  margin-right: 20px
  padding: 10px
  border-radius: 8px
  border: 1px solid black

button
  padding: 10px
  background-color: #fff
  border: 2px solid #000
  border-radius: 8px
</style>
