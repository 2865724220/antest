import React, { Component } from 'react';



class Question extends Component {

    constructor(props){
        super(props)
        this.state={
            money01:30,
            money02:10,
            money03:4,
            money04:30,
        }
    }

    componentDidMount(){

    }

    change01(value){
        this.setState({
            money01:value,
        })
    }
    change02(value){
        this.setState({
            money02:value,
        })
    }
    change03(value){
        this.setState({
            money03:value,
        })
    }
    change04(value){
        this.setState({
            money04:value,
        })
    }
    btnPress(){
        localStorage.setItem('money01',this.state.money01)
        localStorage.setItem('money02',this.state.money02)
        localStorage.setItem('money03',this.state.money03)
        localStorage.setItem('money04',this.state.money04)
    }

    render() {
        let a = localStorage.getItem('member')
        return (
            <div className="question">
                <div className="quesProgress">
                    <i className="g05"></i>
                </div>
                <div className="pbt">
                    <a href="#question04">
                        <img className="prevA" src={require('../../images/icon-back@2x.png')} alt=""/>
                        上一题
                    </a>
                </div>
                <div className="robotC">
                    <img src={require('../../images/motiaon_anan.png')} alt=""/>
                </div>
                <div className="quTitle">
                    <span className="quN"><em>5</em><i>/</i>8</span>
                    <div className="quC">
                        你的家庭年收入是
                    </div>
                </div>

                <div className="fAge clearfix">
                    {
                        <div className="ageItem">
                            <span className="tSpan">本人税后</span>
                            <input type="tel" className="ageInput" value={this.state.money01}  onChange={(event)=>this.change01(event.target.value)}/>
                            <span>万</span>
                        </div>
                    }

                    {
                        a.indexOf('0')>0&&
                        <div className="ageItem">
                            <span className="tSpan">配偶税后</span>
                            <input type="tel" className="ageInput" value={this.state.money02}  onChange={(event)=>this.change02(event.target.value)}/>
                            <span>万</span>
                        </div>
                    }

                    <div className="ageItem">
                        <span className="tSpan">其他收入</span>
                        <input type="tel" className="ageInput" value={this.state.money03}  onChange={(event)=>this.change03(event.target.value)}/>
                        <span>万</span>
                    </div>
                    <div className="ageItem">
                        <span className="tSpan">家庭存款</span>
                        <input type="tel" className="ageInput" value={this.state.money04}  onChange={(event)=>this.change04(event.target.value)}/>
                        <span>万</span>
                    </div>
                </div>


                <div className="bt">
                    <a href="#question06" onClick={this.btnPress.bind(this)}>
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
