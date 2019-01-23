if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/dist/service-worker.js")
      .then(registration => {
        // Use the registration if needed
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

import baseCss from "./base.css";
import crtFx from "./crt.css";

import Input from "./input";
import { Home, Unknown, Posts, Post, Help, About, Exit } from "./views";

(async () => {
  try {
    m.route.prefix("");
    m.route(document.getElementById("terminal"), "/", {
      "/": {
        onmatch: () => {
          return App(Home);
        }
      },
      "/unknown-command": {
        onmatch: () => {
          return App(Unknown);
        }
      },
      "/posts": {
        onmatch: () => {
          return App(Posts);
        }
      },
      "/post/:category/:slug_:id": {
        onmatch: () => {
          return App(Post);
        }
      },
      "/help": {
        onmatch: () => {
          return App(Help);
        }
      },
      "/about-me": {
        onmatch: () => {
          return App(About);
        }
      },
      "/exit": {
        onmatch: () => {
          return App(Exit);
        }
      }
    });
  } catch (error) {
    console.log(error);
    if (!navigator.onLine) {
      setInterval(() => {
        if (navigator.onLine) window.location.reload();
      }, 3000);

      return m.render(
        document.getElementById("root"),
        <div>{__("Internet is needed for this app to work")}</div>
      );
    } else alertify.alert(__("An error has ocurred."));
  }
})();

function App(ContentView) {
  return {
    oncreate: () => {},
    controller: () => {},
    view: ctrl => {
      //console.log(performance.now() - window.start, 'ms');
      document.title = ContentView.title;
      return (
        <div id="main">
          <div id="view">
            <ContentView />
          </div>
          <Input />
        </div>
      );
    }
  };
}
