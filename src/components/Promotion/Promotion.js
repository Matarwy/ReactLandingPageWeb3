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

function Promotion(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  return (
    <div className={classes.root}>
      <Container>
        <Chart />
      </Container>
    </div>
  );
}

export default Promotion;
