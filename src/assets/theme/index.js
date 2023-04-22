// 主题
const theme = {
  color: {
    primary: "#ff385c",
    secondary: "#00848A",
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  mixin: {
    hoverShowdom: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0.2px 2px rgba(0, 0, 0, 0.18);
      }
    `,
  },
};

export default theme;
