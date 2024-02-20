<script setup>
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

</script>

<template>
  <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
    <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      <div v-if="products" v-for="product in products" :key="product.id">
        <ProductComponent :product="product"/>
      </div>
    </div>
  </div>
</template>