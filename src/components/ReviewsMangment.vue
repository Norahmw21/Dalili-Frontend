<template>
  <div class="min-h-screen bg-gray-100 py-10 px-4 font-sans">
    <div class="max-w-6xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8">
      <!-- Header and Filter Button -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 class="text-3xl font-semibold text-gray-800">All Doctor Reviews</h2>
        <Button 
          label="Filter by Doctor" 
          icon="pi pi-filter" 
          class="bg-blue-600 border-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-lg px-4 py-2"
          @click="openFilterDialog" 
        />
      </div>

      <!-- Review Table -->
      <div class="overflow-x-auto rounded-xl shadow-md">
        <DataTable 
          :value="reviews" 
          dataKey="id" 
          responsiveLayout="scroll"
          stripedRows
        >
          <Column field="id" header="ID" />
          <Column field="doctorName" header="Doctor" />
          <Column field="userName" header="User" />
          <Column field="overallRating" header="Rating" />
          <Column field="comment" header="Comment" />
          <Column field="createdAt" header="Created At" />
        </DataTable>
      </div>

      <!-- Filter Dialog -->
      <Dialog 
        v-model:visible="filterDialog" 
        header="Filter by Doctor" 
        modal 
        class="w-full max-w-md rounded-xl"
      >
        <div class="space-y-4">
          <Dropdown
            v-model="selectedDoctor"
            :options="doctors"
            optionLabel="name"
            optionValue="id"
            placeholder="Select a Doctor"
            class="w-full"
          />

          <div class="flex justify-end gap-3 pt-2">
            <Button 
              label="Apply Filter" 
              icon="pi pi-check" 
              class="bg-blue-600 border-blue-600 text-white hover:bg-blue-700 transition rounded-lg px-4 py-2"
              @click="filterByDoctor" 
            />
            <Button 
              label="Clear" 
              icon="pi pi-times" 
              class="bg-gray-200 text-gray-700 hover:bg-gray-300 transition rounded-lg px-4 py-2"
              @click="clearFilter" 
            />
          </div>
        </div>
      </Dialog>
    </div>
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
