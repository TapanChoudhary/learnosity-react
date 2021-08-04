var Learnosity = require("learnosity-sdk-nodejs");

var learnositySdk = new Learnosity();
export const request = learnositySdk.init(
  // service type
  "questions",

  // security details
  {
    consumer_key: "twRp5spenrCfVAa6",
    domain: "localhost",
    user_id: "demo_student",
  },

  // secret
  "4QxI9yDD15X65SLyOnnUgd8TVL90Wj7aA4tJ37W5",

  // request details
  {
    type: "local_practice",
    state: "initial",
    questions: [
      {
        response_id: "60005",
        type: "association",
        stimulus: "Match the cities to the parent nation.",
        stimulus_list: ["London", "Dublin", "Paris", "Sydney"],
        possible_responses: ["Australia", "France", "Ireland", "England"],
        validation: {
          score: 1,
          value: ["England", "Ireland", "France", "Australia"],
        },
      },
    ],
  }
);
