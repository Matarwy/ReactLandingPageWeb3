import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LangIcon from '@material-ui/icons/Language';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../LogoWithText';
import brand from '../../brand';
// import imgApi from '~/public/images/imgAPI';
import { useTranslation } from 'react-i18next';
import useStyles from './footer-style';

import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import MediumIcon from '../icons/medium';

function Copyright() {
  return (
    <Typography variant="body2" display="block" color="textSecondary">
      Copyright © 2021 TradingPlanet | All rights reserved.
    </Typography>
  );
}

const footer = {
  description: ['Contact', 'Blog', 'Privacy policy', 'WhitePaper'],
  link: ['https://t.me/TradingPlanetExchange', 'https://medium.com/@TradingPlanetEX', 'https://tradingplanet.finance/TradingPlanetWhitePaper.pdf', "https://tradingplanet.finance/TradingPlanetWhitePaper.pdf"],
};


function Footer(props) {
  const {t, i18n} = useTranslation();
  const [ctn, setCtn] = useState(null);
  const classes = useStyles();
  const { invert } = props;
  const [values, setValues] = useState({
    lang: 'eng',
  });

  useEffect(() => {
    setValues({ lang: i18n.language });
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    if (event.target.value === 'ara') {
      i18n.changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      i18n.changeLanguage(event.target.value);
      props.toggleDir('ltr');
    }
  }

  return (
    <Container fixed component="footer">
      <div className={clsx(classes.footer, invert && classes.invert)}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <div className={classes.logo}>
              <Logo />
            </div>
            <Typography color="textPrimary" className={classes.footerDesc} gutterBottom>
              {t('common:crypto-landing.banner_title')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.quickLinks}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {t('common:crypto-landing.footer_link')}
              </Typography>
              <ul>
                {footer.description.map((item, index) => (
                  <li key={item}>
                    <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* {news.map((item, index) => (
              <ButtonBase className={classes.blogItem} href="#" key={index.toString()}>
                <figure>
                  <img src={item.img} alt="thumb" />
                </figure>
                <div className={classes.listText}>
                  <Typography variant="button" className={classes.category}>
                    {t('common:crypto-landing.footer_news')}
                  </Typography>
                  <Typography display="block" component="span">Sed imperdiet enim ligula vitae viverra. </Typography>
                </div>
              </ButtonBase>
            ))} */}
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.socmed}>
              <Link href="https://twitter.com/tradingplanetx">
                <IconButton aria-label="TW" className={classes.margin} size="small">
                  <TwitterIcon style={{color: '#fff'}}/>
                </IconButton>
              </Link>

              <Link href="https://t.me/TradingPlanetExchange">
                <IconButton aria-label="TM" className={classes.margin} size="small">
                  <TelegramIcon  style={{color: '#fff'}}/>
                </IconButton>
              </Link>


              <Link href="https://medium.com/@TradingPlanetEX">
                <IconButton aria-label="MD" className={classes.margin} size="small">
                  <MediumIcon style={{color: '#fff'}}/>
                </IconButton>
              </Link>

            </div>
            <Copyright />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
  invert: PropTypes.bool,
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  invert: false,
  toggleDir: () => {},
};

export default Footer;
