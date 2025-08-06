<script setup>
import {ref, onMounted, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import axios from 'axios';
import ProgressSpinner from 'primevue/progressspinner';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Badge from 'primevue/badge';
import Divider from 'primevue/divider';

const route = useRoute();
const router = useRouter();

const doctorIds = ref([]);
const doctors = ref([]);
const loading = ref(false);

const fetchDoctors = async () => {
  if (!doctorIds.value.length) return;
  loading.value = true;
  doctors.value = [];
  for (const id of doctorIds.value) {
    try {
      const resp = await axios.get(`/doctors/${id}`);
      doctors.value.push(resp.data);
    } catch (e) {
    }
  }
  loading.value = false;
};

onMounted(() => {
  const idsParam = route.query.ids;
  if (idsParam) {
    doctorIds.value = idsParam.split(',').map(id => id.trim());
    fetchDoctors();
  }
});

// Watch for route changes (if user re-selects)
watch(() => route.query.ids, (newIds) => {
  if (newIds) {
    doctorIds.value = newIds.split(',').map(id => id.trim());
    fetchDoctors();
  }
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Doctor Comparison</h1>
        <p class="text-gray-600">Compare selected doctors side by side to make the best choice</p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-16">
        <ProgressSpinner class="mb-4"/>
        <p class="text-gray-600 text-lg">Loading doctor profiles...</p>
      </div>

      <!-- Empty State -->
      <div v-else-if="doctors.length === 0" class="text-center py-16">
        <div class="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i class="pi pi-users text-4xl text-gray-400"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-700 mb-2">No Doctors Selected</h3>
          <p class="text-gray-500 mb-6">Please select doctors from the search page to compare them here.</p>
          <Button
              label="Back"
              icon="pi pi-search"
              class="p-button-outlined"
              @click="router.push({ name: 'DoctorList' })"
          />
        </div>
      </div>

      <!-- Comparison Cards -->
      <div v-else class="space-y-8">
        <!-- Desktop: Side by side cards -->
        <div
            class="hidden lg:grid gap-6"
            :class="{
    'grid-cols-2': doctors.length === 2,
    'grid-cols-3': doctors.length === 3,
    'grid-cols-4': doctors.length === 4,
    'grid-cols-1': doctors.length === 1
  }"
        >
          <Card
              v-for="doctor in doctors"
              :key="doctor.id"
              class="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <template #header>
              <div class="relative">
                <div class="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-lg"></div>
                <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <img
                      v-if="doctor.photoUrl"
                      :src="doctor.photoUrl"
                      class="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                      :alt="doctor.name"
                  />
                  <div v-else
                       class="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-200 flex items-center justify-center">
                    <i class="pi pi-user text-2xl text-gray-500"></i>
                  </div>
                </div>
              </div>
            </template>

            <template #content>
              <div class="pt-8 text-center">
                <!-- Name and Specialty -->
                <h3 class="text-xl font-bold text-gray-900 mb-1">{{ doctor.name }}</h3>
                <Badge :value="doctor.specialty" class="mb-4" severity="info"/>

                <!-- Experience -->
                <div class="flex items-center justify-center gap-2 mb-6">
                  <i class="pi pi-clock text-blue-500"></i>
                  <span class="text-gray-700">{{ doctor.yearsOfExperience }} years experience</span>
                </div>

                <Divider/>

                <!-- Contact Info -->
                <div class="space-y-3 mb-6">
                  <div class="flex items-center gap-3 text-left">
                    <i class="pi pi-phone text-blue-500"></i>
                    <span class="text-gray-700">{{ doctor.contactPhone }}</span>
                  </div>
                  <div class="flex items-center gap-3 text-left">
                    <i class="pi pi-envelope text-blue-500"></i>
                    <span class="text-gray-700 break-all">{{ doctor.contactEmail }}</span>
                  </div>
                </div>

                <!-- Bio -->
                <div class="text-left">
                  <h4 class="font-semibold text-gray-800 mb-2">About</h4>
                  <p class="text-gray-600 text-sm leading-relaxed">{{ doctor.bio }}</p>
                </div>
              </div>
            </template>

            <template #footer>
              <Button
                  label="View Profile"
                  icon="pi pi-user"
                  class="w-full p-button-outlined"
                  @click="router.push({ name: 'DoctorProfile', params: { id: doctor.id } })"
              />
            </template>
          </Card>
        </div>

        <!-- Mobile/Tablet: Stacked cards -->
        <div class="lg:hidden space-y-6">
          <Card v-for="doctor in doctors" :key="doctor.id" class="shadow-lg">
            <template #content>
              <div class="flex flex-col sm:flex-row gap-6">
                <!-- Photo -->
                <div class="flex-shrink-0 text-center sm:text-left">
                  <img
                      v-if="doctor.photoUrl"
                      :src="doctor.photoUrl"
                      class="w-24 h-24 rounded-full mx-auto sm:mx-0 shadow-lg object-cover"
                      :alt="doctor.name"
                  />
                  <div v-else
                       class="w-24 h-24 rounded-full mx-auto sm:mx-0 shadow-lg bg-gray-200 flex items-center justify-center">
                    <i class="pi pi-user text-2xl text-gray-500"></i>
                  </div>
                </div>

                <!-- Info -->
                <div class="flex-1 text-center sm:text-left">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ doctor.name }}</h3>
                  <Badge :value="doctor.specialty" class="mb-3" severity="info"/>

                  <div class="space-y-2 mb-4">
                    <div class="flex items-center justify-center sm:justify-start gap-2">
                      <i class="pi pi-clock text-blue-500"></i>
                      <span class="text-gray-700">{{ doctor.yearsOfExperience }} years</span>
                    </div>
                    <div class="flex items-center justify-center sm:justify-start gap-2">
                      <i class="pi pi-phone text-blue-500"></i>
                      <span class="text-gray-700">{{ doctor.contactPhone }}</span>
                    </div>
                    <div class="flex items-center justify-center sm:justify-start gap-2">
                      <i class="pi pi-envelope text-blue-500"></i>
                      <span class="text-gray-700">{{ doctor.contactEmail }}</span>
                    </div>
                  </div>

                  <p class="text-gray-600 text-sm mb-4">{{ doctor.bio }}</p>

                  <Button
                      label="View Profile"
                      icon="pi pi-user"
                      size="small"
                      class="p-button-outlined"
                      @click="router.push({ name: 'DoctorProfile', params: { id: doctor.id } })"
                  />
                </div>
              </div>
            </template>
          </Card>
        </div>

        <!-- Back Button -->
        <div class="flex justify-center pt-8">
          <Button
              label="Back"
              icon="pi pi-arrow-left"
              class="p-button-lg p-button-outlined"
              @click="router.push({ name: 'DoctorList' })"
          />
        </div>
      </div>
    </div>
  </div>
</template>
