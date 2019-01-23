import AsciiTable from "ascii-table";
import Type from "../type";

export default {
  title: "help",
  view: ctrl => {
    let infoTable = new AsciiTable(__("commands"));

    infoTable.addRow(__("posts"), __("gets the latests posts"));
    infoTable.addRow(__("about"), __("loads the about me page"));
    infoTable.addRow(__("back"), __("navigates to the previous page"));
    infoTable.addRow(
      __("goto linkedin,github,twitter,instagram"),
      __("navigates one of my social accounts")
    );
    infoTable.addRow(
      __("search some text"),
      __("searchs for posts that contain the given text")
    );
    infoTable.addRow(__("exit"), __("closes this terminal session"));

    return (
      <Type
        strings={[
          __(
            "help menu: these are the commands available to use this terminal"
          ),
          " ",
          infoTable.toString(),
          " ",
          __(
            "whenever there is a link on the screen, you can type the number next to it to navigate into that link"
          )
        ]}
      />
    );
  }
};
