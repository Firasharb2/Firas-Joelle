<template>
  <!-- xxxxxxxxxxxxxxxxxxxxxxxx
   xxxxxxxxxxxxxxxxxxxxxxxx -->
  <!-- <div class="bar"></div> -->
  <div class="firas">
    <!-- xxxxxxxxxxxxxxx -->
    <div class="Description">
      <!-- 
    <div class="logopic1">
      <img alt="Vue logo" src="../assets/newLogo.png" class="logo1" />
    </div> -->

      <div class="logopic">
        <img alt="Vue logo" src="../assets/logoNObackground.png" class="logo" />
      </div>

      <!-- wwwwwwwwwwwwwww -->
      <!-- <div class="image-container">
    <img src="../assets/i.jpg" alt="Image" class="image" />
  </div> -->
      <div class="slideshow-container">
        <!-- Main Image Card -->
        <div class="main-image-card">
          <img :src="images[currentIndex]" class="main-image" />
        </div>

        <!-- List of Smaller Images -->
        <div class="small-images">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            @click="changeImage(index)"
            class="small-image"
          />
        </div>
      </div>
      <!-- wwwwwwwwww -->
      <div class="wrapper">
        <!-- <h1 class="txt-slogan">Simplify Your Invitations</h1> -->
        <div class="txt-desc">
          <p>
            "Welcome to Heavenly Vows, where we craft elegant digital wedding
            invitations tailored to your unique love story."
          </p>

          <p>
            Our designs are timeless, personalized, and created with grace and
            sophistication.
          </p>
          <p>
            Let us illuminate your journey to 'I do' with the perfect digital
            ambiance.
          </p>

          <p>
            Save time, money, and trees with our eco-friendly solution. No need
            for signups or app downloads.
          </p>
          <br />
          <p>Contact us and we will create your Heavenly Vows e-card.</p>
        </div>
      </div>
    </div>

    <!-- <div class="business-card">
        <div class="contact-info">
            <div class="icon phone-icon"></div>
            <span>00961 76 188327</span>
        </div>
        <div class="contact-info">
            <div class="icon email-icon"></div>
            <span>HeavenlyVows@cards.com</span>
        </div>
    </div> -->

    <!-- xxxxxxxxxxxxxxxxxxxxxxxx
   xxxxxxxxxxxxxxxxxxxxxxxx -->
    <br /><br />
    <div class="business-card">
      <div class="contact-info">
        <div
          class="icon phone-icon"
          @mouseover="handleHover('phone')"
          @click="handleClick('phone')"
        ></div>
        <span>00961 76 188327</span>
      </div>
      <div class="contact-info">
        <div
          class="icon email-icon"
          @mouseover="handleHover('email')"
          @click="handleClick('email')"
        ></div>
        <span>HeavenlyVows@cards.com</span>
      </div>
    </div>
    <br />
    <!-- xxxxxxxxxxxxxxxxxxxxxxxx
   xxxxxxxxxxxxxxxxxxxxxxxx -->

    <div class="container">
      <div class="phone-mockup">
        <!-- This would typically be an image of a phone, 
    with a screen area where you could overlay content -->

        <div class="screen">
          <!-- Screen content goes here -->
          <img src="../assets/wed.jpg" alt="Image" class="image" />
        </div>
      </div>
      <div class="content">
        <h1>Your wedding invitation exudes sheer magnificence!</h1>
        <p>
          Engage effortlessly with your wedding guests, regardless of their
          location.
        </p>
        <p>
          Online invitations ensure prompt RSVPs, granting you valuable time to
          concentrate on wedding arrangements.
        </p>
        <button>Learn more</button>
      </div>
    </div>

    <!-- xxxxxxxxxxxxxxxxxxxxxxxx
   xxxxxxxxxxxxxxxxxxxxxxxx -->

    <div class="container">
      <div class="content">
        <h1>Sending out party invitations has never been simpler!</h1>
        <p>
          Effortlessly connect with your loved ones and invite them to join in
          celebrating special occasions.
        </p>
        <p>
          With online invitations, you can easily manage your birthday party
          budget, ensuring a memorable event without overspending.
        </p>
        <button>Learn more</button>
      </div>
      <div class="phone-mockup">
        <!-- This would typically be an image of a phone, 
    with a screen area where you could overlay content -->
        <div class="screen">
          <!-- Screen content goes here -->
        </div>
      </div>
    </div>

    <!-- xxxxxxxxxxxxxxxxxxxxxxxx
   xxxxxxxxxxxxxxxxxxxxxxxx -->

    <div class="image-container">
      <img src="../assets/wed.jpg" alt="Image" class="image" />
    </div>

    <!-- xxxxxxxxxxxxxxxxxxxxxxxx
   xxxxxxxxxxxxxxxxxxxxxxxx -->

    <div class="social-media">
      <p>Follow us</p>
      <a href="https://facebook.com" target="_blank"
        ><i class="fab fa-facebook"></i
      ></a>
      <a
        href="https://www.instagram.com/firas_harb18?igsh=d3Q5b3czbWJjeHRs&utm_source=qr"
        target="_blank"
        ><i class="fab fa-instagram"></i
      ></a>
    </div>
    <!-- xxxxxxxxxxxxxxxxxxxxxxxx
   xxxxxxxxxxxxxxxxxxxxxxxx -->
  </div>
