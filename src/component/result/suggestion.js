import React, { Component } from 'react';
import Insurance from './insurance'

class Suggestion extends Component {

    constructor(props){
        super(props)
        this.state={
            select:0
        }
    }

    componentDidMount(){

    }
    tabPress(index){
        this.setState({
            select:index
        })
    }

    render() {
        let a=localStorage
        console.log(Number(a.money01))
        let zongshouru = (Number(a.money01)+Number(a.money02))
        console.log(((Number(a.houseA)*Number(a.houseM)+Number(a.carA)*Number(a.carM))/10000)+Number(70))
        console.log(((Number(a.money01)+Number(a.money02))*1.5))
        let zongbaoe = ((((Number(a.houseA)*Number(a.houseM)+Number(a.carA)*Number(a.carM))/10000)+70)+(((Number(a.money01)+Number(a.money02))*3)))
        let zongbaofei = zongshouru/10
        console.log(zongbaoe)
        console.log(zongbaofei)
        console.log(zongbaofei*Number(a.money01)/zongshouru)
        return (
            <div className='suggestion'>
                {/*<div className="toparea1">*/}
                {/*<div>*/}
                {/*<img className="closeimg" src={require('../../resultimages/icon-close@2x.png')} alt=""/>*/}
                {/*</div>*/}
                {/*<div className='toptitle'>*/}
                {/*家庭保障计划*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<img className="closeimg" src={require('../../resultimages/icon-dotdotdot@2x.png')} alt=""/>*/}
                {/*</div>*/}
                {/*</div>*/}
                <div className="tablan">
                    <div className={this.state.select===0?'singletablan active':'singletablan'} onClick={()=>this.tabPress(0)}>
                        家庭
                    </div>
                    <div className={this.state.select===1?'singletablan active':'singletablan'} onClick={()=>this.tabPress(1)}>
                        本人
                    </div>
                    <div className={this.state.select===2?'singletablan active':'singletablan'} onClick={()=>this.tabPress(2)}>
                        配偶
                    </div>
                    <div className={this.state.select===3?'singletablan active':'singletablan'} onClick={()=>this.tabPress(3)}>
                        子女
                    </div>
                    <div className={this.state.select===4?'singletablan active':'singletablan'} onClick={()=>this.tabPress(4)}>
                        父亲
                    </div>
                    <div className={this.state.select===5?'singletablan active':'singletablan'} onClick={()=>this.tabPress(5)}>
                        母亲
                    </div>
                </div>
                <div className='tianchong'>
                </div>
                {
                    this.state.select==0&&
                    <div className='midchart2'>
                        <div className='pzfa'>
                            配置方案
                        </div>
                        <div className='flex'>
                            <div className='chart0'>
                                <div className='left0'>
                                    <div className='red300wenzi'>
                                        投资收入的10%，<br/>
                                        总收入{(zongshouru).toFixed(0)}w
                                    </div>
                                    <div style={{color:'#fff',position:'absolute'}}>
                                        <div style={{position:'absolute',top:'20px',left:'40px',fontSize:'24px'}}>
                                            {(zongshouru/10).toFixed(0)}w
                                        </div>
                                        <div style={{position:'absolute',top:'50px',left:'45px',fontSize:'14px',fontFamily:'DIN-Regular'}}>
                                            总保费
                                        </div>
                                        <img className="red300" src={require('../../resultimages/img-red300@2x.png')} alt=""/>
                                    </div>

                                </div>
                            </div>
                            <div className='mid0'>
                                <div className='all3001'>
                                    {zongbaoe}w
                                </div>
                                <div className='all3002'>
                                    家庭总保额
                                </div>
                                <div>
                                    <img className="all300" src={require('../../resultimages/img-total@2x.png')} alt=""/>
                                </div>
                            </div>
                            <div className='right0'>
                                <div className="uM">
                                    <img className="lineBar" src={require('../../images/line@2x.png')} alt=""/>
                                    <img className="benren" src={require('../../resultimages/icon-baba@2x.png')} alt=""/>
                                    <div className="uMT">
                                            本人
                                    </div>
                                </div>
                                <div className="uM uM02">
                                    <img className="lineBar" src={require('../../images/line@2x.png')} alt=""/>
                                    <img className="taitai" src={require('../../resultimages/icon-mama@2x.png')} alt=""/>
                                    <div className="uMT">
                                            配偶
                                    </div>
                                </div>
                                <div className="uM uM03">
                                    <img className="lineBar" src={require('../../images/line@2x.png')} alt=""/>
                                    <img className="xiaoerzi" src={require('../../resultimages/icon-xiaoerzi@2x.png')} alt=""/>
                                    <div className="uMT">
                                        孩子
                                    </div>
                                </div>
                                <div className="uM uM04">
                                    <img className="lineBar" src={require('../../images/line@2x.png')} alt=""/>
                                    <img className="fuqin" src={require('../../resultimages/icon-fuqin@2x.png')} alt=""/>
                                    <div className="uMT">
                                        父亲
                                    </div>
                                </div>
                                <div className="uM uM05">
                                    <img className="lineBar" src={require('../../images/line@2x.png')} alt=""/>
                                    <img className="muqin" src={require('../../resultimages/icon-mama2@2x.png')} alt=""/>
                                    <div className="uMT">
                                        母亲
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state.select==1&&
                    <div className='midchart'>
                        <div style={{display:'flex',color:'#fff'}}>
                            <div className='pzfa'>
                                配置方案
                            </div>
                            {/*<div className='be1'>*/}
                            {/*保额*/}
                            {/*</div>*/}
                            {/*<div className='money1'>*/}
                            {/*{(zongbaoe*Number(a.money01)/(Number(a.money01)+Number(a.money02)+10)).toFixed(0)}万*/}
                            {/*</div>*/}
                            {/*<div className='be1'>*/}
                            {/*保费预估*/}
                            {/*</div>*/}
                            {/*<div className='money1'>*/}
                            {/*{(zongbaofei*Number(a.money01)*10000/(Number(a.money01)+Number(a.money02))).toFixed(0)}*/}
                            {/*</div>*/}
                        </div>
                        <div style={{position:'relative',height:'200px'}}>
                            <div style={{position:'absolute',left:'45px',top:'60px'}}>
                                <img style={{width:"95px",position:'absolute'}} src={require('../../resultimages/img-yellow100@2x.png')} alt="" className="yellowpie"/>
                                <div className='bigword1 zjx'>
                                    {(3*a.money01).toFixed(0)}w
                                </div>
                                <div className='smallword1 zjxx'>
                                    重疾险
                                </div>
                            </div>
                            <div style={{position:'absolute',left:'0px',top:'15px'}}>
                                <img style={{position:'absolute',width:"110px",left:'125px'}} src={require('../../resultimages/img-green300@2x.png')} alt=""/>
                                <div className='bigword1 zjx' style={{left:'160px'}}>
                                    {(zongbaoe*Number(a.money01)/(Number(a.money01)+Number(a.money02)+10)).toFixed(0)}w
                                </div>
                                <div className='smallword1 zjxx' style={{left:'170px'}}>
                                    寿险
                                </div>
                            </div>
                            <div style={{position:'absolute',left:'0px',top:'90px'}}>
                                <img style={{position:'absolute',width:"110px",left:'140px'}} src={require('../../resultimages/img-red300@2x.png')} alt=""/>
                                <div className='bigword1 zjx' style={{left:'170px'}}>
                                    50w
                                </div>
                                <div className='smallword1 zjxx' style={{left:'175px'}}>
                                    意外险
                                </div>
                            </div>
                            <div style={{position:'absolute',left:'0px',top:'50px'}}>
                                <img style={{position:'absolute',width:"95px",left:'240px'}} src={require('../../resultimages/img-blue100@2x.png')} alt=""/>
                                <div className='bigword1 zjx' style={{left:'265px'}}>
                                    100w
                                </div>
                                <div className='smallword1 zjxx' style={{left:'270px'}}>
                                    医疗险
                                </div>
                            </div>
                        </div>
                        <div className='wenzi1' style={{position:'relative',backgroundColor:'rgba(0, 0, 0, 0.1)',margin:'auto',display:'inline-block'}}>
                            <img className='gyzhead' style={{}} src={require('../../resultimages/icon-cartoon-small@2x.png')} alt=""/>
                            <div style={{display:"inline-block",width:"78%",verticalAlign:'middle'}}>
                                做为家庭顶梁柱，安安建议你优先配置<span className="orangeT">意外险</span>和<span className="orangeT">寿险</span>，并提高自身的重疾险保额；预算充足的话，安安建议配置能够覆盖进口药和就医绿色通道的医疗险，让自己的医疗保障更全面。
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state.select==2&&
                    <div className='midchart'>
                        <div style={{display:'flex',color:'#fff'}}>
                            <div className='pzfa'>
                                配置方案
                            </div>
                            {/*<div className='be1'>*/}
                            {/*保额*/}
                            {/*</div>*/}
                            {/*<div className='money1'>*/}
                            {/*350万*/}
                            {/*</div>*/}
                            {/*<div className='be1'>*/}
                            {/*保费预估*/}
                            {/*</div>*/}
                            {/*<div className='money1'>*/}
                            {/*13000*/}
                            {/*</div>*/}
                        </div>
                        <div style={{position:'relative',height:'200px'}}>
                            <div style={{position:'absolute',left:'45px',top:'60px'}}>
                                <img style={{width:"95px",position:'absolute'}} src={require('../../resultimages/img-yellow100@2x.png')} alt="" className="yellowpie"/>
                                <div className='bigword1 zjx'>
                                    40w
                                </div>
                                <div className='smallword1 zjxx'>
                                    重疾险
                                </div>
                            </div>
                            <div style={{position:'absolute',left:'0px',top:'15px'}}>
                                <img style={{position:'absolute',width:"110px",left:'125px',display:'block'}} src={require('../../resultimages/img-green300@2x.png')} alt=""/>
                                <div className='bigword1 zjx' style={{left:'160px'}}>
                                    {(zongbaoe*Number(a.money02)/(Number(a.money01)+Number(a.money02)+10)).toFixed(0)}w
                                </div>
                                <div className='smallword1 zjxx' style={{left:'170px'}}>
                                    寿险
                                </div>
                            </div>
                            <div style={{position:'absolute',left:'0px',top:'90px'}}>
                                <img style={{position:'absolute',width:"110px",left:'140px',display:'block'}} src={require('../../resultimages/img-red300@2x.png')} alt=""/>
                                <div className='bigword1 zjx' style={{left:'170px'}}>
                                    50w
                                </div>
                                <div className='smallword1 zjxx' style={{left:'175px'}}>
                                    意外险
                                </div>
                            </div>
                            <div style={{position:'absolute',left:'0px',top:'50px'}}>
                                <img style={{position:'absolute',width:"95px",left:'240px',display:'block'}} src={require('../../resultimages/img-blue100@2x.png')} alt=""/>
                                <div className='bigword1 zjx' style={{left:'265px'}}>
                                    50w
                                </div>
                                <div className='smallword1 zjxx' style={{left:'270px'}}>
                                    医疗险
                                </div>
                            </div>
                        </div>
                        <div className='wenzi1' style={{position:'relative',backgroundColor:'rgba(0, 0, 0, 0.1)',margin:'auto',display:'inline-block'}}>
                            <img className='gyzhead' style={{}} src={require('../../resultimages/icon-cartoon-small@2x.png')} alt=""/>
                            <div style={{display:"inline-block",width:"78%",verticalAlign:'middle'}}>
                                作为家庭的第二支柱，安安建议你的配偶也要配置<span className="orangeT">意外险、寿险和重疾险</span> ，以提升家庭整体抗风险能力。预算充足的话，安安建议配偶配置能够覆盖进口药和就医绿色通道的医疗险。
                            </div>
                        </div>
                    </div>
                }

                {
                    this.state.select==3&&
                    <div className='midchart'>
                        <div style={{display:'flex',color:'#fff'}}>
                            <div className='pzfa'>
                                配置方案
                            </div>
                            {/*<div className='be1'>*/}
                            {/*保额*/}
                            {/*</div>*/}
                            {/*<div className='money1'>*/}
                            {/*350万*/}
                            {/*</div>*/}
                            {/*<div className='be1'>*/}
                            {/*保费预估*/}
                            {/*</div>*/}
                            {/*<div className='money1'>*/}
                            {/*13000*/}
                            {/*</div>*/}
                        </div>
                        <div style={{position:'relative',height:'200px',left:'-30px'}}>
                            <div style={{position:'absolute',left:'0px',top:'15px'}}>
                                <img style={{position:'absolute',width:"110px",left:'125px'}} src={require('../../resultimages/img-green300@2x.png')} alt=""/>
                                <div className='bigword1 zjx' style={{left:'160px'}}>
                                    20w
                                </div>
                                <div className='smallword1 zjxx' style={{left:'170px'}}>
                                    意外险
                                </div>
                            </div>
                            <div style={{position:'absolute',left:'0px',top:'90px'}}>
                                <img style={{position:'absolute',width:"110px",left:'140px'}} src={require('../../resultimages/img-red300@2x.png')} alt=""/>
                                <div className='bigword1 zjx' style={{left:'170px'}}>
                                    50w
                                </div>
                                <div className='smallword1 zjxx' style={{left:'175px'}}>
                                    重疾险
                                </div>
                            </div>
                            <div style={{position:'absolute',left:'0px',top:'50px'}}>
                                <img style={{position:'absolute',width:"95px",left:'240px'}} src={require('../../resultimages/img-blue100@2x.png')} alt=""/>
                                <div className='bigword1 zjx' style={{left:'265px'}}>
                                    30w
                                </div>
                                <div className='smallword1 zjxx' style={{left:'270px'}}>
                                    医疗险
                                </div>
                            </div>
                        </div>
                        <div className='wenzi1' style={{position:'relative',backgroundColor:'rgba(0, 0, 0, 0.1)',margin:'auto',display:'inline-block'}}>
                            <img className='gyzhead' style={{}} src={require('../../resultimages/icon-cartoon-small@2x.png')} alt=""/>
                            <div style={{display:"inline-block",width:"78%",verticalAlign:'middle'}}>
                                孩子是家里的宝。大人的保障配好之后，安安建议你趁孩子尚小，保费非常便宜的时候买好<span className="orangeT">重疾险</span>，用足杠杆。同时<span className="orangeT">意外险</span>也是这个年龄段孩子的必备。
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state.select==4&&
                    <div className='midchart'>
                        <div style={{display:'flex',color:'#fff'}}>
                            <div className='pzfa'>
                                配置方案
                            </div>
                            {/*<div className='be1'>*/}
                            {/*保额*/}
                            {/*</div>*/}
                            {/*<div className='money1'>*/}
                            {/*350万*/}
                            {/*</div>*/}
                            {/*<div className='be1'>*/}
                            {/*保费预估*/}
                            {/*</div>*/}
                            {/*<div className='money1'>*/}
                            {/*13000*/}
                            {/*</div>*/}
                        </div>
                        <div style={{position:'relative',height:'200px',left:'-30px'}}>
                            <div style={{position:'absolute',left:'0px',top:'30px'}}>
                                <img style={{position:'absolute',width:"110px",left:'120px'}} src={require('../../resultimages/img-red300@2x.png')} alt=""/>
                                <div className='bigword1 zjx' style={{left:'150px'}}>
                                    50w
                                </div>
                                <div className='smallword1 zjxx' style={{left:'155px'}}>
                                    意外险
                                </div>
                            </div>
                            <div style={{position:'absolute',left:'0px',top:'50px'}}>
                                <img style={{position:'absolute',width:"95px",left:'240px'}} src={require('../../resultimages/img-blue100@2x.png')} alt=""/>
                                <div className='bigword1 zjx' style={{left:'265px'}}>
                                    50w
                                </div>
                                <div className='smallword1 zjxx' style={{left:'270px'}}>
                                    医疗险
                                </div>
                            </div>
                        </div>
                        <div className='wenzi1' style={{position:'relative',backgroundColor:'rgba(0, 0, 0, 0.1)',margin:'auto',display:'inline-block'}}>
                            <img className='gyzhead' style={{}} src={require('../../resultimages/icon-cartoon-small@2x.png')} alt=""/>
                            <div style={{display:"inline-block",width:"78%",verticalAlign:'middle'}}>
                                父母已60岁，购买重疾险、医疗险的门槛或价格过高，安安建议为老人优先配置包含<span className="orangeT">骨折责任的意外险</span>。预算充足的话，可以购买转为老人开发的<span className="orangeT">防癌险</span>作补充。
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state.select==5&&
                    <div className='midchart'>
                        <div style={{display:'flex',color:'#fff'}}>
                            <div className='pzfa'>
                                配置方案
                            </div>
                            {/*<div className='be1'>*/}
                            {/*保额*/}
                            {/*</div>*/}
                            {/*<div className='money1'>*/}
                            {/*350万*/}
                            {/*</div>*/}
                            {/*<div className='be1'>*/}
                            {/*保费预估*/}
                            {/*</div>*/}
                            {/*<div className='money1'>*/}
                            {/*13000*/}
                            {/*</div>*/}
                        </div>
                        <div style={{position:'relative',height:'200px',left:'-30px'}}>
                            <div style={{position:'absolute',left:'0px',top:'30px'}}>
                                <img style={{position:'absolute',width:"110px",left:'120px'}} src={require('../../resultimages/img-red300@2x.png')} alt=""/>
                                <div className='bigword1 zjx' style={{left:'150px'}}>
                                    50w
                                </div>
                                <div className='smallword1 zjxx' style={{left:'155px'}}>
                                    意外险
                                </div>
                            </div>
                            <div style={{position:'absolute',left:'0px',top:'50px'}}>
                                <img style={{position:'absolute',width:"95px",left:'240px'}} src={require('../../resultimages/img-blue100@2x.png')} alt=""/>
                                <div className='bigword1 zjx' style={{left:'265px'}}>
                                    50w
                                </div>
                                <div className='smallword1 zjxx' style={{left:'270px'}}>
                                    医疗险
                                </div>
                            </div>
                        </div>
                        <div className='wenzi1' style={{position:'relative',backgroundColor:'rgba(0, 0, 0, 0.1)',margin:'auto',display:'inline-block'}}>
                            <img className='gyzhead' style={{}} src={require('../../resultimages/icon-cartoon-small@2x.png')} alt=""/>
                            <div style={{display:"inline-block",width:"78%",verticalAlign:'middle'}}>
                                父母已60岁，购买重疾险、医疗险的门槛或价格过高，安安建议为老人优先配置包含<span className="orangeT">骨折责任的意外险</span>。预算充足的话，可以购买转为老人开发的<span className="orangeT">防癌险</span>作补充。
                            </div>
                        </div>
                    </div>
                }

                <div className='baoxiantuijian'>
                    {
                        this.state.select==0&&
                        <div>
                        </div>
                    }
                    {
                        this.state.select==1&&
                        <div>
                            <Insurance name={'成人百万综合意外2018'} type={'意外险'} comp={'由众安保险承保及理赔'} baoe={50} qixian={1} baofei={300}/>
                            <Insurance name={'健康随，重疾保障计划'} type={'重疾险'} comp={'由阳光保险承保及理赔'} baoe={(3*a.money01).toFixed(0)} qixian={30} baofei={800}/>
                            <Insurance name={'大白定期寿险'} type={'寿险'} comp={'由弘康人寿承保及理赔'} baoe={(zongbaoe*Number(a.money01)/(Number(a.money01)+Number(a.money02)+10)).toFixed(0)} qixian={30} baofei={700}/>
                            <Insurance name={'爱健康百万医疗险'} type={'医疗险'} comp={'由阳光保险承保及理赔'} baoe={100} qixian={10} baofei={800}/>
                        </div>
                    }
                    {
                        this.state.select==2&&
                        <div>
                            <Insurance name={'一年期综合意外保险'} type={'意外险'} comp={'由众安保险承保及理赔'} baoe={50} qixian={1} baofei={300}/>
                            <Insurance name={'关爱今生重疾保障计划'} type={'重疾险'} comp={'由太平保险承保及理赔'} baoe={40} qixian={30} baofei={500}/>
                            <Insurance name={'大白定期寿险'} type={'寿险'} comp={'由弘康人寿承保及理赔'} baoe={(zongbaoe*Number(a.money02)/(Number(a.money01)+Number(a.money02)+10)).toFixed(0)} qixian={20} baofei={600}/>
                            <Insurance name={'爱健康百万医疗险'} type={'医疗险'} comp={'由阳光保险承保及理赔'} baoe={50} qixian={20} baofei={400}/>
                        </div>
                    }
                    {
                        this.state.select==3&&
                        <div>
                            <Insurance name={'家有儿女意外保险'} type={'意外险'} comp={'由众安保险承保及理赔'} baoe={20} qixian={1} baofei={300}/>
                            <Insurance name={'慧馨少儿定期重疾险2018'} type={'重疾险'} comp={'由太平保险承保及理赔'} baoe={50} qixian={30} baofei={500}/>
                            <Insurance name={'少儿综合医疗保险'} type={'医疗险'} comp={'由弘康人寿承保及理赔'} baoe={30} qixian={30} baofei={600}/>
                        </div>
                    }
                    {
                        this.state.select==4&&
                        <div>
                            <Insurance name={'老年人综合保险'} type={'意外险'} comp={'由平安保险承保及理赔'} baoe={50} qixian={10} baofei={300}/>
                            <Insurance name={'中老年人癌症医疗保险'} type={'癌症医疗险'} comp={'由太平保险承保及理赔'} baoe={50} qixian={10} baofei={300}/>
                        </div>
                    }
                    {
                        this.state.select==5&&
                        <div>
                            <Insurance name={'老年人综合保险'} type={'意外险'} comp={'由平安保险承保及理赔'} baoe={50} qixian={10} baofei={300}/>
                            <Insurance name={'中老年人癌症医疗保险'} type={'癌症医疗险'} comp={'由太平保险承保及理赔'} baoe={50} qixian={10} baofei={300}/>
                        </div>
                    }
                </div>

                <div className='ba'>
                </div>

                <div className="bottomarea">
                    <div className='zaice'>
                        <div className='gyz'>
                            <div className='bottombig'>
                                ¥40000
                            </div>
                            <div>
                                起
                            </div>
                        </div>
                        <div className='bottomsmall'>
                            家庭保障，推荐保险组合15份
                        </div>
                    </div>
                    <div className='yellowbutton2'>
                        <a href="#/speak">咨询代理人</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Suggestion;
