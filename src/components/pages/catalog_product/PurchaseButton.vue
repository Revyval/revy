<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const hoveredPromo = ref(null)

function toggleModal() {
  showModal.value = !showModal.value
}

function setHoveredPromo(promo) {
  hoveredPromo.value = promo
}
</script>

<template>
  <div class="contact-container">
    <button @click="toggleModal" class="purchase-button">Contact for Purchase</button>

    <div v-if="showModal" class="modal-overlay" @click="toggleModal">
      <div class="modal-content" @click.stop>
        <h2>Ready to grab your favorite piece?</h2>
        <p>Reach out through any of these:</p>

        <ul>
          <li>Email: revyval.info@gmail.com</li>
          <li>Instagram: revyval.wear</li>
          <li>WhatsApp: +47 465 13 187</li>
        </ul>

        <p>Every purchase comes with a gift: a keychain and sticker as a thank-you!
          Plus, you have a chance to earn exclusive discounts:</p>

        <div class="promo-buttons">
          <div class="promo-container">
            <button
                class="promo-button golden"
                @mouseenter="setHoveredPromo('golden')"
                @mouseleave="setHoveredPromo(null)"
            >
              🔑 Unlock the Golden Opportunity!
            </button>

            <div v-if="hoveredPromo === 'golden'" class="promo-popup">
              <p>
                Every order comes with a gift, but one random lucky customer will receive a unique Golden Keychain!
              </p>
              <p>
              This special keychain unlocks a custom-designed piece of clothing crafted to express any frustration, critique, or message you’d like to share with the world . Think of it as your personal way to speak out, beautifully.
              </p>
              <p>
              Will you be the one to unlock it?
              </p>
            </div>
          </div>

          <div class="promo-container">
            <button
                class="promo-button special"
                @mouseenter="setHoveredPromo('firstDrop')"
                @mouseleave="setHoveredPromo(null)"
            >
              💣 Special First Drop Discount
            </button>

            <div v-if="hoveredPromo === 'firstDrop'" class="promo-popup">
              <p>
              Join our Wildlife Impression Challenge to celebrate our launch!
              </p>

              <p>
              Record your best animal impression as a voice note.
              </p>
              <p>
              Send it to us on Instagram DMs or WhatsApp.
              </p>
              <p>
              Score above 5/10 and earn a 15% discount on your purchase! 😉
              </p>
              <p>
              Don’t miss this chance to save and show off your skills. Let’s hear those impressions! 👹🎯
              </p>
            </div>
          </div>
        </div>

        <button @click="toggleModal" class="close-button">Close</button>
      </div>
    </div>
  </div>
</template>

<style>
.contact-container {
  position: relative;
}

.purchase-button {
  background-color: var(--color-header);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  height: 30px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.purchase-button:hover {
  background-color: #0056b3;
}

.purchase-button:hover {
  background-color: var(--background-soft);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: black;
}

.modal-content {
  background: white;
  padding: 24px;
  border-radius: 5px;
  text-align: left;
  max-width: 90%;
  width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-content h2 {
  margin: 0 0 16px;
  font-size: 1.25rem;
  font-weight: bold;
}

.modal-content ul {
  margin: 16px 0;
  padding-left: 20px;
}

.modal-content li {
  margin-bottom: 8px;
}

.promo-buttons {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.promo-container {
  position: relative;
}

.promo-button {
  width: 100%;
  text-align: left;
  padding: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: black !important;
}

.promo-button.golden {
  background-color: #fff8e1;
}

.promo-button.golden:hover {
  background-color: #ffecb3;
}

.promo-button.special {
  background-color: #f3e5f5;
}

.promo-button.special:hover {
  background-color: #e1bee7;
}

.promo-container {
  position: relative;
}

.promo-popup {
  position: absolute;
  top: 100%;
  left: 0;
  transform: translate(0, calc(-100% - 49px)); /* Centers it and adjusts for any height difference */
  background: #c0c0c0;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  z-index: 10;
}


.promo-popup p,
.promo-popup ul,
.promo-popup li {
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: justify;
}

.close-button {
  margin-top: 20px;
  padding: 8px 16px;
  background-color: var(--color-header);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.close-button:hover {
  background-color: var(--background-soft);
}
</style>
