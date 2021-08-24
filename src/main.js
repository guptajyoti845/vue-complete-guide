import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import Card from './components/ui/Card.vue';
import Button from './components/ui/Button.vue';
import Badge from './components/ui/Badge.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('card', Card);
app.component('base-button', Button);
app.component('badge', Badge);

app.mount('#app');
