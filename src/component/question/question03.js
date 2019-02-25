import React, { Component } from 'react';


class Question extends Component {

    constructor(props){
        super(props)
        this.state={
            isActive:{0:true,1:true,2:true},

        }
    }

    componentDidMount(){

    }

    isSelect(index) {
        this.setState({
            isActive:{
                ...this.state.isActive,
                [index]:!this.state.isActive[index]
            }
        })
    }

    btnPress(){
        console.log(this.state.isActive)
        localStorage.setItem('member',JSON.stringify(this.state.isActive))

    }

    render() {
        return (
            <div className="question">
                <div className="quesProgress">
                    <i className="g03"></i>
                </div>
                <div className="pbt">
                    <a href="#question02">
                        <img className="prevA" src={require('../../images/icon-back@2x.png')} alt=""/>
                        上一题
                    </a>
                </div>
                <div className="robotC">
                    <img src={require('../../images/motiaon_anan.png')} alt=""/>
                </div>
                <div className="quTitle">
                    <span className="quN"><em>3</em><i>/</i>8</span>
                    <div className="quC">
                        你的家庭成员有哪些？
                    </div>
                </div>
                <div className="familyM clearfix">
                    <button className="fMember active">本人</button>
                    <button className={this.state.isActive[0] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(0)}>配偶</button>
                    <button className={this.state.isActive[1] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(1)}>爸爸</button>
                    <button className={this.state.isActive[2] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(2)}>妈妈</button>
                    <button className={this.state.isActive[3] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(3)}>儿子</button>
                    <button className={this.state.isActive[4] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(4)}>女儿</button>
                    <button className={this.state.isActive[5] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(5)}>小儿子</button>
                    <button className={this.state.isActive[6] ? "fMember active" : "fMember"} onClick={()=>this.isSelect(6)}>小女儿</button>
                </div>

                <div className="bt">
                    {
                        <a href="#question04" onClick={this.btnPress.bind(this)}>
                            下一题
                            <img className="nextA" src={require('../../images/icon-enter@2x.png')} alt=""/>
                        </a>
                    }

                </div>
                <p className="grey">安安为您提供专业服务，从了解您的家庭风险开始～</p>
            </div>
        );
    }
}

export default Question;
