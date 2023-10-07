<template>
  <div class="gallery">
    <div
      class="gallery__item"
      role="button"
      v-for="(image, index) in imageArray"
      @click="setActiveImage(index)"
      :class="{ 'gallery__item--active': activeImage === index }"
    >
      <figure>
        <img class="gallery__image" :src="image.src" />
      </figure>
      <blockquote>
        <p>
          {{ image.quote.text }}
        </p>
        <footer>
          -{{ image.quote.cite.author }},
          <cite>{{ image.quote.cite.work }}</cite>
        </footer>
      </blockquote>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import images from "../assets/images";
import { shuffleArray } from "../util/helpers";

const activeImage = ref(null);

function setActiveImage(index) {
  if (activeImage.value === index) {
    activeImage.value = null;
    return;
  }
  activeImage.value = index;
}

const imageArray = computed(() => {
  return shuffleArray(images).map((image) => ({
    ...image,
    src: new URL(`../assets/images/${image.src}.jpeg`, import.meta.url).href,
  }));
});
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(1rem * 150 / 16), 1fr));
  place-content: center;
  background-color: var(--colors__pink1);
  gap: 0.25rem;
  padding: 0.25rem;
}

/* .gallery__item {
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  height: 300px;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.75s;
} */

.gallery__item {
  position: relative;
  height: 200px;
  perspective: 1000px;
  text-align: center;
  transition: transform 0.75s;
  transform-style: preserve-3d;
}
.gallery__item--active {
  transform: rotateY(180deg);
}

.gallery__item figure,
.gallery__item blockquote {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  margin: 0;
}

.gallery__item blockquote {
  background-color: var(--colors__pink2);
  color: var(--colors__white2);
  transform: rotateY(180deg);
  overflow-y: auto;
}

.gallery__item blockquote p {
  margin: 0;
  padding-bottom: 0.5rem;
}

.gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
