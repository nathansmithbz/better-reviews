import { AppBar, Avatar, Grid, Toolbar, Typography } from "@material-ui/core";
import avatar from "./avatar.jpg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  appBarStyles: {
    position: "static",
    marginBottom: 20,
    background: "#171a21",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBarStyles}>
      <Toolbar>
        <Typography className={classes.typographyStyles} variant={"h4"}>
          Better Steam Reviews
        </Typography>
        <Avatar alt="Avatar" src={avatar} />
      </Toolbar>
    </AppBar>
  );
}
