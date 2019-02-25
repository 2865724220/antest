import React, { Component } from 'react';

class Main extends Component {

    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){


    }


    render() {
        return (

            <div className="index">
                <div className="indexC">
                    <img className="indexL" src={require('../../images/motiaon_anan.png')} alt=""/>
                    <img src={require('../../images/slogan.png')} alt="" className="indexSlogan"/>
                </div>
                <div className="indexA">
                    <a href="#/speak">召唤安安</a>
                </div>
                <div className="indexB">
                    ∞
                </div>
            </div>

        );
    }
}

export default Main;
