import { aliases, fa } from "vuetify/iconsets/fa";
import "@fortawesome/fontawesome-free/css/all.css";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

const newTheme = {
  dark: false,
  colors: {
    primary: "#FFFFFF",
    primaryDark: "#FFFFFF",
    primaryDarker: "#FFFFFF",
    secondary: "#FFFFFF",
    secondaryLight: "#FFFFFF",
    secondaryDark: "#FFFFFF",
    secondaryDarker: "#FFFFFF",
    accent: "#FFFFFF",
    accentLight: "#FFFFFF",
    accentV1: "#FFFFFF",
    accentV1Light: "#FFFFFF",
    success: "#FFFFFF",
    warning: "#FFFFFF",
    error: "#FFFFFF",
    info: "#FFFFFF",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "newTheme",
    themes: {
      newTheme,
    },
  },
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
  components,
  directives,
});
