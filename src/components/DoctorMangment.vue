<template>
  <div class="min-h-screen bg-gray-100 px-4 py-10 font-sans">
    <div class="max-w-7xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 class="text-3xl font-semibold text-gray-800">Doctor Management</h2>
        <Button
            label="Add Doctor"
            icon="pi pi-plus"
            class="bg-blue-600 border-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-lg px-4 py-2"
            @click="openAddForm"
        />
      </div>

      <!-- Doctor Table -->
      <div class="overflow-x-auto">
        <DataTable
            :value="doctors"
            dataKey="id"
            class="rounded-xl overflow-hidden shadow-md"
            responsiveLayout="scroll"
            stripedRows
            paginator
            :rows="5"
            :rowsPerPageOptions="[5, 10, 20]"
        >
          <Column field="doctorId" header="ID"/>
          <Column field="doctorName" header="Name"/>
          <Column field="hospitalName" header="Hospital"/>
          <Column field="specialty" header="Specialty"/>
          <Column field="yearsOfExperience" header="Experience (Years)"/>
          <Column field="contactEmail" header="Email"/>
          <Column field="contactPhone" header="Phone"/>
          <Column field="bio" header="Bio"/>
          <Column field="experience" header="Experience"/>
          <Column header="Photo">
            <template #body="slotProps">
              <img
                  :src="slotProps.data.photoUrl"
                  alt="Doctor Photo"
                  class="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-blue-500"
              />
            </template>
          </Column>
          <Column header="Actions">
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <Button
                    icon="pi pi-pencil"
                    class="p-button-sm text-blue-600 hover:text-blue-800"
                    @click="editDoctor(slotProps.data)"
                />
                <Button
                    icon="pi pi-trash"
                    class="p-button-sm text-red-500 hover:text-red-700"
                    @click="deleteDoctor(slotProps.data.doctorId)"
                />
              </div>
            </template>
          </Column>
        </DataTable>
      </div>

      <!-- Modal Form -->
      <Dialog
          v-model:visible="showForm"
          :header="editingDoctor.id ? 'Edit Doctor' : 'Add Doctor'"
          modal
          class="w-full max-w-3xl rounded-xl"
          :closable="false"
      >
        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Name:</label>
              <input v-model="editingDoctor.name"
                     class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Photo URL:</label>
              <input v-model="editingDoctor.photoUrl"
                     class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone:</label>
              <input v-model="editingDoctor.contactPhone"
                     class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email:</label>
              <input v-model="editingDoctor.contactEmail"
                     class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Years of Experience:</label>
              <input type="number" v-model="editingDoctor.yearsOfExperience"
                     class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Specialty:</label>
              <input v-model="editingDoctor.specialty"
                     class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Hospital:</label>
              <select v-model="editingDoctor.hospitalId"
                      class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500">
                <option disabled value="">Select a hospital</option>
                <option v-for="hospital in hospitals" :key="hospital.id" :value="hospital.id">
                  {{ hospital.name }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Bio:</label>
            <textarea v-model="editingDoctor.bio"
                      class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                      rows="2"></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Experience:</label>
            <textarea v-model="editingDoctor.experience"
                      class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                      rows="3"></textarea>
          </div>

          <!-- Form Buttons -->
          <div class="flex justify-end gap-3 pt-4">
            <Button
                label="Save"
                icon="pi pi-check"
                class="bg-blue-600 border-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-lg px-4 py-2"
                @click="saveDoctor"
            />
            <Button
                label="Cancel"
                icon="pi pi-times"
                class="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-300 rounded-lg px-4 py-2"
                @click="cancelEdit"
            />
          </div>
        </div>
      </Dialog>
    </div>
  </div>
</template>


<script setup>
import {ref, onMounted} from 'vue'

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

const editingDoctor = ref({...emptyDoctor})

const fetchDoctors = async () => {
  const res = await fetch('http://localhost:8080/doctors/with-hospitals',{
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  doctors.value = await res.json()
  console.log(doctors)
}


const hospitals = ref([])
const token = localStorage.getItem('token')
const fetchHospitals = async () => {
  const res = await fetch('http://localhost:8080/api/hospitals', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })

  hospitals.value = await res.json()
}

const openAddForm = () => {
  editingDoctor.value = {...emptyDoctor}
  showForm.value = true
}

const editDoctor = (doc) => {
  editingDoctor.value = {...doc}
  showForm.value = true
}

const cancelEdit = () => {
  showForm.value = false
  editingDoctor.value = {...emptyDoctor}
}

const saveDoctor = async () => {
  const {id} = editingDoctor.value
  const url = id
      ? `http://localhost:8080/doctors/${id}`
      : `http://localhost:8080/doctors`

  const method = id ? 'PUT' : 'POST'

  await fetch(url, {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editingDoctor.value),
  })

  showForm.value = false
  fetchDoctors()
}

const deleteDoctor = async (id) => {
  await fetch(`http://localhost:8080/doctors/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
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
