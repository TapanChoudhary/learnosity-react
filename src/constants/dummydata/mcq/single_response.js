export const SINGLE_RESPONSE = {
  options: [
    {
      label: "A",
      value: "0",
    },
    {
      label: "B",
      value: "1",
    },
    {
      label: "C",
      value: "2",
    },
    {
      label: "D",
      value: "3",
    },
  ],
  stimulus: "Multiple Choice - standard Testing",
  type: "mcq",
  validation: {
    scoring_type: "exactMatch",
    valid_response: {
      score: 1,
      value: ["0"],
    },
  },
  ui_style: {
    type: "horizontal",
  },
};
