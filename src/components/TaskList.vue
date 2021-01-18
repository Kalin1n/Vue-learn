<template>
  <div class="taskList">
    <ul>
      <Task
        v-on:changeStatus="changeStatus"
        v-on:deleteTask="deleteTask"
        v-for="task of tasks"
        v-bind:task="task"
        v-bind:key="task.id"
      />
    </ul>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "Tasks",
  components: {
    Task
  },
  props: ["tasks"],
  emits: ["updateTaskList"],
  methods: {
    changeStatus({ task }) {
      this.tasks.map(todo => {
        if (task.id === todo.id) {
          todo.completed = !todo.completed;
        }
      });
    },
    deleteTask({ task }) {
      const newTasks = this.tasks.filter(todo => {
        return todo.id !== task.id;
      });
      this.$emit("updateTaskList", { newTasks: newTasks });
    }
  }
};
</script>
