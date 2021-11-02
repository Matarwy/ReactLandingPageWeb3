import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Parallax } from 'react-parallax';
// import imgAPI from '~/public/images/imgAPI';
import { useTranslation } from 'react-i18next';
import { useText } from '../../theme/common';
import useStyles from './benefit-style';

function Benefit(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const {t, i18n} = useTranslation();
  return (
    <div className={classes.root}>
      <div className={classes.parallaxWrap}>
        <Parallax
          bgImage="/images/easter-battle.png"
          bgImageAlt="benefit"
          strength={0}
        >
          <div className={classes.parallaxProps} />
        </Parallax>
      </div>
      <Container fixed={isDesktop}>
        <div className={classes.wrapper}>
          <Grid container>
            <Grid item md={5}>
            </Grid>
            <Grid item md={7}>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

Benefit.propTypes = {
  t: PropTypes.func.isRequired
};

export default Benefit;
