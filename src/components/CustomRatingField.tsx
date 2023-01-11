import React from "react";
import { TextField, Typography, Rating } from "@mui/material/";
import { Dispatch, SetStateAction } from "react";

interface IProps {
    value: number | null;
    setValue: Dispatch<SetStateAction<number | null>>;
    name: string;
}

export default function CustomRatingField(IProps: IProps) {
    return (
        <div>
            <Typography component="legend">{IProps.name}</Typography>
            <Rating
                name={IProps.name}
                value={IProps.value}
                onChange={(event, newValue) => {
                    IProps.setValue(newValue);
                }
                }
            />
        </div>

    )
}
