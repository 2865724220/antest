import React, { Component } from 'react';



class Question extends Component {

    constructor(props){
        super(props)
        this.state={
            safe01:50,
            safe02:50,
            safe03:10,
            safe04:50
        }
    }

    componentDidMount(){

    }


    change01(value){
        this.setState({
            safe01:value,
        })
    }
    change02(value){
        this.setState({
            safe02:value,
        })
    }
    change03(value){
        this.setState({
            safe03:value,
        })
    }
    change04(value){
        this.setState({
            safe04:value,
        })
    }
    onBtnPress(){
        localStorage.setItem('safe01',this.state.safe01)
        localStorage.setItem('safe02',this.state.safe02)
        localStorage.setItem('safe03',this.state.safe03)
        localStorage.setItem('safe04',this.state.safe04)
    }

    render() {
        return (
            <div className="question">
                <div className="quesProgress">
                    <i className="g08"></i>
                </div>
                <div className="pbt">
                    <a href="#question07">
                        <img className="prevA" src={require('../../images/icon-back@2x.png')} alt=""/>
                        上一题
                    </a>
                </div>
                <div className="robotC">
                    <img src={require('../../images/motiaon_anan.png')} alt=""/>
                </div>
                <div className="quTitle">
                    <span className="quN"><em>8</em><i>/</i>8</span>
                    <div className="quC">
                        你已经购买了哪些保障？
                    </div>
                </div>

                <div className="maskBg pbd30">
                    <div className="inputLine clearfix">
                        <span className="inputTL">重疾险 (保额）</span>
                        <input className="fInput" type="tel" value={this.state.safe01}  onChange={(event)=>this.change01(event.target.value)}/>
                        <span className="inputTR">万元</span>
                    </div>
                    <div className="inputLine clearfix">
                        <span className="inputTL">寿险 (保额）</span>
                        <input className="fInput" type="tel" value={this.state.safe02}  onChange={(event)=>this.change02(event.target.value)}/>
                        <span className="inputTR">万元</span>
                    </div>
                    <div className="inputLine clearfix">
                        <span className="inputTL">意外险 (保额）</span>
                        <input className="fInput" type="tel" value={this.state.safe03}  onChange={(event)=>this.change03(event.target.value)} />
                        <span className="inputTR">万元</span>
                    </div>
                    <div className="inputLine clearfix">
                        <span className="inputTL">医疗险 (保额）</span>
                        <input className="fInput" type="tel" value={this.state.safe04}  onChange={(event)=>this.change04(event.target.value)} />
                        <span className="inputTR">万元</span>
                    </div>
                </div>

                <div className="bt">
                    <a href="#/result" onClick={this.onBtnPress.bind(this)}>
                        下一步 (风险分析)
                        <img className="nextA" src={require('../../images/icon-enter@2x.png')} alt=""/>
                    </a>
                </div>
                <p className="grey">安安为您提供专业服务，从了解您的家庭风险开始～</p>
            </div>
        );
    }
}

export default Question;
