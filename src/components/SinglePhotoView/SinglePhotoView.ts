import { defineComponent } from "vue";

export default defineComponent({
  name: "SinglePhotoView",
  props: {
    imageSources: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    focusedImage: 0,
  }),
  methods: {
    setCurrent(newSelection: number) {
      if (newSelection < 0) this.focusedImage = this.imageSources.length - 1;
      else if (newSelection === this.imageSources.length) this.focusedImage = 0;
      else this.focusedImage = newSelection;
      const targetPreviewImageRef = this.$refs.previewImage as HTMLDivElement[];
      if (targetPreviewImageRef)
        targetPreviewImageRef[this.focusedImage].scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
    },
  },
  computed: {
    images() {
      const focusedImage = this.focusedImage;
      let index = -1;
      return this.imageSources.map((imageSource) => ({
        src: imageSource,
        selected: focusedImage === (index += 1),
        imageSource,
      }));
    },
    mainImageSource() {
      return this.imageSources[this.focusedImage];
    },
  },
  mounted() {
    window.onkeydown = ({ key }: KeyboardEvent) => {
      if (key === "ArrowRight") this.setCurrent(this.focusedImage + 1);
      else if (key === "ArrowLeft") this.setCurrent(this.focusedImage - 1);
    };
  },
  unmounted() {
    window.onkeydown = null;
  },
});
