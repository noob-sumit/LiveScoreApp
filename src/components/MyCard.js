import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core'
import React, { Component, useState } from 'react'
import { getMatchDetail } from "./Api"

const MyCard = ({ match }) => {

    const [detail, setDetail] = useState({})

    const [open, setOpen] = useState(false)

    const handelClick = (id) => {
        getMatchDetail(id)
            .then(data => {
                console.log(data)
                setDetail(data)
                handelOpen()
            })
            .catch(console.error())
    };

    const getMatchCard = () => {
        return (
            <Card style={{ marginTop: 15 }}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item variant="h3">{match["team-1"]}</Grid>
                        <Grid item>
                            <img style={{ width: 85 }} src={require("../img/vs.png")} />
                        </Grid>
                        <Grid item variant="h3">{match["team-2"]}</Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center" >
                        <Button onClick={() => {
                            handelClick(match.unique_id)
                        }} variant="contained" color="primary">
                            show Details
                    </Button>
                        <Button style={{ marginLeft: 5 }} variant="contained" color="primary" >
                            Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>

            </Card>

        )
    }

    const handelOpen = () => {
        setOpen(true)
    }
    const handelClose = () => {
        setOpen(false)
    }
    const getDialog = () => {
        return (

            <Dialog open={open} onClose={handelClose}>
                <DialogTitle id="alert-dialog-title">{"Match details..."}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography>{detail.stat} </Typography>
                        <Typography>
                            Match
                            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>{detail.matchStarted? "Started" : "NOT STARTED YET"}
                            </span>
                        </Typography>
                        <Typography>
                            Score:
                        <span style={{ fontStyle: "italic", fontWeight: "bold" }}>{detail.score}</span>

                        </Typography>
                        < DialogActions>
                            <Button onClick={handelClose} color="Primary" autoFocus>Close</Button>
                        </DialogActions>

                    </DialogContentText>
                </DialogContent>
            </Dialog>
        )
    }

    return (

        <>

            {getMatchCard()}
            {getDialog()}
        </>
    )


}
export default MyCard
