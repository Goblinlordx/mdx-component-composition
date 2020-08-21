import "style-loader!css-loader!./font.css";

const primaryFonts = "'Quicksand', sans-serif";

const theme = {
  fonts: {
    header: primaryFonts,
    text: primaryFonts,
  },
  colors: {
    primary: "#FFFFFF",
    secondary: "#5BC0BE",
    backgroundColor: "#0B132B",
  },
};

export default theme;
