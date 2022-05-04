<template>
  <SinglePhotoView
    :imageSources="[
      'https://source.unsplash.com/random?park',
      'https://source.unsplash.com/random?dog',
      'https://source.unsplash.com/random?house',
      'https://source.unsplash.com/random?tree',
      'https://source.unsplash.com/random?flower',
      'https://source.unsplash.com/random?car',
      'https://source.unsplash.com/random?cat',
      'https://source.unsplash.com/random?bird',
      'https://source.unsplash.com/random?bridge',
      'https://source.unsplash.com/random?water',
      'https://source.unsplash.com/random?building',
      'https://source.unsplash.com/random?people',
      'https://source.unsplash.com/random?person',
      'https://source.unsplash.com/random?php',
      'https://source.unsplash.com/random?css',
      'https://source.unsplash.com/random?javascript',
      'https://source.unsplash.com/random?brainfuck',
      'https://source.unsplash.com/random?python',
      'https://source.unsplash.com/random?ruby',
      'https://source.unsplash.com/random?java',
      'https://source.unsplash.com/random?go',
      'https://source.unsplash.com/random?swift',
      'https://source.unsplash.com/random?ios',
      'https://source.unsplash.com/random?android',
      'https://source.unsplash.com/random?samsung',
      'https://source.unsplash.com/random?apple',
      'https://source.unsplash.com/random?robin',
      'https://source.unsplash.com/random?overflow',
      'https://source.unsplash.com/random?steve+jobs',
      'https://source.unsplash.com/random?tbz',
      'https://source.unsplash.com/random?park',
    ]"
  />
</template>

<script>
import SinglePhotoView from "@/components/SinglePhotoView/SinglePhotoView.vue";

export default {
  name: "App",
  components: {
    SinglePhotoView,
  },
};
</script>
