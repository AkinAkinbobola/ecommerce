<script setup>
import {useUserStore} from "~/stores/user";

const userStore = useUserStore();

let selectedArray = ref([]);

onMounted(() => {
  setTimeout(() => userStore.isLoading = false, 200);
})

const products = ref([
  {
    id: 1,
    title: 'Product 1',
    description: 'This is a description for Product 1',
    url: 'https://picsum.photos/id/7/800/800',
    price: 100
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is a description for Product 2',
    url: 'https://picsum.photos/id/15/800/800',
    price: 150
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'This is a description for Product 3',
    url: 'https://picsum.photos/id/23/800/800',
    price: 120
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'This is a description for Product 4',
    url: 'https://picsum.photos/id/31/800/800',
    price: 90
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'This is a description for Product 5',
    url: 'https://picsum.photos/id/42/800/800',
    price: 200
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'This is a description for Product 6',
    url: 'https://picsum.photos/id/50/800/800',
    price: 80
  },
  {
    id: 7,
    title: 'Product 7',
    description: 'This is a description for Product 7',
    url: 'https://picsum.photos/id/65/800/800',
    price: 130
  },
  {
    id: 8,
    title: 'Product 8',
    description: 'This is a description for Product 8',
    url: 'https://picsum.photos/id/72/800/800',
    price: 110
  },
  {
    id: 9,
    title: 'Product 9',
    description: 'This is a description for Product 9',
    url: 'https://picsum.photos/id/88/800/800',
    price: 180
  },
  {
    id: 10,
    title: 'Product 10',
    description: 'This is a description for Product 10',
    url: 'https://picsum.photos/id/95/800/800',
    price: 160
  },
]);

const cards = ref([
  'visa.png',
  'mastercard.png',
  'paypal.png',
  'applepay.png',
])

const totalPriceComputed = computed(() => {
  let total = 0;
  userStore.cart.forEach((item) => {
    total += item.price;
  })
  return (total / 100).toFixed(2);
})


</script>

<template>
  <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
    <div v-if="!userStore.cart.length" class="h-[500px]">
      <div class="pt-20 flex flex-col items-center justify-center">
        <img
            class="mx-auto"
            width="250"
            src="/cart-empty.png"
        >

        <div class="text-xl text-center mt-4">No items yet?</div>
        <div v-if="true" class="flex items-center">
          <NuxtLink
              to="/auth"
              class="
                      bg-[#FD374F]
                      text-white
                      text-[21px]
                      font-semibold
                      px-3 py-2
                      rounded-full
                      mt-4
                  "
          >
            Sign in
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="md:flex gap-4 justify-between mx-auto w-full">
      <div class="md:w-[65%]">
        <div class="bg-white rounded-lg p-4">
          <div class="text-2xl font-bold mb-2">
            Shopping Cart ({{ userStore.cart.length }})
          </div>
        </div>
        <div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
          <div class="text-red-500 font-bold">Welcome Deal applicable on 1 item only</div>
        </div>

        <div id="Items" class="bg-white rounded-lg p-4 mt-4">
          <div v-for="product in products">
            <CartItem
                :product="product"
                :selectedArray="selectedArray"
                @selectedRadio="selectedRadioFunc"
            />
          </div>
        </div>
      </div>

      <div class="md:hidden block my-4"/>

      <div class="md:w-[35%]">
        <div id="Summary" class="bg-white rounded-lg p-4">
          <div class="text-2xl font-extrabold mb-2">Summary</div>
          <div class="flex items-center justify-between my-4">
            <div class="font-semibold">Total</div>
            <div class="text-2xl font-semibold">
              $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
            </div>
          </div>
          <button
              @click="goToCheckout"
              class="
                                flex
                                items-center
                                justify-center
                                bg-[#FD374F]
                                w-full
                                text-white
                                text-[21px]
                                font-semibold
                                p-1.5
                                rounded-full
                                mt-4
                            "
          >
            Checkout
          </button>
        </div>

        <div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4">

          <div class="text-lg font-semibold mb-2">Payment methods</div>
          <div class="flex items-center justify-start gap-8 my-4">
            <div v-for="card in cards">
              <img class="h-6" :src="card">
            </div>
          </div>

          <div class="border-b"/>

          <div class="text-lg font-semibold mb-2 mt-2">Buyer Protection</div>
          <p class="my-2">
            Get full refund if the item is not as described or if is not delivered
          </p>

        </div>
      </div>
    </div>
  </div>
</template>