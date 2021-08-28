<template>
  <section>
    <card>
      <h2>{{ fullName }}</h2>
      <h3>{{ rate }}/hour</h3>
    </card>
  </section>
  <section>
    <card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </card>
  </section>
  <card>
    <badge v-for="area in areas" :key="area" :type="area" :title="area"></badge>
    <p>{{ description }}</p>
  </card>
  <!-- details
    <router-view></router-view>
    <router-link to="/coaches/c1/contact">Contact</router-link> -->
</template>

<script>
export default {
  watch: {
  },
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  created() {
    console.log('tests', this.$store.getters['coaches/coaches']);
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
  },
};
</script>
