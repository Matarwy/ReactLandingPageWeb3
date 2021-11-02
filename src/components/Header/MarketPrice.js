import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Carousel from 'react-slick';
import useStyles from './header-style';

const marketList = [
  {
    logo: '/images/crypto/btc.png',
    name: 'BTC',
    price: 10200,
    status: 'up',
    percent: 8,
  },
  {
    logo: '/images/crypto/xrp.png',
    name: 'XRP',
    price: 0.003,
    status: 'down',
    percent: 3,
  },
  {
    logo: '/images/crypto/nem.png',
    name: 'NEM',
    price: 0.003,
    status: 'up',
    percent: 8,
  },
  {
    logo: '/images/crypto/iot.png',
    name: 'IOTA',
    price: 0.010,
    status: 'down',
    percent: 3,
  },
  {
    logo: '/images/crypto/mnr.png',
    name: 'MNR',
    price: 1.45,
    status: 'up',
    percent: 8,
  },
  {
    logo: '/images/crypto/byc.png',
    name: 'BYC',
    price: 22.34,
    status: 'down',
    percent: 3,
  },
  {
    logo: '/images/crypto/iot.png',
    name: 'IOTA',
    price: 0.010,
    status: 'down',
    percent: 3,
  },
  {
    logo: '/images/crypto/mnr.png',
    name: 'MNR',
    price: 1.45,
    status: 'up',
    percent: 8,
  },
  {
    logo: '/images/crypto/byc.png',
    name: 'BYC',
    price: 22.34,
    status: 'down',
    percent: 3,
  },
];




export default function MarketPrice() {
  const classes = useStyles();

  const [marketList, setMarketList] = useState([]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    cssEase: 'linear',
    pauseOnHover: true
  };


  useEffect(()=> {

    fetch("https://tokens.tradingplanet.finance/tradingplanet-default.json")
    .then(res => res.json())
    .then(data => {
      setMarketList(data.tokens)
    })
    .catch(()=> {})

  }, [])
  const renderPercent = (arrow, percent) => {
    switch (arrow) {
      case 'down':
        return (
          <span className={classes.down}>
            <i>▼</i>
            {percent}
            %
          </span>
        );
      case 'up':
        return (
          <span className={classes.up}>
            <i>▲</i>
            {percent}
            %
          </span>
        );
      default:
        return (
          <span className={classes.stay}>
            <i>-</i>
            {percent}
            %
          </span>
        );
    }
  };
  return (
    <div className={classes.market}>
      <Carousel {...settings}>
        {marketList.map((item, index) => (
          <div className={classes.item} key={index.toString()}>
            <div className={classes.coin}>
              <Avatar src={item.logoURI} alt={item.name} style={{width: 30, height: 30}}/>
              <span style={{marginLeft: 8}}>{item.symbol}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
