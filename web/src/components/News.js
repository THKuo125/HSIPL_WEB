import React, { useState } from "react";
import "./News.scss";
import img_IRIS2021 from "../img/News/IRIS20210122.jpg";
import img_20201201 from "../img/News/20201201.jpg";
import img_20200116 from "../img/News/20200116.jpg";
import img_3years from "../img/News/3years.png";
import img_AI20191017 from "../img/News/AI20191017.jpg";
import img_IRSI20190528 from "../img/News/IRIS20190528.jpg";
import img_professor2018 from "../img/News/professor2018.jpg";
import img_yuntech2017 from "../img/News/yuntech2017.jpg";
import img_HyperSLCA from "../img/News/HyperSLCA.jpg"
import img_IRIS_AOIShow from "../img/News/img_IRIS_AOIShow.jpg"
import img_IRIS_NG from "../img/News/2021IRIS_NG.jpg"
import img_202112NTR from "../img/News/202112NPR1.jpg"
import img_PT202205 from "../img/News/Personnel_training202205.jpg"
import ima_summerIRIS from "../img/News/20220803智慧辨識技術講座暨交流會議.jpg"
import img_22th_AOI from "../img/News/22th_AOI.jpg"
import img_2022_SIIFsilver from "../img/News/2022_SIIFsilver.jpg"
import img_IIDC2023 from "../img/News/IIDC2023.jpg"
import img_2024_0506 from "../img/News/2024.05.06光譜式先進影像科技應用.jpg"

// import Zmage from "react-zmage";
import 'antd/dist/antd.css';
import { Image } from 'antd';

