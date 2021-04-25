<template>
  <div id="q-app">
    <q-layout view="lHr lpr lfr" class="shadow-2 rounded-borders">
      <q-header v-if="!drawer" elevated class="bg-grey-3">
        <q-toolbar>
          <q-btn
            class="lt-md text-black"
            flat
            @click="drawer = !drawer"
            dense
            icon="menu"
            aria-label="burger-menu"
          />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        bordered
        side="left"
        :width="!drawer ? 100 : 60"
        :breakpoint="500"
        content-class="bg-grey-3"
      >
        <div class="absolute-top">
          <q-btn :to="'/'" flat class="full-width">
            <q-icon size="lg" name="img:icons/logo.png" />
          </q-btn>
        </div>

        <div class="absolute-center full-width">
          <q-list>
            <q-item
              clickable
              v-for="(index, key) in indexes"
              :key="key"
              :to="index.to"
            >
              <q-item-section avatar>
                <q-icon :color="index.color" :name="index.icon" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="absolute-bottom">
          <q-list>
            <q-item
              clickable
              v-for="(contact, key) in contacts"
              :key="key"
              tag="a"
              :href="contact.url"
              target="_blank"
              rel="noreferrer"
            >
              <q-item-section avatar>
                <q-icon :color="contact.color" :name="contact.icon" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      miniState: true,
      indexes: [
        {
          icon: "mdi-home",
          label: "Home",
          to: "/",
          color: "black"
        },
        {
          icon: "img:icons/skills.png",
          label: "Skills",
          to: "/skills",
          color: "black"
        },
        {
          icon: "img:icons/projects.png",
          label: "Projects",
          to: "/projects",
          color: "black"
        },
        {
          icon: "mdi-email-open",
          label: "Contacts",
          to: "/contacts",
          color: "black"
        }
      ],
      contacts: [
        {
          icon: "mdi-linkedin",
          label: "LinkedIn",
          color: "black",
          url: "https://www.linkedin.com/in/aristidis-fero-pantidis-211271156/"
        },
        {
          icon: "mdi-github",
          label: "Github",
          color: "black",
          url: "https://github.com/fdgenie"
        }
      ]
    };
  }
};
</script>

<style scoped>
.text-none {
  text-decoration: none;
}
</style>
