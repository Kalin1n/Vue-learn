<template>
  <div>
    <h2>Vuex counter</h2>
    <p>Value : {{ $store.state.counter }}</p>
    <button @click="add">Add</button>
    <button @click="subtract">Subtract</button>
    <input type="number" placeholder="Number to add" v-model="value" />
    <button @click="addTo">Add value</button>
  </div>
</template>

<script>
export default {
  name: "CounterPage",
  data() {
    return {
      value: 0
    };
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    subtract() {
      this.$store.commit("decrement");
    },
    addTo() {
      this.$store.commit("increase", { value: Number(this.value) });
    }
  }
};
</script>
