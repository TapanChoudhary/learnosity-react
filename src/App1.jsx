import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { QUESTION_TYPES } from "./constants/QuestionTypes";
import { SUB_TYPES } from "./constants/SubTypes";
import { Card } from "./components/Card";
import { EditorPage } from "./EditorPage";
import { Button } from "@material-ui/core";
import { PreviewPage } from "./PreviewPage";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  primary: {
    fontWeight: 800,
    fontSize: "1.2rem",
  },
}));

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
              <ListItem style={{ fontSize: "bold" }}>
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
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              margin: 10,
              flexWrap: "wrap",
            }}
          >
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
