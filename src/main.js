import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './style.css'

import cap from '../src/assets/cap.svg'
import resume from '../src/assets/resumev2.svg'

export default {
    name: 'Education',
    data() {
        return {
            cap,
            resume,
        }
    }
};

createApp(App).mount('#app')

