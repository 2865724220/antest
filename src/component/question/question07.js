import React, { Component } from 'react';



class Question extends Component {

    constructor(props){
        super(props)
        this.state={
            selectIndex01:1,
            selectIndex02:0,
            houseM:15000,
            houseA:20,
            carM:0,
            carA:0,
        }
    }

    componentDidMount(){

    }

    select01(index){
        this.setState({
            selectIndex01:index
        })
    }

    select02(index){
        this.setState({
            selectIndex02:index
        })
    }

    change01(value){
        this.setState({
            houseM:value,
        })
    }
    change02(value){
        this.setState({
            houseA:value,
        })
    }

    change03(value){
        this.setState({
            carM:value,
        })
    }
    change04(value){
        this.setState({
            carA:value,
        })
    }

    btnPress(){
        localStorage.setItem('houseM',this.state.houseM)
        localStorage.setItem('houseA',this.state.houseA)
        localStorage.setItem('carM',this.state.carM)
        localStorage.setItem('carA',this.state.carA)
    }


    render() {
        return (
            <div className="question">
                <div className="quesProgress">
                    <i className="g07"></i>
                </div>
                <div className="pbt">
                    <a href="#question06">
                        <img className="prevA" src={require('../../images/icon-back@2x.png')} alt=""/>
                        上一题
                    </a>
                </div>
                <div className="robotC">
                    <img src={require('../../images/motiaon_anan.png')} alt=""/>
                </div>
                <div className="quTitle">
                    <span className="quN"><em>7</em><i>/</i>8</span>
                    <div className="quC">
                        你的家庭是否有贷款？
                    </div>
                </div>

                <div className="maskBg">
                    <div className="btLine mgt20 clearfix">
                        <div className="clearfix">
                            <div className="btText">是否有房贷？</div>
                            <div className="btSwitch">
                                <span className={this.state.selectIndex01 == 0 ? "switchI on" : "switchI"} onClick={()=>this.select01(0)}>无</span>
                                <span className={this.state.selectIndex01 == 1 ? "switchI on" : "switchI"} onClick={()=>this.select01(1)}>有</span>
                            </div>
                        </div>

                        {
                            this.state.selectIndex01 === 1&& <div className="btItem">
                                <div className="inputLine clearfix">
                                    <span className="inputTL ha">每月还款金额</span>
                                    <input className="fInput" type="tel" value={this.state.houseM}  onChange={(event)=>this.change01(event.target.value)}/>
                                    <span className="inputTR">元</span>
                                </div>
                                <div className="inputLine clearfix">
                                    <span className="inputTL ha">剩余还款年数</span>
                                    <input className="fInput" type="tel" value={this.state.houseA}  onChange={(event)=>this.change02(event.target.value)}/>
                                    <span className="inputTR">年</span>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="btLine clearfix">
                        <div className="clearfix">
                            <div className="btText">是否有车贷？</div>
                            <div className="btSwitch">
                                <span className={this.state.selectIndex02 == 0 ? "switchI on" : "switchI"} onClick={()=>this.select02(0)}>无</span>
                                <span className={this.state.selectIndex02 == 1 ? "switchI on" : "switchI"} onClick={()=>this.select02(1)}>有</span>
                            </div>
                        </div>
                        {
                            this.state.selectIndex02 ===1&&<div className="btItem">
                                <div className="inputLine clearfix">
                                    <span className="inputTL ha">每月还款金额</span>
                                    <input className="fInput" type="tel" value={this.state.carM}  onChange={(event)=>this.change03(event.target.value)}/>
                                    <span className="inputTR">元</span>
                                </div>
                                <div className="inputLine clearfix">
                                    <span className="inputTL ha">剩余还款年数</span>
                                    <input className="fInput" type="tel" value={this.state.carA}  onChange={(event)=>this.change04(event.target.value)}/>
                                    <span className="inputTR">年</span>
                                </div>
                            </div>
                        }

                    </div>
                </div>

                <div className="bt">
                    <a href="#question08" onClick={this.btnPress.bind(this)}>
                        下一题
                        <img className="nextA" src={require('../../images/icon-enter@2x.png')} alt=""/>
                    </a>
                </div>
                <p className="grey">安安为您提供专业服务，从了解您的家庭风险开始～</p>
            </div>
        );
    }
}

export default Question;
