import { useEffect } from "react";
import "./App.css";

function App() {
  // const { hook, callbacksEditor } = LearnosityConfig.learnosityConfig();
  //   var initOptionsEditor = LearnosityConfig.learnosityConfig().initOptionsEditor

  useEffect(() => {
    initialization();
  }, []);

  const initialization = async () => {
    var initOptions = {
      assetRequest: function (
        mediaRequested,
        returnType,
        callback,
        attributes
      ) {
        // Do something.
      },
      configuration: {
        consumer_key: "ts34Rdc45SWE34f",
      },
      label_bundle: {
        // question attributes
        stimulus: "Compose question",
        options: "Options",
        "validation.alt_responses.score": "Points",
      },
      question_type_templates: {
        mcq: [
          {
            name: "MCQ - Custom Style",
            reference: "customMCQ",
            group_reference: "mcq",
            description:
              "Multiple Choice question with block style and predefined options.",
            defaults: {
              options: [
                {
                  label: "Dublin",
                  value: "1",
                },
                {
                  label: "Bristol",
                  value: "2",
                },
                {
                  label: "Liverpool",
                  value: "3",
                },
                {
                  label: "London",
                  value: "4",
                },
              ],
              // A newly added option will have the default label "New Label"
              "options[]": "New Label",
              ui_style: {
                type: "block",
                columns: 1,
                choice_label: "upper-alpha",
              },
            },
          },
        ],
      },
      ui: {
        layout: {
          global_template: "edit_preview",
          responsive_edit_mode: {
            breakpoint: 800, // If the container width becomes less than 800px then switch to edit layout
          },
        },
      },
      widget_type: "response",
    };

    var hook = ".my-editor";

    var callbacks = {
      readyListener: function () {
        // Question Editor API sucessfully loaded according to pased init options
        // we can now reliably start calling public methods and listen to events
        questionEditorApp.on("widget:ready", function () {
          // widget has changed, probably as a result of calling setWidget()
        });
      },
      errorListener: function (e) {
        //callback to occur on error
        console.log("Error code ", e.code);
        console.log("Error message ", e.message);
        console.log("Error name ", e.name);
        console.log("Error name ", e.title);
      },
    };

    var questionEditorApp = window.LearnosityQuestionEditor.init(
      initOptions,
      hook,
      callbacks
    );
    // var authorApp = await window.LearnosityAuthor.init(request);
    console.log({ questionEditorApp });
    // console.log(editor.getWidget());
  };

  return (
    <div className="App">
      <div className="new-course">
        <div className="my-editor"></div>
      </div>
    </div>
  );
}

export default App;
