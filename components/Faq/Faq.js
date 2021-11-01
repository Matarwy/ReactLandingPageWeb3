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
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Parallax from '../Parallax/Hexagonal';
import Title from '../Title';
import useStyles from './faq-style';

const faqData = [
  {
    q: 'Is the TP coin ERC-20 compatible?',
    a: 'Yes, TP Coin is based on the Ethereum blockchain platform and ERC-20 compatible.'
  },
  {
    q: 'Am I buying on my own Risk?',
    a: 'Yes, you are the only person responsible for your own decisions.'
  },
  {
    q: 'Where and how do I keep my TP Coin?',
    a: 'You can keep your TP Coin in every wallet, which is ERC-20 compatible and supports the TP Coin.'
  },
  {
    q: 'Is there a refund rule?',
    a: ' No. It is not refundable.'
  }
];

function Faq(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const { t } = props;
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

export default withTranslation(['crypto-landing'])(Faq);
