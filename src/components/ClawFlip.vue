<script setup>
import { ref } from 'vue'

const coin = ref('heads')

const isAnimating = ref(false)

const flipCoin = () => {
  // Reset animation state
  isAnimating.value = false

  // Trigger reactivity to restart animation
  setTimeout(() => {
    isAnimating.value = true
    const randomNumber = Math.random()
    if (randomNumber < 0.5) {
      coin.value = 'heads'
    } else {
      coin.value = 'tails'
    }
  }, 0)
}

</script>
<template>
  <h1>Claw Flip</h1>

  <div class="coinContainer" @click="flipCoin">
    <img
      v-if="coin === 'heads'"
      :class="['coin', 'animate__animated', 'animate__duration-5', { animate__flip: isAnimating }]"
      src="../assets/heads7.png"
      alt="Heads"
    />
    <img
      v-else
      :class="['coin', 'animate__animated', 'animate__duration-5', { animate__flip: isAnimating }]"
      src="../assets/tails7.png"
      alt="Tails"
    />
  </div>
  <button @click="flipCoin" class="coinButton">
    <p class="coinButton-text">May the Claw decide!</p>
  </button>
</template>

<style scoped>
.coinContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.coinContainer :focus {
  outline: none;
}


.coin {
  position: relative;
  width: 300px;
  height: 300px;
  transition: transform 0.5s;
}

.coin :focus {
  outline: none;
}

.coinButton {
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #6270d7;

}
.coinButton-text {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  font-family: "Bangers", system-ui;
}
</style>
