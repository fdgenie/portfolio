<template>
  <q-page class="q-pa-md bg-grey-10">
    <div class="center-left-text">
      <div class="col-5">
        <p class="text-teal-13 text-h2">
          PROJECTS
        </p>

        <div :class="$q.screen.gt.sm ? 'row' : false">
          <div class="col-5">
            <p class="text-grey-4 text-h5">
              My favorite kind of project is the intersection of coding and
              gaming, but I'm always up for any challenge!
            </p>
          </div>

          <div class="offset-1 col">
            <q-list dark bordered separator class="rounded-borders">
              <ExpansionItemProject
                icon="mdi-scoreboard"
                label="Geek Score"
                :model.sync="expansionOpenGeekScore"
              >
                <ProjectCard
                  :gameDescription="geekScoreDescription"
                  refLink="https://geekscore.herokuapp.com/games"
                />
              </ExpansionItemProject>

              <ExpansionItemProject
                icon="signal_wifi_off"
                label="HiveMind"
                :model.sync="expansionOpenHivemind"
              >
                <ProjectCard
                  :gameDescription="hiveMindDescription"
                  refLink="https://play.google.com/store/apps/details?id=com.DembergStudios.HiVeMiND&hl=el&gl=US"
                />
              </ExpansionItemProject>

              <ExpansionItemProject
                icon="mdi-dice-d20"
                label="Dndelicious"
                :model.sync="expansionOpenDndelicious"
              >
                <ProjectCard
                  :gameDescription="dndDescription"
                  refLink="https://dndelicious.netlify.app/#/"
                />
              </ExpansionItemProject>
            </q-list>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ExpansionItemProject from "@/components/ExpansionItemProject.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "ProjectsPage",
  components: {
    ExpansionItemProject,
    ProjectCard
  },
  data() {
    return {
      expansionOpenGeekScore: false,
      expansionOpenHivemind: false,
      expansionOpenDndelicious: false,
      geekScoreDescription: `A PWA for board games fans. It allows you to store your games,
                create teams and collect statistics.`,
      hiveMindDescription: `Puzzle game in playStore and KaiOS.`,
      dndDescription: `An application for the Dungeon&Dragons enthusiast. It have the
                basic informations for Races, Classes, Spells, Monsters and
                Equipments so you can check anything you need fast and easy in
                your session.`
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

@media screen and (min-width: 996px) {
  .center-left-text {
    position: absolute;
    top: 30%;
    right: 10%;
    left: 10%;
  }
}
</style>
