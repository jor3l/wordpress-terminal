import Type from "../type";
export default {
  title: "Terminal",
  view: ctrl => (
    <Type
      strings={[
        __("Welcome to JoseOS LTS 0.1.0 (GNU/Linux 4.4.0-141-generic x86_64)"),
        " ",
        __(
          '* About me:       <a href="https://jose.com.co/about-me" data-targetid="0">[0] https://jose.com.co/about-me</a>'
        ),
        __(
          '* Github:         <a href="https://github.com/jor3l" data-targetid="1">[1] https://github.com/jor3l</a>'
        ),
        __(
          '* LinkedIn:       <a href="https://linkedin.com/in/jor3l" data-targetid="2">[2] https://linkedin.com/in/jor3l</a>'
        ),
        " ",
        __("This is a custom wordpress theme developed by me, get it free at:"),
        '     <a href="http://github.com/jor3l/wordpress-terminal" data-targetid="3">[3] http://github.com/jor3l/wordpress-terminal</a>',
        " ",
        "This website contains 131 posts.",
        "'- most of them organized on 3 categories.",
        " ",
        __(
          "At any time type 'help' to display all list of commands available."
        ),
        " ",
        " ",
        "Last login: Fri Jan 18 15:04:27 2019 from 186.155.19.196",
        " ",
        __("hint: Type 'posts' to see the latests posts."),
        __("hint: Type a link number to navigate to it.")
      ]}
    />
  )
};
