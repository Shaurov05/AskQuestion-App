<template>
  <div class="example">
    <h1>Single file app</h1>
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default{
  name: "example",
  data(){
    return {
      message: "hello world!"
    }
  }
}
</script>

<style scoped>
h1{
  color: red;
}
</style>
