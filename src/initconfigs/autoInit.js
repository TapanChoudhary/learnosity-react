var Learnosity = require("learnosity-sdk-nodejs");
var learnositySdk = new Learnosity();
export const request = learnositySdk.init(
  // service type
  "author",
  // security details
  {
    consumer_key: process.env.REACT_APP_CONSUMER_KEY,
    domain: "localhost",
  },
  // secret
  process.env.REACT_APP_LEARNOSITY_SECRET_KEY,
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
