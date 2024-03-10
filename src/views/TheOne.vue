<template>
  <div class="background">
    <div
      class="content"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <img
        :src="images[currentIndex]"
        class="main-image"
        style="height: 1500px"
      />
      <div
        v-show="currentTextIndex === 1"
        class="inside"
        :style="{
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }"
      ></div>
      <p class="drag"></p>

      <!-- New TExt -->

      <div v-show="currentTextIndex === 1" class="inside" style="color: white">
        <h1 style="font-size: 40px">
          {{ userNative.groomName }} {{ userNative.and }}
          {{ userNative.brideName }}
        </h1>
      </div>
      <!-- New TExt -->
      <div
        v-show="currentTextIndex === 2"
        style="color: white; font-size: 30px"
      >
        <div class="inside">
          <blockquote>
            <p style="font-size: 30px">{{ userNative.Bible.verse }}</p>
          </blockquote>

          <h4>{{ userNative.Bible.reference }}</h4>
        </div>
      </div>
      <!-- New TExt -->
      <div v-show="currentTextIndex === 3" style="color: white">
        <div class="inside">
          <h1>{{ userNative.Family.title }}</h1>
          <div class="A">
            <h3>
              {{ userNative.Family.groomParents.fatherName }}
              {{ userNative.and }}
              {{ userNative.Family.groomParents.motherName }}
              {{ userNative.Family.groomParents.familyName }}
            </h3>

            <h3>
              {{ userNative.Family.brideParents.fatherName }}
              {{ userNative.and }}
              {{ userNative.Family.brideParents.motherName }}
              {{ userNative.Family.brideParents.familyName }}
            </h3>

            <h4>{{ userNative.Family.honoredTo }}</h4>

            <h3>
              {{ userNative.groomName }} {{ userNative.and }}
              {{ userNative.brideName }}
            </h3>
            <p>{{ userNative.Family.wedDate }}</p>
          </div>
        </div>
      </div>
      <!-- New TExt -->
      <div v-show="currentTextIndex === 4" style="color: white">
        <!-- Add your content for div 4 -->
        <div class="inside">
          <div class="story_slide_wrapper">
            <h1 class="title visible-title">
              <span class="hdtitle Title_Disp"
                >{{ userNative.Ceremony.title }} <br /> </span
              ><span class="subtitle" style="font-size: 25px">
                {{ userNative.Ceremony.subTitle }}</span
              >
            </h1>

            <div class="event_details">
              <div class="info-row date">
                <div class="clock icon">
                  <!-- Displaying an image -->
                  <!-- <img src="../assets/s2/clock.jpg" alt="Description of your image"> -->
                  <img src="../assets/clock.png" />
                </div>
                <div class="col info">
                  <span class="data-line-1" style="font-size: 20px"
                    >{{ userNative.Ceremony.dateTime }}
                  </span>
                </div>
              </div>
              <div class="info-row loc">
                <img src="../assets/location.png" />
                <div class="col info">
                  <span class="data-line-1" style="font-size: 20px">
                    {{ userNative.Ceremony.churchName }}</span
                  ><br />
                  <span class="data-line-2">{{
                    userNative.Ceremony.churchLocation
                  }}</span>
                </div>
                <div class="col mapBtn mapBtn_1">
                  <br />
                  <!-- Button with link -->
                  <a
                    :href="userNative.Ceremony.locationLink"
                    target="_blank"
                    class="button"
                  >
                    <span>{{ userNative.locationButton }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- New TExt -->
      <div v-show="currentTextIndex === 5" style="color: white">
        <!-- Add your content for div 5 -->
        <div class="inside">
          <div class="story_slide_wrapper">
            <h1 class="title visible-title">
              <span class="hdtitle Title_Disp"
                >{{ userNative.Party.title }}<br /><br /> </span
              ><span class="subtitle"></span>
            </h1>

            <div class="event_details">
              <div class="info-row date">
                <div class="clock icon">
                  <!-- Displaying an image -->
                  <!-- <img src="../assets/s2/clock.jpg" alt="Description of your image"> -->
                  <img src="../assets/clock.png" />
                </div>
                <div class="col info">
                  <span class="data-line-1" style="font-size: 20px"
                    >{{ userNative.Party.datetimeinfo }}
                  </span>
                </div>
              </div>
              <div class="info-row loc">
                <img src="../assets/location.png" />
                <div class="col info">
                  <span class="data-line-1" style="font-size: 20px">
                    {{ userNative.Party.placeName }}</span
                  ><br />
                  <span class="data-line-2">
                    {{ userNative.Party.partyLocationName }}
                  </span>
                </div>
                <div class="col mapBtn mapBtn_1">
                  <br />
                  <!-- Button with link -->
                  <a
                    :href="userNative.Party.locationLink"
                    target="_blank"
                    class="button"
                  >
                    <span> {{ userNative.locationButton }}</span>
                  </a>
                  <!-- <button class="button" @click="openGoogleMaps">
                    <span>{{ userNative.locationButton }}</span>
                  </button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- New TExt -->
      <div v-show="currentTextIndex === 6" style="color: white">
        <!-- Add your content for div 6 -->
        <div class="inside">
          <h1 class="title visible-title">
            <span class="hdtitle Title_Disp">{{
              userNative.gifting.title
            }}</span>
          </h1>
          <p>
            {{ userNative.gifting.subTitle }}
          </p>
          <p>Acc#: {{ userNative.gifting.accountNumber }}</p>
        </div>
      </div>
      <!-- New TExt -->
      <div v-show="currentTextIndex === 7" style="color: white">
        <div class="inside">
          <!-- slide -->

          <div class="Attendance">
            <h1>حضوركم يسعدنا</h1>

            <div class="Attendance-content">
              <p>الرجاء تأكيد الحضور قبل ١٠ آب، ٢٠٢٢</p>
              <!-- <dd class="npersons_cont npLabel_visible">عدد المدعوين: 2</dd> -->

              <div class="form-wrapper">
                <form id="rsvp-event" method="post" name="rsvp_form" action="/">
                  <div class="form-field fld-name">
                    <h6>الأسماء</h6>
                    <label for="full_name">الأسماء</label>
                    <input placeholder="قدم اسمًا واحدًا أو أكثر" />
                  </div>

                  <div class="form-guests">
                    <label for="guests">هل ستحضر؟</label>
                    <select id="guests" name="guests">
                      <option value="">- الاختيار -</option>
                      <option value="1">نعم سأحضر</option>
                      <option value="na">لن أحضر</option>
                    </select>
                  </div>

                  <div class="nbpersons">
                    <label for="npersons">عدد القادمين</label>
                    <select id="npersons" name="npersons">
                      <option value="">- الاختيار -</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="1">3</option>
                      <option value="2">4</option>
                    </select>
                  </div>

                  <button id="submit_rsvp" type="submit">تأكيد الحضور</button>
                  <!-- <button @click="sendMessage">Send WhatsApp Message</button> -->
                  <button @click="sendWhatsAppMessage">
                    Confirm via WhatsApp
                  </button>
                  <div class="form-lock-screen"></div>
                </form>

                <div class="ajax_success_message_wrapper">
                  <p>
                    شكراً لتأكيد حضوركم!<br />
                    نراكم قريباً
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- New TExt -->

      <!-- Add more content inside divs for other slides -->
    </div>
    <button class="start-button" @click="startSlideshow" v-if="!timer">
      Tap to Start
    </button>
  </div>
  <!-- musicbutton -->
  <div>
    <img
      v-if="!isPlaying"
      src="../assets/musiclogo.png"
      alt="Play Button"
      @touchmove="toggleMusic"
    />
    <img
      v-else
      src="../assets/musiclogo.png"
      alt="Pause Button"
      @click="toggleMusic"
    />
    <!-- <img
      :src="isPlaying ? '/pause_button.png' : '/play_button.png'"
      alt="Play/Pause Button"
      @click="toggleMusic"
    /> -->
  </div>
</template>

<script>
import audiox from "../assets/Ed Sheeran - Perfect (Lyrics).mp3";

export default {
  name: "HomeView",
  data() {
    return {
      currentIndex: 0,
      currentTextIndex: 0,
      audio: new Audio(audiox),
      isPlaying: false,
      images: [
        require("../assets/s2/2.jpg"),
        require("../assets/s2/3.jpg"),
        require("../assets/s2/4.jpg"),
        require("../assets/s2/5.jpg"),
        require("../assets/s2/6.jpg"),
        require("../assets/s2/7.jpg"),
        require("../assets/s2/8.jpg"),
        require("../assets/s2/4.jpg"),
      ],
      touchStartX: 0,
      touchEndX: 0,
      timer: null,

      userNative: {
        groomName: "فراس",
        brideName: "جوال",
        and: "و",

        Bible: {
          verse: "أُعْطِيهِمْ قَلْبًا وَاحِدًا وَطَرِيقًا وَاحِدًا",
          reference: "سفر إرميا 32: 39",
        },
        Family: {
          title: "بحضوركم تكتمل فرحتنا",
          groomParents: {
            fatherName: "جوزيف",
            motherName: "مرغو",
            familyName: "حرب",
          },
          brideParents: {
            fatherName: "ريمون",
            motherName: "نوال",
            familyName: "الشالوحي",
          },
          honoredTo: "يتشرفون بدعوتكم لحضور إكليل ولديهما",
          wedDate: "نهار الجمعة الواقع في ١٢ تموز ٢٠٢٤",
        },

        Ceremony: {
          title: "الاكليل",
          subTitle: "يليه شبك السيوف أمام مدخل الكنيسة",
          dateTime: "١٢ تموز ٢٠٢٤ ٦:٠٠ مساءً ",
          churchName: "كنيسة القديسة مريم المجدلية",
          churchLocation: "المجدل",
          locationLink:
            "https://www.google.com/maps/place/Saint+Maria+Magdalena+church/@34.2537314,35.7973507,17.34z/data=!4m15!1m8!3m7!1s0x1521fdaf959e7a8f:0x4ea3aa28725028c2!2z2YXYrNiv2YQ!3b1!8m2!3d34.252387!4d35.793724!16s%2Fm%2F0gw_rfb!3m5!1s0x1521fdb1c6b480b1:0x1742f3316f60327!8m2!3d34.2536743!4d35.7963548!16s%2Fg%2F11csr_mkjz?entry=ttu",
        },
        Party: {
          title: "حفل العشاء",
          datetimeinfo: " بعد الإكليل  ٦:٠٠ مساءً ",
          placeName: "نادي الضباط جونية",
          partyLocationName: "صربا، جونية",
          locationLink:
            "http://maps.google.com/maps?q=33.98535123348712,35.62196422144931",
        },
        locationButton: "خريطة الموقع",
        gifting: {
          title: "الهدايا",
          subTitle:
            "حضوركم، ضحكتم وحبكم هو أثمن هدية على الإطلاق. فإن وددتم مشاركتنا بهدية فنحن نستقبلها على حسابنا في OMT.",
          accountNumber: "76128964",
        },
      },
    };
  },

  methods: {
    startSlideshow() {
      // Access the element with the class "swipe"
      const swipeElement = document.querySelector(".drag");
      // Set its inner HTML to the value of the message property
      swipeElement.innerHTML = "← Swipe →";
      this.audio.play();
      this.currentTextIndex = 1;
      this.timer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 2000); // Change slide every 1.5 seconds

      // Touch event handlers
      const onTouchStart = (event) => {
        // Check if the touch event is on the link
        if (!event.target.closest("a.button")) {
          this.touchStartX = event.touches[0].clientX;
        }
      };

      const onTouchMove = (event) => {
        // Check if the touch event is on the link
        if (!event.target.closest("a.button")) {
          this.touchEndX = event.touches[0].clientX;
        }
      };

      const onTouchEnd = () => {
        const diff = this.touchEndX - this.touchStartX;
        if (diff > 0) {
          // Swipe right, decrement currentIndex
          this.currentTextIndex = Math.max(0, this.currentTextIndex - 1);
        } else if (diff < 0) {
          // Swipe left, increment currentIndex
          this.currentTextIndex = Math.min(
            this.currentTextIndex + 1,
            this.images.length - 1
          );
        }
        // Reset touch values
        this.touchStartX = 0;
        this.touchEndX = 0;
      };

      // Assign touch event handlers
      document.addEventListener("touchstart", onTouchStart);
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);

      // Clean up touch event listeners when slideshow stops
      const stopSlideshow = () => {
        clearInterval(this.timer);
        this.timer = null;
        document.removeEventListener("touchstart", onTouchStart);
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
      };

      // Call stopSlideshow when the component is about to be unmounted
      this.$options.beforeUnmount = stopSlideshow;
    },

    // stopSlideshow() {
    //   clearInterval(this.timer);
    //   this.timer = null; // Reset timer to null
    // },
  },
  beforeUnmount() {
    clearInterval(this.timer); // Clear the timer when the component is destroyed
  },
  stopPropagation(event) {
    event.stopPropagation();
  },

  toggleMusic() {
    if (this.isPlaying) {
      this.audio.pause(); // Pause the music
    } else {
      this.audio.play(); // Resume playing the music
    }
    this.isPlaying = !this.isPlaying; // Toggle isPlaying state
  },

  sendWhatsAppMessage() {
    const phoneNumber = "96176188327"; // Replace with the recipient's phone number
    const message = encodeURIComponent("Hello, this is a pre-filled message!"); // Your pre-filled message

    // Create the WhatsApp message link
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
  },
};
</script>

