import Type from "../type";
import axios from "axios";
import AsciiTable from "ascii-table";

let POST = null;

export default {
  title: POST ? POST.title : "Post loading",
  oncreate: ctrl => {
    setTimeout(async _ => {
      try {
        let _post = await axios({
          url: window.base_uri || "https://jose.com.co/wp-admin/admin-ajax.php",
          method: "post",
          data: "action=get_ajax_post&post=" + window.location.href,
          config: {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
          }
        });

        if (_post) {
          POST = _post.data;
          m.redraw();
        }
      } catch (error) {
        console.log(error);
      }
    }, 3000);
  },
  view: ctrl => {
    if (!POST) {
      return (
        <Type
          speed={15}
          strings={[`Loading post "${window.location.pathname}" into memory.`]}
        />
      );
    } else {
      let infoTable = new AsciiTable(__("Post details"));
      infoTable.addRow(__("Title"), POST.title);
      infoTable.addRow(__("Published at"), POST.date);

      return (
        <Type
          speed={0}
          strings={[
            "<- type 'back' to return to the latest posts list.",
            " ",
            infoTable.toString(),
            " ",
            " ",
            POST.content,
            " ",
            " ",
            __(
              "================================== POST END ====================================="
            )
          ]}
        />
      );
    }
  }
};

/*
content: ""
date: "2017-01-30 23:00:16"
date_gmt: "2017-01-31 04:00:16"
excerpt: ""
guid: "http://jose.com.co/?p=18"
id: 18
modified: "2017-01-30 23:13:13"
modified_gmt: "2017-01-31 04:13:13"
slug: "raspberry-pi-multiple-cameras"
status: "publish"
title: "Raspberry PI + Multiple Cameras"
*/
