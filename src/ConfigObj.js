import generateSignature from "./generateSig";

const securityPacket = {
  consumer_key: "twRp5spenrCfVAa6",
  domain: "localhost",
  timestamp: new Date()
    .toISOString()
    .replace(/T/, " ") // replace T with a space
    .replace(/\..+/, "")
    .replace(/-/g, "")
    .slice(0, -3)
    .replace(/ /g, "-")
    .replace(/:/g, "")
    .toString(),
};

const request = {
  user: {
    id: "demo_student",
  },
  mode: "item_edit",
  reference: "my-item-reference",
  config: {
    global: {
      disable_onbeforeunload: true,
      // All tags of type "internal_category_uuid" are hidden in the UI
      hide_tags: [
        {
          type: "internal_category_uuid",
        },
      ],
    },
    item_edit: {
      item: {
        back: true,
        columns: true,
        answers: true,
        scoring: true,
        reference: {
          edit: false,
          show: false,
          prefix: "LEAR_", // The reference for a new item will start with LEAR_
        },
        save: true,
        status: false,
        dynamic_content: true,
        shared_passage: true,
      },
      widget: {
        delete: false,
        edit: true,
      },
    },
    item_list: {
      item: {
        status: true,
        url: "http://myApp.com/items/:reference/edit",
      },
      toolbar: {
        add: true,
        browse: {
          controls: [
            {
              type: "hierarchy",
              hierarchies: [
                {
                  reference: "CCSS_Math_Hierarchy",
                  label: "CCSS Math",
                },
                {
                  reference: "CCSS_ELA_Hierarchy",
                  label: "CCSS ELA",
                },
                {
                  reference: "Demo_Items_Hierarchy",
                  label: "Demo Items",
                },
              ],
            },
            {
              type: "tag",
              tag: {
                type: "difficulty",
                label: "Difficulty",
              },
            },
            {
              type: "tag",
              tag: {
                type: "content_provider",
                label: "Source",
              },
            },
          ],
        },
      },
      filter: {
        restricted: {
          current_user: true,
          tags: {
            all: [
              {
                type: "Alignment",
                name: ["def456", "abc123"],
              },
              {
                type: "Course",
              },
            ],
            either: [
              {
                type: "Grade",
                name: "4",
              },
              {
                type: "Grade",
                name: "5",
              },
              {
                type: "Subject",
                name: ["Math", "Science"],
              },
            ],
            none: [
              {
                type: "Grade",
                name: "6",
              },
            ],
          },
        },
      },
    },
    dependencies: {
      question_editor_api: {
        init_options: {},
      },
      questions_api: {
        init_options: {},
      },
    },
    widget_templates: {
      back: true,
      save: true,
      widget_types: {
        default: "questions",
        show: true,
      },
    },
    container: {
      height: "auto",
      fixed_footer_height: 0,
      scroll_into_view_selector: "body",
    },
    label_bundle: {
      // German translation and date/time format changes
      // Generic components and partials
      backButton: "Zurück",
      loadingText: "Wird geladen",
      modalClose: "Schließen",
      saveButton: "Speichern",
      duplicateButton: "Duplikat",

      // itemList > dates (using Moment.js)
      dateTimeLocale: "",
      toolTipDateTimeSeparator: "um",
      toolTipDateFormat: "DD-MM-YYYY",
      toolTipTimeFormat: "HH:MM:SS",
    },
  },
};
const signature = generateSignature(
  "author",
  securityPacket,
  "4QxI9yDD15X65SLyOnnUgd8TVL90Wj7aA4tJ37W5",
  request
);

export const initializationObject = {
  security: {
    ...securityPacket,
    signature,
  },

  request,
};

export const callbacks = {
  readyListener: function () {
    console.log("Learnosity Author API is ready");
  },
  errorListener: function (e) {
    //callback to occur on error
    console.log("Error code ", e.code);
    console.log("Error message ", e.message);
    console.log("Error name ", e.name);
    console.log("Error name ", e.title);
  },
};

// var authorApp = LearnosityAuthor.init(initializationObject, callbacks);
