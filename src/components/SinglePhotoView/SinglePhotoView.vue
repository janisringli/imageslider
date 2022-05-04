<template>
  <div class="single-photo-view__wrapper">
    <div class="content__top-section">
      <div class="topsection__back-to-gallery">
        <span class="icon-ArrowLeft back-to-gallery__icon" />
        <p class="subtitle-1 back-to-gallery__text">Zurück zur Gallerie</p>
      </div>
      <div class="top-section__indicator subtitle-1">
        {{ focusedImage + 1 }}/{{ images.length }}
      </div>
    </div>
    <div class="content__image-slider">
      <div
        class="image-slider__chevron icon-ChevronLeft"
        @click="setCurrent(focusedImage - 1)"
      />
      <div class="image-slider__image">
        <img class="image__content" :src="mainImageSource" />
      </div>
      <div
        class="image-slider__chevron icon-ChevronRight"
        @click="setCurrent(focusedImage + 1)"
      />
    </div>
    <div class="content__image-preview">
      <div class="image-preview__fade--left"></div>
      <div class="image-preview__fade--right"></div>
      <div class="image-preview__images">
        <div
          class="images__image-wrapper"
          v-for="(image, i) in images"
          :key="i"
          ref="previewImage"
        >
          <img
            :src="image.src"
            alt="random"
            class="image-wrapper__image"
            :class="{ 'image-wrapper__image--current': image.selected }"
            @click="setCurrent(i)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style
  lang="scss"
  src="@/components/SinglePhotoView/SinglePhotoView.scss"
  scoped
></style>
<script
  lang="ts"
  src="@/components/SinglePhotoView/SinglePhotoView.ts"
></script>
