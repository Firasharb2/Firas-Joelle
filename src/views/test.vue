<template>
  <div
    class="slideshow-container"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <button class="music-button">Play Music</button>

    <!-- <a
      aria-label="Chat on WhatsApp"
      href=" https://wa.me/96171689712?text=I'm%20interested%20in%20your%20car%20for%20sale"
      class="whatsapp-button"
    >
      Chat on WhatsApp
    </a> -->
    <!-- Main Image Card -->
    <div class="main-image-card">
      <img :src="images[currentIndex]" class="main-image" />

      <div v-show="currentIndex === 0" class="inside" style="color: white">
        <!-- <h1>فراس وجوال</h1> -->
        <h1>firas {user.groomName} joelle</h1>
      </div>

      <div v-show="currentIndex === 1" style="color: white; font-size: 40px">
        <div class="inside">
          <blockquote>
            <p>"أُعْطِيهِمْ قَلْبًا وَاحِدًا وَطَرِيقًا وَاحِدًا"</p>
          </blockquote>

          <h4>سفر إرميا 32: 39</h4>
        </div>
      </div>
      <div v-show="currentIndex === 2" style="color: white">
        <!-- Add your content for div 3 -->
        <div class="inside">
          <h1>بحضوركم تكتمل فرحتنا</h1>
          <div class="A">
            <p>جوزيف ومرغو حرب</p>

            <p>ريمون و نوال الشالوحي</p>

            <p>يتشرفون بدعوتكم لحضور إكليل ولديهما</p>

            <h3>فراس وجوال</h3>
            <p>نهار الجمعة الواقع في ١٢ تموز ٢٠٢٤</p>
          </div>
        </div>
      </div>
      <div v-show="currentIndex === 3" style="color: white">
        <!-- Add your content for div 4 -->
        <div class="inside">
          <div class="story_slide_wrapper">
            <h1 class="title visible-title">
              <span class="hdtitle Title_Disp">الاكليل <br /> </span
              ><span class="subtitle">يليه شبك السيوف أمام مدخل الكنيسة</span>
            </h1>

            <div class="event_details">
              <div class="info-row date">
                <div class="clock icon">
                  <!-- Displaying an image -->
                  <!-- <img src="../assets/s2/clock.jpg" alt="Description of your image"> -->
                  <img src="../assets/clock.png" />
                </div>
                <div class="col info">
                  <span class="data-line-1">٢١ آب ٢٠٢٢ </span>
                  <span class="data-line-2"> ٦:٠٠ مساءً</span>
                </div>
              </div>
              <div class="info-row loc">
                <img src="../assets/location.png" />
                <div class="col info">
                  <span class="data-line-1">كنيسة القديسة مريم المجدلية</span
                  ><br />
                  <span class="data-line-2">المجدل</span>
                </div>
                <div class="col mapBtn mapBtn_1">
                  <br />
                  <!-- Button with link -->
                  <a
                    href="http://maps.google.com/maps?q=33.9678284305086,35.634797549201984"
                    target="_blank"
                    class="button"
                  >
                    <span>خريطة الموقع</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="currentIndex === 4" style="color: white">
        <!-- Add your content for div 5 -->
        <div class="inside">
          <div class="story_slide_wrapper">
            <h1 class="title visible-title">
              <span class="hdtitle Title_Disp">حفل العشاء <br /> </span
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
                  <span class="data-line-1">بعد الإكليل </span>
                  <span class="data-line-2"> ٧:٣٠ مساءً</span>
                </div>
              </div>
              <div class="info-row loc">
                <img src="../assets/location.png" />
                <div class="col info">
                  <span class="data-line-1">نادي الضباط جونية</span><br />
                  <span class="data-line-2">صربا، جونية</span>
                </div>
                <div class="col mapBtn mapBtn_1">
                  <br />
                  <!-- Button with link -->
                  <a
                    href="http://maps.google.com/maps?q=33.98535123348712,35.62196422144931"
                    target="_blank"
                    class="button"
                  >
                    <span>خريطة الموقع</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="currentIndex === 5" style="color: white">
        <!-- Add your content for div 6 -->
        <div class="inside">
          <h1 class="title visible-title">
            <span class="hdtitle Title_Disp">الهدايا</span>
          </h1>
          <p>
            حضوركم، ضحكتم وحبكم هو أثمن هدية على الإطلاق. فإن وددتم مشاركتنا
            بهدية فنحن نستقبلها على حسابنا في OMT.
          </p>
          <p>Acc#: 76125170</p>
        </div>
      </div>

      <!-- xxxxxxxxx -->
      <div v-show="currentIndex === 6" style="color: white">
        <div class="inside">
          <!-- slide -->

          <div class="story_slide_wrapper">
            <h1 class="title">حضوركم يسعدنا</h1>

            <div class="slide-content">
              <div class="form-intro-wrapper">
                <p>الرجاء تأكيد الحضور قبل ١٠ آب، ٢٠٢٢</p>
                <dd class="npersons_cont npLabel_visible">عدد المدعوين: 2</dd>
              </div>

              <div class="form-wrapper">
                <form id="rsvp-event" method="post" name="rsvp_form" action="/">
                  <div class="form-field fld-name">
                    <label for="full_name">الأسماء</label>
                    <input
                      placeholder="قدم اسمًا واحدًا أو أكثر"
                      id="full_name"
                      type="text"
                      name="full_name"
                      value=""
                    />
                  </div>
                  <div class="form-field fld-guests">
                    <label for="guests">هل ستحضر؟</label>
                    <select id="guests" name="guests">
                      <option value="">- الاختيار -</option>
                      <option value="1">نعم سأحضر</option>
                      <option value="na">لن أحضر</option>
                    </select>
                  </div>

                  <div class="form-field fld-npersons">
                    <label for="npersons">عدد القادمين</label>
                    <select id="npersons" name="npersons">
                      <option value="">- الاختيار -</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>

                  <input name="couple_name" value=" فراس وجوال" type="hidden" />
                  <input
                    id="rsvp_email"
                    type="hidden"
                    name="rsvp_email"
                    value="reinenassar14@hotmail.com"
                  />
                  <input
                    id="wed_date"
                    name="wed_date"
                    value="2022-08-21 18:00:00"
                    type="hidden"
                  />
                  <input id="nid" name="nid" value="235" type="hidden" />
                  <input
                    id="uid"
                    name="uid"
                    value="235_1707838519_64287898"
                    type="hidden"
                  />
                  <input
                    id="override_nid"
                    name="override_nid"
                    value=""
                    type="hidden"
                  />
                  <button id="submit_rsvp" type="submit">تأكيد الحضور</button>

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
    </div>
    <div class="heart"></div>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  data() {
    return {
      currentIndex: 0,
      images: [
        require("../assets/s1/a.jpg"),
        require("../assets/s1/b.jpg"),
        require("../assets/s1/c.jpg"),
        require("../assets/s1/d.jpg"),
        require("../assets/s1/e.jpg"),
        require("../assets/s1/d.jpg"),
        require("../assets/s1/b.jpg"),
      ],
      touchStartX: 0,
      touchEndX: 0,

      user: {
        groomName: "firas",
        brideName: "Joelle",
      },
    };
  },
  methods: {
    onTouchStart(event) {
      this.touchStartX = event.touches[0].clientX;
    },
    onTouchMove(event) {
      this.touchEndX = event.touches[0].clientX;
    },
    onTouchEnd() {
      const diff = this.touchEndX - this.touchStartX;
      if (diff > 0) {
        // Swipe right, decrement currentIndex
        this.currentIndex = Math.max(0, this.currentIndex - 1);
      } else if (diff < 0) {
        // Swipe left, increment currentIndex
        this.currentIndex = Math.min(
          this.currentIndex + 1,
          this.images.length - 1
        );
      }
      // Reset touch values
      this.touchStartX = 0;
      this.touchEndX = 0;
    },
  },
};
</script>

<style>
h1 {
  font-size: 60px; /* Adjust the font size to your preference */
}
h4 {
  font-size: 20px; /* Adjust the font size to your preference */
}
.slideshow-container {
  position: relative;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-image-card {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 600px;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically and horizontally */
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.inside {
  position: absolute;
  top: 50%; /* Position at the vertical center */
  left: 50%; /* Position at the horizontal center */
  transform: translate(-50%, -50%); /* Center the element */
  text-align: center; /* Center the text horizontally */
}

.slide-content {
  position: absolute;
  bottom: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

/* Style for the button */
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #6a89aa;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.slide-content {
  width: 100px;
  height: 100px;
  background-size: cover; /* Ensures the background image covers the entire div */
  background-position: center; /* Centers the background image */
  /* Add other styles for your slide content */
}

.heart {
  background-color: red;
  display: inline-block;
  height: 30px;
  width: 30px;
  position: relative;
  top: 0;
  transform: rotate(-45deg);
}

.heart::before,
.heart::after {
  content: "";
  background-color: red;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  position: absolute;
}

.heart::before {
  top: -15px;
  left: 0;
}

.heart::after {
  left: 15px;
  top: 0;
}
</style>
