import React from "react";
import { TextField, Typography, Rating } from "@mui/material/";
import { Dispatch, SetStateAction } from "react";
import { Slider } from "@material-ui/core";

interface IProps {
    value: number | number[];
    setValue: Dispatch<SetStateAction<number | number[]>>;
    name: string;
}

export default function CustomSliderField(IProps: IProps) {
    return (
        <div>
            <Typography component="legend">{IProps.name}</Typography>
            <Slider value={IProps.value} step={10} aria-label="Default" valueLabelDisplay="off"
                onChange={(event, newValue) => {
                    IProps.setValue(newValue);
                }
                }
            />
        </div>

    )
}
