import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { useTranslation } from 'react-i18next';
import Settings from './Settings';
import MarketPrice from './MarketPrice';
import MobileMenu from './MobileMenu';
import routeLink from '../../link';
import Logo from '../Logo';
import useStyles from './header-style';
import navMenu from './menu';
import Link from '@material-ui/core/Link';


let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function Header(props) {
  const {t, i18n} = useTranslation(['crypto-landing']);
  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 80);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

  }, []);
  const classes = useStyles();
  const theme = useTheme();
  const {
    onToggleDark,
    onToggleDir,
    invert
  } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0], 100),
    createData(navMenu[1], '#' + navMenu[1]),
    createData(navMenu[2], '#' + navMenu[2]),
    createData(navMenu[3], '#' + navMenu[3]),
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };



  return (
    <Fragment>
      { isMobile && (<MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />) }
      {!invert && (
        <Hidden mdDown>
          <MarketPrice />
        </Hidden>
      )}
      <AppBar
        component="header"
        position="relative"
        id="header"
        className={clsx(
          classes.header,
          fixed && classes.fixed,
          invert && classes.invert,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={clsx(classes.navMenu, invert && classes.invert)}>
              { isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={clsx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')}
                >
                  <span className="hamburger-box">
                    <span className={clsx(classes.bar, 'hamburger-inner')} />
                  </span>
                </IconButton>
              )}
              <div className={classes.logo}>
                {invert ? (
                  <a href={routeLink.crypto.home}>
                     <img src="/images/3d.png" alt="3d" style={{maxWidth: 50, objectFit: 'cover'}}/>
                  </a>
                ) : (
                  <AnchorLink href="#home">
                    <img src="/images/3d.png" alt="3d" style={{maxWidth: 50, objectFit: 'cover'}}/>
                  </AnchorLink>
                )}
              </div>
              {isDesktop && (
                <Scrollspy
                  items={navMenu}
                  currentClassName="active"
                >
                  {menuList.map(item => (
                    <li key={item.id.toString()}>
                      {invert ? (
                        // eslint-disable-next-line
                        <Button offset={item.offset || 0} href={'/' + item.url}>
                          {t('common:crypto-landing.header_' + item.name)}
                        </Button>
                      ) : (
                        // eslint-disable-next-line
                        <Button component={AnchorLink} offset={item.offset || 0} href={item.url}>
                          {t('common:crypto-landing.header_' + item.name)}
                        </Button>
                      )}
                    </li>
                  ))}
                  <li>
                    <Button href={routeLink.crypto.contact}>
                      {t('common:crypto-landing.header_contact')}
                    </Button>
                  </li>
                </Scrollspy>
              )}
            </nav>
            <Hidden mdDown>
              <Divider className={classes.divider} />
            </Hidden>
            <nav className={clsx(classes.navMenu, classes.navAuth)}>
                  <Button href="https://tradingplanet.finance/swap?outputCurrency=0x363387914c38de4e01acb79221635fe87288ddb9" target="_blank" variant="contained" color="secondary" className={classes.button}>
                    {t('common:crypto-landing.header_launch')}
                  </Button>
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} invert={invert} />
            </nav>
          </div>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
  t: PropTypes.func.isRequired
};

Header.defaultProps = {
  sticky: false,
  invert: false
};

export default Header;