const News = () => {
  const [open, setOpen] = useState({
    pic1: false,
    pic2: false,
  });

  const handleOpen = () => {
    const { name, value } = open;
    setOpen((prevData) => ({
      ...prevData,
      [name]: true,
    }));
  };

  const handleClose = () => {
    const { name, value } = open;
    setOpen((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="News" id="News">
      <div className="Title">
        <h1>News</h1>
      </div>
      <div className="allItems">    
        {/*  新增資訊由此開始  */}
        <div className="Item">
          <h1>2024/05/06</h1>
          <Image  src={img_2024_0506} alt="img_2024_0506"/>
          <h3>  本實驗室陳士煜教師獲 <span className = "red">2024光譜式先進影像科技應用</span>Div1、Div8聯合論壇活動邀請擔任 講師 一職
            <br />
            <br />
          </h3>
        </div>

        <div className="Item">
          <h1>2023/12/11</h1>
          <Image  src={img_IIDC2023} alt="img_IIDC2023"/>
          <h3>
            <br />
            本實驗室陳士煜教師帶領學生團隊研發 <span className = "red">「高光譜影像辨識於食品品質分級之應用以香菇產地為例」</span>
            <br/>
            並獲 <span className="red">中央社</span> 報導 <a
              target="_blank" rel="noopener noreferrer"
              href="https://www.cna.com.tw/postwrite/chi/359296"
              class ="red"
            >
              <u>
              香港國際發明展 雲科大金光閃閃
              </u>
            </a>
          </h3>
        </div>
        <div className="Item">
          <h1>2022/11/30</h1>
          <Image  src={img_2022_SIIFsilver} alt="img_2022_SIIFsilver"/>
          <h3>
            <br />
            本實驗室陳士煜教師帶領學生團隊研發 <span className = "red">「高光譜雞蛋品質檢測 - 以瑕疵與新鮮度為例」</span>
            <br/>
            並獲 <span className="red">政大大學報</span> 報導 <a
              target="_blank" rel="noopener noreferrer"
              href="https://unews.nccu.edu.tw/unews/%EF%BC%88f%EF%BC%89%E9%9B%B2%E7%A7%91%E5%A4%A7%EF%BC%BF%E9%9B%9E%E8%9B%8B%E5%93%81%E8%B3%AA%E6%AA%A2%E6%B8%AC%EF%BC%88%E9%AB%98%E5%85%89%E8%AD%9C%E3%80%81%E7%91%95%E7%96%B5%E8%9B%8B%E3%80%81%E6%96%B0/"
              class ="red"
            >
              <u>
              揪出壞「蛋」！高光譜檢測雞蛋品質提升辨識效率
              </u>
            </a>
          </h3>
        </div>
        <div className="Item">
          <h1>2022/09/29</h1>
          <Image  src={img_22th_AOI} alt="img_22th_AOI"/>
          <h3>
            <br />
            本實驗室陳士煜教師獲 <span className = "red">22屆 AOI論壇與展覽</span>活動邀請
            展示 <span className="red"> 高光譜智慧農業於食品安全應用 - 以雞蛋為例 </span>
            <br/>
            並獲 <span className="red">經濟日報</span> 報導 <a
              target="_blank" rel="noopener noreferrer"
              href="https://money.udn.com/money/story/5950/6662187?utm_source=ednlinemobile&utm_medium=share"
              class ="red"
            >
              <u>
              雲科大IRIS中心 AOI論壇秀實力
              </u>
            </a>
          </h3>
        </div>

        <div className="Item">
          <h1>2022/08/03</h1>
          <Image  src={ima_summerIRIS} alt="2022講座邀請"/>
          <h3>
            <br />
            本實驗室陳士煜教師獲 <span className = "red">智慧辨識技術講座 暨 交流會議</span>活動邀請擔任 講師 一職
            <br/>
            <br/>
          </h3>
        </div>

        <div className="Item">
          <h1>2022/05/03</h1>
          <Image  src={img_PT202205} alt="2021新聞專訪"/>
          <h3>
            <br />
            本實驗室陳士煜教師獲 <span className = "red">工業區人才培訓課程</span> 活動邀請擔任 講師 一職
            <br/>
            <br/>
          </h3>
        </div>
        
        <div className="Item">
          <h1>2021/12/22</h1>
          <Image  src={img_202112NTR} alt="2021新聞專訪"/>
          <h3>
            <br />
            本實驗室陳士煜教師獲 <span className = "red">經濟日報</span> 專訪
            <br/>
            <span className = "red" href="https://money.udn.com/money/story/5639/5978664?utm_source=ednlinemobile&utm_medium=share">
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://money.udn.com/money/story/5639/5978664?utm_source=ednlinemobile&utm_medium=share"
              class ="red"
            >
              <u>
                雲科大陳士煜 研發高光譜瑕疪檢測系統
              </u>
            </a>
            </span>
            <br/>
          </h3>
        </div>


        <div className="Item">
          <h1>2021/12/21</h1>
          <Image  src={img_IRIS_NG} alt="IRIS中心台灣國際人工智慧暨物聯網"/>
          <h3>
            <br />
            本實驗室陳士煜教師參與 <span className = "red">2021台灣國際人工智慧暨物聯網</span>
            <br/>
            參展展示新品機台:<br/> <span className = "red">即時生咖啡豆瑕疵檢測機台</span>
          </h3>
        </div>

        <div className="Item">
          <h1>2021/12/09</h1>
          <Image  src={img_IRIS_AOIShow} alt="IRIS中心AIO技術展示"/>
          <h3>
            <br />
            本實驗室陳士煜教師參與 YunTech智慧辨識產業服務中心<span className = "red">AOI論壇技術展示</span>
            <br/>
            參展並發表新品技術 <span className = "red">
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://money.udn.com/money/story/5639/5962596?utm_source=ednlinemobile&utm_medium=share"
              class ="red"
            >
              <u>
                智慧新農業之即時自動化高光譜瑕疵檢測系統
              </u>
            </a>
            </span>
            <br/>
          </h3>
        </div>
      
        <div className="Item">
          <h1>2021/11/10</h1>
          <Image  src={img_HyperSLCA} alt="陳士煜副教授參與高光譜影像辨識技術之產品分級及瑕疵篩選應用演講"/>
          <h3>
            <br />
            本實驗室陳士煜教師擔任<span className = "red">高光譜影像辨識技術之產品分級及瑕疵篩選應用演講</span> 之講師
          </h3>
        </div>

        <div className="Item">
          <h1>2021/01/22</h1>
          {/* <img
            src={img_IRIS2021}
            alt="2021智慧辨識之智慧檢測產業論壇"
            onClick={() => Zmage.browsing({ src: img_IRIS2021 })}
          /> */}
          <Image  src={img_IRIS2021} alt="2021智慧辨識之智慧檢測產業論壇"/>
          <h3>
            <br />
            本實驗室陳士煜教師擔任「智慧辨識之智慧檢測產業論壇」講者
            {/* <br />
            演講主題 : 智慧自動化高光譜瑕疵檢測技術。 */}
          </h3>
        </div>


        <div className="Item">
          <h1>2020/12/01</h1>
          {/* <img
            src={img_20201201}
            alt="109年度宗倬章社會公益研究中心成果發表會"
            id="img20201201"
            onClick={() => Zmage.browsing({ src: img_20201201 })}
          /> */}
          <Image src={img_20201201} alt="109年度宗倬章社會公益研究中心成果發表會"/>
          <h3>
            <br />
            本實驗室陳士煜教師擔任「109年宗倬章社會公益研究中心成果發表」講者
          </h3>
        </div>


        <div className="Item">
          <h1>2020/01/16</h1>
          {/* <img src={img_20200116} alt="產業瀏覽器，攻略一網打盡 " onClick={() => Zmage.browsing({ src:img_20200116})}></img> */}
          <Image src={img_20200116} alt="Yuntech產業瀏覽器，攻略一網打盡 "/>
          <h3>
            <br />
            本實驗室陳士煜教師擔任「Yuntech產業瀏覽器，攻略一網打盡」講者
          </h3>
        </div>


        <div className="Item">
          <h1>2020</h1>
          {/* <img src={img_3years} alt="img20201103" onClick={() => Zmage.browsing({ src:img_3years})}></img> */}
          <Image src={img_3years} alt="img20201103"/>
          <h3>
            <br />
            本實驗室陳士煜教師<span className="red">通過科技部3年期優秀年輕學者計畫</span>
            {/* <br />
            補助計畫題目：應用高光譜影像辨識技術發展智慧新農業以提升農產品質管理為例*/}
          </h3>
        </div>
        

        <div className="Item">
          <h1>2019/10/17</h1>
          {/* <img src={img_AI20191017} alt="img20191204"  onClick={() => Zmage.browsing({ src:img_AI20191017})}></img> */}
          <Image src={img_AI20191017} alt="img20191204"/>
          <h3>
            <br />
            本實驗室陳士煜教師擔任「雲林投資環境招商說明會暨新知論壇」講者
          </h3>
        </div>


        <div className="Item">
          <h1>2019/05/28</h1>
          {/* <img src={img_IRSI20190528} alt="img_IRSI20190528" onClick={() => Zmage.browsing({ src:img_IRSI20190528})}></img> */}
          <Image  src={img_IRSI20190528} alt="img_IRSI20190528"/>
          <h3>
            <br />
            本實驗室陳士煜教師擔任「智慧辨識技術成果發表會」講者
          </h3>
        </div>

        <div className="Item">
          <h1>2018</h1>
          {/* <img src={img_professor2018} alt="榮陞副教授" onClick={() => Zmage.browsing({ src:img_professor2018})}></img> */}
          <Image src={img_professor2018} alt="榮陞副教授"/>
          <h3>
            <br />
            恭喜！<span className="red">本實驗室陳士煜教師榮陞副教授！</span>實驗室全體同仁 敬賀！
          </h3>
        </div>

        <div className="Item">
          <h1>2017</h1>
          {/* <img
            src={img_yuntech2017}
            alt="獲選為雲林科技大學106年度研發績優新人教授獎"
            onClick={() => Zmage.browsing({ src:img_yuntech2017})}
          ></img> */}
          <Image src={img_yuntech2017} alt="獲選為雲林科技大學106年度研發績優新人教授獎" />
          <h3>
            <br />
            本實驗室陳士煜教師<span className="red">獲選為雲林科技大學106年度研發績優新人教授獎</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default News;
