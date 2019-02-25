import React, { Component } from 'react';
import { $http } from '../tools';

class Face01 extends Component {

    constructor(props){
        super(props)
        this.state={
            imgPreview:'',
            access_token:'',
            age:'',
            gender:'',
        }
    }

    componentDidMount() {

        if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
            //调用用户媒体设备, 访问摄像头
            this.getUserMedia({video : {width: 480, height: 320,facingMode: 'user'}}, this.success, this.error);
        } else {
            alert('不支持访问用户媒体');
        }

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


    getUserMedia(constraints,success,error){
        if(navigator.mediaDevices.getUserMedia){
            //最新的标准API
            navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
        }else if(navigator.webkitGetUserMedia){
            //webkit核心浏览器
            navigator.webkitGetUserMedia(constraints,success, error)
        }else if (navigator.mozGetUserMedia) {
            //firfox浏览器
            navigator.mozGetUserMedia(constraints, success, error);
        } else if (navigator.getUserMedia) {
            //旧版API
            navigator.getUserMedia(constraints, success, error);
        }

    }

    success(stream){
        let video = document.getElementById('video');
        //兼容webkit核心浏览器
        let CompatibleURL = window.URL || window.webkitURL;
        //将视频流设置为video元素的源
        console.log(stream);

        //video.src = CompatibleURL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    }

    error(error){
        console.log(`访问用户媒体设备失败${error.name}, ${error.message}`);
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
                imgPreview:reader.result
            })
            $http.post(`/rest/2.0/face/v3/detect?access_token=${that.state.access_token}`,{
                "image":that.state.imgPreview.slice(23),
                "image_type":"BASE64",
                "face_field":"age,gender",
            }).then(res=>{
                console.log(res);
                if(res.error_msg==='SUCCESS'){
                    that.setState({
                        age:res.result.face_list[0].age,
                        gender:res.result.face_list[0].gender.type,
                    })
                }

            },err=>{
                console.log(err);
            })
        }





    }


    render() {
        return (

            <div className="face">
                <div className="inputFace">
                <video id="video" className="video" controls></video>

                </div>
                <button onClick={()=>this.photo}>拍照</button>
                <div className="img">
                <img src=""  alt=""/>
                </div>


                {/*<div className="captureInput">*/}
                    {/*<span className="captureT">选择照片或者拍照</span>*/}
                    {/*<input className="captureI" type="file" onChange={(event)=>this.fileImg(event)}/>*/}
                {/*</div>*/}
                {/*<div className="imgInput">*/}
                    {/*<img src={this.state.imgPreview} alt=""/>*/}
                {/*</div>*/}
                {/*<div className="faceResult">*/}
                    {/*<span>{this.state.age}</span>*/}
                    {/*<span>*/}
                       {/*{this.state.gender ==='female'?'女':''}*/}
                        {/*{this.state.gender ==='male'?'男':''}*/}
                   {/*</span>*/}
                {/*</div>*/}

                {/*<div className="">*/}
                    {/*<a href="#/" style={{"color":"#fff","display":"block"}}>返回</a>*/}
                {/*</div>*/}
            </div>

        );
    }
}

export default Face01;
