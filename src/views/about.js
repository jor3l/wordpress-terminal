import AsciiTable from "ascii-table";
import Type from "../type";

export default {
  title: "help",
  view: ctrl => {
    let infoTable = new AsciiTable(__("about me"));

    infoTable.addRow(__("name"), "Jose Vera");
    infoTable.addRow(__("location"), __("Bogotá, Colombia"));
    infoTable.addRow(
      __("email"),
      '<a href="mailto:javserpa@gmail.com">javserpa@gmail.com</a>'
    );

    return (
      <Type
        strings={[
          infoTable.toString(),
          " ",
          __("about me:"),
          __(
            "     Self taught full stack developer with more than 8 years of experience in mobile-web apps and games and web+hardware (robots, AI, VR, AR). VFX lover and photographer wannabe."
          ),
          " ",
          __("skills:"),
          __(
            "     full stack development, agile methodologies, version control, virtualization"
          ),

          " ",
          __("front-end experience:"),
          __(
            "     react, mithril, webpack, babel, d3.js, three.js, uniflow, redux, jsx"
          ),

          " ",
          __("back-end experience:"),
          __(
            "     node, php, mysql, mongodb, dynamo, elastic, postgre, firebase, algolia"
          ),

          " ",
          __("other experience:"),
          __(
            "     photoshop, illustrator, after effects, premiere, rush, fusion 360, 3d printing, arduino"
          ),
          " "
        ]}
      />
    );
  }
};
