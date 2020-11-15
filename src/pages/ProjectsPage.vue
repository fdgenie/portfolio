<template>
  <div class="q-pa-md bg-grey-10">
    <div class="column" style="height: 100vh">
      <div class="col-3" />
      <div class="col-4 row">
        <span class="col-1" />
        <span class="col">
          <div class="q-pa-md">
            <q-list dark bordered separator class="rounded-borders">
              <q-expansion-item
                v-model="expansionOpenGeekScore"
                :class="expansionOpenGeekScore ? 'text-h6' : 'text-h4'"
                expand-separator
                icon="mdi-scoreboard"
                label="Geek Score"
                class="text-teal-13"
              >
                <q-card>
                  <q-card-section class="row  bg-grey-4">
                    <div class="col text-grey-8 text-body1">
                      A PWA for board games fans. It allows you to store your
                      games, create teams and collect statistics.
                    </div>
                    <div class="col-2 flex flex-center">
                      <a
                        href="https://geekscore.herokuapp.com/games"
                        target="_blank"
                        style="text-decoration: none;"
                      >
                        <q-btn class="text-teal-13 bg-black">
                          Go To Project
                        </q-btn>
                      </a>
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                expand-separator
                icon="signal_wifi_off"
                label="HiveMind"
                class="text-teal-13"
                v-model="expansionOpenHivemind"
                :class="expansionOpenHivemind ? 'text-h6' : 'text-h4'"
              >
                <q-card>
                  <q-card-section class="row bg-grey-4">
                    <div class="col text-grey-8 text-body1">
                      Puzzle game in playStore and KaiOS.
                    </div>
                    <div class="col-2 flex flex-center">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.DembergStudios.HiVeMiND&hl=el&gl=US"
                        target="_blank"
                        style="text-decoration: none;"
                      >
                        <q-btn class="text-teal-13 bg-black">
                          Go To Project
                        </q-btn>
                      </a>
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                expand-separator
                icon="mdi-dice-d20"
                label="Dndelicious"
                class="text-teal-13"
                v-model="expansionOpenDndelicious"
                :class="expansionOpenDndelicious ? 'text-h6' : 'text-h4'"
              >
                <q-card>
                  <q-card-section class="row bg-grey-4">
                    <div class="col text-grey-8 text-body1">
                      An application for the Dungeon&Dragons enthusiast. It have
                      the basic informations for Races, Classes, Spells,
                      Monsters and Equipments so you can check anything you need
                      fast and easy in your session.
                    </div>
                    <div class="col-2 flex flex-center">
                      <a
                        href="https://dndelicious.netlify.app/#/"
                        target="_blank"
                        style="text-decoration: none;"
                      >
                        <q-btn class="text-teal-13 bg-black">
                          Go To Project
                        </q-btn>
                      </a>
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </span>
        <span class="col-2" />
      </div>
      <div class="col" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  data() {
    return {
      expansionOpenGeekScore: false,
      expansionOpenHivemind: false,
      expansionOpenDndelicious: false
    };
  }
};
</script>

<style>
.q-field--outlined .q-field__control::before {
  border: 1px solid #ffffff;
}

.q-field__control::after {
  border: 1px solid #000000;
}
</style>
