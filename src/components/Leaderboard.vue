<template>
  <div class="leaderboard">
    <athlete-form></athlete-form>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.index+1 }}</td>
      <td class="text-xs-left">{{ props.item.name }}</td>
      <td class="text-xs-left">{{ props.item.totalPoints }}</td>
      <td class="text-xs-left" v-for="workout in props.item.workouts" v-bind:key="workout.name">{{ workout.result }}</td>
    </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AthleteForm from './AthleteForm';

export default {
  name: 'leaderboard',
  components: {
    AthleteForm
  },
  data() {
    return {
      headers: [
        {
          text: 'Rank',
          align: 'left',
          sortable: true,
          value: 'index'
        },
        { text: 'Name', value: 'name', align: 'left' },
        { text: 'Points', value: 'totalPoints' },
      ],
      items: [],
    };
  },
  created() {
    this.items = this.athletes;
    console.log(this.athletes);
    this.createWorkoutHeaders();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Add Competitor' : 'Edit Competitor';
    },
    ...mapGetters({
      athletes: 'allAthletes'
    })
  },
  methods: {
    createWorkoutHeaders() {
      // const workoutsObj = this.workouts.map((workout, i) => {
      //   const valueString = `workouts[${i}].result`;
      //   return ({ text: workout.name, value: valueString });
      // });

      // workoutsObj.map(workout => this.$data.headers.push(workout));
    },
    close() {
      this.dialog = false;
    },
    save() {

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
