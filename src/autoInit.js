var Learnosity = require("learnosity-sdk-nodejs");
var learnositySdk = new Learnosity();
export const request = learnositySdk.init(
  // service type
  "author",
  // security details
  {
    consumer_key: "twRp5spenrCfVAa6",
    domain: "localhost",
  },
  // secret
  "4QxI9yDD15X65SLyOnnUgd8TVL90Wj7aA4tJ37W5",
  // request details
  {
    mode: "item_edit",
    reference: "AnaTest_12",
    config: {
      dependencies: {
        question_editor_api: {
          init_options: {
            widget_type: "response",
            ui: { layout: { global_template: "edit" } },
          },
        },
      },
    },

    user: {
      id: "demo_student",
      firstname: "Ana",
      lastname: "Test",
      email: "anahannan@qainfotech.com",
    },
  }
);
