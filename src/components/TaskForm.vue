<template>
  <form>
    <input type="text" placeholder="Task" v-model="task" />
    <button v-on:click.prevent="createTask">Create task</button>
    <p v-if="preview.length > 5">
      Task to be added : {{ preview }}, will be undone
    </p>
    <p v-else>Start input task to a field</p>
  </form>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      task: "",
      preview: ""
    };
  },
  watch: {
    task(value) {
      this.preview = value;
    }
  },
  emits: ["addTask"],
  methods: {
    createTask() {
      this.$emit("addTask", { newTask: this.task });
      this.task = "";
    },
    changeListener() {
      // No logic just trashes the console
      console.log("Current task input field state : ", this.task);
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
