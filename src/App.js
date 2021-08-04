import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import { learnosityConfig } from "./learnosityConfig";
import { mulipleChoice } from "./mulitpleChoice";

var widget_json = localStorage.getItem("mcq")
  ? JSON.parse(localStorage.getItem("mcq"))
  : mulipleChoice;
function App() {
  const [isEditor, setEditor] = useState(false);
  const [editor, setEditorData] = useState(null);
  // const { hook, callbacksEditor } = LearnosityConfig.learnosityConfig();
  //   var initOptionsEditor = LearnosityConfig.learnosityConfig().initOptionsEditor

  // useEffect(() => {
  //   initialization();
  // }, []);

  const handleGetWidget = () => {
    console.log({ editor });
    console.log(editor.getWidget(), editor.getJson());
    localStorage.setItem("mcq", JSON.stringify(editor.getWidget()));
    // editor.setWidget(editor.getWidget());
  };

  // const initialization = async () => {
  //   const { hook, callbacksEditor, initOptionsEditor } = learnosityConfig;
  //   editor = window.LearnosityQuestionEditor.init(
  //     { ...initOptionsEditor, widget_json },
  //     hook,
  //     callbacksEditor
  //   );
  // };

  const onClick = (val) => {
    const { hook, callbacksEditor, initOptionsEditor } = learnosityConfig;
    var editor = window.LearnosityQuestionEditor.init(
      { ...initOptionsEditor, widget_json },
      hook,
      callbacksEditor
    );
    setEditorData(editor);
  };

  const handleGoBack = () => {
    console.log("clicked");
    setEditorData(null);
    window.location.reload(true);
  };

  const handleSave = () => {
    localStorage.setItem("mcq", JSON.stringify(editor.getWidget()));
    alert("Data saved");
  };

  return (
    <div className="App">
      {editor ? (
        <>
          <div
            style={{ display: editor ? "block" : "none" }}
            className="learnosity-question-editor"
          ></div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button text="Go back" handleClick={handleGoBack} />
            <Button text="Save" handleClick={handleSave} />
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 10,
            flexWrap: "wrap",
          }}
        >
          <Card title="Multiple Choice" handleClick={() => onClick("mcq")} />
          <Card
            title="Fill in the Blanks"
            handleClick={() => onClick("fitb")}
          />
          <Card
            title="Classify, Match & Order"
            handleClick={() => onClick("cl_mt_or")}
          />
          <Card
            title="Written & Recorded -Essay"
            handleClick={() => onClick("wr_re_es")}
          />
          <Card
            title="Highlight and Drawing"
            handleClick={() => onClick("hi_dr")}
          />
          <Card title="Math" handleClick={() => onClick("math")} />
          <Card title="Graphing" handleClick={() => onClick("graph")} />
          <Card title="Charts" handleClick={() => onClick("charts")} />
          <Card title="Chemistry" handleClick={() => onClick("chem")} />
          <Card title="Desmoz types" handleClick={() => onClick("desmoz")} />
        </div>
      )}
    </div>
  );
}

export default App;