</template>

<style scoped>
.firas {
  background-color: rgb(79, 71, 79);
}
.wrapper2 {
  background-image: url("../assets/wed.jpg"); /* Set the image as background */
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
  padding: 20px; /* Add padding to the content */
  width: 100%;
  height: 600px;
}

.txt-slogan2,
.txt-desc2 {
  color: white; /* Set the text color to white */
}

/* Define the Bayet Script font */
/* @font-face {
  font-family: 'Bayet Script';
  src: url('/path/to/bayet-script.woff2') format('woff2'), /* Change the path to your font file */
/*      url('/path/to/bayet-script.woff') format('woff'); /* Change the path to your font file */
/*} 
*/
/* Apply the Bayet Script font to the h6 element
.bayet-script {
  font-family: 'Bayet Script', cursive; /* Specify the font family 
  font-style: italic; /* Apply italic style */
/*font-size: 50px;  Set the font size 
} */

.bar {
  /* background-color: rgb(237, 182, 117); */
  /* background-color: rgb(220, 155, 71); */
  background-color: rgb(112, 48, 239);
  color: white;
  font-family: Arial, sans-serif;
  padding: 20px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logopic {
  /* Set a specific height for the container */
  height: 400px;
  /* Adjust the height as per your requirement */
  /* Ensure the container takes the full width of its parent */
  width: 100%;
  background-color: rgb(79, 71, 79);
  /* Ensure the image does not exceed the container's dimensions */
  overflow: hidden;
}

.logo {
  /* Set the width to auto to maintain aspect ratio */
  width: 800;
  /* Set the maximum height to 200px */
  max-height: 400px;
  /* Center the image horizontally within its container */
  display: block;
  margin: auto;
}

.logopic1 {
  /* Set a specific height for the container */
  height: 400px;
  /* Adjust the height as per your requirement */
  /* Ensure the container takes the full width of its parent */
  width: 100%;
  background-color: rgb(49, 96, 90);

  /* Ensure the image does not exceed the container's rgb(49, 96, 90) dimensions    rgb(88, 99, 104)*/
  overflow: hidden;
}

.logo1 {
  /* Set the width to auto to maintain aspect ratio */
  width: auto;
  /* Set the maximum height to 200px */
  max-height: 400px;
  /* Center the image horizontally within its container */
  display: block;
  margin: auto;
}

.wrapper {
  background-color: rgb(79, 71, 79);

  color: rgb(205, 163, 73);
}

/* color: rgb(212, 153, 63); */
.image-container {
  position: relative;
  width: 100%;
  /* Make the image container span the full width */
  max-width: 100%;
  /* Set maximum width to ensure it doesn't exceed the screen width */
}

.business-card {
  background-color: rgb(205, 163, 73);
  color: white;
  font-family: Arial, sans-serif;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.icon {
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: contain;
}

/* .phone-icon {
        background-image: url('@/assets/whatsapp.png'); }/* Replace with your phone icon image path */

/* .email-icon {
        background-image: url('@/assets/mail.png');} /* Replace with your email icon image path */

/* Add your CSS for responsiveness here */
.phone-icon {
  background-image: url("@/assets/whatsapp.png");
  /* Replace with your phone icon image path */
}

.email-icon {
  background-image: url("@/assets/mail.png");
  /* Replace with your email icon image path */
}

/* Add responsive CSS styles here */
.phone-icon:hover,
.email-icon:hover {
  /* Add your responsive CSS styles here */
  background-color: aquamarine;
}

.phone-icon:active,
.email-icon:active {
  background-color: rgb(146, 127, 255);
}

.contact-info {
  display: flex;
  align-items: center;
  margin: 0 10px;
}

span {
  margin-left: 10px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-mockup {
  /* Placeholder for phone mockup image */
  width: 200px;
  height: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  margin-right: 30px;
  border-radius: 20px;
  padding: 20px;
}

.screen {
  width: 100%;
  height: 80%;
  background: #000;
  /* Simulating the phone's screen  */
}

.content h1 {
  color: #27ae60;
  /* Dark green color */
  font-size: 1.5em;
}

.content p {
  color: rgb(205, 163, 73);
  /* Dark grey color */
  line-height: 1.6;
}

button {
  background: rgb(205, 163, 73);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

button:hover {
  background: rgb(251, 204, 52);
}

.image {
  width: 100%;
  height: auto;
}

.image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.7);
  /* Adjust the background color and opacity */
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.social-media {
  text-align: center;
}

.social-media a {
  margin: 0 10px;
  font-size: 50px;
  /* Adjust size as needed */
  color: #000;
  /* Adjust color as needed */
  text-decoration: none;
}

.social-media a:hover {
  opacity: 0.7;
  /* Adjust hover effect as needed */
}

.social-media p {
  margin-bottom: 20px;
  font-size: 40px;
  /* Adjust size as needed */
  font-weight: bold;
}
.h1 {
  color: rgb(195, 146, 46);
}

/* slideshow */
.slideshow-container {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-image-card {
  width: 10000; /* Adjust the width of the main image card as needed */
  height: 600px; /* Adjust the height of the main image card as needed */
  overflow: hidden;
  border-radius: 5px;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
}

.small-images {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Adjust the margin as needed */
}

.small-image {
  width: 100px; /* Adjust the width of the small images as needed */
  height: 100px; /* Adjust the height of the small images as needed */
  margin: 10px; /* Adjust the margin between the small images as needed */
  cursor: pointer;
  transition: opacity 0.5s ease;
}

.small-image:hover {
  opacity: 0.7;
}

.main-image-card .main-image.active {
  opacity: 1;
}
/* slideshow */
/* Media queries for responsiveness */
@media only screen and (max-width: 768px) {
  .content h1 {
    font-size: 28px; /* Adjust the font size for smaller screens */
  }
}

@media only screen and (max-width: 480px) {
  .content h1 {
    font-size: 24px; /* Adjust the font size for smaller screens */
  }
}
</style>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      text: "Heavenly Vows Where Every Detail Sparkles with Love",
      images: [
        require("../assets/s1/a.jpg"),
        require("../assets/s1/b.jpg"),
        require("../assets/s1/c.jpg"),
        require("../assets/s1/d.jpg"),
        require("../assets/s1/e.jpg"),
        // require("../assets/s2/2.jpg"),
        // require("../assets/s2/3.jpg"),
        // require("../assets/s2/4.jpg"),
        // require("../assets/s2/5.jpg"),
        // require("../assets/s2/6.jpg"),
        // require("../assets/s2/7.jpg"),
        // require("../assets/s2/8.jpg"),
      ],
      currentIndex: 0,
    };
  },
  mounted() {
    this.startSlideshow();
  },

  methods: {
    startSlideshow() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 1500); // Change image every 3 seconds
    },
    // handleHover(iconType) {
    // // Apply CSS styles for responsiveness on hover
    // if (iconType === 'phone') {
    //   // Example: Change background color when hovering over the phone icon
    //   document.querySelector('.phone-icon').style.backgroundColor = 'lightblue';
    // } else if (iconType === 'email') {
    //   // Example: Change font color when hovering over the email icon
    //   document.querySelector('.email-icon').style.color = 'red';
    // } },

    handleClick(iconType) {
      // Redirect to the provided link based on the icon clicked
      if (iconType === "phone") {
        window.location.href = "https://wa.me/96176188327";
      } else if (iconType === "email") {
        window.location.href =
          "https://www.google.com/q/?q=for++cssbayet+script+font";
      }
    },
  },
};
</script>
