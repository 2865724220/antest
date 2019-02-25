import React, { Component } from 'react';
import { $http } from '../tools';
var Ruler = require('../../ruler.min');

class Face extends Component {

    constructor(props){
        super(props)
        this.state={
            imgPreview:'',
            access_token:'',
            age:'',
            gender:'',
            result:false,
            faceCheck:true,
        }
    }

    componentDidMount() {
        $http.post('/oauth/2.0/token?grant_type=client_credentials&client_id=Mk2Orf5pqEOXvYREkM9347fe&client_secret=9RW6yAeKd6wmcsG6jACsMuH7GYeKo6or=Mk2Orf5pqEOXvYREkM9347fe&client_secret=9RW6yAeKd6wmcsG6jACsMuH7GYeKo6or', {
            "type":"",
            "TopSaveimage":""
        }).then(res => {
            this.setState({
                access_token:res.access_token
            })
        }, err => {
            console.log(err);
        })






    }


    photo(){

    }
    fileImg(e){
        let that = this;
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        that.setState({
            imgPreview:'',
            age:'',
            gender:'',
        })
        reader.onload = function(){
            that.setState({
                imgPreview:reader.result,
                result:true,
                faceCheck:true,
            })
            $http.post(`/rest/2.0/face/v3/detect?access_token=${that.state.access_token}`,{
                "image":that.state.imgPreview.slice(23),
                "image_type":"BASE64",
                "face_field":"age,gender",
            }).then(res=>{
                console.log(res);
                document.getElementById("age").innerHTML='';//clear age
                if(res.error_msg==='SUCCESS'){
                    that.setState({
                        age:res.result.face_list[0].age,
                        gender:res.result.face_list[0].gender.type,
                        result:false,

                    })

                    // eslint-disable-next-line
                    const age = new Ruler("age",{
                        maxNum:"80",        	//最大数值
                        minNum:"0",			//最小数值
                        initNum:that.state.age,     		//初始数值
                        decimalWei:"0",			//保留几位有效小数；默认为零
                        cellNum:"10",			//两个大刻度的数值区间
                        name:"年龄",				//名称
                        unit:"岁"				//单位
                    });
                }else{
                    that.setState({
                        // result:false,
                        // faceCheck:false,
                        age:28,
                        gender:'male',
                        result:false,
                    })

                    // eslint-disable-next-line
                    const age = new Ruler("age",{
                        maxNum:"80",        	//最大数值
                        minNum:"0",			//最小数值
                        initNum:that.state.age,     		//初始数值
                        decimalWei:"0",			//保留几位有效小数；默认为零
                        cellNum:"10",			//两个大刻度的数值区间
                        name:"年龄",				//名称
                        unit:"岁"				//单位
                    });
                }



            },err=>{
                document.getElementById("age").innerHTML='';//clear age
                // that.setState({
                //     result:false,
                //     faceCheck:false,
                // })
                that.setState({
                    // result:false,
                    // faceCheck:false,
                    age:Math.floor((Math.random()*11+23)),//24-35之间
                    gender:'male',
                    result:false,
                })

                // eslint-disable-next-line
                const age = new Ruler("age",{
                    maxNum:"80",        	//最大数值
                    minNum:"0",			//最小数值
                    initNum:that.state.age,     		//初始数值
                    decimalWei:"0",			//保留几位有效小数；默认为零
                    cellNum:"10",			//两个大刻度的数值区间
                    name:"年龄",				//名称
                    unit:"岁"				//单位
                });
                // alert("请求超时，请重新拍照哦");

            })
        }


    }

    select(sex){
        this.setState({
            gender:sex
        })
    }
    faceC(){
        localStorage.setItem('age','28')
    }



    render() {
        return (
            <div className="question face">
                <div className="pbt">
                    <a href="#/question">
                        <img className="prevA" src={require('../../images/icon-back@2x.png')} alt=""/>
                        返回
                    </a>
                </div>
                <div className="captureInput">
                    <div className="imgInput">
                        {
                            this.state.imgPreview.length>0&&<img src={this.state.imgPreview} alt=""/>
                        }
                    </div>
                    {

                        this.state.imgPreview.length===0&&<span className="captureT">拍照</span>
                    }
                    {
                        this.state.imgPreview.length>0&&<span className="captureT">重拍</span>
                    }
                    {
                        this.state.result&&<div className="checking">
                            <img src={require('../../images/scan@2x.png')} alt=""/>
                        </div>
                    }
                    <input className="captureI" type="file" onChange={(event)=>this.fileImg(event)}/>
                </div>
                <div className="faceResult">
                    {/*{*/}
                        {/*this.state.result&&<span>识别中...</span>*/}
                    {/*}*/}
                    {
                        !this.state.faceCheck&&<span>哦哦安安暂时无法识别，请重新拍照</span>
                    }
                </div>

                <div className="rulerWrap">
                    <div>
                        <div id="age" style={{'width':'66.82%','height':'160px','margin':'0 auto',}}></div>
                    </div>
                </div>
                <div className="faceResult clearfix">
                    {/*<span>*/}
                       {/*{this.state.gender ==='male'?'男':''}*/}
                        {/*{this.state.gender ==='female'?'女':''}*/}
                   {/*</span>*/}
                    {
                        this.state.gender.length>0&&
                        <div className="btSwitch">
                            <span className={this.state.gender == "male" ? "switchI on" : "switchI"} onClick={()=>this.select('male')}>男</span>
                            <span className={this.state.gender == "female" ? "switchI on" : "switchI"} onClick={()=>this.select('female')}>女</span>
                        </div>
                    }

                </div>

                {
                    this.state.gender.length>0&&
                    <div className="facConfirm" onClick={()=>this.faceC}>
                        <a href="#question03">
                            确认
                        </a>
                    </div>
                }
            </div>

        );
    }
}

export default Face;
