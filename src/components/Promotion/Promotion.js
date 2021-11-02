import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ButtonBase from '@material-ui/core/ButtonBase';
import NextIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Slider from 'react-animated-slider';
import useStyles from './promotion-style';
// import imgAPI from '~/public/images/imgAPI';
import { useTranslation } from 'react-i18next';

const sliderData = [
  {
    image: "/images/crypto/trade.png",
    desc: "prelaunch marketing, company and software development",
    date: 'May 2021'
  },
  {
    image: "/images/crypto/trade.png",
    desc: "Marketing and community development",
    date: 'June 2021'
  },
  {
    image: "/images/crypto/trade.png",
    desc: "launch trading planet swap platform",
    date: 'OCT 2021'
  },
  {
    image: "/images/crypto/trade.png",
    desc: "Launch presale on dexale",
    date: 'NOV 2021'
  },
  {
    image: "/images/crypto/trade.png",
    desc: "launch other features to swap platform",
    date: 'Dec 2021'
  },
  {
    image: "/images/crypto/trade.png",
    desc: "TP will be listed on CMC coingecko and centralia zed platform",
    date: 'Q1 2022'
  },
  {
    image: "/images/crypto/trade.png",
    desc: "launch trading planet centralized platform",
    date: 'Q2 2022'
  },
  {
    image: "/images/crypto/trade.png",
    desc: "Start The work on TP blockchain",
    date: 'Q1 2023'
  },
  {
    image: "/images/crypto/trade.png",
    desc: "Launch Trading Planet Prepaid card",
    date: 'Q3 2021'
  },
];

function Promotion(props) {
  const classes = useStyles();
  const {t, i18n} = useTranslation();
  return (
    <div className={classes.root}>
      <div className={classes.sliderWrap}>
        <Slider
          className="slider-wrapper"
          previousButton={(
            <NextIcon />
          )}
          nextButton={(
            <NextIcon />
          )}
        >
          {sliderData.map((item, index) => (
            <div className={clsx(classes.item, index % 2 === 1 ? classes.odd : classes.even)} key={index.toString()}>
              <Grid container>
                <Grid item xs={12} lg={4}>
                  &nbsp;
                </Grid>
                <Grid item xs={12} lg={7}>
                  <Hidden mdDown>
                    <section>
                      <div className={classes.imgWrap}>
                        <div className={classes.decoration}>
                          {/* <svg> */}
                            {/* <use xlinkHref="/en/images/crypto/deco-promo.png" /> */}
                          {/* </svg> */}
                        </div>
                        <figure className={classes.image}>
                          <img src={item.image} alt={item.title} />
                        </figure>
                      </div>
                    </section>
                  </Hidden>
                  <Paper className={classes.paper}>
                    {/* <Typography variant="h1">
                      <ButtonBase>
                        {item.title}
                      </ButtonBase>
                    </Typography> */}
                    <Typography component="p">
                      {item.desc}
                    </Typography>
                    <section className={classes.time}>
                      <Typography component="h6">
                        {t('common:crypto-landing.promo_periode')}
                        :&nbsp;
                        {item.date}
                      </Typography>
                    </section>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

Promotion.propTypes = {
  t: PropTypes.func.isRequired
};

export default Promotion;
