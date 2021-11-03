import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import ButtonBase from "@material-ui/core/ButtonBase";
import NextIcon from "@material-ui/icons/ArrowForward";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Slider from "react-animated-slider";
import useStyles from "./promotion-style";
import Container from "@material-ui/core/Container";
import { useTranslation } from "react-i18next";

import Chart from "./chart";

const Circle = ({color}) => (
              <span
                style={{
                  backgroundColor: color,
                  display: "inline-block",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  marginRight: 5
                }}
              />
)

function Promotion(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          style={{
            justifyContent: "center",
          }}
          alignItems="center"
        >
          <Typography variant="h4">Token Distribution</Typography>
        </Grid>
        <Grid
          container
          style={{
            justifyContent: "center",
            paddingTop: 40,
          }}
          alignItems="center"
        >
          <Chart />
          <div
          style={{
            marginLeft: 15
          }}
          >
            <Typography>
              <Circle color="rgb(255, 99, 132)" />
              Public sale</Typography>
            <Typography>
            <Circle color="rgb(54, 162, 235)" />
              Liquidity</Typography>
            <Typography>
            <Circle color="rgb(255, 205, 86)" />
              Rewards</Typography>
            <Typography>
            <Circle color="rgb(63, 81, 181)" />
              Team</Typography>
            <Typography>
            <Circle color="rgb(0, 150, 136)" />
              Advisor</Typography>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default Promotion;
