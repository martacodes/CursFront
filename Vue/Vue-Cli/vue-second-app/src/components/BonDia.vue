<template>
  <div class="bondia">
    <h1>{{ msg }}</h1>
    <h3>Essential Links</h3>
    <ul>
      <li>que dius?</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BonDia',
  props: {
    msg: String
  }
}
</script>