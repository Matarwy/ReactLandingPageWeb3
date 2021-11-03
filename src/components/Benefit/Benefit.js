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

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


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
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="May 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">May 2021</h3>
              <p>
                Prelaunch, marketing, company and software development
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="June 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">June 2021</h3>
              <p>
                Marketing and community developement
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Aug 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Aug 2021</h3>
              <p>
                initial exchange offering
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Oct 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Oct 2021</h3>
              <p>
               Launch trading planet swap platform
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Nov 2021"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Nov 2021</h3>
              <p>
                Launch presale on Dexale
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Dec 2021"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Dec 2021</h3>
              <p>
                Launch other features to swap platform
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Q1 2022"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Q1 2022</h3>
              <p>
               TP will be listed On CMC, coingecko and centrali-zed platform
              </p>
            </VerticalTimelineElement>


             <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Q2 2022"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Q2 2022</h3>
              <p>
               Centalized platform
              </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Q1 2023"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Q1 2023</h3>
              <p>
               strat the work on TP Blockchain
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Q3 2023"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Q3 2023</h3>
              <p>
               Launch Trading Planet Prepaid Card
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>

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


/*




*/