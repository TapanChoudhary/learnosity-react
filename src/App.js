import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { request } from "./autoInit";

function App() {
  // const { hook, callbacksEditor } = LearnosityConfig.learnosityConfig();
  //   var initOptionsEditor = LearnosityConfig.learnosityConfig().initOptionsEditor

  useEffect(() => {
    initialization();
  }, []);

  const initialization = async () => {
    var callbacks = {
      readyListener: function () {
        //bindevent();
        console.log("Learnosity Author API is ready");
        authorApp.on("render:item", function () {
          authorApp.setWidget(
            {
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
            },
            "Multiple choice – standard"
          );
        });
        authorApp.on("save:success", function (event) {
          console.info("AUTHOR APP ITEM SAVED");
          console.info(event);
          //saveAssessment(event.data.reference);
        });
      },
      errorListener: function (e) {
        //callback to occur on error
        console.log("Error code ", e.code);
        console.log("Error message ", e.message);
        console.log("Error name ", e.name);
        console.log("Error name ", e.title);
      },
      labelBundle: {
        loadingInfo: "Loading Question...",
        play: "play",
      },

      saveSuccess: function (response_ids) {
        for (let i = 0; i < response_ids.length; i++) {
          console.log("Responses saved : ", response_ids[i]);
        }
      },

      saveError: function (e) {
        console.log("Save failed - error ", e);
      },

      saveProgress: function (progress) {
        console.log("Save progress - ", progress);
      },
    };

    var authorApp = window.LearnosityAuthor.init(request, callbacks);
    // var authorApp = await window.LearnosityAuthor.init(request);
    console.log({ authorApp });
    // console.log(editor.getWidget());
  };

  return (
    <div className="App">
      <div className="main-content">
        <div className="learnosity-author"></div>
      </div>
    </div>
  );
}

export default App;
