import Type from "../type";

export default {
  title: "exit",
  oncreate: _ => {
    setTimeout(_ => {
      window.location.href = "https://google.com";
    }, 3500);
  },
  view: ctrl => {
    return <Type strings={["shutting down in 3 seconds."]} />;
  }
};
