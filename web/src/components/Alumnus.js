import React from "react";
import "./Alumnus.scss";

import { BackTop } from "antd";
import "antd/dist/antd.css";

import Slider from "react-slick";

import CHUN from "../img/Alumnus/10616358_820759444612090_23748230943619158_n.jpg";
import HAN from "../img/Alumnus/10363382_799772786714016_8090633848080665429_n.jpg";
import HUI from "../img/Alumnus/11899141_10206347515145296_1944611839_o.jpg";
import MING from "../img/Alumnus/mmm.jpg";
import YU from "../img/Alumnus/12092413_1051573314882736_1562622761_n.jpg";
import ZHONG from "../img/Alumnus/IMG_62151.jpg";
import RU from "../img/Alumnus/10802017_850184675001565_1431670467203614850_n.jpg";
import YUAN from "../img/Alumnus/17991225_1371888229525465_1133383873462092592_n.jpg";
import DIAN from "../img/Alumnus/10436329_864352043593410_8108478475509244139_n.jpg";
import CHENG from "../img/Alumnus/B10117012.jpg";
import JIE from "../img/Alumnus/28170361_1565896336826751_50997770_o_edited.jpg";
import OU from "../img/Alumnus/40325558_1807635766017799_4000352030055989248_n.jpg";
import LONG from "../img/Alumnus/5351545-2.JPG.jpg";
import JUN from "../img/Alumnus/134316.jpg";
import FENG from "../img/Alumnus/S__7741515.jpg";
import XUN from "../img/Alumnus/2591aw-1.jpg";
import ZHI from "../img/Alumnus/14122121.jpg";
import TI from "../img/Alumnus/S__7741513改.jpg";

import WEI from "../img/Alumnus/M10917009.jpg";
import YEE from "../img/Alumnus/M10917016.jpg";
import HONG from "../img/Alumnus/M10917030.jpg";
import ZONGHAN from "../img/Alumnus/M10917042.jpg";
import GI from "../img/Alumnus/M10917044改.jpg";
import YUN from "../img/Alumnus/M10917048.jpg";

import LIN from "../img/Alumnus/M11017002.png";
import Jay from "../img/Alumnus/M11017015.jpeg";
import Kai from "../img/Alumnus/M11017040.png";
import Yu from "../img/Alumnus/M11017054.png";
import Jia from "../img/Alumnus/M11017057.png";
import JiaWei from "../img/Alumnus/M10717042.JPG";

import { Descriptions } from "antd";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from "../img/LOGO/LOGO_1.png";

