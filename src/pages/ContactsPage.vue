<template>
  <q-page class="q-pa-md bg-grey-10">
    <div v-if="!$q.platform.is.mobile" class="column" style="height: calc(100vh - 50px);" >
      <div class="col-3" />
      <div class="col-4 row">
        <span class="col-1" />
        <span class="col">
          <p class="text-h2 text-teal-13">
            Get in touch!
          </p>
          <p class="text-h5 text-grey-4">
            Available for freelance work or collaborations
          </p>
          <q-form
            v-if="!loading"
            @submit.prevent="sendEmail"
            class="q-mt-xl contact-form"
          >
            <span class="row">
              <span class="col q-mr-md">
                <q-input
                  outlined
                  label="Name"
                  label-color="white"
                  color="white"
                  dark
                  type="text"
                  name="user_name"
                  v-model="to_name"
                />
              </span>
              <span class="col">
                <q-input
                  outlined
                  label="E-Mail"
                  label-color="white"
                  color="white"
                  dark
                  type="email"
                  name="user_email"
                  v-model="from_name"
                />
              </span>
            </span>
            <span class="row q-mt-md">
              <span class="col">
                <q-input
                  type="textarea"
                  outlined
                  label="Message"
                  label-color="white"
                  color="white"
                  dark
                  name="message"
                  v-model="message"
                />
              </span>
            </span>
            <span class="row q-mt-md">
              <span class="col">
                <q-btn type="submit" value="send" color="teal-13">
                  Submit
                </q-btn>
              </span>
            </span>
          </q-form>
          <span v-else class="text-h5 text-grey-4">
            <span v-if="!sentMessage">
              <q-icon name="mdi-loading mdi-spin" class="q-mr-sm" />
              Sending Message...
            </span>
            <span v-else>
              <q-icon name="mdi-check-circle-outline" />
              Your message has been sent!
            </span>
          </span>
        </span>
        <span class="col-5" />
      </div>
      <div class="col" />
    </div>
    <div v-else class="column" style="height: calc(100vh - 50px);">
      <div class="col-1" />
      <div class="col-4 row">
        <span class="col">
          <p class="text-h4 text-teal-13">
            Get in touch!
          </p>
          <p class="text-h6 text-grey-4">
            Available for freelance work or collaborations
          </p>
          <q-form
            v-if="!loading"
            @submit.prevent="sendEmail"
            class="q-mt-xl contact-form"
          >
            <span class="row">
              <span class="col q-mr-md">
                <q-input
                  outlined
                  label="Name"
                  label-color="white"
                  color="white"
                  dark
                  type="text"
                  name="user_name"
                  v-model="to_name"
                />
              </span>
              <span class="col">
                <q-input
                  outlined
                  label="E-Mail"
                  label-color="white"
                  color="white"
                  dark
                  type="email"
                  name="user_email"
                  v-model="from_name"
                />
              </span>
            </span>
            <span class="row q-mt-md">
              <span class="col">
                <q-input
                  type="textarea"
                  outlined
                  label="Message"
                  label-color="white"
                  color="white"
                  dark
                  name="message"
                  v-model="message"
                />
              </span>
            </span>
            <span class="row q-mt-md">
              <span class="col">
                <q-btn type="submit" value="send" color="teal-13">
                  Submit
                </q-btn>
              </span>
            </span>
          </q-form>
          <span v-else class="text-h5 text-grey-4">
            <span v-if="!sentMessage">
              <q-icon name="mdi-loading mdi-spin" class="q-mr-sm" />
              Sending Message...
            </span>
            <span v-else>
              <q-icon name="mdi-check-circle-outline" />
              Your message has been sent!
            </span>
          </span>
        </span>
      </div>
      <div class="col" />
    </div>
  </q-page>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactsPage",
  data() {
    return {
      to_name: "",
      from_name: "",
      message: "",
      loading: false,
      sentMessage: false
    };
  },
  methods: {
    sendEmail(e) {
      this.loading = true;

      let test = {
        to_name: this.to_name,
        from_name: this.from_name,
        message: this.message
      };

      emailjs
        .send(
          "service_e6fbpkh",
          "template_iv21o1b",
          test,
          "user_dkbfABjZxKU5dSCe9RLl4"
        )
        .then(
          result => {
            this.to_name = "";
            this.from_name = "";
            this.message = "";
            this.sentMessage = true;

            setTimeout(() => {
              this.sentMessage = false;
              this.loading = false;
            }, 4000);

            this.$store.dispatch("user/saveFavoriteClass", {
              name: this.classHero.index,
              url: this.classHero.url
            });
          },
          error => {
            console.log("FAILED...", error);
          }
        );
    }
  }
};
</script>

<style></style>
