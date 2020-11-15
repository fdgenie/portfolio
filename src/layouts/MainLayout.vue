<template>
  <div id="q-app">
    <q-layout view="lHr Lpr lff" class="shadow-2 rounded-borders">
      <q-header v-if="!drawer" elevated class="bg-grey-3">
        <q-toolbar>
          <q-btn
            class="lt-md text-black"
            flat
            @click="drawer = !drawer"
            dense
            icon="menu"
          ></q-btn>
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
        <div
          class="q-mini-drawer-hide absolute"
          style="top: 15px; right: -17px"
        >
          <q-btn
            dense
            round
            unelevated
            color="accent"
            icon="chevron_left"
            @click="miniState = true"
          ></q-btn>
        </div>

        <div class="absolute-top">
          <q-btn :to="'/'" flat class="full-width">
            AFP
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
                <q-icon
                  :color="index.color"
                  :name="index.icon"
                  @mouseenter="btnHover = true"
                  @mouseleave="btnHover = false"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="absolute-bottom">
          <q-list>
            <q-item clickable v-for="(contact, key) in contacts" :key="key">
              <a
                :href="contact.url"
                target="_blank"
                style="text-decoration: none;"
              >
                <q-item-section avatar>
                  <q-icon :color="contact.color" :name="contact.icon" />
                </q-item-section>
              </a>
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
      btnHover: false,
      indexes: [
        {
          icon: "mdi-home",
          label: "Home",
          to: "/",
          color: "black"
        },
        {
          icon: "mdi-cog",
          label: "Skills",
          to: "/skills",
          color: "black"
        },
        {
          icon: "mdi-eye",
          label: "Projects",
          to: "/projects",
          color: "black"
        },
        {
          icon: "mdi-card-account-mail",
          label: "Contacts",
          to: "/contacts",
          color: "black"
        }
      ],
      contacts: [
        {
          icon: "mdi-linkedin",
          label: "LinkedIn",
          to: "/",
          color: "black",
          url: "https://www.linkedin.com/in/aristidis-fero-pantidis-211271156/"
        },
        {
          icon: "mdi-github",
          label: "Github",
          to: "/about",
          color: "black",
          url: "https://github.com/fdgenie"
        }
      ]
    };
  }
};
</script>
