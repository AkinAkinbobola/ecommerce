<script setup>
import {useUserStore} from "~/stores/user";

const userStore = useUserStore();
const route = useRoute();
const currentImage = ref("");

const addToCart = () => {
  alert('Added to cart');
}

const isInCart = computed(() => {
  let res = false;
  userStore.cart.forEach((item) => {
    if (route.params.id === item.id) {
      res = true;
    }
  })
  return res;
})

const priceComputed = computed(() => {
  return '100';
})

const images = ref([
  "",
  'https://picsum.photos/id/95/800/800',
  'https://picsum.photos/id/100/800/800',
  'https://picsum.photos/id/200/800/800',
  'https://picsum.photos/id/300/800/800',
  'https://picsum.photos/id/400/800/800',
]);

watchEffect(() => {
  currentImage.value = 'https://picsum.photos/id/77/800/800'
  images.value[0] = 'https://picsum.photos/id/77/800/800'
})

</script>

<template>
  <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
    <div class="md:flex gap-4 justify-between mx-auto w-full">
      <div class="md:w-[40%]">
        <img :src="currentImage" alt="" class="rounded-lg object-cover">
        <div class="flex items-center justify-center mt-2" v-if="images[0]">
          <div v-for="image in images">
            <img
                :src="image"
                alt=""
                class="rounded-md object-cover border-[3px] cursor-pointer"
                width="70"
                @mouseover="currentImage = image"
                @click="currentImage = image"
                :class="currentImage === image ? 'border-[#FF5353]' : ''"
            >
          </div>
        </div>
      </div>
      <div class="md:w-[60%] bg-white p-3 rounded-lg">
        <div v-if="true">
          <div class="mb-2">Title</div>
          <div class="font-light text-[12px] mb-2"> Description</div>
        </div>

        <div class="flex items-center pt-1.5">
          <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
            <Icon name="material-symbols:star-rounded" class="-mt-[17px]" size="12"></Icon>
          </span>
          <p class="text-[#FF5353]">Extra 5% off</p>
        </div>

        <div class="flex items-center justify-start my-2">
          <Icon name="ic:baseline-star" color="#FF5353"/>
          <Icon name="ic:baseline-star" color="#FF5353"/>
          <Icon name="ic:baseline-star" color="#FF5353"/>
          <Icon name="ic:baseline-star" color="#FF5353"/>
          <Icon name="ic:baseline-star" color="#FF5353"/>
          <span class="text-[13px] font-light ml-2">5 213 Reviews 1,000+ orders</span>
        </div>

        <div class="border-b"></div>

        <div class="flex items-center justify-start gap-2 my-2">
          <div class="text-xl font-bold">${{ priceComputed }}</div>
          <span class="bg-[#F5F5F5] border text-[#C08562] text-[9px] font-semibold px-1.5 rounded-sm">70% off</span>
        </div>

        <p class="text-[#009A66] text-xs font-semibold pt-1">
          Free 11-day delivery over $8.28
        </p>
        <p class="text-[#009A66] text-xs font-semibold pt-1">
          Free shipping
        </p>
        <div class="py-2"></div>
        <button
            @click="addToCart"
            :disabled="isInCart"
            class="cursor-pointer px-6 py-2 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-[#FF851A] to-[#FFAC2C]"
        >
          <div v-if="isInCart">Is Added</div>
          <div v-else>Add to Cart</div>
        </button>

      </div>
    </div>
  </div>
</template>