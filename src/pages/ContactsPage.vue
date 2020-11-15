<template>
  <div class="q-pa-md ">
    <div class="column" style="height: 100vh">
      <div class="col-3" />
      <div class="col-4 row">
        <span class="col-1" />
        <span class="col">
          <p class="text-h2">
            Get in touch!
            <br />
            Available for freelance work or collaborations
          </p>
          <q-form class="q-mt-xl">
            <span class="row">
              <span class="col q-mr-md">
                <q-input outlined label="Name" />
              </span>
              <span class="col">
                <q-input outlined label="E-Mail" />
              </span>
            </span>
            <span class="row q-mt-md">
              <span class="col">
                <q-input type="textarea" outlined label="Message" />
              </span>
            </span>
          </q-form>
        </span>
        <span class="col-7" />
      </div>
      <div class="col" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsPage"
};
</script>

<style></style>
