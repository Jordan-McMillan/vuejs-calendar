<template>
    <div>
        <div v-for="day in days" v-bind:key="day">
            {{ day }}
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
        month: 2,
        year: 2017
    };
  },
  computed: {
    days() {
        const SUNDAY = 0;
        const MONDAY = 1;

        // generating all days in current month
        let days = [];
        let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');
        do {
            days.push(currentDay);
            currentDay = this.$moment(currentDay).add(1, 'days');
        } while ((currentDay.month() + 1) === this.month);
        
        // add previous days to start
        currentDay = this.$moment(days[0]);
        while (currentDay.day() !== MONDAY) {
            currentDay = this.$moment(currentDay).subtract(1, 'days');
            days.unshift(currentDay);
        }

        // add next days to end
        currentDay = this.$moment(days[days.length - 1]);
        while (currentDay.day() !== SUNDAY) {
            currentDay = this.$moment(currentDay).add(1, 'days');
            days.push(currentDay);
        }

        return days;
    }
  }
}
</script>
