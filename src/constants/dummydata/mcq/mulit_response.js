export const MULTI_RESPONSE = {
  multiple_responses: true,
  options: [
    {
      label: "[Choice A]",
      value: "0",
    },
    {
      label: "[Choice B]",
      value: "1",
    },
    {
      label: "[Choice C]",
      value: "2",
    },
    {
      label: "[Choice D]",
      value: "3",
    },
  ],
  stimulus:
    '<!--StartFragment--><span style="background-color: rgb(255, 255, 255); font-size: 24px;">Multiple choice – multiple response</span><!--EndFragment-->',
  type: "mcq",
  validation: {
    scoring_type: "exactMatch",
    valid_response: {
      score: 1,
      value: ["3", "1"],
    },
  },
  ui_style: {
    type: "horizontal",
  },
};
