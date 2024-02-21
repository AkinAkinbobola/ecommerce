<script setup>
const currentImage = ref(null);
const images = ref([
  "",
  'https://picsum.photos/id/95/800/800',
  'https://picsum.photos/id/100/800/800',
  'https://picsum.photos/id/200/800/800',
  'https://picsum.photos/id/300/800/800',
  'https://picsum.photos/id/400/800/800',
]);

watchEffect(() => {
  images.value[0] = 'https://picsum.photos/id/77/800/800'
})

</script>

<template>
  <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
    <div class="md:flex gap-4 justify-between mx-auto w-full">
      <div class="md:w-[40%]">
        <img :src="`https://picsum.photos/id/95/800/800`" alt="" class="rounded-lg object-cover">
        <div class="flex items-center justify-center mt-2" v-if="images[0]">
          <div v-for="image in images">
            <img
                :src="image"
                alt=""
                class="rounded-md object-cover border-[3px] cursor-pointer"
                width="70"
                @mouseover="currentImage = image"
                @mouseleave="currentImage = null"
                @click="currentImage = image"
                :class="currentImage === image ? 'border-[#FF5353]' : ''"
            >

          </div>
        </div>

      </div>

    </div>
  </div>
</template>