import React, { Component } from 'react';

class Insurance extends Component {

    constructor(props){
        super(props)
        this.state={
        }
    }

    componentDidMount(){


    }

    render() {
        return (
            <div className='onebaoxian'>
                <div className='ins1'>
                    <div className='insname'>
                        {this.props.name}
                    </div>
                    {
                        this.props.type ==='意外险'&&<div className='instype red'>
                            {this.props.type}
                        </div>
                    }
                    {
                        this.props.type ==='重疾险'&&<div className='instype yellow'>
                            {this.props.type}
                        </div>
                    }
                    {
                        this.props.type ==='寿险'&&<div className='instype green'>
                            {this.props.type}
                        </div>
                    }
                    {
                        this.props.type.indexOf('医疗险')>=0&&<div className='instype blue'>
                            {this.props.type}
                        </div>
                    }

                </div>
                <div className='inscomp'>
                    {this.props.comp}
                </div>
                <div className='ins2'>
                    <div>
                        <div className='baoe'>
                        {this.props.baoe}万
                        </div>
                        <div>
                            保额
                        </div>
                    </div>
                    <div className='qixian'>
                        <div className='qixian1'>
                            {this.props.qixian}万
                        </div>
                        <div>
                            期限
                        </div>
                    </div>
                    <div className='baofei'>
                        <div className='qixian1'>
                            {this.props.baofei}
                        </div>
                        <div>
                            保费
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Insurance;
