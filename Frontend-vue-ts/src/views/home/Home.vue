<script setup lang="ts">
import { ref } from 'vue';
import FruitsList from '../../components/FruitsList.vue';


/*Tipando Variaveis usando Interface*/
import type { FruitInterface } from '../../types/fruit';

let fruits = ref<FruitInterface[]>(
  [
    {
      id: 1,
      tipo: 'Banana',
      valor: 4.25
    },
    {
      id: 2,
      tipo: 'Laranja',
      valor: 11.12
    },
  ]
)

/*Maneira menos utilizada de tipar variaveis*/
let fruits2 = ref(
  [
    {
      id: 1 as number,
      tipo: 'Melancia' as string,
      valor: 2.50 as number
    },
    {
      id: 2 as number,
      tipo: 'Caju' as string,
      valor: 8.99 as number
    },
  ]
);

/*Trabalhando com funcoes*/
let counter = ref(2);
let counter2 = ref<number | string>(2);


function changeCounter(newCounter: number){
  counter.value = counter.value + newCounter;
}

function changeTypeCounter(newCounter: number | string){
  counter2.value = newCounter;
}

</script>

<template>
  <div>
    <h2>Página Home</h2>
    <!-- Utilizacao de Props em componentes -->
    <FruitsList :fruits="fruits"/>

    
    <h3>Metodo 2</h3>
    <ul>
      <li v-for="fruit2 in fruits2" :key="fruit2.id"> {{ fruit2.tipo +' - R$ '+ fruit2.valor }}</li>
    </ul>


    <h3>Trabalhando com Funcoes</h3>
    {{ counter }}
    <br>
    <button @click="changeCounter(1)">+1 Contador</button>
    <br>
    {{ counter2 }}
    <br>
    <button @click="changeTypeCounter('Palavra')">Add string ao number</button>
  </div>
</template>

