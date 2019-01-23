import Type from "../type";
import axios from "axios";

let POSTS = false;

export default {
  title: "Posts",
  oncreate: ctrl => {
    setTimeout(async _ => {
      try {
        let _posts = await axios({
          url: window.base_uri || "https://jose.com.co/wp-admin/admin-ajax.php",
          method: "post",
          data: "action=get_ajax_posts",
          config: {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
          }
        });

        if (_posts) {
          POSTS = _posts.data;
          m.redraw();
        }
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  },
  view: ctrl => {
    return !POSTS ? (
      <Type
        speed={15}
        strings={[
          __("fetching latets posts from server, please wait"),
          ".".repeat(1000)
        ]}
      />
    ) : (
      <Type
        strings={[
          __("Latest posts:"),
          __("     type the number or click the link to read."),
          " ",
          ...POSTS.map(
            (post, i) =>
              `[${i}] ${post.title} - <a href="${
                post.url
              }" data-targetid="${i}">${post.url}</a>`
          )
        ]}
      />
    );
  }
};
