import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { useText } from '../../theme/common';
import Parallax from '../Parallax/Hexagonal';
import Title from '../Title';
import useStyles from './faq-style';

const faqData = [
  {
    q: 'Is the TP coin BEP-20 compatible?',
    a: 'Yes, TP Coin is based on the BSC blockchain platform and BEP-20 compatible.'
  },
  {
    q: 'Am I buying on my own Risk?',
    a: 'Because it is a decentralized platform Token  that has solutions for many issues related to security, privacy, speed of transections, in addition to very low fees. Do not forget  that our limit is the sky!'
  },
  {
    q: 'Where and how do I keep my TP Coin?',
    a: 'You can keep your TP Token in Trading Planet wallet and in every wallet Which is BSC compatible and supports the TP Token'
  },
  {
    q: 'What is the marketing strategy of Trading Planet?',
    a: 'In order to market Trading Planet Swap in a targeted manner, a digital marketing strategy is used above all. On social media mainly the channels Instagram, Facebook and YouTube are used from the beginning and the specific target group is addressed in the best possible way through appropriate posts and story contributions'
  }
];

function Faq(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const {t, i18n} = useTranslation();
  const [expanded, setExpanded] = React.useState(0);
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.parallax}>
        <Parallax />
      </div>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Title text={t('common:crypto-landing.faq_title')} align={isMobile ? 'center' : 'left'} />
            <Typography className={text.subtitle2} align={isMobile ? 'center' : 'left'} component="p">
              {t('common:crypto-landing.faq_subtitle')}
            </Typography>
            <Hidden smDown>
              <div className={classes.illustration}>
                <img src="/images/498-[Converted].png" alt="illustration" />
              </div>
            </Hidden>
          </Grid>
          <Grid item md={6}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{item.q}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Faq.propTypes = {
  t: PropTypes.func.isRequired
};

export default Faq;
