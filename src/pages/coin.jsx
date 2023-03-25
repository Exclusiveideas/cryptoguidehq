import React, { useEffect, useRef, useState } from 'react';
import '@styles/coin_page.css';
import btc_blue from '@assets/btc_blue.svg';
import Select from 'react-select'
import gsap from 'gsap';
import { useLocation, useSearchParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';
import millify from 'millify';
import LineChart from '../components/lineChart';
import { CheckOutlined, DollarCircleOutlined, ExclamationCircleOutlined, FundOutlined, MoneyCollectOutlined, NumberOutlined, StopOutlined, ThunderboltOutlined, TrophyOutlined } from '@ant-design/icons';
import { Typography } from 'antd';


const { Title, Text } = Typography;

const durOptions = [
    { value: '3h', label: '3h' },
    { value: '24h', label: '24h' },
    { value: '7d', label: '7d' },
    { value: '30d', label: '30d' },
    { value: '1y', label: '1y' },
    { value: '3m', label: '3m' },
    { value: '3y', label: '3y' },
    { value: '5y', label: '5y' },
]


const Coin = () => {
    const coinLogoRef = useRef();
    const { pathname } = useLocation();
    const [searchParams] = useSearchParams();
    const coinId = searchParams.get("coinId")

    const [timePeriod, setTimePeriod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
    const cryptoDetails = data?.data?.coin;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    useEffect(() => {
        if (!data) return
        const ctx = gsap.context((self) => {
            gsap.from(coinLogoRef.current, {
                duration: 3,
                opacity: 0,
            })

        }, coinLogoRef); // <- Scope!

        return () => ctx.revert()
    }, [data])


    const changeSelectedOption = ({ value }) => {
        setTimePeriod(value)
    }

    if (!data || isFetching) return <Loader />;

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${cryptoDetails['24hVolume'] && millify(cryptoDetails['24hVolume'])}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
    ];



    return (
        <div className='coin_page'>
            <div className="coinPage_headerSect">
                <div className="cp_inner_curved_rect"></div>
                <div className="cp_outer_curved_rect"></div>
                <img ref={coinLogoRef} src={data?.data?.coin?.iconUrl || btc_blue} alt="coin logo" className="coinPage_coinLogo" />
            </div>
            <div className="coinPage_graphWrapper">
                <div className="cp_graphContainer">
                    <div className="cp_graphCont_top">
                        <div className="cp_graph_selectCont">
                            <Select className='select_cont' onChange={changeSelectedOption} options={durOptions} />
                        </div>
                        <div className="cp_graph_titleCont">
                            <p className="graph_name">{data?.data?.coin?.name} CHART</p>
                        </div>
                        <div className="graph_change_percent">
                            <p className="label">Change: </p>
                            <p className="value" style={{ backgroundColor: coinHistory?.data?.change > 1 ? "var(--graph-change-positive)" : "var(--graph-change-negative)" }}>{coinHistory?.data?.change}%</p>
                        </div>
                    </div>
                    <div className="cp_graphCont_bottom">
                        <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} />
                    </div>
                </div>
            </div>
            <div className="cp_info_wrapper">
                <div className="cp_what_is_wrapper">
                    <p className="cp_info_header_text">What is {data?.data?.coin?.name}?</p>
                    <p className="desc_text">
                        {data?.data?.coin?.description}
                    </p>
                </div>
                <div className="cp_stats_wrapper">
                    <p className="cp_info_header_text">STATS</p>
                    <div className="cp_stats_item_cont">
                        <div className="stats">
                            {stats.map((stat, i) => (
                                <StatsItemComp key={i} stat={stat} />
                            ))}
                        </div>
                        <div className="genStats">
                            {genericStats.map((stat, i) => (
                                <StatsItemComp key={i} stat={stat} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="cp_resources_wrapper">
                    <p className="cp_info_header_text">RESOURCES</p>
                    <div className="cp_resources_item_cont">
                        {data?.data?.coin?.links?.map(((link, i) => (
                            <ResourceItemComp key={i} resource={link} />
                        )))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin;


const StatsItemComp = ({ stat }) => (
    <div className="stats_item_wrapper">
        <div className="stats_item_left">
            <Text style={{ color: "#0071F2" }} className="stas_icon">{stat?.icon}</Text>
            <p>{stat?.title}</p>
        </div>
        <div className="stats_item_right">
            <span>{stat?.value}</span>
        </div>
    </div>
)


const ResourceItemComp = ({ resource }) => (
    <div className="resource_item_wrapper">
        <div className="resource_item_left">
            <p>{resource?.type}</p>
        </div>
        <div className="resource_item_right">
            <a href={resource?.url}>{resource?.name}</a>
        </div>
    </div>
)