const Alumnus = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
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

  // const settings_slider = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,

  // };

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
    <>
      <div>
        <BackTop>
          <i class="fas fa-chevron-up">
            <div className="top_button"> TOP</div>
          </i>
        </BackTop>
      </div>

      <div className="members_Al" id="members_Al">
        <div className="Title_Al" id="Alumnus">
          <h1>Alumnus</h1>
        </div>
        <div className="master2_Al">
          <h2>M.S. Graduates</h2>
        </div>
        <div className="picborder_Al" id="picborder_Al">
          <Slider
            className="masterpic_Al"
            id="masterpic_Al"
            {...settings}
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
          >
            <div className="pic_Al" id="firstpic_Al">
              <div className="card_bk">
                <img
                  className="img_Al"
                  id="firstimg_Al"
                  src={CHUN}
                  alt="CHUN"
                ></img>

                <div className="detail2_Al" id="firstdetail2_Al">
                  <h4>陳嘉純</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        醫學影像,高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​高光譜技術於多光譜影像之新應用-以新生葉芽檢測為例
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10317006@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="secondpic_Al">
              <div className="card_bk">
                <img src={HAN} alt="HAN"></img>
                <div className="detail2_Al">
                  <h4>林力瀚​</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        遙測影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​由圓盤影像提取年輪的技術開發
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10317032@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pic_Al" id="thirdpic_Al">
              <div className="card_bk">
                <div className="card_bk">
                  <img src={HUI} alt="HUI"></img>
                  <div className="detail2_Al">
                    <h4>戴嘉輝</h4>
                    <div className="Al_content">
                      <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">
                          高光譜影像處理
                        </Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">
                          ​自適應變動視窗濾波最小能量限制法之目標物檢測技術
                        </Descriptions.Item>
                      </Descriptions>
                    </div>
                    <div className="Email_Al">
                      <a href="/#">
                        <i class="fas fa-envelope mail"></i>
                      </a>
                      <span>M10417038@yuntech.edu.tw</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={MING} alt="MING"></img>
                <div className="detail2_Al">
                  <h4>楊富名</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        深度學習
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​基於稀疏矩陣之強化目標偵測
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10417036@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pic_Al" id="lastpic_Al">
              <div className="card_bk">
                <img src={YU} alt="YU"></img>
                <div className="detail2_Al">
                  <h4>簡澤宇</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        遙測影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​自動化偵測崩塌地
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10417028@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={ZHONG} alt="ZHONG"></img>
                <div className="detail2_Al">
                  <h4>陳彥中​</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        深度學習,​高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​高光譜訊號處理技術應用於藥物分類
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10517008@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={RU} alt="RU"></img>
                <div className="detail2_Al">
                  <h4>莊尚儒</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​基於強大的主成分分析法於權重最小能量限制法之目標檢測
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10517016@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={YUAN} alt="YUAN"></img>
                <div className="detail2_Al">
                  <h4>高哲元</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​利用高光譜技術發展農業 4.0─以
                        評估火鶴花切花之瓶插壽命為例
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10617003@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={DIAN} alt="DIAN"></img>
                <div className="detail2_Al">
                  <h4>練周典</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​應用高光譜技術發展農業4.0-以咖啡豆品質管理為例
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10617013@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={CHENG} alt="CHENG"></img>
                <div className="detail2_Al">
                  <h4>張育誠</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​衛星遙測影像去雜訊分類樹林區域監測紅樹林
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10517002@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={JIE} alt="JIE"></img>
                <div className="detail2_Al">
                  <h4>李冠杰​</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​基於影像增強之深度學習方法進行遙測影像新生葉芽檢測
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10717003@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={OU} alt="OU"></img>
                <div className="detail2_Al">
                  <h4>歐承學</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​高光譜自動化咖啡生豆瑕疵檢測系統 - 以蟲蛀豆為例
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10717033@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={LONG} alt="LONG"></img>
                <div className="detail2_Al">
                  <h4>楊雯隆</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​自動化高光譜皮革瑕疵檢測技術
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10717038@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={JUN} alt="JUN"></img>
                <div className="detail2_Al">
                  <h4>許寓鈞</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​高光譜影像在智慧農業的應用-以雞蛋及火鶴花與牛肉為例
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10817021@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={TI} alt="TI"></img>
                <div className="detail2_Al">
                  <h4>鄭才藝</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​高光譜影像花生瑕疵檢測技術開發
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10817024@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={ZHI} alt="ZHI"></img>
                <div className="detail2_Al">
                  <h4>鄭友智</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​基於高光譜技術對工業製品進行瑕疵檢測-以皮革為例
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10817038@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={XUN} alt="XUN"></img>
                <div className="detail2_Al">
                  <h4>徐仕勳</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​智慧蛋品質檢測技術
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10817039@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="fourthpic_Al">
              <div className="card_bk">
                <img src={FENG} alt="FENG"></img>
                <div className="detail2_Al">
                  <h4>邱明豐</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        ​即時快照式高光譜影像瑕疵檢測系統-以咖啡豆為例
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10817046@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="lastpic_Al">
              <div className="card_bk">
                <img src={WEI} alt="WEI"></img>
                <div className="detail2_Al">
                  <h4>鄒學緯</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        即時自動化生咖啡檢測系統開發 基於RGB-IR多光譜影像
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10917009@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="lastpic_Al">
              <div className="card_bk">
                <img src={YEE} alt="YEE"></img>
                <div className="detail2_Al">
                  <h4>柯祉伊</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        高光譜智慧農業於食品安全應用以雞蛋與牛肉為例
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10917016@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="lastpic_Al">
              <div className="card_bk">
                <img src={HONG} alt="HONG"></img>
                <div className="detail2_Al">
                  <h4>張瑞鴻</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        即時高光譜影像花生瑕疵檢測技術開發
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10917030@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="lastpic_Al">
              <div className="card_bk">
                <img src={ZONGHAN} alt="ZONGHAN"></img>
                <div className="detail2_Al">
                  <h4>楊宗翰</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        高光譜智慧農業於食品安全應用以香料瑕疵檢測為例
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10917042@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="lastpic_Al">
              <div className="card_bk">
                <img src={GI} alt="GI"></img>
                <div className="detail2_Al">
                  <h4>蔡逢記</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        應用深度學習於智慧製造之技術開發以工業產品分級及瑕疵檢測為例
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10917044@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="lastpic_Al">
              <div className="card_bk">
                <img src={YUN} alt="YUN"></img>
                <div className="detail2_Al">
                  <h4>王美雲</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">
                        高光譜智慧農業技術開發-以杏仁果瑕疵檢測為例
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10917048@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pic_Al" id="lastpic_Al">
              <div className="card_bk">
                <img src={LIN} alt="LIN"></img>
                <div className="detail2_Al">
                  <h4>李浩麟</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">深度學習技術在點雲資料分類之應用</Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M11017002@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pic_Al" id="lastpic_Al">
              <div className="card_bk">
                <img src={Jay} alt="Jay"></img>
                <div className="detail2_Al">
                  <h4>李昱杰</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">高光譜瑕疵檢測技術應用-以蜜棗為例</Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M11017015@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pic_Al" id="lastpic_Al">
              <div className="card_bk">
                <img src={Kai} alt="Kai"></img>
                <div className="detail2_Al">
                  <h4>徐楷勛</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">基於目標檢測之混合2D-3D-CNN進行高光譜遙測影像分類</Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M11017040@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pic_Al" id="lastpic_Al">
              <div className="card_bk">
                <img src={Yu} alt="Yu"></img>
                <div className="detail2_Al">
                  <h4>朱博裕</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">基於2D+3D-CNN高光譜遙測圖像小樣本分類</Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M11017054@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pic_Al" id="lastpic_Al">
              <div className="card_bk">
                <img src={Jia} alt="Jia"></img>
                <div className="detail2_Al">
                  <h4>詹育嘉</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">高光譜影像辨識於食品品質分級之應用以辣椒片與香菇為例</Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10917044@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pic_Al" id="lastpic_Al">
              <div className="card_bk">
                <img src={JiaWei} alt="JiaWei"></img>
                <div className="detail2_Al">
                  <h4>劉佳緯</h4>
                  <div className="Al_content">
                    <Descriptions column={1}>
                      <Descriptions.Item label="研究方向 ">
                        高光譜影像處理
                      </Descriptions.Item>
                      <Descriptions.Item label="論文題目​ ">高光譜智慧農業技術開發-以咖啡果與檳榔為例</Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="Email_Al">
                    <a href="/#">
                      <i class="fas fa-envelope mail"></i>
                    </a>
                    <span>M10717042@yuntech.edu.tw</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Alumnus;
