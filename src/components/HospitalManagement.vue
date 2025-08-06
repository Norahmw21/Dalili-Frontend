<template>
  <div class="card">
    <h2>Hospital Management</h2>

    <Button label="Add Hospital" icon="pi pi-plus" class="mb-3" @click="openAddForm" />

    <DataTable :value="hospitals" dataKey="id" class="mb-3">
      <Column field="id" header="ID" />
      <Column field="name" header="Name" />
      <Column field="address" header="Address" />
      <Column field="latitude" header="Latitude" />
      <Column field="longitude" header="Longitude" />
      <Column field="websiteUrl" header="Website" />
      <Column header="Actions">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" class="mr-2" @click="editHospital(slotProps.data)" />
          <Button icon="pi pi-trash" severity="danger" @click="deleteHospital(slotProps.data.id)" />
        </template>
      </Column>
    </DataTable>

    <!-- Modal Form -->
    <Dialog v-model:visible="showForm" :header="editingHospital.id ? 'Edit Hospital' : 'Add Hospital'" modal class="w-4" :closable="false">
      <div class="form">
        <label>Name:</label>
        <input v-model="editingHospital.name" class="input" />

        <label>Address:</label>
        <textarea v-model="editingHospital.address" class="input"></textarea>

        <label>Latitude:</label>
        <input type="number" step="0.00000001" v-model.number="editingHospital.latitude" class="input" />

        <label>Longitude:</label>
        <input type="number" step="0.00000001" v-model.number="editingHospital.longitude" class="input" />

        <label>Website URL:</label>
        <input v-model="editingHospital.websiteUrl" class="input" />

        <div class="mt-2">
          <Button label="Save" icon="pi pi-check" @click="saveHospital" />
          <Button label="Cancel" icon="pi pi-times" class="ml-2" severity="secondary" @click="cancelEdit" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// PrimeVue components
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'

const hospitals = ref([])
const showForm = ref(false)

const emptyHospital = {
  id: null,
  name: '',
  address: '',
  latitude: 0.0,
  longitude: 0.0,
  websiteUrl: ''
}

const editingHospital = ref({ ...emptyHospital })
//watch(editingHospital, (newVal) => console.log('Editing:', newVal), { deep: true })

const fetchHospitals = async () => {
  const res = await fetch('http://localhost:8080/api/hospitals')
  hospitals.value = await res.json()
}

const openAddForm = () => {
  editingHospital.value = { ...emptyHospital }
  showForm.value = true
}

const editHospital = (hospital) => {
  editingHospital.value = { ...hospital }
  showForm.value = true
}

const cancelEdit = () => {
  showForm.value = false
  editingHospital.value = { ...emptyHospital }
}

const saveHospital = async () => {
  const { id } = editingHospital.value
  const url = id
    ? `http://localhost:8080/api/hospitals/${id}`
    : `http://localhost:8080/api/hospitals`

  const method = id ? 'PUT' : 'POST'

  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editingHospital.value),
  })

  showForm.value = false
  fetchHospitals()
}

const deleteHospital = async (id) => {
  await fetch(`http://localhost:8080/api/hospitals/${id}`, {
    method: 'DELETE',
  })
  fetchHospitals()
}

onMounted(fetchHospitals)
</script>

<style scoped>
.card {
  padding: 1rem;
}

.input {
  display: block;
  width: 100%;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea.input {
  resize: vertical;
}

.mt-2 {
  margin-top: 1rem;
}

.ml-2 {
  margin-left: 0.5rem;
}
</style>
