import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import componentUI from '@/components/UI'

const app = createApp(App)

const components = [...componentUI];
components.forEach(component => {
	app.component(component.name, component);
});


app
	.use(store)
	.use(router)
	.mount('#app')
