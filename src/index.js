import App from "./containers/App.svelte";
import SweetScroll from "sweet-scroll";

const app = new App({
  target: document.body,
});

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const sweetScroll = new SweetScroll({
      header: "#Nav",
    });
  },
  false
);
