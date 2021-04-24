<template>
  <q-page class="q-pa-md bg-grey-10">
    <div class="center-left-text">
      <p :class="$q.screen.gt.sm ? 'text-h2' : 'text-h4'" class="text-teal-13">
        Get in touch!
      </p>
      <p class="text-h5 text-grey-4">
        Available for freelance work or collaborations
      </p>
      <q-form
        v-if="!loading"
        @submit.prevent="sendEmail"
        class="q-mt-xl q-gutter-md"
      >
        <InputForm label="Name" type="text" :model.sync="to_name" />
        <InputForm label="E-Mail" type="email" :model.sync="from_name" />
        <InputForm label="Message" type="textarea" :model.sync="message" />

        <q-btn type="submit" value="send" color="teal-13">
          Submit
        </q-btn>
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
    </div>
  </q-page>
</template>

<script>
import emailjs from "emailjs-com";
import InputForm from "src/components/InputForm";

export default {
  name: "ContactsPage",
  components: {
    InputForm
  },
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
    sendEmail() {
      this.loading = true;

      let customerInfo = {
        to_name: this.to_name,
        from_name: this.from_name,
        message: this.message
      };

      emailjs
        .send(
          "service_e6fbpkh",
          "template_iv21o1b",
          customerInfo,
          "user_dkbfABjZxKU5dSCe9RLl4"
        )
        .then(() => {
          this.sentMessage = true;
        })
        .catch(() => {
          this.$q.notify({
            message: "Something didn't go well. Please try again in a while.",
            color: "red",
            position: "top-right"
          });
        })
        .finally(() => {
          this.to_name = "";
          this.from_name = "";
          this.message = "";

          setTimeout(() => {
            this.sentMessage = false;
            this.loading = false;
          }, 4000);
        });
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 996px) {
  .center-left-text {
    position: absolute;
    top: 30%;
    right: 40%;
    left: 10%;
  }
}
</style>
