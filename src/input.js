import styles from "./input.css";
import xss from "xss";

const SOCIAL = {
  linkedIn: "https://linkedin.com/in/jor3l",
  twitter: "https://twitter.com/jor3l",
  instagram: "https://instagram.com/jor3l",
  github: "https://github.com/jor3l"
};

const Input = {
  onInputChange: e => {
    e.preventDefault();
    e.stopPropagation();

    const str = xss(e.target.value);

    switch (str.toLowerCase()) {
      case "help":
        m.route.set("/help");
        break;
      case "about":
        m.route.set("/about-me");
        break;
      case "posts":
        m.route.set("/posts");
        break;
      case "back":
        window.history.back();
        break;
      case "goto linkedin":
        window.location.href = SOCIAL.linkedIn;
        break;
      case "goto github":
        window.location.href = SOCIAL.github;
        break;
      case "goto twitter":
        window.location.href = SOCIAL.twitter;
        break;
      case "goto instagram":
        window.location.href = SOCIAL.instagram;
        break;
      case "exit":
        m.route.set("/exit");
        break;
      default:
        if (!isNaN(parseInt(str))) {
          // click a link
          let link = document.querySelector(`a[data-targetid="${str}"]`);

          link && link.click();
          !link && alertify.alert(__("Link not found!"));
          return;
        }

        m.route.set("/unknown-command", { str });
        break;
    }

    return false;
  },
  oncreate: vnode => {
    vnode.dom.querySelector("input").focus();
  },
  view: ctlr => {
    return (
      <div class="input-line">
        <input
          type="text"
          onchange={e => Input.onInputChange(e)}
          placeholder={__("type here")}
        />
      </div>
    );
  }
};

export default Input;
