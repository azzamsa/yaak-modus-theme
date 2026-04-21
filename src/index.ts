import { PluginDefinition } from "@yaakapp/api";
export const plugin: PluginDefinition = {
  themes: [
    {
      id: "modus-vivendi-theme",
      label: "Modus Vivendi Theme",
      dark: true,
      base: {
        surface: "#000000",
        surfaceHighlight: '#5a5a5a',
        // active selection on sidebar
        surfaceActive: '#2f3849',
        border: '#646464',
        borderSubtle: '#303030',
        text: "#ffffff",
        textSubtle: "#ffffff",
        textSubtlest: "#989898",
        primary: "#00d3d0",
        secondary: "#b6a0ff",
        info: "#2fafff",
        success: "#44bc44",
        notice: "#d0bc00",
        warning: "#fec43f",
        danger: "#ff5f59",
        selection: "#5a5a5a",
      },
      components: {
        dialog: {
          surface: "#1e1e1e",
        },
        sidebar: {
          surface: "#000000",
          border: "#646464",
        },
        appHeader: {
          surface: "#000000",
          border: "#646464",
        },
        responsePane: {
          surface: "#000000",
          border: "#646464",
        },
        button: {
          primary: "#00d3d0",
          // icons on the menus
          secondary: "#b6a0ff",
          info: "#00d3d0",
          success: "#44bc44",
          notice: "#d0bc00",
          warning: "#fec43f",
          danger: "#ff5f59",
        },
      },
    },
  ],
};
