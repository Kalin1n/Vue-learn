<template>
  <div class="taskListWrapper">
    <TaskForm v-on:addTask="addTask" />
    <hr />

    <h2 v-if="taskList.length === 0">No actual tasks</h2>
    <div v-else>
      <p>Tasks in list : {{ countTasks() }}</p>
      <p>Completed tasks : {{ countCompleted() }}</p>
      <Tasks v-bind:tasks="taskList" v-on:updateTaskList="updateTaskList" />
    </div>
  </div>
</template>

<script>
import TaskForm from "../components/TaskForm.vue";
import Tasks from "../components/TaskList.vue";
export default {
  name: "TaskList",
  components: {
    TaskForm,
    Tasks
  },
  data() {
    return {
      taskList: [
        { id: 1, text: "Hello", completed: false },
        { id: 2, text: "Java script", completed: true },
        { id: 3, text: "Privet", completed: false }
      ]
    };
  },
  methods: {
    updateTaskList({ newTasks }) {
      this.taskList = newTasks;
    },
    addTask({ newTask }) {
      this.taskList.push({
        id: Date.now(),
        text: newTask,
        completed: false
      });
    },
    countTasks() {
      return this.taskList.length;
    },
    countCompleted() {
      return this.taskList.filter(({ completed }) => {
        if (completed) {
          return completed;
        }
      }).length;
    }
  }
};
</script>

<style lang="sass" scoped>
.taskListWrapper
  padding: 30px
</style>
