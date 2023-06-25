/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-06-23 18:38
 * @LastAuthor : itchaox
 * @LastTime   : 2023-06-23 21:15
 * @desc       :
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import log from './plugins/log.ts';

const app = createApp(App);

app.use(log);

app.mount('#app');
