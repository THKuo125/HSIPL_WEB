import React from 'react'
import "./Members1.scss";

import LIN from "../img/members/M11017002.png"
import Jay from "../img/members/M11017015.jpeg"
import Kai from "../img/members/M11017040.png"
import Yu from "../img/members/M11017054.png"
import Jia from "../img/members/M11017057.png"
import JiaWei from "../img/members/M10717042.JPG"

import YiCheng from "../img/members/M11117005.JPG"
import YiXiang from "../img/members/M11117025.JPG"
import TzuHsien from "../img/members/M11117038.JPG"
import HongYu from "../img/members/M11117039.JPG"
import KuanLiang from "../img/members/M11117040.JPG"
import XiangYu from "../img/members/M11117056.JPG"

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
            }
          },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // initialSlide: 2
          }
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 670,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
      ]
    
  };

//   const teststy ={
//       slidesToShow:2,
//       slidesToScroll:1
//   }
function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? <i class="fas fa-chevron-circle-right" style={{alignSelf:"center"}}></i> : <i class="fas fa-chevron-circle-left" style={{alignSelf:"center"}}></i>;
    return (
      <span style={{alignSelf:"center"}} className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }

    return (
        
        <div className="members" id ="members">
            <div className="Title"id="Senior">
                <h1>Current Master Students</h1>
            </div>
            <div className="master2" >
                <h2>Senior Students</h2>
            </div>
            <div className="picborder1" id="picborder">
            
                <Slider className="masterpic1" id="masterpic1" {...settings} nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}>
                    <div className="pic1" id="firstpic1">
                        <img id="firstpicture" src={LIN} alt="LIN"></img>
                        <div id="firstdetail2"  className="detail4">
                            <h4>李浩麟</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11017002@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pic1" id="secondpic1">
                        <img src={Jay} alt="Jay"></img>
                        <div className="detail4">
                        <h4>李昱杰</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11017015@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pic1" id="thirdpic1">
                        <img src={Kai} alt="Kai"></img>
                        <div className="detail4">
                        <h4>徐楷勛</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11017040@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pic1" id="fourthpic1">
                        <img src={Yu} alt="Yu"></img>
                        <div className="detail4">
                        <h4>朱博裕</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11017054@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pic1" id="fifthpic1">
                        <img src={Jia} alt="Jia"></img>
                        <div className="detail4">
                        <h4>詹育嘉</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10917044@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={JiaWei} alt="JiaWei"></img>
                        <div className="detail4">
                        <h4>劉佳緯</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10717042@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    
                </Slider>
                
            </div>



            <div className="master2" id="Junior">
                <h2>Junior Students</h2>
            </div>
            
            <div className="picborder1">
               
                < Slider className="masterpic1" id="masterpic1" {...settings} nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}>
                    <div className="pic1" id="fifthpic1">
                        <img src={YiCheng} alt="YiCheng"></img>
                        <div className="detail4">
                        <h4>陳毅澄</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11117005@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={YiXiang} alt="YiXiang"></img>
                        <div className="detail4">
                        <h4>洪翊祥</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11117025@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={TzuHsien} alt="TzuHsien"></img>
                        <div className="detail4">
                        <h4>郭子賢</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11117038@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={HongYu} alt="HongYu"></img>
                        <div className="detail4">
                        <h4>黃泓瑜</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11117039@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={KuanLiang} alt="KuanLiang"></img>
                        <div className="detail4">
                        <h4>劉冠良</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11117040@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={XiangYu} alt="XiangYu"></img>
                        <div className="detail4">
                        <h4>黃翔雨</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11117056@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>

                </ Slider>
               
                {/* <span className="arrow"><i id="slide3"  class="fas fa-angle-right" ></i></span> */}
            </div>
            
                
        
        </div>
        
    )
}

export default Members1;