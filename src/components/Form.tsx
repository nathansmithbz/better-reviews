import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import {
  Avatar,
  Grid,
  Paper,
  Typography,
  Button,
  Snackbar,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import CustomRatingField from "./CustomRatingField";
import CustomSliderField from "./CustomSliderField";
import Header from "./Header";
import { generateTable } from "./generateTable";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmojiChecked(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          ratingLength,
          emojiChecked
        )
      );
      setSuccessBarOpen(true);
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
  const [emojiChecked, setEmojiChecked] = React.useState(false);

  const [successBarOpen, setSuccessBarOpen] = useState(false);

  const [ratingLength, setRatingLength] = useState<number | number[]>(50);

  return (
      <Grid container direction="column">
        <form onSubmit={(e) => handleSubmit(e)}>
          <Grid item container spacing={2}>
            <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={4}>
              <CustomRatingField
                value={ratingOverall}
                setValue={setratingOverall}
                name={"Overall Rating"}
              ></CustomRatingField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomRatingField
                value={ratingStory}
                setValue={setRatingStory}
                name={"Story"}
              ></CustomRatingField>
            </Grid>
            <Grid item xs={0} sm={2} />
            <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={4}>
              <CustomRatingField
                value={ratingGameplay}
                setValue={setRatingGameplay}
                name={"Gameplay"}
              ></CustomRatingField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomRatingField
                value={ratingGraphics}
                setValue={setRatingGraphics}
                name={"Graphics"}
              ></CustomRatingField>
            </Grid>
            <Grid item xs={0} sm={2} />
            <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={4}>
              <CustomRatingField
                value={ratingSound}
                setValue={setRatingSound}
                name={"Sound Design"}
              ></CustomRatingField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomRatingField
                value={ratingReplay}
                setValue={setRatingReplay}
                name={"Replay Value"}
              ></CustomRatingField>
            </Grid>
            <Grid item xs={0} sm={2} />
            <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={4}>
              <CustomRatingField
                value={ratingDifficulty}
                setValue={setRatingDifficulty}
                name={"Difficulty"}
              ></CustomRatingField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomRatingField
                value={ratingBugs}
                setValue={setRatingBugs}
                name={"Bug free?"}
              ></CustomRatingField>
            </Grid>
            <Grid item xs={0} sm={2} />
            <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={4}>
              <CustomRatingField
                value={ratingRequirements}
                setValue={setRatingRequirements}
                name={"PC Requirements"}
              ></CustomRatingField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomSliderField
                value={ratingLength}
                setValue={setRatingLength}
                name={"Game Length"}
              ></CustomSliderField>
              <Grid item xs={0} sm={2} />
            </Grid>
          </Grid>
          <FormControlLabel
            control={
              <Checkbox checked={emojiChecked} onChange={handleChange} />
            }
            label="Add Emojis"
          />
          <Button type={"submit"} variant={"contained"}>
            Copy to clipboard
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={successBarOpen}
            autoHideDuration={3000}
            onClose={() => setSuccessBarOpen(false)}
          >
            <Alert severity="success" sx={{ width: "100%" }}>
              Coppied to cliboard!
            </Alert>
          </Snackbar>
        </form>
      </Grid>
  );
};

export default Form;
