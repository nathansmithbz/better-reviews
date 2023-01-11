import React, { useState } from "react";
import {
  createStyles,
  makeStyles,
  Typography,
  //Paper,
  Button,
  Snackbar,
} from "@material-ui/core";
import { Grid, Paper } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import CustomRatingField from "./CustomRatingField";
import CustomSliderField from "./CustomSliderField";
import {generateTable} from "./generateTable"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
      textAlign: 'center',
    },
    container: {
      backgroundColor: "#ffffff",
      padding: 30,
      textAlign: "center",
    },
    title: {
      margin: "0px 0 20px 0",
    },
    button: {
        margin: "20px auto",
        maxWidth: "15rem",
    },
    paper: {
        padding:'2rem',
    }
  })
);

const Form = () => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(ratingStory);
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(
        generateTable(
            ratingOverall,
          ratingStory,
          ratingGameplay,
          ratingGraphics,
          ratingSound,
          ratingReplay,
          ratingDifficulty,
          ratingBugs,
          ratingRequirements,
          ratingLength
        )
      );
      setOpen(true);
    } else {
      document.execCommand("copy", true, "hi");
    }
  };
  const [ratingOverall, setratingOverall] = useState<number | null>(1);
  const [ratingStory, setRatingStory] = useState<number | null>(1);
  const [ratingGameplay, setRatingGameplay] = useState<number | null>(1);
  const [ratingGraphics, setRatingGraphics] = useState<number | null>(1);
  const [ratingSound, setRatingSound] = useState<number | null>(1);
  const [ratingReplay, setRatingReplay] = useState<number | null>(1);
  const [ratingDifficulty, setRatingDifficulty] = useState<number | null>(1);
  const [ratingBugs, setRatingBugs] = useState<number | null>(1);
  const [ratingRequirements, setRatingRequirements] = useState<number | null>(
    1
  );

  const [open, setOpen] = useState(false);

  const [ratingLength, setRatingLength] = useState<number | number[]>(50);

  return (
    <Paper className={classes.paper}>
      <Typography variant={"h4"} className={classes.title}>
        Better Steam Reviews
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
        <Grid container rowSpacing={5} justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
            <CustomRatingField
              value={ratingOverall}
              setValue={setratingOverall}
              name={"Overall Rating"}
            ></CustomRatingField>
          </Grid>
          <Grid item xs={6}>
            <CustomRatingField
              value={ratingStory}
              setValue={setRatingStory}
              name={"Story"}
            ></CustomRatingField>
          </Grid>
          <Grid item xs={6}>
            <CustomRatingField
              value={ratingGameplay}
              setValue={setRatingGameplay}
              name={"Gameplay"}
            ></CustomRatingField>
          </Grid>
          <Grid item xs={6}>
            <CustomRatingField
              value={ratingGraphics}
              setValue={setRatingGraphics}
              name={"Graphics"}
            ></CustomRatingField>
          </Grid>
          <Grid item xs={6}>
            <CustomRatingField
              value={ratingSound}
              setValue={setRatingSound}
              name={"Sound Design"}
            ></CustomRatingField>
          </Grid>
          <Grid item xs={6}>
            <CustomRatingField
              value={ratingReplay}
              setValue={setRatingReplay}
              name={"Replay Value"}
            ></CustomRatingField>
          </Grid>
          <Grid item xs={6}>
            <CustomRatingField
              value={ratingDifficulty}
              setValue={setRatingDifficulty}
              name={"Difficulty"}
            ></CustomRatingField>
          </Grid>
          <Grid item xs={6}>
            <CustomRatingField
              value={ratingBugs}
              setValue={setRatingBugs}
              name={"Bug free?"}
            ></CustomRatingField>
          </Grid>
          <Grid item xs={6}>
            <CustomRatingField
              value={ratingRequirements}
              setValue={setRatingRequirements}
              name={"PC Requirements"}
            ></CustomRatingField>
          </Grid>
          <Grid item xs={12} sm={6} >
            <CustomSliderField
              value={ratingLength}
              setValue={setRatingLength}
              name={"Game Length"}
            ></CustomSliderField>
          </Grid>
        </Grid>
        <Button
          type={"submit"}
          variant={"contained"}
          className={classes.button}
        >
          Copy to clipboard
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Coppied to cliboard!
          </Alert>
        </Snackbar>
      </form>
    </Paper>
  );
};

export default Form;
