import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { QUESTION_TYPES } from "../constants/QuestionTypes";
import { SUB_TYPES } from "../constants/SubTypes";
import { Card } from "../components/Card";
import { EditorPage } from "../pages/EditorPage";
import { Button } from "@material-ui/core";
import { PreviewPage } from "../pages/PreviewPage";
import { useStyles } from "./appStyles";

export default function App() {
  const classes = useStyles();
  const [questionType, setQuestionType] = useState("");
  const [subType, setSubtype] = useState("");
  const [currentWindow, setCurrentWindow] = useState("");

  const handleDrawerItemClick = (questionType) => {
    setQuestionType(questionType);
  };

  const handleEdit = (value) => {
    console.log(value);
    setSubtype(value);
    setCurrentWindow("edit");
  };
  const handlePreview = (value) => {
    setSubtype(value);
    setCurrentWindow("preview");
  };

  const handleCancel = () => {
    setSubtype("");
    setCurrentWindow("");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Button variant="contained" color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Typography variant="h6" noWrap>
            Learnosity Demo
          </Typography>
        </Toolbar>
      </AppBar>
      {!currentWindow && (
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <ListItem className={classes.drawerHeader}>
                <ListItemText
                  disableTypography
                  className={classes.primary}
                  primary="Question Types"
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              {QUESTION_TYPES.map(({ label, value }) => (
                <ListItem
                  button
                  key={value}
                  onClick={() => handleDrawerItemClick(value)}
                >
                  <ListItemText primary={label} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      )}
      <main className={classes.content}>
        <Toolbar />
        {!currentWindow && (
          <div className={classes.cardContainer}>
            {questionType &&
              SUB_TYPES[questionType].map(({ label, value }) => (
                <Card
                  key={value}
                  title={label}
                  handleEdit={() => handleEdit(value)}
                  handlePreview={() => handlePreview(value)}
                />
              ))}
          </div>
        )}
        {currentWindow === "edit" && (
          <EditorPage subType={subType} label={questionType} />
        )}
        {currentWindow === "preview" && (
          <PreviewPage subType={subType} label={questionType} />
        )}
      </main>
    </div>
  );
}
