<template>
  <div>
    Welcome, {{ userName }}!
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const userName = ref('')

// Option 1: Fetch from localStorage (commonly used after login)
onMounted(() => {
  const storedName = localStorage.getItem('userName') // Adjust key as needed
  if (storedName) {
    userName.value = storedName
  } else {
    userName.value = 'Guest'
  }
})

// Option 2: Or hardcode for now
// const userName = ref('Nourah')
</script>

 
