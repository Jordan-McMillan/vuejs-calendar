import Vue from 'vue'
import './style.scss';

import App from './components/App.vue'

import store from './store';
let events = window.__INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  };
});
let initialState = Object.assign({}, store.state, { events });
store.replaceState(initialState);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } })

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store
});
