import React from "react";
import {
  TextField,
  Typography,
  Rating,
  Card,
  CardContent,
} from "@mui/material/";
import { Dispatch, SetStateAction } from "react";
import { Grid, Slider } from "@material-ui/core";

interface IProps {
  value: number | number[];
  setValue: Dispatch<SetStateAction<number | number[]>>;
  name: string;
}

export default function CustomSliderField(IProps: IProps) {
  return (
    <Card>
      <CardContent>
        <Typography component="legend">{IProps.name}</Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="caption"> Short </Typography>
          </Grid>
          <Grid item xs>
            <Slider
              value={IProps.value}
              step={10}
              aria-label="Default"
              valueLabelDisplay="off"
              onChange={(event, newValue) => {
                IProps.setValue(newValue);
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="caption"> Infinite </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
