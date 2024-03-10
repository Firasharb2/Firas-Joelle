<template>
  <div>
    <button @click="togglePlay">
      {{ isPlaying ? "Pause" : "Play" }}
    </button>
    <audio ref="audioPlayer" :src="audioSrc"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      audioSrc: "../assets/m.mp3", // Update with your audio file path
    };
  },
  methods: {
    togglePlay() {
      const audio = this.$refs.audioPlayer;

      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }

      this.isPlaying = !this.isPlaying;
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
