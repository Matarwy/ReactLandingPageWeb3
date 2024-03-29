import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-slick';
import clsx from 'clsx';
import imgApi from '../../imgAPI';
import { useTranslation } from 'react-i18next';
import { useText } from '../../theme/common';
import Title from '../Title';
import TestiCard from '../Cards/Testimonial';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'Great team Good charity work',
    name: 'M. Phillips',
    avatar: imgApi.avatar[6],
    title: 'Chief Digital Officer',
  },
  {
    text: 'im very happy with stellar its ah good coin and it have ah good future vision =)',
    name: 'Nick Hilton',
    avatar: imgApi.avatar[7],
    title: 'Chief Digital Officer',
  },
]

function Testimonials(props) {
  const slider = useRef(null);
  const classes = useStyle();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const {t, i18n} = useTranslation();
  const [active, setActive] = useState(0);
  const [activeTransition, setActiveTransition] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    afterChange: (current) => setActive(current),
    beforeChange: (current, next) => setActiveTransition(next),
  };
  const slideState = index => {
    if (index === activeTransition - 1 || index === active - 1) {
      return classes.past;
    }
    if (index === activeTransition + 1 || index === active + 1) {
      return classes.future;
    }
    if (index === activeTransition || index === active) {
      return classes.current;
    }
    return classes.slide;
  };
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Title text={t('common:crypto-landing.testi_title')} align="center" />
        <Typography className={text.subtitle2} align="center">
          {t('common:crypto-landing.testi_subtitle')}
        </Typography>
        <Grid container spacing={6}>
          <Grid item md={1} xs={12} />
          <Grid item md={10} xs={12}>
            <div className={classes.sliderWrap}>
              <div className={classes.carousel}>
                <button
                  type="button"
                  className={clsx(classes.nav, classes.prev)}
                  onClick={() => slider.current.slickPrev()}
                >
                  <i className="ion-ios-arrow-back" />
                </button>
                <Carousel ref={slider} {...settings}>
                  {testiContent.map((item, index) => (
                    <div key={index.toString()} className={clsx(classes.item, slideState(index))}>
                      <div className={classes.slideContent}>
                        <TestiCard
                          text={item.text}
                          name={item.name}
                          title={item.title}
                          avatar={item.avatar}
                          active={index === active}
                        />
                      </div>
                    </div>
                  ))}
                </Carousel>
                <button
                  type="button"
                  className={clsx(classes.nav, classes.next)}
                  onClick={() => slider.current.slickNext()}
                >
                  <i className="ion-ios-arrow-forward" />
                </button>
              </div>
              <div className={classes.pagination}>
                <ul>
                  {[...Array(testiContent.length)].map((e, index) => (
                    <li
                      key={index.toString()}
                      className={index === active ? classes.active : ''}
                    >
                      <button type="button" onClick={() => slider.current.slickGoTo(index)} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Testimonials.propTypes = {
  t: PropTypes.func.isRequired
};

export default Testimonials;
