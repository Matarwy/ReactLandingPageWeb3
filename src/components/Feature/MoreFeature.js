import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createMuiTheme, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactWOW from 'react-wow';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useTranslation } from 'react-i18next';
import { useText } from '../../theme/common';
import Title from '../Title';
import useStyles from './feature-style';


function MoreFeature(props) {
  const classes = useStyles();
  const text = useText();
  const [play, setPlay] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const {t, i18n} = useTranslation();

  const themeProgress = color => createMuiTheme({
    palette: {
      primary: {
        main: color
      }
    }
  });

  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 200);
  };

  return (
    <div className={classes.moreFeature}>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid container spacing={6} alignItems="center">
            <Grid item md={6} xs={12}>
              <div className={clsx(classes.text, isMobile && classes.center)}>
                <Title text={t('common:crypto-landing.morefeature_title1')} align={isMobile ? 'center' : 'left'} />
                <Typography className={text.subtitle2} display="block" align={isMobile ? 'center' : 'left'}>
                  {t('common:crypto-landing.morefeature_subtitle1')}
                </Typography>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              {/* <ReactWOW animation="fadeInLeftShort" delay="0.3s" duration="0.3s"> */}
                <figure className={classes.illustration}>
                  <img src="/images/crypto/deco-promo.png" alt="feature" />
                </figure>
              {/* </ReactWOW> */}
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid
            container
            direction={isMobile ? 'column-reverse' : 'row'}
            spacing={6}
            alignItems="center"
          >
            <Grid item md={6} xs={12}>
              {/* <ReactWOW animation="fadeInRightShort" offset={-100} delay="0.3s" duration="0.3s"> */}
                <figure className={classes.illustration}>
                  <img src="/images/burnt-cake.png" alt="feature" />
                </figure>
              {/* </ReactWOW> */}
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={clsx(classes.text, isMobile && classes.center)}>
                <Title text={t('common:crypto-landing.morefeature_title2')} align={isMobile ? 'center' : 'left'} />
                <Typography className={text.subtitle2} display="block" align={isMobile ? 'center' : 'left'}>
                  {t('common:crypto-landing.morefeature_subtitle2')}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container>
            <Grid item sm={12}>
              <div className={clsx(classes.text, classes.center)}>
                <Title className={text.subtitle2} text={t('common:crypto-landing.morefeature_title3')} align="center" />
                <Typography display="block" align="center" className={text.subtitle2}>
                  {t('common:crypto-landing.morefeature_subtitle3')}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default MoreFeature;
