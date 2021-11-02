import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import YouTube from 'react-youtube';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
// import imgAPI from '~/public/images/imgAPI';
import { useTranslation } from 'react-i18next';
import yt from '../../youtube';
import { useText } from '../../theme/common';
import Title from '../Title';
import useStyles from './feature-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function MainFeature(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const {t, i18n} = useTranslation();
  const [player, setPlayer] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    if (yt.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'https://localhost:3008'
    }
  };

  return (
    <div className={classes.mainFeature}>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.videoPopup }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {t('common:crypto-landing.mainfeature_title')}
          <IconButton onClick={handleClose} className={classes.closeBtn}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId="h93OfqakVBI"
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={6} xs={12}>
            <Title text={t('common:crypto-landing.mainfeature_title')} align={isMobile ? 'center' : 'left'} />
            <Typography display="block" gutterBottom align={isMobile ? 'center' : 'left'} className={text.subtitle2}>
              {t('common:crypto-landing.mainfeature_subtitle')}
            </Typography>
            <Paper className={classes.video}>
              <figure>
                <img src={"/images/video_cover.jpg"} alt="cover" />
              </figure>
              <IconButton className={classes.playBtn} onClick={handleClickOpen}>
                <span className="ion-ios-play" />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12} className={classes.featureWrap}>
            <div className={classes.deco}>
              <img src={"/images/crypto/help.png"} alt="deco" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

MainFeature.propTypes = {
  t: PropTypes.func.isRequired
};

export default MainFeature;
