
//#region src/index.ts
const plugin = { themes: [{
	id: "modus-vivendi-theme",
	label: "Modus Vivendi Theme",
	dark: true,
	base: {
		surface: "#000000",
		text: "#ffffff",
		textSubtle: "#ffffff",
		textSubtlest: "#989898",
		primary: "#00d3d0",
		secondary: "#79a8ff",
		info: "#2fafff",
		success: "#44bc44",
		notice: "#d0bc00",
		warning: "#fec43f",
		danger: "#ff5f59",
		selection: "#5a5a5a"
	},
	components: {
		dialog: { surface: "#1e1e1e" },
		sidebar: {
			surface: "#000000",
			border: "#646464"
		},
		appHeader: {
			surface: "#000000",
			border: "#646464"
		},
		responsePane: {
			surface: "#1e1e1e",
			border: "#646464"
		},
		button: {
			primary: "#2fafff",
			secondary: "#79a8ff",
			info: "#00d3d0",
			success: "#44bc44",
			notice: "#d0bc00",
			warning: "#fec43f",
			danger: "#ff5f59"
		}
	}
}] };

//#endregion
exports.plugin = plugin;