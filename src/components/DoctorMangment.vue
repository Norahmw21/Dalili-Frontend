<template>
  <div class="card">
    <h2>Doctor Management</h2>

    <Button label="Add Doctor" icon="pi pi-plus" class="mb-3" @click="openAddForm" />

    <DataTable :value="doctors" dataKey="id" class="mb-3" responsiveLayout="scroll">
        <Column field="doctorId" header="ID" />
        <Column field="doctorName" header="Name" />
        <Column field="hospitalName" header="Hospital" />
        <Column field="specialty" header="Specialty" />
        <Column field="yearsOfExperience" header="Experience (Years)" />
        <Column field="contactEmail" header="Email" />
        <Column field="contactPhone" header="Phone" />
        <Column field="bio" header="Bio" />
        <Column field="experience" header="Experience" />
        <Column header="Photo">
            <template #body="slotProps">
            <img :src="slotProps.data.photoUrl" alt="Doctor Photo" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;" />
            </template>
        </Column>
        <Column header="Actions">
            <template #body="slotProps">
            <Button icon="pi pi-pencil" class="mr-2" @click="editDoctor(slotProps.data)" />
            <Button icon="pi pi-trash" severity="danger" @click="deleteDoctor(slotProps.data.id)" />
            </template>
        </Column>
    </DataTable>


    <!-- Modal Form -->
    <Dialog v-model:visible="showForm" :header="editingDoctor.id ? 'Edit Doctor' : 'Add Doctor'" modal class="w-4" :closable="false">
      <div class="form">
        <label>Name:</label>
        <input v-model="editingDoctor.name" class="input" />
      
        <label>Bio:</label>
        <textarea v-model="editingDoctor.bio" class="input"></textarea>

        <label>Photo URL:</label>
        <input v-model="editingDoctor.photoUrl" class="input" />

        <label>Years of Experience:</label>
        <input type="number" v-model="editingDoctor.yearsOfExperience" class="input" />

        <label>Experience:</label>
        <textarea v-model="editingDoctor.experience" class="input"></textarea>

        <label>Phone:</label>
        <input v-model="editingDoctor.contactPhone" class="input" />

        <label>Email:</label>
        <input v-model="editingDoctor.contactEmail" class="input" />

        <label>Specialty:</label>
        <input v-model="editingDoctor.specialty" class="input" />

        <label>Hospital:</label>
        <select v-model="editingDoctor.hospitalId" class="input">
            <option disabled value="">Select a hospital</option>
            <option v-for="hospital in hospitals" :key="hospital.id" :value="hospital.id">
                 {{ hospital.name }}
            </option>
        </select>

        <div class="mt-2">
          <Button label="Save" icon="pi pi-check" @click="saveDoctor" />
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

const doctors = ref([])
const showForm = ref(false)

const emptyDoctor = {
  id: null,
  name: '',
  bio: '',
  photoUrl: '',
  yearsOfExperience: 0,
  experience: '',
  contactPhone: '',
  contactEmail: '',
  specialty: '',
  hospitalId: null
}

const editingDoctor = ref({ ...emptyDoctor })

const fetchDoctors = async () => {
  const res = await fetch('http://localhost:8080/doctors/with-hospitals')
  doctors.value = await res.json()
}

const hospitals = ref([])

const fetchHospitals = async () => {
  const res = await fetch('http://localhost:8080/api/hospitals') // adjust URL if needed
  hospitals.value = await res.json()
}

const openAddForm = () => {
  editingDoctor.value = { ...emptyDoctor }
  showForm.value = true
}

const editDoctor = (doc) => {
  editingDoctor.value = { ...doc }
  showForm.value = true
}

const cancelEdit = () => {
  showForm.value = false
  editingDoctor.value = { ...emptyDoctor }
}

const saveDoctor = async () => {
  const { id } = editingDoctor.value
  const url = id
    ? `http://localhost:8080/doctors/${id}`
    : `http://localhost:8080/doctors`

  const method = id ? 'PUT' : 'POST'

  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editingDoctor.value),
  })

  showForm.value = false
  fetchDoctors()
}

const deleteDoctor = async (id) => {
  await fetch(`http://localhost:8080/doctors/${id}`, {
    method: 'DELETE',
  })
  fetchDoctors()
}

onMounted(() => {
  fetchDoctors()
  fetchHospitals()
})
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
