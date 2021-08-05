import React, { useEffect, useCallback } from "react";
import { QUESTION_DATA } from "../constants/QuestionData";
import { request } from "../initconfigs/previewInit";

export const PreviewPage = ({ subType, label }) => {
  const initialization = useCallback(() => {
    var callbacks = {
      readyListener: function () {
        //bindevent();

        itemsApp.on("render:item", function () {
          itemsApp.setWidget(QUESTION_DATA[subType], label);
        });
        itemsApp.on("save:success", function (event) {
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

    var itemsApp = window.LearnosityItems.init(request, callbacks);
    // var authorApp = await window.LearnosityAuthor.init(request);
    console.log({ itemsApp });
    // console.log(editor.getWidget());
  }, [label, subType]);

  useEffect(() => {
    initialization();
  }, [initialization]);

  return (
    <div className="main-content">
      <div id="learnosity_assess"></div>
    </div>
  );
};
