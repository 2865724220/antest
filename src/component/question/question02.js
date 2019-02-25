import React, { Component } from 'react';
var Ruler = require('../../ruler.min');


class Question extends Component {

    constructor(props){
        super(props)
        this.state={
            age:30,
        }
    }

    componentDidMount(){

        // eslint-disable-next-line
        const age = new Ruler("age",{
            maxNum:"80",        	//最大数值
            minNum:"0",			//最小数值
            initNum:"30",     		//初始数值
            decimalWei:"0",			//保留几位有效小数；默认为零
            cellNum:"10",			//两个大刻度的数值区间
            name:"年龄",				//名称
            unit:"岁"				//单位
        });


    }
    btnPress(){
        let age = document.getElementById('ruler-num').innerHTML
        localStorage.setItem('age',age)
    }
    // change(value){
    //     this.setState({
    //         age:value
    //     })
    // }


    // next() {
    //     this.reactSwipe.next();
    // }
    //
    // prev() {
    //     this.reactSwipe.prev();
    // }

    render() {
        return (
            <div className="question">
                <div className="quesProgress">
                    <i className="g02"></i>
                </div>
                <div className="pbt">
                    <a href="#/question">
                        <img className="prevA" src={require('../../images/icon-back@2x.png')} alt=""/>
                        上一题
                    </a>
                </div>
                <div className="robotC">
                    <img src={require('../../images/motiaon_anan.png')} alt=""/>
                </div>
                <div className="quTitle">
                    <span className="quN"><em>2</em><i>/</i>8</span>
                    {/*<div className="quC">你的年龄是*/}
                    {/*<input type="tel" className="ageInput" value={this.state.age}  onChange={(event)=>this.change(event.target.value)}/>*/}
                    {/*岁*/}
                    {/*</div>*/}
                    <div className="quC">
                        你是年龄是？
                    </div>
                    <div className="rulerWrap">
                        <div>
                            <div id="age" style={{'width':'66.82%','height':'200px','margin':'0 auto',}}></div>
                        </div>
                    </div>
                </div>

                <div className="bt">
                    <a href="#question03"  onClick={this.btnPress.bind(this)}>
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
