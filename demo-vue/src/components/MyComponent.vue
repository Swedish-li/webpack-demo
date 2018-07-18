<template>
  <div>
    <h5>{{ title }}</h5>
    <button @click="increment">
      increment
    </button>
  </div>
</template>

<script>
export default {
  props: {
    // vue/require-default-prop
    initCount: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      title: 'My Custom Component',
      count: this.initCount
    }
  },
  methods: {
    increment: function () {
      this.count++
      this.$emit('my-event', this.count)
    }
  }
}
</script>
