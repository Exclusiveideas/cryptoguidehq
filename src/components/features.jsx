import React, { useEffect, useRef, useState } from 'react'
import '@styles/features.css';
import db_icon from '@assets/db.svg';
import globe_icon from '@assets/globe_icon.svg';
import gsap, { Power1 } from 'gsap';

const featuresData = [
    {
        icon: "db",
        title: "UPDATED INFORMATION",
        desc: "Keep yourself informed with up-to-date market data, prices, charts, and analysis on hundreds of cryptocurrencies and tokens."
    },
    {
        icon: "news",
        title: "RELEVANT NEWS",
        desc: "Stay up-to-date with the Latest News and Trends in the World of Cryptocurrencies. Get timely insights and breaking news on Bitcoin, Ethereum,  and Blockchain Technology."
    },
    {
        icon: "globe",
        title: "HELPFUL RESOURCES",
        desc: "Explore a Wealth of Resources on Cryptocurrencies - from Beginner Guides to Advanced Trading Strategies."
    },
]

const Features = () => {
    return (
        <div className='features_wrapper'>
            <div className="feature_container">
                {featuresData.map((Fdata, i) => (
                    <Feature key={i} Fdata={Fdata} />
                ))}
            </div>
        </div>
    )
}

export default Features;

const Feature = ({ i, Fdata }) => {
    const [enter, setEnter] = useState(null);

    return (
        <div
            key={i}
            className='feature_wrapper'
            onMouseEnter={() => setEnter(true)}
            onMouseLeave={() => setEnter(false)}
        >
            <div className="inner_wrapper">
                <div className="top_section">
                    {Fdata?.icon === "db" && <DBIcon mouseEnter={enter} />}
                    {Fdata?.icon === "news" && <NewsIcon mouseEnter={enter} />}
                    {Fdata?.icon === "globe" && <GlobeIcon mouseEnter={enter} />}
                    <p>{Fdata?.title}</p>
                </div>
                <div className="bottom_section">
                    <p>{Fdata?.desc}</p>
                </div>
            </div>
        </div>
    )
}

