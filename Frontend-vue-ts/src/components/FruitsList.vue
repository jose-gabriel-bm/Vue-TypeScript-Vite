<template>
    <h3>Metodo 1</h3>
    <ul>
      <li v-for="fruit in props.fruits" :key="fruit.id"> {{ fruit.tipo +' - R$ '+ fruit.valor }}</li>
    </ul>
</template>

<script setup lang="ts">

import type { PropType } from 'vue';
import type { FruitInterface } from '../types/fruit';

const props = defineProps({
    fruits:{
        required: true,
        type: Array as PropType<FruitInterface[]>
    }
})
</script>

<style scoped>

</style>