<style>
.content h1 {
  font-size: 36px; /* Adjust the font size as needed */
}

@media screen and (max-width: 768px) {
  /* Adjustments for screens up to 768px wide */
  .main-image {
    max-width: 100%;
    max-height: 100%; /* Reduce the image size */
  }
  .start-button {
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff336600;
    color: #ffffff;
    border: 2px solid #ffffff; /* Border added */
    border-radius: 50%; /* Make it circular */
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    width: 100px; /* Example width, adjust as needed */
    height: 100px; /* Example height, adjust as needed */
  }
  .background {
    /* background-color: #e72121;
  padding: 1px;
  text-align: center;
  height: 100vh; */
    background-color: #21e777;
    padding: 1px;
    text-align: center;
    height: 100vh;
    display: flex; /* Use flexbox to center content vertically and horizontally */
    justify-content: center;
    align-items: center;
  }

  .content {
    height: 100%; /* Set the height to 100% of its parent element (background) */
    width: 100%; /* Set the width to 100% of its parent element (background) */
    position: relative; /* Ensure relative positioning */
  }

  .image-container {
    position: relative; /* Make image container position relative */
    max-width: 100%; /* Set maximum width to prevent overflow */
    max-height: 100vh; /* Set maximum height to prevent overflow and fit within viewport */
  }

  .main-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    margin: auto;
    object-fit: contain; /* This property ensures that the image maintains its aspect ratio while filling the available space */
  }
  .inside {
    position: absolute;
    top: 50%; /* Position at the vertical center */
    left: 50%; /* Position at the horizontal center */
    transform: translate(-50%, -50%); /* Center the element */
    text-align: center; /* Center the text horizontally */
    width: 80%; /* Adjust width as needed */
  }
}
@media screen and (max-width: 480px) {
  /* Adjustments for screens up to 480px wide (typical phone screens) */
  .main-image {
    max-width: 100%;
    max-height: 100%; /* Further reduce the image size for smaller screens */
  }
  .start-button {
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff336600;
    color: #ffffff;
    border: 2px solid #ffffff; /* Border added */
    border-radius: 50%; /* Make it circular */
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    width: 100px; /* Example width, adjust as needed */
    height: 100px; /* Example height, adjust as needed */
  }
  .background {
    background-color: #81e721; /* Change background color to green */
    padding: 1px;
    text-align: center;
    height: 100vh;
    display: flex; /* Use flexbox to center content vertically and horizontally */
    justify-content: center;
    align-items: center;
  }

  .content {
    height: 100%; /* Set the height to 100% of its parent element (background) */
    width: 100%; /* Set the width to 100% of its parent element (background) */
    position: relative; /* Ensure relative positioning */
  }

  .image-container {
    position: relative; /* Make image container position relative */
    max-width: 100%; /* Set maximum width to prevent overflow */
    max-height: 100vh; /* Set maximum height to prevent overflow and fit within viewport */
  }

  .main-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    margin: auto;
    object-fit: contain; /* This property ensures that the image maintains its aspect ratio while filling the available space */
  }
  .inside {
    position: absolute;
    top: 50%; /* Position at the vertical center */
    left: 50%; /* Position at the horizontal center */
    transform: translate(-50%, -50%); /* Center the element */
    text-align: center; /* Center the text horizontally */
    width: 80%; /* Adjust width as needed */
  }
}

