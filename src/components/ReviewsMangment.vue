<template>
  <div class="card">
    <h2>All Doctor Reviews</h2>

    <Button label="Filter by Doctor" icon="pi pi-filter" class="mb-3" @click="openFilterDialog" />

    <DataTable :value="reviews" dataKey="id" class="mb-3">
      <Column field="id" header="ID" />
      <Column field="doctorName" header="Doctor" />
      <Column field="userName" header="User" />
      <Column field="overallRating" header="Rating" />
      <Column field="comment" header="Comment" />
      <Column field="createdAt" header="Created At" />
    </DataTable>

    <Dialog v-model:visible="filterDialog" header="Filter by Doctor" modal class="w-full max-w-2xl">
      <Dropdown
        v-model="selectedDoctor"
        :options="doctors"
        optionLabel="name"
        optionValue="id"
        placeholder="Select a Doctor"
        class="w-full mb-3"
      />

      <div class="text-right">
        <Button label="Apply Filter" icon="pi pi-check" @click="filterByDoctor" />
        <Button label="Clear" icon="pi pi-times" class="ml-2" severity="secondary" @click="clearFilter" />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'

const reviews = ref([])
const doctors = ref([])
const filterDialog = ref(false)
const selectedDoctor = ref(null)

const fetchAllReviews = async () => {
  try {
    const res = await fetch('http://localhost:8080/api/reviews/all');
    console.log('Status:', res.status);  // HTTP status code
    if (!res.ok) console.error('Error response', await res.text());
    const data = await res.json();
    console.log('Fetched reviews:', data);
    reviews.value = data;
  } catch (err) {
    console.error('Fetch failed:', err);
  }
}


const fetchAllDoctors = async () => {
  try {
    const res = await fetch('http://localhost:8080/doctors/all')
    doctors.value = await res.json()
  } catch (error) {
    console.error('Failed to fetch doctors:', error)
  }
}

const openFilterDialog = async () => {
  await fetchAllDoctors()
  filterDialog.value = true
}

const filterByDoctor = async () => {
  if (!selectedDoctor.value) return
  try {
    const res = await fetch(`http://localhost:8080/api/reviews/doctor/${selectedDoctor.value}`)
    reviews.value = await res.json()
    filterDialog.value = false
  } catch (error) {
    console.error('Failed to filter reviews by doctor:', error)
  }
}

const clearFilter = async () => {
  selectedDoctor.value = null
  filterDialog.value = false
  await fetchAllReviews()
}

onMounted(() => {
  fetchAllReviews()
})
</script>

<style scoped>
.mb-3 {
  margin-bottom: 1rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
</style>
