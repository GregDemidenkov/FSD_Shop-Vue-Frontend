import { createApp } from 'vue'

import App from '@app/App.vue'
import { vuetify } from '@app/rootVuetify'
import router from '@app/rootRouter'
import '@app/styles/reseter.scss'


const app = createApp(App)

app
    .use(vuetify)
    .use(router)
    .mount('#app')