const DBIcon = ({ mouseEnter }) => {
    const iconWrapperRef = useRef(null);
    let iconWrapper;

    useEffect(() => {
        iconWrapper = iconWrapperRef.current;

        if (!mouseEnter) return;

        const ctx = gsap.context((self) => {
            const db = self.selector('.feature_icon');
            const bang = self.selector('.bang_icon');

            const tl = gsap.timeline({});

            tl.to(db, {
                y: -20,
                duration: .2
            })
                .to(db, {
                    y: 0,
                    duration: .2
                })
                .to(bang, {
                    opacity: 1,
                    duration: .1
                }, "<+0.1")
                .to(bang, {
                    opacity: 0,
                    duration: 0
                },)
                .to(db, {
                    y: -20,
                    duration: .2
                })
                .to(db, {
                    y: 0,
                    duration: .2
                })
                .to(bang, {
                    opacity: 1,
                    duration: .1
                }, "<+0.1")
                .to(bang, {
                    opacity: 0,
                    duration: 0
                },)
                .to(db, {
                    y: -20,
                    duration: .2
                })
                .to(db, {
                    y: 0,
                    duration: .2
                })
                .to(bang, {
                    opacity: 1,
                    duration: .1
                }, "<+0.1")
                .to(bang, {
                    opacity: 0,
                    duration: 0
                },)


        }, iconWrapperRef);

        return () => ctx.revert()
    }, [mouseEnter])

    return (
        <div ref={iconWrapperRef} className='dbIcon_wrapper'>
            <svg className='feature_icon' viewBox="0 0 38 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.4526 9.58758C31.8167 9.11253 32.8663 8.5733 33.5211 8.03727C33.9705 7.67136 34.1117 7.43062 34.1117 7.33433C34.1117 7.23804 33.9705 6.99731 33.5211 6.62819C32.8663 6.09537 31.8199 5.55613 30.4526 5.08109C27.4611 4.04434 23.3205 3.4377 18.8814 3.4377C14.4424 3.4377 10.3018 4.04755 7.31029 5.08109C5.94614 5.55613 4.89655 6.09537 4.24177 6.6314C3.7924 6.99731 3.65117 7.23483 3.65117 7.33433C3.65117 7.43062 3.7924 7.67136 4.24177 8.04048C4.89655 8.5733 5.94293 9.11253 7.31029 9.58758C10.3018 10.6243 14.4424 11.231 18.8814 11.231C23.3205 11.231 27.4611 10.6211 30.4526 9.58758ZM2.6722 20.3948V26.0472C4.33806 27.8029 8.81887 29.9406 14.2915 30.5793C22.3159 31.5134 29.9134 29.7609 35.0714 26.2654L35.0907 20.4879C29.5956 23.7201 21.8601 25.0778 14.0379 24.1631C9.19441 23.6013 5.06988 22.1409 2.66899 20.3948H2.6722ZM2.6722 16.8641C4.34127 18.6166 8.81887 20.7543 14.2915 21.3898C22.3319 22.3271 29.9454 20.5681 35.1035 17.0567L35.126 10.65C31.8424 12.5759 25.7985 13.8662 18.8814 13.8662C11.9933 13.8662 5.96861 12.5823 2.68183 10.6725C2.67752 12.7353 2.67431 14.7981 2.6722 16.8609V16.8641ZM2.67862 29.5843L2.69146 34.3283L2.64331 34.0009C3.62549 37.2492 9.89735 39.8587 19.2377 39.8587C24.3252 39.8587 28.3117 39.0884 31.377 37.5734C32.2372 37.1465 32.892 36.787 33.534 36.3184C33.9608 36.007 34.2401 35.8177 34.6991 35.4132C35.1741 34.9928 35.906 35.0955 36.3296 35.5737C36.7501 36.0456 36.8047 36.8159 36.3296 37.2396C35.8161 37.6889 35.5754 37.8912 35.0746 38.2571C34.3268 38.8027 33.4762 39.3709 32.494 39.8587C29.1109 41.531 25.6636 42.5293 19.2377 42.5293C8.5332 42.5293 1.4557 39.143 0.101187 34.6654L0.0530404 34.5049V34.338L0.0337819 27.5622C0.0261159 20.8966 0.0314655 14.231 0.0498306 7.56543C0.0416936 7.48866 0.0374085 7.41153 0.0369916 7.33433C0.0402013 3.72657 8.47543 0.80249 18.8814 0.80249C29.2875 0.80249 37.7227 3.72657 37.7227 7.33433C37.7237 7.47527 37.7118 7.61601 37.6874 7.75481C37.7182 7.85567 37.7334 7.96068 37.7323 8.06616L37.6585 30.9035C37.6553 31.5391 37.0711 32.0526 36.3521 32.0494C35.6331 32.0494 35.0522 31.5326 35.0554 30.8939V29.6935C29.5667 32.9064 21.844 34.2609 14.0379 33.3526C9.20083 32.7877 5.0763 31.3304 2.67541 29.5843H2.67862ZM32.0157 16.8159C31.7166 16.8185 31.4287 16.7024 31.2151 16.493C31.0015 16.2836 30.8797 15.998 30.8763 15.6989C30.8763 15.0827 31.3898 14.5852 32.0189 14.5852C32.6481 14.5852 33.1616 15.0827 33.1616 15.6989C33.1616 16.3184 32.6481 16.8159 32.0189 16.8159H32.0157ZM32.0157 26.0055C31.7166 26.008 31.4287 25.8919 31.2151 25.6825C31.0015 25.4731 30.8797 25.1876 30.8763 24.8885C30.8763 24.2722 31.3898 23.7715 32.0189 23.7715C32.6481 23.7715 33.1616 24.2722 33.1616 24.8885C33.1616 25.5047 32.6481 26.0055 32.0189 26.0055H32.0157ZM32.0157 35.3137C31.8674 35.315 31.7202 35.287 31.5826 35.2314C31.4451 35.1758 31.3198 35.0937 31.214 34.9896C31.1082 34.8856 31.0239 34.7618 30.966 34.6252C30.908 34.4886 30.8775 34.3419 30.8763 34.1935C30.8763 33.5773 31.3898 33.0765 32.0189 33.0765C32.6481 33.0765 33.1616 33.5773 33.1616 34.1935C33.1616 34.8098 32.6481 35.3105 32.0189 35.3105L32.0157 35.3137Z" fill="#0071F2" />
            </svg>
            <svg className='bang_icon' viewBox="0 0 71 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="bang" d="M68.9776 7.13217L54.7502 0.626517C54.677 0.593271 54.6014 0.562468 54.5266 0.537511C53.7413 0.275532 52.908 0.481327 52.5926 1.04544C51.7489 0.658971 52.2465 1.66638 52.5926 1.04544L67.5868 8.50472L63.7503 8.58038L51.8326 8.2404C51.2672 8.2703 50.3125 8.09434 50.1331 8.50472C49.9548 8.91728 54.7502 12.3463 56.3836 14.7986L60.289 18.3189L45.156 13.629C45.156 13.629 44.6259 13.3464 44.2591 13.629C43.8935 13.9119 44.9998 15.1353 45.156 15.5797L50.7474 29.1356L36.973 18.0237C36.5431 17.7048 35.9804 17.5521 35.4645 17.6094C34.948 17.6682 34.5422 17.9325 34.3824 18.3189L30.961 29.8603L24.0939 16.5321C22.5899 16.5321 24.6493 15.7321 24.094 15.5797C23.5384 15.4268 23.6536 16.2586 23.27 16.5321L13.2081 23.9407L14.8312 8.58038C13.4412 8.61814 14.8756 8.18758 14.8312 8.58038C14.4596 8.25761 14.7263 8.50887 14.2246 8.50472L2.8793 8.58038L10.1902 1.33925C10.9247 1.86832 10.7362 0.836165 10.1902 1.33925C9.45872 0.809376 8.42021 0.789086 7.87715 1.29051L7.87661 1.29445L0.334082 8.2404C-0.0680079 8.61151 -0.103965 9.17916 0.243646 9.68036C0.59547 10.183 1.25199 10.514 1.91993 10.5219L12.4534 10.6414L10.848 24.5534C10.7851 25.1021 11.1747 25.6764 11.8221 25.9929C12.4715 26.309 13.2259 26.2892 13.7076 25.9438L23.27 19.1243L29.3565 31.4095C29.6242 31.9502 30.2658 32.3587 30.961 32.4276C31.6546 32.494 32.255 32.2097 32.4626 31.7146L36.8392 21.2145L49.8902 30.9024C50.4583 31.3239 51.2423 31.4475 51.8326 31.2107C52.4228 30.9741 52.6893 30.4278 52.4899 29.8603L47.813 16.5321L60.289 19.5867C60.9728 19.7539 61.6415 19.5782 61.971 19.1461C62.2984 18.7133 62.2188 18.1142 61.7662 17.6435L54.7437 10.302L68.7358 9.57564C69.4357 9.5377 69.9473 9.13667 70.0033 8.58038C70.0578 8.02156 69.6444 7.43929 68.9785 7.13269L68.9776 7.13217Z" fill="#0071F2" />
            </svg>
        </div>
    )
}

