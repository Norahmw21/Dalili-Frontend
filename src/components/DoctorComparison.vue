<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

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
      // Handle not found, skip
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
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Doctor Comparison</h2>
    <div v-if="loading" class="text-center">
      <ProgressSpinner />
    </div>
    <div v-else-if="doctors.length === 0" class="text-center text-gray-400">
      No doctors selected for comparison.
    </div>
    <div v-else class="overflow-auto">
      <table class="min-w-full bg-white shadow rounded-lg">
        <thead>
        <tr>
          <th class="px-4 py-2"></th>
          <th
              v-for="doc in doctors"
              :key="doc.id"
              class="px-4 py-2 text-xl font-semibold border"
          >
            <div class="flex flex-col items-center">
              <img v-if="doc.photoUrl" :src="doc.photoUrl" class="w-16 h-16 rounded-full mb-2" />
              <span>{{ doc.name }}</span>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="px-4 py-2 font-bold">Specialty</td>
          <td v-for="doc in doctors" :key="doc.id" class="px-4 py-2 border">{{ doc.specialty }}</td>
        </tr>
        <tr>
          <td class="px-4 py-2 font-bold">Years of Experience</td>
          <td v-for="doc in doctors" :key="doc.id" class="px-4 py-2 border">{{ doc.yearsOfExperience }}</td>
        </tr>
        <tr>
          <td class="px-4 py-2 font-bold">Contact</td>
          <td v-for="doc in doctors" :key="doc.id" class="px-4 py-2 border">
            <div>{{ doc.contactPhone }}</div>
            <div>{{ doc.contactEmail }}</div>
          </td>
        </tr>
        <tr>
          <td class="px-4 py-2 font-bold">Bio</td>
          <td v-for="doc in doctors" :key="doc.id" class="px-4 py-2 border">{{ doc.bio }}</td>
        </tr>
        <!-- Add more fields as needed -->
        </tbody>
      </table>
    </div>
    <Button label="Back to Search" class="mt-6" @click="router.push({ name: 'DoctorList' })" />
  </div>
</template>
