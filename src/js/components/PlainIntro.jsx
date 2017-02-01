import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    render () {
        return (
            <div className="PlainIntro">
                <div className="PlainText">
                    <p>
                        清華精神：「厚德載物，自強不息」。我們希望透過此計畫，讓行動得以傳承，改變得以蔓延。我們想要尋找35歲以下、用具體且持續行動做出改變的清大人，並藉由故事採訪描繪出新世代的面貌與精神，讓這群勇於改變的新世代「行動家」，能被更多人看見，共同「創造連結」，不只讓這群人能觸及校園，更能引領社會，紮根土地，融合文化，一起走出永遠值得更好的未來。
                    </p>
                </div>
                <div className="PlainIcon">
                    <ul>
                        <li>
                            <div className="IconImg">
                                <img src="http://i.imgur.com/XV8SdT5.png"/>
                            </div>
                            <div className="IconBrief">
                                環境生態
                            </div>
                        </li>
                        <li>
                            <div className="IconImg">
                                <img src="http://i.imgur.com/11eHyjm.png"/>
                            </div>
                            <div className="IconBrief">
                                產業創新
                            </div>
                        </li>
                        <li>
                            <div className="IconImg">
                                <img src="http://i.imgur.com/DfzHrx1.png"/>
                            </div>
                            <div className="IconBrief">
                                人文藝術
                            </div>
                        </li>
                        <li>
                            <div className="IconImg">
                                <img src="http://i.imgur.com/DNJOjR6.png"/>
                            </div>
                            <div className="IconBrief">
                                在地經營
                            </div>
                        </li>
                        <li>
                            <div className="IconImg">
                                <img src="http://i.imgur.com/uqsODxJ.png"/>
                            </div>
                            <div className="IconBrief">
                                教育紮根
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}, require('./PlainIntro.styl'))