const NewsIcon = ({ mouseEnter }) => {
    const iconWrapperRef = useRef(null);
    let iconWrapper;

    useEffect(() => {
        iconWrapper = iconWrapperRef.current;

        if (mouseEnter == null) return

        const ctx = gsap.context((self) => {
            const news_icon = self.selector('#news_icon');
            const long_rect = self.selector('#long_rect');
            const small_rect = self.selector('#small_rect');
            const med_rect = self.selector('#med_rect');
            const thick_rect = self.selector('#thick_rect');


            const tl = gsap.timeline({ defaults: { duration: 0.3 } });

            tl.to(thick_rect, {
                y: 8.5
            })
                .to(med_rect, {
                    y: 8.5
                }, "0")
                .to(small_rect, {
                    y: 8.5
                }, "0")
                .to(long_rect, {
                    y: -14,
                }, "0")
                .to(med_rect, {
                    x: -13
                }, ">+0.2")
                .to(small_rect, {
                    x: -13
                }, "<")
                .to(thick_rect, {
                    x: 13
                }, "<")
                .to(news_icon, {
                    rotation: 180,
                    transformOrigin: "50% 50%",
                }, ">+0.2")


        }, iconWrapperRef);

        return () => ctx.revert()
    }, [mouseEnter]);

    return (
        <div ref={iconWrapperRef} className='dbIcon_wrapper'>
            <svg className='feature_icon' viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="news_icon">
                    <g id="icons_Q2">
                        <path id="inner_box" d="M37.45 7.48999V37.45H7.48999V7.48999H37.45ZM39.3225 3.745H5.61749C5.12088 3.745 4.6446 3.94228 4.29344 4.29344C3.94228 4.6446 3.745 5.12088 3.745 5.61749V39.3225C3.745 39.8191 3.94228 40.2954 4.29344 40.6465C4.6446 40.9977 5.12088 41.195 5.61749 41.195H39.3225C39.8191 41.195 40.2954 40.9977 40.6465 40.6465C40.9977 40.2954 41.195 39.8191 41.195 39.3225V5.61749C41.195 5.12088 40.9977 4.6446 40.6465 4.29344C40.2954 3.94228 39.8191 3.745 39.3225 3.745Z" fill="#0071F2" />
                        <path id="long_rect" d="M31.8325 28.0875H13.1075C12.6109 28.0875 12.1346 28.2848 11.7834 28.636C11.4323 28.9871 11.235 29.4634 11.235 29.96C11.235 30.4566 11.4323 30.9329 11.7834 31.2841C12.1346 31.6352 12.6109 31.8325 13.1075 31.8325H31.8325C32.3291 31.8325 32.8054 31.6352 33.1565 31.2841C33.5077 30.9329 33.705 30.4566 33.705 29.96C33.705 29.4634 33.5077 28.9871 33.1565 28.636C32.8054 28.2848 32.3291 28.0875 31.8325 28.0875Z" fill="#0071F2" />
                        <path id="small_rect" d="M31.8325 20.5975H26.215C25.7184 20.5975 25.2421 20.7948 24.8909 21.146C24.5398 21.4971 24.3425 21.9734 24.3425 22.47C24.3425 22.9667 24.5398 23.4429 24.8909 23.7941C25.2421 24.1453 25.7184 24.3425 26.215 24.3425H31.8325C32.3291 24.3425 32.8054 24.1453 33.1566 23.7941C33.5077 23.4429 33.705 22.9667 33.705 22.47C33.705 21.9734 33.5077 21.4971 33.1566 21.146C32.8054 20.7948 32.3291 20.5975 31.8325 20.5975Z" fill="#0071F2" />
                        <path id="med_rect" d="M31.8325 13.1075H26.215C25.7184 13.1075 25.2421 13.3048 24.8909 13.656C24.5398 14.0071 24.3425 14.4834 24.3425 14.98C24.3425 15.4767 24.5398 15.9529 24.8909 16.3041C25.2421 16.6553 25.7184 16.8525 26.215 16.8525H31.8325C32.3291 16.8525 32.8054 16.6553 33.1566 16.3041C33.5077 15.9529 33.705 15.4767 33.705 14.98C33.705 14.4834 33.5077 14.0071 33.1566 13.656C32.8054 13.3048 32.3291 13.1075 31.8325 13.1075Z" fill="#0071F2" />
                        <path id="thick_rect" d="M18.725 13.1075H13.1075C12.0733 13.1075 11.235 13.9459 11.235 14.98V22.47C11.235 23.5042 12.0733 24.3425 13.1075 24.3425H18.725C19.7591 24.3425 20.5975 23.5042 20.5975 22.47V14.98C20.5975 13.9459 19.7591 13.1075 18.725 13.1075Z" fill="#0071F2" />
                    </g>
                </g>
            </svg>
        </div>
    )
}

