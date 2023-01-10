import React, { useState } from "react";
import { createStyles, makeStyles, Typography, Paper, Button } from "@material-ui/core";
import Grid from '@mui/material/Grid';

import CustomTextField from "./CustomTextField";


const useStyles = makeStyles(() => createStyles({
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
        textAlign: "center"
    },
    title: {
        margin: "0px 0 20px 0"
    },
    button: {
        margin: "20px 0"
    }
}))


const Form = () => {

    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(ratingGameplay)
    }

    const [ratingStory, setRatingStory] = useState<number | null>(1);
    const [ratingGameplay, setRatingGameplay] = useState<number | null>(1);
    const [ratingGraphics, setRatingGraphics] = useState<number | null>(1);
    const [ratingSound, setRatingSound] = useState<number | null>(1);
    const [ratingReplay, setRatingReplay] = useState<number | null>(1);


    return (
        <Paper className={classes.container}>
            <Typography variant={"h4"} className={classes.title}>Form</Typography>
            <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>

                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <CustomTextField value={ratingStory} setValue={setRatingStory} name={"Story"} ></CustomTextField>

                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField value={ratingGameplay} setValue={setRatingGameplay} name={"Gameplay"} ></CustomTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField value={ratingGraphics} setValue={setRatingGraphics} name={"Graphics"} ></CustomTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField value={ratingSound} setValue={setRatingSound} name={"Sound Design"} ></CustomTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField value={ratingReplay} setValue={setRatingReplay} name={"Replay Value"} ></CustomTextField>
                    </Grid>
                </Grid>
                <Button type={"submit"} variant={"contained"} className={classes.button}>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;


