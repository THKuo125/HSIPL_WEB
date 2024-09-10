import React from "react";
import "./Members1.scss";

import M11212031 from "../img/members/M11212031.jpg";
import M11217008 from "../img/members/M11217008.jpg";
import M11217010 from "../img/members/M11217010.jpg";
import M11217022 from "../img/members/M11217022.jpg";
import M11217064 from "../img/members/M11217064.jpg";
import M11317001 from "../img/members/M11317001.jpg";

import M11217039 from "../img/members/M11217039.JPG";
import M11317019 from "../img/members/M11317019.JPG";
import M11317008 from "../img/members/M11317008.JPG";
import M11317012 from "../img/members/M11317012.JPG";
import M11317014 from "../img/members/M11317014.JPG";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Members1 = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    // initialSlide: 2
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // initialSlide: 2
                },
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    function Arrow(props) {
        let className = props.type === "next" ? "nextArrow" : "prevArrow";
        className += " arrow";
        const char =
            props.type === "next" ? (
                <i
                    class="fas fa-chevron-circle-right"
                    style={{ alignSelf: "center" }}
                ></i>
            ) : (
                <i
                    class="fas fa-chevron-circle-left"
                    style={{ alignSelf: "center" }}
                ></i>
            );
        return (
            <span
                style={{ alignSelf: "center" }}
                className={className}
                onClick={props.onClick}
            >
                {char}
            </span>
        );
    }

    return (
        <div className="members" id="members">
            <div className="Title" id="Senior">
                <h1>Current Master Students</h1>
            </div>
            <div className="master2">
                <h2>Senior Students</h2>
            </div>
            <div className="picborder1" id="picborder">
                <Slider
                    className="masterpic1"
                    id="masterpic1"
                    {...settings}
                    nextArrow={<Arrow type="next" />}
                    prevArrow={<Arrow type="prev" />}
                >

                    <div className="pic1" id="fifthpic1">
                        <img src={M11212031} alt="M11212031"></img>
                        <div className="detail4">
                            <h4>陳宥廷</h4>
                            <span>研究方向 : 影像處理</span>
                            <div className="Email">
                                <a href="/#">
                                    <i class="fas fa-envelope mail"></i>
                                </a>
                                <span>M11212031@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>

                    <div className="pic1" id="fifthpic1">
                        <img src={M11217008} alt="M11217008"></img>
                        <div className="detail4">
                            <h4>陳榆茜</h4>
                            <span>研究方向 : 影像處理</span>
                            <div className="Email">
                                <a href="/#">
                                    <i class="fas fa-envelope mail"></i>
                                </a>
                                <span>M11217008@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={M11217010} alt="M11217010"></img>
                        <div className="detail4">
                            <h4>吳昱呈</h4>
                            <span>研究方向 : 影像處理</span>
                            <div className="Email">
                                <a href="/#">
                                    <i class="fas fa-envelope mail"></i>
                                </a>
                                <span>M11217010@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={M11217022} alt="M11217022"></img>
                        <div className="detail4">
                            <h4>鄭奕璿</h4>
                            <span>研究方向 : 影像處理</span>
                            <div className="Email">
                                <a href="/#">
                                    <i class="fas fa-envelope mail"></i>
                                </a>
                                <span>M11217022@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={M11217064} alt="M11217064"></img>
                        <div className="detail4">
                            <h4>陳彥翔</h4>
                            <span>研究方向 : 影像處理</span>
                            <div className="Email">
                                <a href="/#">
                                    <i class="fas fa-envelope mail"></i>
                                </a>
                                <span>M11217064@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="master2" id="Junior">
                <h2>Junior Students</h2>
            </div>
 
            <div className="picborder1">
                <Slider
                    className="masterpic1"
                    id="masterpic1"
                    {...settings}
                    nextArrow={<Arrow type="next" />}
                    prevArrow={<Arrow type="prev" />}
                >
                    <div className="pic1" id="fifthpic1">
                        <img src={M11217039} alt="M11217039"></img>
                        <div className="detail4">
                            <h4>黃俊維</h4>
                            <span>研究方向 : 影像處理</span>
                            <div className="Email">
                                <a href="/#">
                                    <i class="fas fa-envelope mail"></i>
                                </a>
                                <span>M11217039@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={M11317001} alt="M11317001"></img>
                        <div className="detail4">
                            <h4>古秀茜</h4>
                            <span>研究方向 : 影像處理</span>
                            <div className="Email">
                                <a href="/#">
                                    <i class="fas fa-envelope mail"></i>
                                </a>
                                <span>M11317001@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={M11317008} alt="M11317008"></img>
                        <div className="detail4">
                            <h4>吳鎧全</h4>
                            <span>研究方向 : 影像處理</span>
                            <div className="Email">
                                <a href="/#">
                                    <i class="fas fa-envelope mail"></i>
                                </a>
                                <span>M11317008@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={M11317012} alt="M11317012"></img>
                        <div className="detail4">
                            <h4>莊哲綸</h4>
                            <span>研究方向 : 影像處理</span>
                            <div className="Email">
                                <a href="/#">
                                    <i class="fas fa-envelope mail"></i>
                                </a>
                                <span>M11317012@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={M11317014} alt="M11317014"></img>
                        <div className="detail4">
                            <h4>陳俊元</h4>
                            <span>研究方向 : 影像處理</span>
                            <div className="Email">
                                <a href="/#">
                                    <i class="fas fa-envelope mail"></i>
                                </a>
                                <span>M11317014@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={M11317019} alt="M11317019"></img>
                        <div className="detail4">
                            <h4>何書維</h4>
                            <span>研究方向 : 影像處理</span>
                            <div className="Email">
                                <a href="/#">
                                    <i class="fas fa-envelope mail"></i>
                                </a>
                                <span>M11317019@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                </Slider>

                {/* <span className="arrow"><i id="slide3"  class="fas fa-angle-right" ></i></span> */}
            </div>
        </div>
    );
};

export default Members1;
