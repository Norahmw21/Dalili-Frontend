<template>
  <div class="min-h-screen bg-gray-100 py-10 px-4 font-sans">
    <div class="max-w-6xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8">
      <!-- Header + Add Button -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 class="text-3xl font-semibold text-gray-800">Hospital Management</h2>
        <Button
            label="Add Hospital"
            icon="pi pi-plus"
            class="bg-blue-600 border-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-lg px-4 py-2"
            @click="openAddForm"
        />
      </div>

      <!-- Hospital Table -->
      <div class="overflow-x-auto rounded-xl shadow-md">
        <DataTable
            :value="hospitals"
            dataKey="id"
            responsiveLayout="scroll"
            stripedRows
        >
          <Column field="id" header="ID"/>
          <Column field="name" header="Name"/>
          <Column field="address" header="Address"/>
          <Column field="latitude" header="Latitude"/>
          <Column field="longitude" header="Longitude"/>
          <Column field="websiteUrl" header="Website"/>
          <Column header="Actions">
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <Button
                    icon="pi pi-pencil"
                    class="p-button-sm text-blue-600 hover:text-blue-800"
                    @click="editHospital(slotProps.data)"
                />
                <Button
                    icon="pi pi-trash"
                    class="p-button-sm text-red-500 hover:text-red-700"
                    @click="deleteHospital(slotProps.data.id)"
                />
              </div>
            </template>
          </Column>
        </DataTable>
      </div>

      <!-- Modal Form -->
      <Dialog
          v-model:visible="showForm"
          :header="editingHospital.id ? 'Edit Hospital' : 'Add Hospital'"
          modal
          class="w-full max-w-2xl rounded-xl"
          :closable="false"
      >
        <div class="space-y-4">
          <div class="grid grid-cols-1 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Name:</label>
              <input
                  v-model="editingHospital.name"
                  class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Address:</label>
              <textarea
                  v-model="editingHospital.address"
                  class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  rows="2"
              ></textarea>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Latitude:</label>
                <input
                    type="number"
                    step="0.00000001"
                    v-model.number="editingHospital.latitude"
                    class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Longitude:</label>
                <input
                    type="number"
                    step="0.00000001"
                    v-model.number="editingHospital.longitude"
                    class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Website URL:</label>
              <input
                  v-model="editingHospital.websiteUrl"
                  class="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <!-- Form Buttons -->
          <div class="flex justify-end gap-3 pt-4">
            <Button
                label="Save"
                icon="pi pi-check"
                class="bg-blue-600 border-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-lg px-4 py-2"
                @click="saveHospital"
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

const editingHospital = ref({...emptyHospital})
//watch(editingHospital, (newVal) => console.log('Editing:', newVal), { deep: true })


const openAddForm = () => {
  editingHospital.value = {...emptyHospital}
  showForm.value = true
}

const editHospital = (hospital) => {
  editingHospital.value = {...hospital}
  showForm.value = true
}

const cancelEdit = () => {
  showForm.value = false
  editingHospital.value = {...emptyHospital}
}

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

const saveHospital = async () => {
  const {id} = editingHospital.value
  const url = id
      ? `http://localhost:8080/api/hospitals/${id}`
      : `http://localhost:8080/api/hospitals`
  const method = id ? 'PUT' : 'POST'

  await fetch(url, {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editingHospital.value),
  })

  showForm.value = false
  fetchHospitals()
}

const deleteHospital = async (id) => {
  await fetch(`http://localhost:8080/api/hospitals/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
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
