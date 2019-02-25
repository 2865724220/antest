import React, { Component } from 'react';
import 'react-count-animation/dist/count.min.css';
import AnimationCount from 'react-count-animation';

class Result extends Component {

    constructor(props){
        super(props)
        this.state={
            tabIndex:0
        }
    }

    componentDidMount(){

    }

    tab(index){
        this.setState({
            tabIndex:index
        })
    }


    render() {
        let a = localStorage
        let b = 718
        console.log(a)
        if(a.age>=30&&a.money01>=30&&a.money02>=10&&a.houseM>=15000&&a.safe01>=50){
            b=720
        }else if((a.money01+a.money02+a.money03+a.money04)*30000 <= (a.houseA*a.houseM)){
            b=583
        }else if((a.money01+a.money02+a.money03+a.money04)*15000<=(a.houseA*a.houseM)<(a.money01+a.money02+a.money03+a.money04)*30000){
            b=751
        }else if((a.money01+a.money02+a.money03+a.money04)*15000>(a.houseA*a.houseM)){
            b=785
        }else if((a.houseA*a.houseM)==0){
            b=875
        }else{
            b=(550+Math.random()*300).toFixed(0)
        }
        let c = 40
        if(a.age>=30&&a.money01>=30&&a.money02>=10&&a.houseM>=15000&&a.safe01>=50){
            c=45
        }else if((a.money01+a.money02+a.money03+a.money04)*30000 <= (a.houseA*a.houseM)){
            c=20
        }else if((a.money01+a.money02+a.money03+a.money04)*15000<=(a.houseA*a.houseM)<(a.money01+a.money02+a.money03+a.money04)*30000){
            c=61
        }else if((a.money01+a.money02+a.money03+a.money04)*15000>(a.houseA*a.houseM)){
            c=70
        }else if((a.houseA*a.houseM)==0){
            c=90
        }else{
            c=(20+Math.random()*50).toFixed(0)
        }

        const settings = {
            start: 200,
            count: b,
            duration: 2000,
            decimals: 0,
            useGroup: true,
            animation: 'up',
        };

        return (

            <div className="result">
                {/*<div className="toparea">*/}
                    {/*<div>*/}
                        {/*<img className="closeimg" src={require('../../resultimages/icon-close@2x.png')} alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className='toptitle'>*/}
                        {/*家庭综合保顾*/}
                    {/*</div>*/}
                    {/*<div>*/}
                        {/*<img className="closeimg" src={require('../../resultimages/icon-dotdotdot@2x.png')} alt=""/>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <div className="midarea">
                    <img className='yizhenhead' src={require('../../images/motiaon_anan.png')} alt="" />
                    <div className='midword'>
                        家庭风险防御分数
                    </div>
                </div>
                <div className="scorearea">
                    {/*<img className='scorepic' src={require('../../resultimages/icon-panel12@2x.png')} alt="" />*/}
                    <div className='bigscore'>
                        {/*{*/}
                            {/*b*/}

                        {/*}*/}
                        <AnimationCount {...settings}/>

                    </div>
                    <div className='chaoguo'>
                        超过全国{c}%的用户
                    </div>
                </div>
                <div className='weidu'>
                    - 风险维度 -
                </div>
                <div className="fivebutton">
                    <div className='wordpic' onClick={()=>this.tab(0)}>
                        <img className='fivepic' src={require('../../resultimages/zichan.png')} alt="" />
                        <div>
                            资产收入
                        </div>
                    </div>
                    <div className='wordpic' onClick={()=>this.tab(1)}>
                        <img className='fivepic' src={require('../../resultimages/zhichu.png')} alt="" />
                        <div>
                            支出水平
                        </div>
                    </div>
                    <div className='wordpic' onClick={()=>this.tab(2)}>
                        <img className='fivepic' src={require('../../resultimages/shehui.png')} alt="" />
                        <div>
                            社会保障
                        </div>
                    </div>
                    <div className='wordpic' onClick={()=>this.tab(3)}>
                        <img className='fivepic' src={require('../../resultimages/shanyang.png')} alt="" />
                        <div>
                            赡养责任
                        </div>
                    </div>
                    <div className='wordpic' onClick={()=>this.tab(4)}>
                        <img className='fivepic' src={require('../../resultimages/other.png')} alt="" />
                        <div>
                            其他保障
                        </div>
                    </div>
                </div>

                {
                    this.state.tabIndex==0&&
                    <div className='whitearea active01' >
                        <div className='bigword'>
                            风险解读
                        </div>
                        <div className='smallword'>
                            除了工资收入，你的家庭还有少量其他收入和固定存款，收入来源多样化，但各方面收入的均衡化水平不高
                        </div>
                        <div className='bigword'>
                            如何保障
                        </div>
                        <div className='smallword'>
                            根据你的家庭评测，安安建议你优先完善家庭顶梁柱的保障配置。
                        </div>
                    </div>
                }
                {
                    this.state.tabIndex==1&&
                    <div className='whitearea active02' >
                        <div className='bigword'>
                            风险解读
                        </div>
                        <div className='smallword'>
                            你的家庭负债水平较高，风险防御能力较差。
                        </div>
                        <div className='bigword'>
                            如何保障
                        </div>
                        <div className='smallword'>
                            根据你的家庭评测，安安建议你优先完善家庭顶梁柱的保障配置。
                        </div>
                    </div>
                }
                {
                    this.state.tabIndex==2&&
                    <div className='whitearea active03' >
                        <div className='bigword'>
                            风险解读
                        </div>
                        <div className='smallword'>
                            所有家庭成员都有社保，具备了基本的社保保障。
                        </div>
                        <div className='bigword'>
                            如何保障
                        </div>
                        <div className='smallword'>
                            根据你的家庭评测，安安建议你优先完善家庭顶梁柱的保障配置。
                        </div>
                    </div>
                }
                {
                    this.state.tabIndex==3&&
                    <div className='whitearea active04' >
                        <div className='bigword'>
                            风险解读
                        </div>
                        <div className='smallword'>
                            你上有老下有小，家庭责任较大。
                        </div>
                        <div className='bigword'>
                            如何保障
                        </div>
                        <div className='smallword'>
                            根据你的家庭评测，安安建议你优先完善家庭顶梁柱的保障配置。
                        </div>
                    </div>
                }
                {
                    this.state.tabIndex==4&&
                    <div className='whitearea active05' >
                        <div className='bigword'>
                            风险解读
                        </div>
                        <div className='smallword'>
                            作为家庭顶梁柱，你已为自己配置了重疾险，但保额上不充足；另外，意外和寿险配置为零，继续补充。
                        </div>
                        <div className='bigword'>
                            如何保障
                        </div>
                        <div className='smallword'>
                            根据你的家庭评测，安安建议你优先完善家庭顶梁柱的保障配置。
                        </div>
                    </div>
                }
                <div className="bottomarea">
                    {/*<div className='zaice'>*/}
                        {/*再测一次*/}
                    {/*</div>*/}
                    <a href="#/question" className='zaice'>再测一次</a>
                    <a className='yellowbutton' href='#/suggestion'>
                        下一步（开启家庭保障计划）
                    </a>
                </div>

            </div>

        )
    }
}

export default Result;
