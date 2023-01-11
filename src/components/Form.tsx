import React, { useState } from "react";
import {
  createStyles,
  makeStyles,
  Typography,
  Paper,
  Button,
} from "@material-ui/core";
import Grid from "@mui/material/Grid";

import CustomRatingField from "./CustomRatingField";

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
    },
    container: {
      backgroundColor: "#ffffff",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      padding: 30,
      textAlign: "center",
    },
    title: {
      margin: "0px 0 20px 0",
    },
    button: {
      margin: "20px 0",
    },
  })
);

const generateTable = (
  ratingStory: number | null,
  ratingGameplay: number | null,
  ratingGraphics: number | null,
  ratingSound: number | null,
  ratingReplay: number | null,
  ratingDifficulty: number | null,
  ratingBugs: number | null,
  ratingRequirements: number | null
) => {
  return `
    [hr][/hr]
    [table]
    [tr]
    [th]Category[/th]
    [th]Score[/th]
    [/tr]
    [tr]
    [td]Story[/td]
    [td]${drawStars(ratingStory)}[/td]
    [/tr]
    [tr]
    [td]Gameplay[/td]
    [td]${drawStars(ratingGameplay)}[/td]
    [/tr]
    [tr]
    [td]Graphics[/td]
    [td]${drawStars(ratingGraphics)}[/td]
    [/tr]
    [tr]
    [td]Sound Design[/td]
    [td]${drawStars(ratingSound)}[/td]
    [/tr]
    [tr]
    [td]Replay Value[/td]
    [td]${drawStars(ratingReplay)}[/td]
    [/tr]
    [tr]
    [td]Replay Value[/td]
    [td]${drawStars(ratingDifficulty)}[/td]
    [/tr]
    [tr]
    [td]Replay Value[/td]
    [td]${drawStars(ratingBugs)}[/td]
    [/tr]
    [tr]
    [td]Replay Value[/td]
    [td]${drawStars(ratingRequirements)}[/td]
    [/tr]
    [tr]
    [td]Game Length[/td]
    [td]██░░░░░░░░ 
    [i] ∞ infinite [/i]
    Very short
    [/td]
    [/tr]
    
    [/table]
    
    [hr][/hr]
    `;
};

const drawStars = (stars: number | null) => {
   let starString = '';
    if (stars != null) {
        starString += '★'.repeat(stars) + '☆'.repeat(5 - stars);
    } else {
        starString = '☆'.repeat(5);
    }
    return starString;
};

const Form = () => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(ratingStory);
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(
        generateTable(
          ratingStory,
          ratingGameplay,
          ratingGraphics,
          ratingSound,
          ratingReplay,
          ratingDifficulty,
          ratingBugs,
          ratingRequirements
        )
      );
    } else {
      document.execCommand("copy", true, "hi");
    }
  };
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

  const [ratingLength, setRatingLength] = useState<number | number[]>(50);

  return (
    <Paper className={classes.container}>
      <Typography variant={"h4"} className={classes.title}>
        Form
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
        </Grid>
        <Button
          type={"submit"}
          variant={"contained"}
          className={classes.button}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