const GlobeIcon = ({ mouseEnter }) => {
    const iconWrapperRef = useRef(null);
    let iconWrapper;

    useEffect(() => {
        iconWrapper = iconWrapperRef.current;

        if (mouseEnter == null) return

        const ctx = gsap.context((self) => {
            const refresh_icon = self.selector('#refresh_icon');

            gsap.to(refresh_icon, {
                rotation: 360,
                duration: 1,
                transformOrigin: "50% 50%",
            })

        }, iconWrapperRef);

        return () => ctx.revert()
    }, [mouseEnter])

    return (
        <div ref={iconWrapperRef} className='dbIcon_wrapper'>
            <svg className='feature_icon' viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="globe_icon">
                    <g id="globe_icon_2">
                        <path id="Vector" d="M21.55 41.1C32.3475 41.1 41.1 32.3475 41.1 21.55C41.1 10.7525 32.3475 2 21.55 2C10.7525 2 2 10.7525 2 21.55C2 32.3475 10.7525 41.1 21.55 41.1Z" stroke="#0071F2" strokeWidth="2.95" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Vector_2" d="M13.73 3.95502H15.685C11.8729 15.3753 11.8729 27.7248 15.685 39.145H13.73M27.415 3.95502C31.2272 15.3753 31.2272 27.7248 27.415 39.145" stroke="#0071F2" strokeWidth="2.95" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Vector_3" d="M3.95499 29.37V27.415C15.3753 31.2272 27.7247 31.2272 39.145 27.415V29.37M3.95499 15.685C15.3753 11.8728 27.7247 11.8728 39.145 15.685" stroke="#0071F2" strokeWidth="2.95" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <g id="refresh_icon">
                        <path id="Vector_4" d="M30.5 44C37.4037 44 43 38.4037 43 31.5C43 24.5963 37.4037 19 30.5 19C23.5963 19 18 24.5963 18 31.5C18 38.4037 23.5963 44 30.5 44Z" fill="white" />
                        <g id="refresh">
                            <path id="Vector_5" d="M24.0294 35.6463C24.306 36.1007 24.644 36.5247 25.0282 36.9033C26.3909 38.2417 28.2362 38.9932 30.16 38.9932C32.0838 38.9932 33.9291 38.2417 35.2918 36.9033C36.3939 35.8072 37.1055 34.3883 37.32 32.8597M23 30.8303C23.2151 29.3461 23.8758 27.9225 25.0282 26.7866C26.3909 25.4482 28.2362 24.6967 30.16 24.6967C32.0838 24.6967 33.9291 25.4482 35.2918 26.7866C35.6913 27.1804 36.014 27.6044 36.2906 28.0436" stroke="#0071F2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_6" d="M24.2599 39.69V35.6463H28.3623M37.1049 24V28.0437H33.0025" stroke="#0071F2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}