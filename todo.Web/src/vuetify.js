import { aliases, fa } from "vuetify/iconsets/fa";
import "@fortawesome/fontawesome-free/css/all.css";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

import DayJsAdapter from "@date-io/dayjs";

const newTheme = {
  dark: false,
  colors: {
    primary: "#EFF0F5",
    primaryDark: "#D1D3E0",
    primaryDarker: "#B3B5CC",
    secondary: "#494949",
    secondaryLight: "#F2F2F2",
    secondaryDark: "#3D3D3D",
    secondaryDarker: "#303030",
    accent: "#3D648F",
    accentLight: "#EDF2F7",
    accentV1: "#3D8F68",
    accentV1Light: "#DBF0E6",
    success: "#1B5E20",
    warning: "#FBC02D",
    error: "#D50000",
    info: "#42A5F5",
  },
};

const fieldDefaults = {
  variant: "outlined",
  density: "compact",
  hideDetails: "auto",
};
const vuetifyOptions = {
  defaults: {
    VTextField: fieldDefaults,
    VTextarea: fieldDefaults,
    VAutocomplete: fieldDefaults,
    VSelect: fieldDefaults,
    VCard: {
      elevation: 1,
    },
  },
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
  date: {
    adapter: DayJsAdapter,
  },
  components,
  directives,
};
export default createVuetify(vuetifyOptions);
