import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useText } from '../../theme/common';
import useStyles from './banner-style';
import Link from '@material-ui/core/Link';
import { useTranslation } from 'react-i18next';

function Banner(props) {


  const classes = useStyles();
  const text = useText();
  const elem = useRef(null);

  // const particleRef = useRef(null)

  const {t, i18n} = useTranslation(['crypto-landing']);
  const theme = useTheme();

  const [hide, setHide] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleScroll = () => {
    if (!elem.current) {
      return;
    }
    const doc = document.documentElement;
    const elTop = elem.current.offsetTop - 200;
    const elBottom = elTop + elem.current.getBoundingClientRect().height;
    if (doc.scrollTop > elTop && doc.scrollTop < elBottom) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  useEffect(() => {
    window.particlesJS && window.particlesJS('particles_backgrond', {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
    window.addEventListener('scroll', handleScroll);


    console.log(i18n)
  });

  return (
    <div className={classes.root} ref={elem}>
      <div className={classes.canvasWrap}>
        <div className={classes.overlay}>
          <div className={clsx(classes.decoInner, hide && classes.hide)}>
            <div id="particles_backgrond" className={classes.particleBackground} />
          </div>
        </div>
      </div>
      <Container fixed>
        <div className={classes.bannerWrap}>
          <Grid container alignItems="center" spacing={6}>
            <Grid item xs={12} md={8}>
              <div className={classes.text}>
                <Typography variant="h4" className={text.title2}>
                  {t('common:crypto-landing.banner_title')}
                </Typography>
                <Typography component="p" className={text.subtitle2}>
                  {t('common:crypto-landing.banner_subtitle')}
                </Typography>
              </div>
              <div className={classes.btnArea}>
              <Link href="https://www.pinksale.finance/#/launchpad/0x9afC5787e371d56d8502F962f68c4a272a214e9D?chain=BSC" target="_blank">
                <Button variant="contained" color="secondary" size="large" fullWidth={isMobile}>
                  {t('common:crypto-landing.banner_buytp')}
                </Button>
                </Link>
                <Link href="https://tradingplanet.finance/TradingPlanetWhitePaper.pdf" target="_blank">
                <Button variant="outlined" className={classes.invert} size="large" fullWidth={isMobile}>
                  {t('common:crypto-landing.banner_learn')}
                </Button>
                </Link>
              </div>
            </Grid>
            {/* <Grid item xs={12} md={4}>
              <figure className={classes.objectArt}>
                <img src="/images/crypto/banner-art.png" alt="illustration" />
              </figure>
            </Grid> */}
          </Grid>
        </div>
      </Container>
      <div className={classes.decoBottom}>
        <svg>
          <use xlinkHref="/images/crypto/deco-banner.svg#main" />
        </svg>
      </div>
    </div>
  );
}

Banner.propTypes = {
  t: PropTypes.func.isRequired
};

export default Banner;
