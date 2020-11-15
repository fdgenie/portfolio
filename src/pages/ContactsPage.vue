<template>
  <div class="q-pa-md bg-grey-10">
    <div class="column" style="height: 100vh">
      <div class="col-3" />
      <div class="col-4 row">
        <span class="col-1" />
        <span class="col">
          <p class="text-h2 text-teal-13">
            Get in touch!
            <br />
            Available for freelance work or collaborations
          </p>
          <q-form @submit.prevent="sendEmail" class="q-mt-xl contact-form">
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
        </span>
        <span class="col-5" />
      </div>
      <div class="col" />
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactsPage",
  data() {
    return {
      to_name: "",
      from_name: "",
      message: ""
    };
  },
  methods: {
    sendEmail(e) {
      console.log(e);
      emailjs
        .sendForm(
          "service_e6fbpkh",
          "template_iv21o1b",
          e.target,
          "user_dkbfABjZxKU5dSCe9RLl4"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
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
