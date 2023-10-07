<template>
  <main>
    <header>
      <h1>Many Moments With You</h1>
    </header>
    <Gallery />
    <footer>
      <h2>Will you be my Girlfriend???</h2>

      <button :class="`btn-${yesOrNo(btnOne)}`" @click="onBtnClick(1)">
        {{ yesOrNo(btnOne) }}
      </button>
      <button :class="`btn-${yesOrNo(btnTwo)}`" @click="onBtnClick(2)">
        {{ yesOrNo(btnTwo) }}
      </button>
    </footer>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Gallery from "./components/Gallery.vue";
const btnOne = ref(true);
const btnTwo = ref(false);
const victoryMessage =
  "Horray! I'm so blessed and grateful to be spending this time with you topgether";

function yesOrNo(boolean) {
  return boolean === true ? "Yes" : "No";
}

function onBtnClick(btnNumber) {
  switch (btnNumber) {
    case 1:
      if (btnOne.value === true) {
        alert(victoryMessage);
        return;
      }
      btnOne.value = true;
      btnTwo.value = false;
      break;

    case 2:
      if (btnTwo.value === true) {
        return;
      }
      btnTwo.value = true;
      btnOne.value = false;
      break;
  }
}
</script>

<style scoped>
button {
  border: none;
  padding: 1rem;
}
.btn-Yes {
  background-color: var(--colors__blue1);
}
</style>
