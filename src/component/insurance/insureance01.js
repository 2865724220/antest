import React, { Component } from 'react';
import { Qs } from "../tools";



class Insurance extends Component {

    constructor(props){
        super(props)
        this.state={
            tabIndex:0,
            money:'',
            travel:'',

        }
    }
    componentWillMount(){
        // var travel = params.travel?params.travel:'';
        // console.log(decodeURIComponent(travel))
    }

    componentDidMount(){
        const params = Qs();
        let travel = params.travel?params.travel:''
        if(parseInt(travel)<=5){
            this.setState({
                money:'35',
            })
        }else if(parseInt(travel)==6){
            this.setState({
                money:'66',
            })
        }else{
            this.setState({
                money:'9.9',
            })
        }
        this.setState({
            travel:travel
        })
    }

    tab(index,money){
        this.setState({
            tabIndex:index,
            money:money
        })
    }
    openW(){
        alert("暂时还不支持查看投保详情")
    }
    wxT(){
        alert('请按返回键返回')
    }

    render() {
        return (

            <div className="insurance">
                {
                    this.state.travel =='7'&&<div className="inHB car">

                        <div className="inName">9.9驾考无忧险</div>
                        <div className="inSub">中国平安保险 / 月销售量200099份</div>
                        <div className="inTab">
                            <div className="tab">
                                <ul className="tHead">
                                    {/*<li className={this.state.tabIndex === 0?"active":""} style={{"width":"100%"}} onClick={()=>this.tab(0,'9.9')}>*/}
                                    {/*<div className="tBold">*/}
                                    {/*￥<em>9.9</em>起*/}
                                    {/*</div>*/}
                                    {/**/}
                                    {/*</li>*/}
                                </ul>

                                <ul className="tabCon">
                                    <li>
                                        <div className="tSub">
                                            保障计划
                                        </div>
                                    </li>
                                    {
                                        this.state.tabIndex === 0&&
                                        <li>
                                            <div className="tabLine clearfix">
                                                <span>重新报名最高理赔金</span>
                                                <span>2万元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>保障期限</span>
                                                <span>300万元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>适用人群</span>
                                                <span>400万元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>保费</span>
                                                <span>500万元</span>
                                            </div>

                                            <div>
                                                更多详情，请阅读
                                                <a href="javascript:;" onClick={()=>this.openW()} style={{"display":"inline-block","paddingLeft":'6px'}}>查看保障详情</a>
                                            </div>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state.travel!='7' && <div className={this.state.travel=='6'?'inHB phone':'inHB'}>
                        {
                            this.state.travel =='0'&&<div className="inName">夏威夷旅游保险</div>
                        }
                        {
                            this.state.travel =='1'&&<div className="inName">杭州旅游保险</div>
                        }
                        {
                            this.state.travel =='2'&&<div className="inName">香港旅游保险</div>
                        }
                        {
                            this.state.travel =='3'&&<div className="inName">北京旅游保险</div>
                        }
                        {
                            this.state.travel =='4'&&<div className="inName">武汉旅游保险</div>
                        }
                        {
                            this.state.travel =='5'&&<div className="inName">重庆旅游保险</div>
                        }

                        {
                            this.state.travel =='6'&&<div className="inName">66大顺手机碎屏险</div>
                        }
                        <div className="inSub">中国平安保险 / 月销售量100099份</div>
                        <div className="inTab">
                            <div className="tab">
                                <ul className="tHead">
                                    {
                                        this.state.travel=='6'&&<li className={this.state.tabIndex === 0?"active":""} onClick={()=>this.tab(0,'66')}>
                                            <div className="tBold">
                                                ￥
                                                <em>66</em>/年
                                            </div>
                                            <div className="tSub">
                                                基本版
                                            </div>
                                        </li>
                                    }
                                    {
                                        this.state.travel!='6'&&<li className={this.state.tabIndex === 0?"active":""} onClick={()=>this.tab(0,'35')}>
                                            <div className="tBold">
                                                ￥
                                                <em>35</em>起
                                            </div>
                                            <div className="tSub">
                                                基本计划
                                            </div>
                                        </li>
                                    }
                                    {
                                        this.state.travel=='6'&&<li className={this.state.tabIndex === 1?"active":""} onClick={()=>this.tab(1,'86')}>
                                            <div className="tBold">
                                                ￥<em>86</em>/年
                                            </div>
                                            <div className="tSub">
                                                iPhone 8/plus
                                            </div>
                                        </li>
                                    }
                                    {
                                        this.state.travel!='6'&&<li className={this.state.tabIndex === 1?"active":""} onClick={()=>this.tab(1,'60')}>
                                            <div className="tBold">
                                                ￥<em>60</em>起
                                            </div>
                                            <div className="tSub">
                                                经典计划
                                            </div>
                                        </li>
                                    }
                                    {
                                        this.state.travel=='6'&&<li className={this.state.tabIndex === 2?"active":""} onClick={()=>this.tab(2,'106')}>
                                            <div className="tBold">
                                                ￥<em>106</em>/年
                                            </div>
                                            <div className="tSub">
                                                全曲面屏
                                            </div>
                                        </li>
                                    }
                                    {
                                        this.state.travel!='6'&&<li className={this.state.tabIndex === 2?"active":""} onClick={()=>this.tab(2,'100')}>
                                            <div className="tBold">
                                                ￥<em>100</em>起
                                            </div>
                                            <div className="tSub">
                                                升级计划
                                            </div>
                                        </li>
                                    }
                                </ul>
                                <ul className="tabCon">
                                    {
                                        this.state.travel!='6'&&this.state.tabIndex === 0&&
                                        <li>
                                            <div className="tabLine clearfix">
                                                <span>意外身故及伤残</span>
                                                <span>10万元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>医疗费用</span>
                                                <span>10万元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>旅行变更</span>
                                                <span>3000万元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>旅行延误</span>
                                                <span>600元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>行李延误</span>
                                                <span>1000元</span>
                                            </div>
                                            <a href="javascript:;" onClick={()=>this.openW()}>查看保障详情</a>
                                        </li>
                                    }
                                    {
                                        this.state.travel=='6'&&this.state.tabIndex === 0&&
                                        <li>
                                            <div className="tabLine clearfix">
                                                <span>财产损失</span>
                                                <span>1000元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>保障期限</span>
                                                <span>1年</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>适用人群</span>
                                                <span>全体用户</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>保费</span>
                                                <span>86元</span>
                                            </div>
                                            <a href="javascript:;" onClick={()=>this.openW()}>查看保障详情</a>
                                        </li>
                                    }
                                    {
                                        this.state.travel!='6'&&this.state.tabIndex === 1 &&
                                        <li>
                                            <div className="tabLine clearfix">
                                                <span>意外身故及伤残</span>
                                                <span>12万元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>医疗费用</span>
                                                <span>18万元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>旅行变更</span>
                                                <span>3000万元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>旅行延误</span>
                                                <span>800元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>行李延误</span>
                                                <span>1200元</span>
                                            </div>
                                            <a href="javascript:;">查看保障详情</a>
                                        </li>
                                    }
                                    {
                                        this.state.travel=='6'&&this.state.tabIndex === 1&&
                                        <li>
                                            <div className="tabLine clearfix">
                                                <span>财产损失</span>
                                                <span>1500元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>保障期限</span>
                                                <span>1年</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>适用人群</span>
                                                <span>全体用户</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>保费</span>
                                                <span>66元</span>
                                            </div>
                                            <a href="javascript:;" onClick={()=>this.openW()}>查看保障详情</a>
                                        </li>
                                    }
                                    {
                                        this.state.travel!='6'&&this.state.tabIndex===2&&
                                        <li>
                                            <div className="tabLine clearfix">
                                                <span>意外身故及伤残</span>
                                                <span>20万元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>医疗费用</span>
                                                <span>25万元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>旅行变更</span>
                                                <span>3000万元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>旅行延误</span>
                                                <span>1900元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>行李延误</span>
                                                <span>2500元</span>
                                            </div>
                                            <a href="javascript:;">查看保障详情</a>
                                        </li>
                                    }
                                    {
                                        this.state.travel=='6'&&this.state.tabIndex === 2&&
                                        <li>
                                            <div className="tabLine clearfix">
                                                <span>财产损失</span>
                                                <span>2000元</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>保障期限</span>
                                                <span>1年</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>适用人群</span>
                                                <span>全体用户</span>
                                            </div>
                                            <div className="tabLine clearfix">
                                                <span>保费</span>
                                                <span>106元</span>
                                            </div>
                                            <a href="javascript:;" onClick={()=>this.openW()}>查看保障详情</a>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                }



                <div className="inBt">
                    <div className="inBtL">
                        <img src={require("../../images/icon-kefu@2x.png")} alt=""/>
                        <span>客服</span>
                    </div>
                    <div className="inBtM">
                        <em>{this.state.money}</em>元
                    </div>
                    <div className="inBtR">
                        {/*<a href={`#/speak?travel=${this.state.travel}&&iMoney=${this.state.money}`}>我要投保</a>*/}
                        <a href='javascript:;' onClick={()=>this.wxT()}>我要投保</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Insurance;
