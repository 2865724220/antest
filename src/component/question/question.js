import React, { Component } from 'react';

class Question extends Component {

    constructor(props){
        super(props)
        this.state={
            age:30,
        }
    }

    componentDidMount(){


    }

    // change(value){
    //     this.setState({
    //         age:value
    //     })
    // }
    pressMan(){
        localStorage.setItem('sex','man')
    }

    pressWoman(){
        localStorage.setItem('sex','woman')
    }

    render() {
        return (

            <div className="question">
                <div className="quesProgress">
                    <i className="g01"></i>
                </div>
                <div className="robotC">
                    <img src={require('../../images/motiaon_anan.png')} alt=""/>
                </div>
                <div className="quTitle">
                    <span className="quN"><em>1</em><i>/</i>8</span>
                    <span className="quC">你是男生还是女生？</span>
                </div>
                <div className="sexWrap">
                    <a href="#question02" onClick={this.pressMan.bind(this)}>
                        <img className="sexImg" src={require('../../images/icon-male@2x.png')} alt=""/>
                        <span className="sexT">
                               男
                           </span>
                    </a>
                    <a href="#question02" onClick={this.pressWoman.bind(this)}>
                        <img className="sexImg" src={require('../../images/icon-famle@2x.png')} alt=""/>
                        <span className="sexT">
                               女
                           </span>
                    </a>
                </div>

                <div className="bt">
                    <a href="#face">
                        试试人脸识别
                        <img className="nextA" src={require('../../images/icon-enter@2x.png')} alt=""/>
                    </a>
                </div>
                <p className="grey">安安为您提供专业服务，从了解您的家庭风险开始～</p>

            </div>

        );
    }
}

export default Question;
