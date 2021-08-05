import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
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
  cardContainer: {
    display: "flex",
    justifyContent: "start",
    margin: 10,
    flexWrap: "wrap",
  },
  drawerHeader: {
    fontSize: "bold",
  },
}));
