import { v4 as uuidv4 } from "uuid";

var Learnosity = require("learnosity-sdk-nodejs");
var learnositySdk = new Learnosity();
var uuid = uuidv4();
export const request = learnositySdk.init(
  // service type
  "items",
  // security details
  {
    consumer_key: "twRp5spenrCfVAa6",
    domain: "localhost",
    user_id: "AnaTest_12_UserID",
  },
  // secret
  "4QxI9yDD15X65SLyOnnUgd8TVL90Wj7aA4tJ37W5",
  // request details
  {
    user_id: "AnaTest_12_UserID",
    rendering_type: "assess",
    name: "Items API Test",
    state: "initial",
    activity_id: "ACTIVITY_AnaTest_activityID",
    session_id: uuid,
    activity_template_id: "ACTIVITY_AnaTest",
    type: "submit_practice",
    config: {
      ui_style: "horizontal",
      renderSaveButton: true,
      navigation: {
        auto_save: {
          ui: true,
          saveIntervalDuration: 10,
        },
        show_save: false,
        show_outro: false,
      },
      configuration: {
        onsubmit_redirect_url: "",
        lazyload: true,
        events: false,
      },
      labelBundle: {
        saveButtonLabel: "Save",
      },
      ignore_question_attributes: ["validation"],
    },
  }
);
