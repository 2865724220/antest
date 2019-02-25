import React, { Component } from 'react';

class Question extends Component {

    constructor(props){
        super(props)
        this.state={
            age01:30,
            age02:56,
            age03:55,
            age04:3,
            age05:3,
            age06:1,
            age07:1,
        }
    }

    componentDidMount(){
        var a = localStorage.getItem('member')

        console.log(a)
        console.log(a.indexOf('1'))
    }

    change01(value){
        this.setState({
            age01:value,
        })
    }
    change02(value){
        this.setState({
            age02:value,
        })
    }
    change03(value){
        this.setState({
            age03:value,
        })
    }
    change04(value){
        this.setState({
            age04:value,
        })
    }
    change05(value){
        this.setState({
            age05:value,
        })
    }
    change06(value){
        this.setState({
            age06:value,
        })
    }
    change07(value){
        this.setState({
            age07:value,
        })
    }
    btnPress(){
        localStorage.setItem('age01',this.state.age01)
        localStorage.setItem('age02',this.state.age02)
        localStorage.setItem('age03',this.state.age03)
        localStorage.setItem('age04',this.state.age04)
        localStorage.setItem('age05',this.state.age05)
        localStorage.setItem('age06',this.state.age06)
        localStorage.setItem('age07',this.state.age07)
    }
// <button className="fMember active">本人</button>
// <button className={this.state.isActive[0] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(0)}>配偶</button>
// <button className={this.state.isActive[1] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(1)}>爸爸</button>
// <button className={this.state.isActive[2] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(2)}>妈妈</button>
// <button className={this.state.isActive[3] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(3)}>儿子</button>
// <button className={this.state.isActive[4] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(4)}>女儿</button>
// <button className={this.state.isActive[5] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(5)}>小儿子</button>
// <button className={this.state.isActive[6] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(6)}>小女儿</button>
    render() {
        let a = localStorage.getItem('member')
        return (
            <div className="question">
                <div className="quesProgress">
                    <i className="g04"></i>
                </div>
                <div className="pbt">
                    <a href="#question03">
                        <img className="prevA" src={require('../../images/icon-back@2x.png')} alt=""/>
                        上一题
                    </a>
                </div>
                <div className="robotC">
                    <img src={require('../../images/motiaon_anan.png')} alt=""/>
                </div>
                <div className="quTitle">
                    <span className="quN"><em>4</em><i>/</i>8</span>
                    <div className="quC">
                        安安猜你的家庭成员的年龄是
                    </div>
                </div>
                <div className="fAge clearfix">
                    {
                        a.indexOf('0')>0&&
                        <div className="ageItem">
                            <span className="tSpan">配偶</span>
                            <input type="tel" className="ageInput" value={this.state.age01}  onChange={(event)=>this.change01(event.target.value)}/>
                            <span>岁</span>
                        </div>
                    }
                    {
                        a.indexOf('1')>0&&
                        <div className="ageItem">
                            <span className="tSpan">爸爸</span>
                            <input type="tel" className="ageInput" value={this.state.age02}  onChange={(event)=>this.change02(event.target.value)}/>
                            <span>岁</span>
                        </div>
                    }
                    {
                        a.indexOf('2')>0&&
                        <div className="ageItem">
                            <span className="tSpan">妈妈</span>
                            <input type="tel" className="ageInput" value={this.state.age03}  onChange={(event)=>this.change03(event.target.value)}/>
                            <span>岁</span>
                        </div>
                    }
                    {
                        a.indexOf('3')>0&&
                        <div className="ageItem">
                            <span className="tSpan">儿子</span>
                            <input type="tel" className="ageInput" value={this.state.age04}  onChange={(event)=>this.change04(event.target.value)}/>
                            <span>岁</span>
                        </div>
                    }
                    {
                        a.indexOf('4')>0&&
                        <div className="ageItem">
                            <span className="tSpan">女儿</span>
                            <input type="tel" className="ageInput" value={this.state.age05}  onChange={(event)=>this.change05(event.target.value)}/>
                            <span>岁</span>
                        </div>
                    }
                    {
                        a.indexOf('5')>0&&
                        <div className="ageItem">
                            <span className="tSpan">小儿子</span>
                            <input type="tel" className="ageInput" value={this.state.age06}  onChange={(event)=>this.change07(event.target.value)}/>
                            <span>岁</span>
                        </div>
                    }
                    {
                        a.indexOf('6')>0&&
                        <div className="ageItem">
                            <span className="tSpan">小女儿</span>
                            <input type="tel" className="ageInput" value={this.state.age07}  onChange={(event)=>this.change07(event.target.value)}/>
                            <span>岁</span>
                        </div>
                    }
                </div>

                <div className="bt">
                    <a href="#question05" onClick={this.btnPress.bind(this)}>
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
