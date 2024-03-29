import React from 'react';
import PropTypes from 'prop-types';
// import Head from 'next/head';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import {Helmet} from "react-helmet";
import Banner from '../components/Banner';
import Promotion from '../components/Promotion';
import Feature from '../components/Feature';
import Benefit from '../components/Benefit';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import FooterWithCounter from '../components/Footer/FooterWithCounter';
import PageNav from '../components/PageNav';
import Notification from '../components/Notification';
import brand from '../brand';
import Header from '../components/Header';

import Card from '../components/Feature/Card';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6),
    }
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(6),
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2),
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2),
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Home(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Helmet>
        <title>
          { brand.crypto.name }
          &nbsp; - Home Page
        </title>
      </Helmet>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={classes.containerWrap}>
          <section id="banner">
            <Banner />
          </section>
          <section id="promotions">
            <Promotion />
          </section>
          <section id="feature" className={isTablet ? classes.spaceTopShort : ''}>
            <Feature />
          </section>
          <section id="benefit" className={classes.spaceTopShort}>
            <Benefit />
          </section>
          <section id="testimonials" className={classes.spaceTop}>
            <Testimonials />
          </section>
          <section id="faq" className={classes.spaceTop}>
            <Faq />
          </section>
        </main>
        <FooterWithCounter toggleDir={onToggleDir} />
        <Hidden mdDown>
          <PageNav />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'crypto-landing'],
});

Home.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};


export default Home;
