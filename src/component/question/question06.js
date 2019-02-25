import React, { Component } from 'react';



class Question extends Component {

    constructor(props){
        super(props)
        this.state={
            selectIndex01:1,
            selectIndex02:1,
            selectIndex03:1,
            selectIndex04:1,
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
    select03(index){
        this.setState({
            selectIndex03:index
        })
    }

    select04(index){
        this.setState({
            selectIndex04:index
        })
    }

    btnClick(){
        localStorage.setItem('selectIndex01',this.state.selectIndex01)
        localStorage.setItem('selectIndex02',this.state.selectIndex02)
        localStorage.setItem('selectIndex03',this.state.selectIndex03)
        localStorage.setItem('selectIndex04',this.state.selectIndex04)

    }

    render() {
        let a = localStorage.getItem('member')

        return (
            <div className="question">
                <div className="quesProgress">
                    <i className="g06"></i>
                </div>
                <div className="pbt">
                    <a href="#question05">
                        <img className="prevA" src={require('../../images/icon-back@2x.png')} alt=""/>
                        上一题
                    </a>
                </div>
                <div className="robotC">
                    <img src={require('../../images/motiaon_anan.png')} alt=""/>
                </div>
                <div className="quTitle">
                    <span className="quN"><em>6</em><i>/</i>8</span>
                    <div className="quC">
                        家庭成员是否有社保？
                    </div>
                </div>
                <div className="maskBg">
                    <div className="btLine mgt14 clearfix">
                        <div className="btText">本人</div>
                        <div className="btSwitch">
                            <span className={this.state.selectIndex01 == 0 ? "switchI on" : "switchI"} onClick={()=>this.select01(0)}>无</span>
                            <span className={this.state.selectIndex01 == 1 ? "switchI on" : "switchI"} onClick={()=>this.select01(1)}>有</span>
                        </div>
                    </div>
                    {
                        a.indexOf('0')>0&&
                        <div className="btLine mgt14 clearfix">
                            <div className="btText">配偶</div>
                            <div className="btSwitch">
                                <span className={this.state.selectIndex02 == 0 ? "switchI on" : "switchI"} onClick={()=>this.select02(0)}>无</span>
                                <span className={this.state.selectIndex02 == 1 ? "switchI on" : "switchI"} onClick={()=>this.select02(1)}>有</span>
                            </div>
                        </div>
                    }

                    {
                        a.indexOf('1')>0&&
                        <div className="btLine mgt14 clearfix">
                            <div className="btText">父亲</div>
                            <div className="btSwitch">
                                <span className={this.state.selectIndex03 == 0 ? "switchI on" : "switchI"} onClick={()=>this.select03(0)}>无</span>
                                <span className={this.state.selectIndex03 == 1 ? "switchI on" : "switchI"} onClick={()=>this.select03(1)}>有</span>
                            </div>
                        </div>

                    }
                    {
                        a.indexOf('2')>0&&
                        <div className="btLine mgt14 clearfix">
                            <div className="btText">母亲</div>
                            <div className="btSwitch">
                                <span className={this.state.selectIndex04 == 0 ? "switchI on" : "switchI"} onClick={()=>this.select04(0)}>无</span>
                                <span className={this.state.selectIndex04 == 1 ? "switchI on" : "switchI"} onClick={()=>this.select04(1)}>有</span>
                            </div>
                        </div>
                    }
                    {/*{*/}
                    {/*a.indexOf('3')>0&&*/}
                    {/*<div className="btLine clearfix">*/}
                    {/*<div className="btText">儿子</div>*/}
                    {/*<div className="btSwitch">*/}
                    {/*<span className={this.state.selectIndex05 == 0 ? "switchI on" : "switchI"} onClick={()=>this.select05(0)}>无</span>*/}
                    {/*<span className={this.state.selectIndex05 == 1 ? "switchI on" : "switchI"} onClick={()=>this.select05(1)}>有</span>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*}*/}

                </div>

                <div className="bt">
                    <a href="#question07" onClick={this.btnClick.bind(this)}>
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
