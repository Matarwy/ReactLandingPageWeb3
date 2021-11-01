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
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';

const sliderData = [
  {
    image: "/images/crypto/trade.png",
    title: 'our target is to be used by millions',
    desc: "On Trading Planet Swap, you can make trades on the Binance Smart Chain. It's on of the largest decentralized network in the world of blockchain, it's impossible to run an exchange without using it.Binance Smart Chain came recently and helped solve the problems of Etherium Blockchain. With faster trades and lower fees, Binance is definitely one to watch out for.",
    date: '12 Jul - 10 Aug'
  }
];

function Promotion(props) {
  const classes = useStyles();
  const { t } = props;
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
                    <Typography variant="h1">
                      <ButtonBase>
                        {item.title}
                      </ButtonBase>
                    </Typography>
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

export default withTranslation(['crypto-landing'])(Promotion);
