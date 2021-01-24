<template>
  <div>
    <h2>Vuex counter</h2>
    <p>Value : {{ $store.state.counter }}</p>
    <button @click="add">Add</button>
    <button @click="subtract">Subtract</button>
  </div>
</template>

<script>
export default {
  name: "CounterPage",
  methods: {
    add() {
      this.$store.state.counter++;
    },
    subtract() {
      this.$store.state.counter--;
    }
  }
};
</script>