.start-button {
  position: absolute;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff336600;
  color: #ffffff;
  border: 2px solid #ffffff; /* Border added */
  border-radius: 50%; /* Make it circular */
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100px; /* Example width, adjust as needed */
  height: 100px; /* Example height, adjust as needed */
}
.background {
  /* background-color: #e72121;
  padding: 1px;
  text-align: center;
  height: 100vh; */
  background-color: #f2f1f1;
  padding: 1px;
  text-align: center;
  height: 100vh;
  display: flex; /* Use flexbox to center content vertically and horizontally */
  justify-content: center;
  align-items: center;
}

.content {
  height: 100%; /* Set the height to 100% of its parent element (background) */
  width: 100%; /* Set the width to 100% of its parent element (background) */
  position: relative; /* Ensure relative positioning */
}

/* .image-container {
  position: relative;
  max-width: 600px;
  max-height: 2000px;
  margin: auto;
} */
.image-container {
  position: relative; /* Make image container position relative */
  max-width: 100%; /* Set maximum width to prevent overflow */
  max-height: 100vh; /* Set maximum height to prevent overflow and fit within viewport */
}

.main-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  margin: auto;
  object-fit: contain; /* This property ensures that the image maintains its aspect ratio while filling the available space */
}
.inside {
  position: absolute;
  top: 50%; /* Position at the vertical center */
  left: 50%; /* Position at the horizontal center */
  transform: translate(-50%, -50%); /* Center the element */
  text-align: center; /* Center the text horizontally */
  width: 80%; /* Adjust width as needed */
}
.drag {
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: 0;
  width: 100px; /* Example width, adjust as needed */
  height: 100px; /* Example height, adjust as needed */
}
</style>
