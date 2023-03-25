import React from 'react';
import "@styles/news_page.css";
import demoImage from '@assets/demoImg.jpg';
import demoLogo from '@assets/demoLogo.svg';
import moment from 'moment';

const NewsSearchComp = ({ news }) => { 
    return (
        <div className="newsRes_wrapper">
            <div className="news_res_top">
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="thumbnail" className="news_thumbnail" />
            </div>
            <div className="news_res_mid">
                <p className="news_card_title">{news?.name}</p>
                <p className="news_card_desc">
                    {news.description.length > 150 ? `${news.description.substring(0, 150)}...` : news.description}
                </p>
            </div>
            <div className="news_res_midbottom">
                <div className="provider_wrapper">
                    <img className='provider_avatar' src={news.provider[0]?.image?.thumbnail?.contentUrl || demoLogo} alt="avatar" />
                    <p className="provider-name">{news?.provider[0]?.name}</p>
                </div>
                <p className='date_published'>{moment(news?.datePublished).startOf('ss').fromNow()}</p>
            </div>
            <div className="news_res_bottom">
                <a href={news?.url} target="_blank" className="news_card_btn">
                    Read more
                </a>
            </div>
        </div>
    )
}

export default NewsSearchComp;