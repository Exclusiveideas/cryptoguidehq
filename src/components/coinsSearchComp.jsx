import React from 'react';
import "@styles/coins_page.css";
import btc_icon from '@assets/btc_icon.svg';
import { createSearchParams, useNavigate } from 'react-router-dom';
import millify from 'millify';

const CoinsSearchComp = ({ index, currency }) => {
    const navigate = useNavigate();

    const navigateToCoins = () => {
      navigate({
        pathname: `/coin/${currency?.uuid}`,
        search: createSearchParams({
            coinId: currency?.uuid
        }).toString()
      });
    }

    
    return (
        <div className="searchRes_wrapper">
            <div className="searchRes_top">
                <div className="resTop_left">
                    <span className="search_index">{index + 1}.</span>
                    <span className="search_coin_name">{currency?.name}</span>
                </div>
                <div className="resTop_right">
                    <img src={currency?.iconUrl || btc_icon} alt="coin logo" className="coinp_coin_logo" />
                </div>

                <hr className="searchRes_topLine" />
            </div>
            <div className="searchRes_mid">
                <div className="peekInfo">
                    <p className="peekInfo_text">Price: <span className='peekInfo_val'>${millify(currency.price)}</span></p>
                </div>
                <div className="peekInfo">
                    <p className="peekInfo_text">Market Cap: <span className='peekInfo_val'>${millify(currency.marketCap)}</span></p>
                </div>
                <div className="peekInfo">
                    <p className="peekInfo_text">Daily Change: <span className='peekInfo_val'>{(currency?.change)} </span></p>
                </div>
            </div>
            <div className="searchRes_bottom">
                <div className="view_more_btn" onClick={navigateToCoins}>
                    <p>view more</p>
                </div>
            </div>
        </div>
    )
}

export default CoinsSearchComp;