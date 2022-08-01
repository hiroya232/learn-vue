// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const myCustomTheme = {
  dark: false,
  colors: {
    primary: '#03a9f4',
    secondary: '#2196f3',
    accent: '#ff5722',
    error: '#f44336',
    warning: '#ffc107',
    info: '#ffeb3b',
    success: '#4caf50'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme,
    }
  }
})

