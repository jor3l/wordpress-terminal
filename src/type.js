import striptags from "striptags";

export default function Type() {
  let node = null;
  let strings = [];
  let speed = 1;

  const typeString = async (el, str) => {
    let cleanStr = striptags(str);
    for (const letter of cleanStr) {
      await new Promise((resolve, reject) => {
        if (el) {
          el.textContent += letter;
          setTimeout(() => {
            resolve();
          }, speed || 1);
        }
      });
    }

    if (el) {
      el.innerHTML = str;
      typeLine();
    }
  };

  const typeLine = _ => {
    if (strings.length) {
      let line = strings.shift();
      let lineNode = Array.from(node.querySelectorAll("div")).find(
        node => !node.textContent
      );
      typeString(lineNode, line);
    }

    let parent = node.parentElement;
    parent.scrollTop = parent.scrollHeight - parent.clientHeight;
  };

  const setup = ctrl => {
    speed = ctrl.attrs.speed;
    strings = ctrl.attrs.strings;
    node = ctrl.dom;
    typeLine();
  };

  return {
    oncreate: setup,
    onupdate: setup,
    view: ctrl => {
      return (
        <div className={`terminal-block`} key={Math.random() * 1000}>
          {ctrl.attrs.strings.map(line => (
            <div key={Math.random() * 100000} />
          ))}
        </div>
      );
    }
  };
}
