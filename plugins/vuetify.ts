// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify, type ThemeDefinition } from 'vuetify';

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#ee4d2d'
  }
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    }
  });
  app.vueApp.use(vuetify);
});
