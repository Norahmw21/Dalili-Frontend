<template>
  <div class="relative flex justify-center items-center p-8">
    
    <!-- Badge: Regular Checkup -->
    <div class="absolute top-[30%] left-[5%] bg-white shadow-md px-4 py-2 rounded-xl flex items-center gap-2 text-sm">
      <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
        <i class="pi pi-shield"></i>
      </div>
      <span class="font-medium text-gray-700">Regular Checkup</span>
    </div>
    <!-- Doctor Image -->
    <img
      src="../assets/doctor.png"
      alt="Doctor"
      class="w-full botton-[80%] max-w-[400px] z-10"
    />


    <!-- Badge: Happy Patients -->
    <div class="absolute bottom-[15%] left-[70%] bg-white shadow-md px-4 py-2 rounded-xl flex items-center gap-2 text-sm">
      <div class="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
        😊
      </div>
      <span class="font-medium text-gray-700">84k+ Happy Patients</span>
    </div>

    
    <!-- <div class="absolute w-56 h-56 border-[6px] border-blue-300 rounded-full top-[25%] left-[25%] -z-0"></div> -->
  </div>
</template>