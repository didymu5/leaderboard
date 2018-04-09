<template>
  <v-dialog v-model="dialog" max-width="500px" @keydown.esc="close">
    <v-btn color="primary" dark slot="activator" class="mb-2">Add Competitor</v-btn>
    <v-card>
      <v-card-title class="headline">Add your athlete</v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-form v-model="valid">
                <v-text-field
                label="Name"
                v-model="name"
                :rules="nameRules"
                required
                ></v-text-field>
                <v-text-field
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
                ></v-text-field>
                <v-text-field label="Affiliate"></v-text-field>
                <v-select
                label="Gender"
                v-model="select"
                :items="gender"
                :rules="[v => !!v || 'Item is required']"
                required
                ></v-select>
              </v-form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>

const createCompetitor = ({
  name,
  email,
  gender,
  age,
  affilation,
  about
} = {}) => ({
  name,
  email,
  gender,
  age,
  affilation,
  about
});
export default {
  name: 'athlete-form',
  data() {
    return {
      dialog: false,
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      gender: [
        'male',
        'female'
      ]
    };
  },
  created() {
    createCompetitor();
  },
  methods: {
    save() {
      console.log('save');
    },
    close() {
      this.dialog = false;
    }
  }
};
</script>
