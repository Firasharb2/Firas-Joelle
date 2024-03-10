<template>
  <div class="slideshow-container">
    <!-- Main Image Card -->
    <div class="main-image-card">
      <img :src="images[currentIndex]" class="main-image" />
    </div>

    <!-- List of Smaller Images -->
    <div
      class="small-images"
      @mouseenter="stopAnimation"
      @mouseleave="startAnimation"
    >
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        @click="changeImage(index)"
        class="small-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      images: [
        // require("../assets/s2/2.jpg"),
        // require("../assets/s2/3.jpg"),
        // require("../assets/s2/4.jpg"),
        // require("../assets/s2/5.jpg"),
        // require("../assets/s2/6.jpg"),
        // require("../assets/s2/7.jpg"),
        // require("../assets/s2/8.jpg"),
        require("../assets/s1/a.jpg"),
        require("../assets/s1/b.jpg"),
        require("../assets/s1/c.jpg"),
        require("../assets/s1/d.jpg"),
        require("../assets/s1/e.jpg"),
      ],
      currentIndex: 0,
      animationInterval: null, // Store the animation interval reference
    };
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      this.animationInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 1500); // Change image every 1.5 seconds
    },
    stopAnimation() {
      clearInterval(this.animationInterval);
    },
    changeImage(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.slideshow-container {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* Relative positioning for the container */
}

.main-image-card {
  width: 1000px;
  /* Adjust the width of the main image card as needed */
  height: 600px;
  /* Adjust the height of the main image card as needed */
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  /* Relative positioning for the main image card */
  z-index: 1;
  /* Set higher z-index to display on top */
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
}

.small-images {
  position: absolute;
  top: 50%;
  /* Position the small images at the mid-height of the container */
  transform: translateY(-50%);
  /* Adjust to center the small images vertically */
  left: 0;
  /* Start small images from the left of the container */
  width: 200%;
  /* Double the width to ensure continuous movement */
  overflow: hidden;
  /* Hide the overflow */
  animation: moveTrain 10s linear infinite alternate;
  /* Adjust the animation duration as needed */
  z-index: 0;
  /* Set lower z-index to display behind main image */
}

@keyframes moveTrain {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100% + 100vw));
    /* Move the small images by the screen width */
  }
}

.small-image {
  width: 100px;
  /* Adjust the width of the small images as needed */
  height: 100px;
  /* Adjust the height of the small images as needed */
  margin: 0 10px;
  /* Adjust the margin between the small images as needed */
  cursor: pointer;
}
</style>
