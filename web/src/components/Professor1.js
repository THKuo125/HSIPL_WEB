import React from "react";
import "./Professor1.scss";
import Professor_img from "../img/Professor/Professor_img.jpg";
import logo from "../img/LOGO/LOGO_1.png";
import Mail_img from "../img/Professor/Mail_img.png";
import Call_img from "../img/Professor/Call_img.png";
import { BackTop } from "antd";

import { List, Table, Divider } from "antd";
import { Link } from "react-router-dom";
import { Talks, Service, Conference, Awards } from "./Professor_Details";

const Professor1 = () => {
    return (
        <>
            <div className="Professor1" id="Professor">
                <div className="content">
                    <div className="Pic">
                        <span>Lab Director</span>
                        <img
                            src={Professor_img}
                            width={"60%"}
                            height={"auto"}
                        ></img>
                    </div>
                    <div className="Info">
                        <div className="Name">
                            <span>Associate Professor</span>
                            <span>Chen, Shih-Yu 陳士煜</span>
                        </div>
                        <span>
                            Department of Computer Science and Information
                            Engineering
                        </span>
                        <span>
                            National Yunlin University of Science and Technology
                        </span>
                        <br></br>
                        <span style={{ fontSize: "1.25rem" }}>
                            成立 SPIE National Yuntech Univ. Chapter
                            分會並擔任指導老師
                        </span>
                        <span style={{ fontSize: "1.25rem" }}>
                            成立雲科大高光譜遙測工程科技中心，並聘請遙測領域學術大師
                            Chien-I Chang
                            擔任講座教授與主持人共同領導研究團隊發展高光譜遙測技術
                        </span>
                        <div className="Mail">
                            <img src={Mail_img} alt="Mail_img"></img>
                            <span>sychen@yuntech.edu.tw</span>
                        </div>
                        <div className="Phone">
                            <img src={Call_img} alt="Call_img"></img>
                            <span className="Number">
                                (work) +886-5-5342601 ext 4514
                                <br></br>(lab) +886-5-5342601 ext 4598
                            </span>
                            <a
                                className="Btn-more"
                                href={
                                    "https://scholar.google.com/citations?user=0LxRRawAAAAJ&hl=zh-TW"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Google Scholar
                            </a>
                        </div>
                    </div>
                </div>

                <div className="part" id="Education">
                    <div className="List">
                        <h1 className="Title">Education</h1>
                        <Divider />
                        <Table
                            dataSource={Education_data}
                            bordered
                            columns={Education_columns}
                            pagination={false}
                        />
                    </div>
                </div>

                <div id="Experience" className="part">
                    <div className="List">
                        <h1 className="Title">Research Experience</h1>
                        <Divider />
                        <Table
                            dataSource={Experience_data}
                            bordered
                            columns={Experience_columns}
                            pagination={false}
                        />
                    </div>
                </div>

                <div id="Journal" className="part">
                    <div className="List">
                        <h1 className="Title">Journal Articles</h1>
                        <Divider />
                        <Table
                            dataSource={data}
                            bordered={true}
                            columns={Journal_Art_cols}
                            pagination={{ pageSzie: 10 }}
                        ></Table>

                        {/* <List  className="page_list"
              // header={<h1 className="">Journal articles</h1>}
              itemLayout={"horizontal"}
              bordered={true}
              pagination={{ pageSize: 6 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <span>
                    <span>{item.content1}</span>
                    <span className="blod">{item.blod}</span>
                    <span>{item.content2}</span>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                    <span>{item.content3}</span>
                  </span>
                </List.Item>
              )}
            ></List> */}
                    </div>
                </div>
                <Talks />
                <Service />
                <Conference />
                <Awards />
            </div>
            <div>
                <BackTop>
                    <i class="fas fa-chevron-up">
                        <div className="top_button"> TOP</div>
                    </i>
                </BackTop>
            </div>
        </>
    );
};

const Journal_Art_cols = [
    { title: "Year", dataIndex: "Year" },
    { title: "Num", dataIndex: "Num" },
    {
        title: "author",

        render: (record) => {
            return (
                <span>
                    {record.content1}
                    <b>{record.blod}</b>
                    {record.content2}
                </span>
            );
        },
    },
    {
        title: "Articles",
        dataIndex: "title",
        render: (text, record) => {
            if (record.link === "") {
                return <a style={{ color: "black" }}>{text}</a>;
            } else {
                return (
                    <a
                        href={record.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <b>
                            <u>{text}</u>
                        </b>
                    </a>
                );
            }
        },
    },
    {
        title: "",
        dataIndex: "content3",
    },
];

const Education_columns = [
    { title: "From and to", dataIndex: "time" },
    { title: "Institution", dataIndex: "institution" },
    { title: "Major", dataIndex: "major" },
    { title: "Degree", dataIndex: "degree" },
];
const Education_data = [
    {
        time: "2008 ~ 2010",
        institution: "National Chung Hsing University",
        major: "Electrical Engineering",
        degree: "M.S.",
    },
    {
        time: "2011 ~ 2014",
        institution: "University of Maryland Baltimore County",
        major: "Electrical Engineering",
        degree: "Ph.D.",
    },
];

const Experience_columns = [
    { title: "From and to", dataIndex: "time" },
    { title: "Employer", dataIndex: "employer" },
    { title: "Position", dataIndex: "position" },
];
const Experience_data = [
    {
        time: "2018 ~ present",
        employer: "National Yunlin University of Science and Technology",
        position: "Associate Professor",
    },
    {
        time: "2014 ~ 2018",
        employer: "National Yunlin University of Science and Technology",
        position: "Associate Professor",
    },
    {
        time: "2011 ~ 2014",
        employer: "University of Maryland Baltimore County",
        position: "Research Assistant",
    },
    {
        time: "2008 ~ 2011",
        employer: "Taichung Veterans General Hospital, Taiwan",
        position: "Research Assistant",
    },
];

const data = [
    {
        Year:"2024",
        Num :"1",
        blod: "Shih-Yu Chen,",
        content1:
            "",
        content2:" Kai-Hsun Hsu, Tzu-Hsien Kuo. ",
        link:"https://ieeexplore.ieee.org/document/10509762",
        title:"Hyperspectral Target Detection-Based 2-D–3-D Parallel Convolutional Neural Networks for Hyperspectral Image Classification",
        content3:"IEEE JOURNAL OF SELECTED TOPICS IN APPLIED EARTH OBSERVATIONS AND REMOTE SENSING, VOL. 17, 9451 - 9469, 本人為第一作者、通訊作者",

    },
    {
        Year:"2024",
        Num :"1",
        blod: "Shih-Yu Chen,",
        content1:
            "",
        content2:" Mei-Yun Wang, Yung-Ming Kuo, Yu-Chia Chan, Yi-Cheng Chen. ",
        link:"https://www.sciencedirect.com/science/article/pii/S0925521424000826?dgcid=author",
        title:"Almond defect and freshness inspection system using hyperspectral imaging and deep learning techniques",
        content3:"Postharvest Biology and Technology, vol. 211, p.112837, May 2024 本人為第一作者、通訊作者",

    },
    {
        Year: "2023",
        Num: "",
        blod: "Shih-Yu Chen.",
        content1:
            "Vinay Kukreja, Asha Abraham, K. Kalaiselvi, K. Deepa Thilak, Shanmugasundaram Hariharan, ",
        content2: "",

        link: "https://www.techscience.com/cmc/online/detail/19543",
        title: "Machine Learning for Data Fusion: A Fuzzy AHP Approach for Open Issues",
        content3:
            "CMC-Computers, Materials & Continua, DOI:10.32604/cmc.2023.045136. 本人為通訊作者",
    },
    {
        Year: "",
        Num: "1",
        blod: "Shih-Yu Chen, ",
        content1: "A. Manju, R. Kaladevi, Shanmugasundaram Hariharan, ",
        content2:
            "Vinay Kukreja, Pradip Kumar Sharma, Fayez Alqahtani, Amr Tolba, Jin Wang.",

        link: "https://www.techscience.com/cmc/v76n1/53102",
        title: "Early Diagnosis of Lung Tumors for Extending Patients’ Life Using Deep Neural Networks",
        content3:
            " Computers, Materials & Continua 2023, 76(1), 993-1007. 本人為通訊作者 ",
    },

    {
        Year: "",
        Num: "2",
        blod: "Shih-Yu Chen, ",
        content1:
            "A. Manju, A. Revathi, M. Arivukarasi, S. Hariharan, V. Umarani, ",
        content2: "Jin Wang.",

        link: "https://www.techscience.com/iasc/v37n1/52704",
        title: "Fuzzy Rule-Based Model to Train Videos in Video Surveillance System",
        content3:
            " Intelligent Automation & Soft Computing 2023, 37(1), 905-920. 本人為通訊作者 ",
    },

    {
        Year: "",
        Num: "3",
        blod: "Shih-Yu Chen, ",
        content1: "",
        content2: "Shih-Hsun Hsu, Chih-Yi Ko, Kai-Hsun Hsu.",

        link: "https://www.sciencedirect.com/science/article/pii/S0956713523001160",
        title: "Real-time defect and freshness inspection on chicken eggs using hyperspectral imaging",
        content3:
            " Food Control, vol. 150, p.109716, August 2023 本人為第一作者、通訊作者 ",
    },

    {
        Year: "2022",
        Num: "1",
        blod: "Shih-Yu Chen, ",
        content1: "Chih-Chung Hsu, Li-Wei Kang, ",
        content2: "I-Shan Wang, Ching-Hao Hong, Chuan-Yu Chang.",

        link: "https://link.springer.com/article/10.1007/s11042-022-13742-x",
        title: "Deep learning-based vehicle trajectory prediction based on generative adversarial network for autonomous driving applications",
        content3:
            " Springer Nature, Multimedia Tools and Applications , September 2022 , DOI = 10.1007/s11042-022-13742-x. ",
    },

    {
        Year: "",
        Num: "2",
        blod: "Shih-Yu Chen, ",
        content1: "",
        content2: "Ming-Feng Chiu, Xue-Wei Zou.",

        link: "https://www.sciencedirect.com/science/article/pii/S0168169922002873?dgcid=author",
        title: "Real-Time Defect Inspection of Green Coffee Beans Using NIR Snapshot Hyperspectral Imaging",
        content3:
            " Computers and Electronics in Agriculture, vol. 197, p.106970, June 2022 (SCI, IF = 5.565, AGRICULTURE, MULTIDISCIPLINARY, Rank= 2/57=3.5%, Q1) 本人為第一作者、通訊作者",
    },
    {
        Year: "2021",
        Num: "1",
        blod: "Shih-Yu Chen, ",
        content1: "",
        content2: "Yu-Chih Cheng, Wen-Long Yang, Mei-Yun Wang.",

        link: "https://ieeexplore.ieee.org/document/9536578",
        title: "Surface Defect Detection of Wet-Blue Leather Using Hyperspectral Imaging",
        content3:
            ", in IEEE Access, vol. 9, pp. 127685-127702, 2021, doi: 10.1109/ACCESS.2021.3112133. ",
    },
    {
        Year: "",
        Num: "2",
        blod: "Shih-Yu Chen, ",
        content1: "",
        content2: "Chinsu Lin, Guan-Jie Li, Yu-Chun Hsu, Keng-Hao Liu.",

        link: "https://www.mdpi.com/1424-8220/21/6/2077",
        title: "Hybrid Deep Learning Models with Sparse Enhancement Technique for Detection of Newly Grown Tree Leaves ",
        content3: " Sensors 21, no. 6: 2077. ",
    },
    {
        Year: "2020",
        Num: "1",
        blod: "Shih-Yu Chen, ",
        content1: "",
        content2: "Chuan-Yu Chang, Cheng-Syue Ou, Chou-Tien Lien",
        link: "https://www.mdpi.com/2072-4292/12/15/2348/htm",
        title: "Detection of Insect Damage in Green Coffee Beans Using VIS-NIR Hyperspectral Imaging.",
        content3:
            " Remote sensing, 12(15), 2348. (SCI, IF = 4.509, Ranking = 9/30 = 30%,  Remote sensing). 本人為第一作者、通訊作者. ",
    },
    {
        Year: "",
        Num: "2",
        blod: "SY Chen, ",
        content1:
            "William C Chiu, DB Powers, JM Hirshon, SA Shackelford, PF Hu, ",
        content2:
            "HH Chen, CF Mackenzie, CH Miller, JJ DuBose, C Carroll, R Fang, TM Scalea.",
        link: "https://militaryhealth.bmj.com/content/early/2020/05/28/bmjmilitary-2020-001483",
        title: "Impact of trauma centre capacity and volume on the mortality risk of incoming new admissions.",
        content3: " BMJ Mil Health. (SCI, IF = 0.994).",
    },
    {
        Year: "2019",
        Num: "1",
        blod: "Shih-Yu Chen, ",
        content1: "",
        content2: "Chinsu Lin, Shang-Ju Chuang, Zhe-Yuan Kao.",
        link: "https://www.mdpi.com/2072-4292/11/9/1081/htm",
        title: "Weighted Background Suppression Target Detection Using Sparse Image Enhancement Technique for Newly Grown Tree Leaves.",
        content3:
            " Remote Sens., 11(9), 1081. (SCI, IF = 4.5, Ranking = 7/29 = 24.13%, Remote Sensing). 本人為第一作者. ",
    },
    {
        Year: "2018",
        Num: "1",
        blod: "Shih-Yu Chen, ",
        content1: "Chinsu Lin, ",
        content2: "Chia-Chun Chen, Chia-Huei Tai.",
        link: "https://www.sciencedirect.com/science/article/pii/S0924271618301552",
        title: "Detecting Newly Grown Tree Leaves from Unmanned-Aerial-Vehicle Images using Hyperspectral Target Detection Techniques.",
        content3:
            " ISPRS JOURNAL OF PHOTOGRAMMETRY AND REMOTE SENSING. (SCI, IF = 7.31, Ranking = 1/29 = 3.4%, GEOCHEMISTRY & GEOPHYSICS). 本人為通訊作者.",
    },
    {
        Year: "",
        Num: "2",
        blod: "Shih-Yu Chen, ",
        content1: "Keng-Hao Liu, ",
        content2: " Hung-Chang Chien, Meng-Han Lu.",
        link: "https://www.mdpi.com/2072-4292/10/3/367",
        title: "Progressive Sample Processing of Band Selection for Hyperspectral Image Transmission.",
        content3:
            " Remote Sensing, 10(3), 367. (SCI, IF = 4.5, Ranking = 7/29 = 24.13%, Remote Sensing).",
    },
    {
        Year: "",
        Num: "3",
        blod: "Shih-Yu Chen, ",
        content1: "",
        content2: " Chinsu Lin, Chia-Hui Tai, Shang-Ju Chuang.",
        link: "https://www.mdpi.com/2072-4292/10/1/96",
        title: "Adaptive Window-Based Constrained Energy Minimization for Detection of Newly Grown Tree Leaves.",
        content3:
            " Remote Sensing, 10(1), 96. (SCI, IF = 4.5, Ranking = 7/29 = 24.13%, Remote Sensing). 本人為第一作者.",
    },
    {
        Year: "2016",
        Num: "1",
        blod: "Shih-Yu Chen, ",
        content1: "Chein-I Chang, ",
        content2: " Hsiao-Chi Li, Hsian-Min Chen, Chia-Hsien Wen.",
        link: "https://ieeexplore.ieee.org/document/7490352",
        title: "Comparative Study and Analysis Among ATGP, VCA, and SGA for Finding Endmembers in Hyperspectral Imagery.",
        content3:
            " IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 9(9), 4280-4306. (SCI, IF = 3.82, Ranking = 6/26 = 23.07%, ENGINEERING, ELECTRICAL & ELECTRONIC). 本人為通訊作者.",
    },
    {
        Year: "",
        Num: "2",
        blod: "Shih-Yu Chen, ",
        content1: "Chein-I Chang, Wei Xiong, ",
        content2: "",
        link: "https://www.inderscienceonline.com/doi/abs/10.1504/IJCSE.2016.076294",
        title: "Convex Cone Volume Analysis for Finding Endmembers in Hyperspectral Imagery.",
        content3:
            " International Journal of Computational Science and Engineering, Vol. 12, Nos. 2/3, pp. 186-191. (EI). 本人為通訊作者.",
    },
    {
        Year: "2015",
        Num: "1",
        blod: "Shih-Yu Chen. ",
        content1: "Chein-I Chang, Cheng Gao, ",
        content2: "",
        link: "https://ieeexplore.ieee.org/document/7137619",
        title: "Recursive Automatic Target Generation Process in Subpixel Detection.",
        content3:
            " IEEE Geoscience and Remote Sensing Letters, 12(9), 1848 - 1852. (SCI, 67/265, ENGINEERING, ELECTRICAL & ELECTRONIC). 本人為通訊作者.",
    },
    {
        Year: "",
        Num: "2",
        blod: "Shih-Yu Chen, ",
        content1: "Yaw-Jiunn Chiou, Clayton Chi-Chang Chen, ",
        content2:
            " Hsian-Min Chen, Jyh-Wen Chai, Yen-Chieh Ouyang, Wu-Chung Su, Ching-Wen Yang, San-Kan Lee, Chein-I Chang.",
        link: "https://www.tandfonline.com/doi/abs/10.1080/02533839.2015.1056552",
        title: "Magnetic resonance brain tissue classification and volume calculation.",
        content3:
            " Journal of the Chinese Institute of Engineers.(IF = 0.395, Ranking = 76/85 = 89.41%).",
    },
    {
        Year: "",
        Num: "3",
        blod: "Shih-Yu Chen. ",
        content1: "Chein-I Chang, Yulei Wang, ",
        content2: "",
        link: "https://ieeexplore.ieee.org/document/7109108",
        title: "Anomaly Detection Using Causal Sliding Windows.",
        content3:
            " IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 8(7), 3260 - 3270. (SCI, IF = 3.82, Ranking = 6/26 = 23.07%, ENGINEERING, ELECTRICAL & ELECTRONIC). 本人為通訊作者.",
    },
    {
        Year: "",
        Num: "4",
        blod: "Shih-Yu Chen, ",
        content1: "Meiping Song, ",
        content2: " Hsiao-Chi Li, Hsian-Min Chen, Chein-I Chang. ",
        link: "https://ieeexplore.ieee.org/document/7154408",
        title: "Finding Virtual Signatures for Linear Spectral Mixture Analysis.",
        content3:
            " IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 8(6), 2704 - 2719. (SCI, IF = 3.82, Ranking = 6/26 = 23.07%, ENGINEERING, ELECTRICAL & ELECTRONIC).",
    },
    {
        Year: "2014",
        Num: "1",
        blod: "Shih-Yu Chen, ",
        content1: "Chein-I. Chang, Robert C. Schultz, Marissa C. Hobbs, ",
        content2: " Yulei Wang, Chunhong Liu. ",
        link: "https://ieeexplore.ieee.org/document/6894584",
        title: "Progressive Band Processing of Constrained Energy Minimization for Subpixel Detection.",
        content3:
            " IEEE Transactions on Geoscience and Remote sensing, 53(3),1626 - 1637. (SCI, IF = 5.85, Ranking = 4/84=4.07%).",
    },
    {
        Year: "",
        Num: "2",
        blod: "Shih-Yu Chen, ",
        content1: "Colin F Mackenzie, Yulei Wang, Peter F Hu, ",
        content2: " Hegang H Chen. ",
        link: "https://journals.lww.com/jtrauma/pages/articleviewer.aspx?year=2014&issue=06000&article=00007&type=abstract",
        title: " Automated prediction of early blood transfusion and mortality in trauma patients.",
        content3:
            " Journal of Trauma and Acute Care Surgery, Vol. 76, no. 6, pp.1379-1385. (SCI, IF = 3.4, Ranking = 33/197 = 16.75%, Surgery).",
    },
    {
        Year: "",
        Num: "3",
        blod: "Shih-Yu Chen, ",
        content1: "",
        content2:
            " Yulei Wang, Chao-Cheng Wu, Chunhong Liu and Chein-I Chang. ",
        link: "https://ieeexplore.ieee.org/abstract/document/6850171",
        title: "Real Time Causal Processing of Anomaly Detection for Hyperspectral Imagery.",
        content3:
            " IEEE Transactions on Aerospace and Electronic Systems, vol.52, no.2, pp.1511-1534. (SCI, IF = 3.67, Ranking = 4/31 = 12.90.%, AEROSPACE). 本人為第一作者.",
    },
    {
        Year: "2013",
        Num: "1",
        blod: "Shih-Yu Chen, ",
        content1: "Clayton Chi-Chang Chen, Englin Wong, Hsian-Min Chen, ",
        content2:
            "Jyh-Wen Chai, Ching Wen Yang, San Kan Lee, Yong Kie Wong, Chein-I Chang. ",
        link: "https://www.inderscience.com/info/inarticle.php?artid=53090",
        title: "Intra-pixel multispectral processing of magnetic resonance brain images for tissue characterization.",
        content3:
            " International Journal of Computational Science and Engineering, vol. 8, no. 2, pp. 87-110.",
    },
    {
        Year: "2012",
        Num: "1",
        blod: "Shih-Yu Chen, ",
        content1: "Hsian-Min Chen, Chinsu Lin, ",
        content2:
            "Chia-Hsien Wen, Clayton Chi-Chang Chen, Yen-Chieh Ouyang and Chein-I Chang. ",
        link: "https://ieeexplore.ieee.org/document/6374271",
        title: "PPI SVM-Iterative FLDA Approach to Unsupervised Multispectral Image Classification.",
        content3:
            " IEEE Journal of Selected Topics in Applied Earth Observation sand Remote Sensing, vol. 6, no. 4, pp. 1834-1842. (SCI, IF = 3.82, Ranking = 6/26 = 23.07%, ENGINEERING, ELECTRICAL & ELECTRONIC).",
    },
];

// Journal Articles Number 遞增
for (let i in data) {
    data[i].Num = Number(i) + 1;
}

export default Professor1;
