<template>
    <div id="event-form" :class="classObject" :style="styleObject">
        <h4>Add an event</h4>
        <p>{{ date ? date.format('dddd, MMM Do') : '' }}</p>
        <div class="text">
            <input v-focus type="text" v-model="description" placeholder="Description" @keyup.enter="enterKey">
        </div>
        <div class="buttons">
            <button @click="create">Create</button>
        </div>
        <button id="close-button" @click="close">&#10005</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            description: ''
        };
    },
    props: [],
    computed: {
        date() {
            return this.$store.state.eventFormDate;
        },
        classObject() {
            return {
                active: this.$store.state.eventFormActive
            }
        },
        styleObject() {
            return {
                top: this.$store.state.eventFormPosY + 'px',
                left: this.$store.state.eventFormPosX + 'px'
            }
        }
    },
    methods: {
        close() {
            this.$store.commit('eventFormActive', false);
        },
        create() {
            if (!this.description) {
                return;
            }
            this.$store.dispatch('addEvent', this.description).then(_ => {
                this.description = '';
                this.close();
            });
        },
        enterKey() {
            this.create();
        }
    },
    directives: {
        focus: {
            update(el) {
                el.focus();
            }
        }
    }
}
</script>
