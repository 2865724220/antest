import React, { Component } from 'react';
import {  Qs, json2Form} from '../tools';
import axios from 'axios';

class Speak extends Component {

    constructor(props){
        super(props)
        this.state={
            frBottom : ['家庭综合保障','我要旅游','我要保护手机屏幕','我要考驾照'],
            speakT:[],
            speakTL:[],
            speakTR:[],
            onceA:false,
            frBShow:true,
            seBottom:[],
            seBShow:false,
            thBottom:[],
            thBShow:false,
            insuranceRe:{
                travelT:'',
                travelM:'',
                travelId:'',
            },
            inputValue:'',
            buyId:'',
            buyMoney:'',
            chatBot:false
        }
    }

    componentDidMount(){
        const params = Qs();
        // let buy = params.travel?params.travel:''
        this.setState({
            buyId:params.travel?params.travel:'',
            buyMoney:params.iMoney?params.iMoney:''
        })
       this.speakButton();
        // this.chatBot();


    }

    componentDidUpdate(){
        let line = document.documentElement.getElementsByClassName("speakLine")
        document.documentElement.getElementsByClassName("speakLineW")[0].scrollTop = line.length*80;//内容更新以后再设置
    }

    scrollTo(){

        // if(document.documentElement.getElementsByClassName("speakLineW")[0].scrollTop < 50){
        //     document.documentElement.getElementsByClassName("speakLineW")[0].scrollTop = 500;
        //     document.documentElement.getElementsByClassName("speakLineW")[0].scrollTo(0,500);
        //     alert(document.documentElement.getElementsByClassName("speakLineW")[0].scrollTop)
        // }

    }
    chatBot(content){
        let speak = this.state.speakT
        let ar = {content:content,me:true}
        speak.push(ar)
        this.setState({
            speakT:speak
        })
        axios({
            method:'POST',
            url:'/chatbot?access_token=7B9C4E33C28D498DB6C447A30DBFCAB5&request_id=1536650468',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data:json2Form({
                version: 0.1,
                clientType: 'web',
                robotId: '1030',
                userId: 'test1',
                sessionId: '10231451574',
                question: content
            })}).then(res=>{
                // let resJ = res.data
                // resJ = resJ.slice(53, resJ.length-2)
                // resJ = JSON.parse(resJ)
                let resJ = res.data
                if (resJ.status&&resJ.status.state === '1'){
                    let fData = {content: resJ.content.answer, me: false }
                    speak.push(fData)
                    this.setState({
                        speakT: speak,
                        onceA:false,
                        chatBot:true
                    })
                }
            },err=>{
                console.log(err)
            })
        // })
    }

    speakButton(index,order,value){
        let speak = this.state.speakT
        if(index ===0 && order==="first"){
            let ar = {content:'家庭综合保障',me:true}
            let al = {content:'好的，首先需要你花2分钟回答8道题，让安安了解家庭风险后再给投保建议。我们承诺对你的个人信息严格保密，仅限用于系统分析。',me:false}
            speak.push(ar)
            speak.push(al)
            this.setState({
                speakT:speak,
                onceA:true,
            })
        }else if(index === 1 && order ==="first"){
            let ar = {content:'我要旅游',me:true}
            let al = {content:'您的旅游目的地在哪?',me:false}
            speak.push(ar)
            speak.push(al)
            this.setState({
                speakT:speak,
                frBShow:false,
                onceA:false,
                seBottom:['夏威夷','杭州','香港','北京','武汉','重庆'],
                seBShow:true,
            })
        }else if(index === 2 && order ==="first"){
            let ar = {content:value,me:true}
            let al = {content:'好的，安安为你推荐中国平安【66大顺手机碎屏险】',me:false}
            speak.push(ar)
            speak.push(al)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBShow:false,
                insuranceRe:{
                    travelT:'66大顺手机碎屏险',
                    travelM:'66',
                    travelId:6,
                    chatBot:false
                }
            })
        }else if(index === 3 && order ==="first"){
            let ar = {content:value,me:true}
            let al = {content:'好的，安安为你推荐中国平安【9.9驾考无忧险】?',me:false}
            speak.push(ar)
            speak.push(al)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBShow:false,
                insuranceRe:{
                    travelT:'9.9驾考无忧险',
                    travelM:'9.9',
                    travelId:7,
                    chatBot:false
                }
            })
        }
        else if(index === 0&&order ==="second"){
            // let ar = {content:'我要旅游',me:true}
            // let al = {content:'您的旅游目的地在哪?',me:false}
            let arr = {content:'夏威夷',me:true}
            let all = {content:'好的，那你预计旅行多久？',me:false}
            // speak.push(ar)
            // speak.push(al)
            speak.push(arr)
            speak.push(all)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBottom:['1-4天','5-7天','8-10天','11-14天','15-21天'],
                thBShow:true,
            })
        }else if(order ==='third'&&speak[speak.length-2].content=='夏威夷'){
            // let ar = {content:'我要旅游',me:true}
            // let al = {content:'您的旅游目的地在哪?',me:false}
            // let arr = {content:'夏威夷',me:true}
            // let all = {content:'好的，那你预计旅行多久？',me:false}
            let arrr = {content:value,me:true}
            let alll = {content:'好的，安安为你推荐包含航班延误及潜水意外医疗的中国平安【美国加拿大旅游保险】',me:false}
            // speak.push(ar)
            // speak.push(al)
            // speak.push(arr)
            // speak.push(all)
            speak.push(arrr)
            speak.push(alll)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBShow:false,
                chatBot:false,
                insuranceRe:{
                    travelT:'美国加拿大旅游保险',
                    travelM:'35',
                    travelId:0,
                }

            })
        }else if(index === 1 && order ==="second"){
            // let ar = {content:'我要旅游',me:true}
            // let al = {content:'您的旅游目的地在哪?',me:false}
            let arr = {content:'杭州',me:true}
            let all = {content:'好的，那你预计旅行多久？',me:false}
            // speak.push(ar)
            // speak.push(al)
            speak.push(arr)
            speak.push(all)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBottom:['1-4天','5-7天','8-10天','11-14天','15-21天'],
                thBShow:true,
            })
        }else if(index === 2 && order ==="second"){
            // let ar = {content:'我要旅游',me:true}
            // let al = {content:'您的旅游目的地在哪?',me:false}
            let arr = {content:'香港',me:true}
            let all = {content:'好的，那你预计旅行多久？',me:false}
            // speak.push(ar)
            // speak.push(al)
            speak.push(arr)
            speak.push(all)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBottom:['1-4天','5-7天','8-10天','11-14天','15-21天'],
                thBShow:true,
            })
        }else if(index === 3 && order ==="second"){
            // let ar = {content:'我要旅游',me:true}
            // let al = {content:'您的旅游目的地在哪?',me:false}
            let arr = {content:'北京',me:true}
            let all = {content:'好的，那你预计旅行多久？',me:false}
            // speak.push(ar)
            // speak.push(al)
            speak.push(arr)
            speak.push(all)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBottom:['1-4天','5-7天','8-10天','11-14天','15-21天'],
                thBShow:true,
            })
        }else if(index === 4 && order ==="second"){
            // let ar = {content:'我要旅游',me:true}
            // let al = {content:'您的旅游目的地在哪?',me:false}
            let arr = {content:'武汉',me:true}
            let all = {content:'好的，那你预计旅行多久？',me:false}
            // speak.push(ar)
            // speak.push(al)
            speak.push(arr)
            speak.push(all)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBottom:['1-4天','5-7天','8-10天','11-14天','15-21天'],
                thBShow:true,
            })
        }else if(index === 5 && order ==="second"){
            // let ar = {content:'我要旅游',me:true}
            // let al = {content:'您的旅游目的地在哪?',me:false}
            let arr = {content:'重庆',me:true}
            let all = {content:'好的，那你预计旅行多久？',me:false}
            // speak.push(ar)
            // speak.push(al)
            speak.push(arr)
            speak.push(all)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBottom:['1-4天','5-7天','8-10天','11-14天','15-21天'],
                thBShow:true,
            })
        }
        else if(order ==="third" && speak[speak.length-2].content=='杭州'){
            // let ar = {content:'我要旅游',me:true}
            // let al = {content:'您的旅游目的地在哪?',me:false}
            // let arr = {content:'杭州',me:true}
            // let all = {content:'好的，那你预计旅行多久？',me:false}
            let arrr = {content:value,me:true}
            let alll = {content:'好的，安安为你推荐包含航班延误及潜水意外医疗的中国平安【杭州旅游保险】',me:false}
            // speak.push(ar)
            // speak.push(al)
            // speak.push(arr)
            // speak.push(all)
            speak.push(arrr)
            speak.push(alll)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBShow:false,
                chatBot:false,
                insuranceRe:{
                    travelT:'杭州旅游保险',
                    travelM:'35',
                    travelId:1,
                }
            })
        }else if(order ==="third" && speak[speak.length-2].content=='香港'){
            // let ar = {content:'我要旅游',me:true}
            // let al = {content:'您的旅游目的地在哪?',me:false}
            // let arr = {content:'香港',me:true}
            // let all = {content:'好的，那你预计旅行多久？',me:false}
            let arrr = {content:value,me:true}
            let alll = {content:'好的，安安为你推荐包含航班延误及潜水意外医疗的中国平安【香港旅游保险】',me:false}
            // speak.push(ar)
            // speak.push(al)
            // speak.push(arr)
            // speak.push(all)
            speak.push(arrr)
            speak.push(alll)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBShow:false,
                chatBot:false,
                insuranceRe:{
                    travelT:'香港旅游保险',
                    travelM:'35',
                    travelId:2
                }
            })
        }else if(order ==="third" && speak[speak.length-2].content=='北京'){
            // let ar = {content:'我要旅游',me:true}
            // let al = {content:'您的旅游目的地在哪?',me:false}
            // let arr = {content:'北京',me:true}
            // let all = {content:'好的，那你预计旅行多久？',me:false}
            let arrr = {content:value,me:true}
            let alll = {content:'好的，安安为你推荐包含航班延误及潜水意外医疗的中国平安【北京旅游保险】',me:false}
            // speak.push(ar)
            // speak.push(al)
            // speak.push(arr)
            // speak.push(all)
            speak.push(arrr)
            speak.push(alll)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBShow:false,
                chatBot:false,
                insuranceRe:{
                    travelT:'北京旅游保险',
                    travelM:'35',
                    travelId:3,
                }
            })
        }
        else if(order ==="third" && speak[speak.length-2].content=='武汉'){
            // let ar = {content:'我要旅游',me:true}
            // let al = {content:'您的旅游目的地在哪?',me:false}
            // let arr = {content:'武汉',me:true}
            // let all = {content:'好的，那你预计旅行多久？',me:false}
            let arrr = {content:value,me:true}
            let alll = {content:'好的，安安为你推荐包含航班延误及潜水意外医疗的中国平安【武汉旅游保险】',me:false}
            // speak.push(ar)
            // speak.push(al)
            // speak.push(arr)
            // speak.push(all)
            speak.push(arrr)
            speak.push(alll)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBShow:false,
                chatBot:false,
                insuranceRe:{
                    travelT:'武汉旅游保险',
                    travelM:'35',
                    travelId:4,
                }
            })
        }else if(order ==="third" && speak[speak.length-2].content=='重庆'){
            console.log(value)
            // let ar = {content:'我要旅游',me:true}
            // let al = {content:'您的旅游目的地在哪?',me:false}
            // let arr = {content:'重庆',me:true}
            // let all = {content:'好的，那你预计旅行多久？',me:false}
            let arrr = {content:value,me:true}
            let alll = {content:'好的，安安为你推荐包含航班延误及潜水意外医疗的中国平安【重庆旅游保险】',me:false}
            // speak.push(ar)
            // speak.push(al)
            // speak.push(arr)
            // speak.push(all)
            speak.push(arrr)
            speak.push(alll)
            this.setState({
                speakT:speak,
                frBShow:false,
                seBShow:false,
                onceA:false,
                thBShow:false,
                chatBot:false,
                insuranceRe:{
                    travelT:'重庆旅游保险',
                    travelM:'35',
                    travelId:5,
                }
            })
        }

    }

    inputChange(value){
        this.setState({
            inputValue:value
        })
    }


    sendValue(value){
        let speak = []
        if(value ===''){
            alert('不能发送空消息哦！')
        }else{
            this.setState({
                inputValue:'',
            })
            if(value.indexOf('家庭')>=0){
                let ar = {content:value,me:true}
                let al = {content:'好的，首先需要你花2分钟回答8道题，让安安了解家庭风险后再给投保建议。我们承诺对你的个人信息严格保密，仅限用于系统分析。',me:false}
                speak.push(ar)
                speak.push(al)
                this.setState({
                    speakT:speak,
                    onceA:true,
                    inputValue:'',
                })
            }
            // else if(value.indexOf('旅游')>=0){
            //     let ar = {content:value,me:true}
            //     let al = {content:'您的旅游目的地在哪?',me:false}
            //     speak.push(ar)
            //     speak.push(al)
            //     this.setState({
            //         speakT:speak,
            //         frBShow:false,
            //         onceA:false,
            //         seBottom:['夏威夷','杭州','香港','北京','武汉','重庆'],
            //         seBShow:true,
            //         inputValue:''
            //     })
            // }else if(value.indexOf('碎屏')>=0){
            //     let ar = {content:value,me:true}
            //     let al = {content:'好的，安安为你推荐中国平安【66大顺手机碎屏险】',me:false}
            //     speak.push(ar)
            //     speak.push(al)
            //     this.setState({
            //         speakT:speak,
            //         frBShow:false,
            //         seBShow:false,
            //         onceA:false,
            //         thBShow:false,
            //         insuranceRe:{
            //             travelT:'66大顺手机碎屏险',
            //             travelM:'66',
            //             travelId:6,
            //         }
            //     })
            // }else if(value.indexOf('驾照')>=0){
            //     let ar = {content:value,me:true}
            //     let al = {content:'好的，安安为你推荐中国平安【9.9驾考无忧险】',me:false}
            //     speak.push(ar)
            //     speak.push(al)
            //     this.setState({
            //         speakT:speak,
            //         frBShow:false,
            //         seBShow:false,
            //         onceA:false,
            //         thBShow:false,
            //         insuranceRe:{
            //             travelT:'9.9驾考无忧险',
            //             travelM:'9.9',
            //             travelId:7,
            //         }
            //     })
            // }
            else{
                this.chatBot(value);
                // var newA= this.state.speakT.slice();
                // var a ={
                //     speakTR:value,
                //     speakTL:'安安暂时还不能理解您输入内容哦，请尝试输入【家庭综合保障】【我要旅游】【我要保护手机屏幕】【我要考驾照】'
                // }
                // newA.push(a);
                // this.setState({
                //     speakT:newA,
                //     frBShow:false,
                //     onceA:false,
                //     inputValue:'',
                //     insuranceRe:{
                //         travelT:'',
                //     }
                // })
            }
        }
    }

    speak(){
        alert("H5暂不支持调用手机录音机！");
    }

    render() {

        let frBottom =['家庭综合保障','我要旅游','我要保护手机屏幕','我要考驾照'];
        return (

            <div className="speak">
               <div className="speakLineW">
                   {
                       this.state.buyId.length === 0&&<div className="speakLine clearfix mgt20 speakTAn">
                           <img src={require('../../images/icon-speak .png')} alt="" className="speakIcon"/>
                           <div className="speakTL ">
                               Hi！你好，我是你的智能保顾安安。
                           </div>
                       </div>
                   }
                   {
                       this.state.buyId.length != 0&&<div className="speakLine clearfix mgt20 ">
                           <img src={require('../../images/icon-speak .png')} alt="" className="speakIcon"/>
                           <div className="speakTL ">
                               Hi！你好，我是你的智能保顾安安。
                           </div>
                       </div>
                   }

                   {
                       this.state.buyId.length===0&&<div className="speakLine clearfix mgt20 speakAnimate">
                               <img src={require('../../images/icon-speak .png')} alt="" className="speakIcon"/>
                               <div className="speakTL">
                                   请告诉安安你感兴趣的话题，例如【家庭综合保障】【我要旅游】【我要保护手机屏幕】【我要考驾照】或其他感兴趣的话题...
                               </div>
                           </div>
                   }
                   {
                       !this.state.chatBot&&this.state.buyId.length>0&&<div>

                           <div className="speakLine clearfix mgt20">
                               <img src={require('../../images/icon-speak .png')} alt="" className="speakIcon"/>
                               <div className="speakTL">
                                   <div className="titleL">
                                       <img src={require('../../images/icon_right@2x.png')} alt="" className=""/>
                                       您已成功购买保险
                                   </div>
                                   <div className="insureName">中国平安
                                       {
                                           this.state.buyId=='0'&&<em>美国加拿大旅游</em>
                                       }
                                       {
                                           this.state.buyId=='1'&&<em>杭州旅游</em>
                                       }
                                       {
                                           this.state.buyId=='2'&&<em>香港旅游</em>
                                       }
                                       {
                                           this.state.buyId=='3'&&<em>北京旅游</em>
                                       }
                                       {
                                           this.state.buyId=='4'&&<em>武汉旅游</em>
                                       }
                                       {
                                           this.state.buyId=='5'&&<em>重庆旅游</em>
                                       }
                                       {
                                           this.state.buyId=='6'&&<em>66大顺手机碎屏险</em>
                                       }
                                       {
                                           this.state.buyId=='7'&&<em>9.9驾考无忧险</em>
                                       }
                                       保险
                                   </div>
                                   <div className="insureLine clearfix">
                                       <div className="fl">保单编号</div>
                                       <div className="fr">No.{parseInt(Math.random()*100000000000)}</div>
                                   </div>
                                   <div className="insureLine clearfix">
                                       <div className="fl">保额</div>
                                       <div className="fr">{this.state.buyMoney}元</div>
                                   </div>
                                   <div className="insureLine clearfix">
                                       <div className="fl">生效日期</div>
                                       <div className="fr">2018-06-22</div>
                                   </div>

                               </div>
                           </div>
                           <div className="speakLine clearfix mgt20">
                               <img src={require('../../images/icon-speak .png')} alt="" className="speakIcon"/>
                               <div className="speakTL">
                                   您还对什么保险感兴趣，安安继续为您解答
                               </div>
                           </div>
                       </div>
                   }

                   {
                       this.state.speakT.length>0 &&this.state.speakT.map((value,index)=>{
                       return <div key={index}>
                               {
                                   value.me&&<div className="speakLine clearfix mgt20 speakLR">
                                       <img src={require('../../images/icon-sp@2x.png')} alt="" className="speakIcon"/>
                                       <div className="speakTL">
                                           {value.content}
                                       </div>
                                   </div>
                               }
                               {
                                   !value.me&&<div className="speakLine clearfix mgt20">
                                       <img src={require('../../images/icon-speak .png')} alt="" className="speakIcon"/>
                                       <div className="speakTL">
                                           {value.content}
                                           {
                                               this.state.onceA&&<a href="#/question" className="onceAB">立即答题</a>
                                           }
                                       </div>
                                   </div>
                               }
                                </div>
                   })
                   }
                   {
                       !this.state.chatBot&&this.state.insuranceRe.travelT.length>0&&
                       <div className="speakLine clearfix mgt20 travelBg">
                           <img src={require('../../images/icon-speak .png')} alt="" className="speakIcon"/>
                           <div className="speakTL">
                               <a href={`#/insurance?travel=${this.state.insuranceRe.travelId}`} className="onceA">

                               {
                                   this.state.insuranceRe.travelId =='6' && <div className="travelImg phone">
                                       <span className="travelT">{this.state.insuranceRe.travelT}</span>
                                       <span className="travelM"><em>{this.state.insuranceRe.travelM}</em>元起</span>
                                   </div>
                               }
                               {
                                   this.state.insuranceRe.travelId =='7' && <div className="travelImg car">
                                       <span className="travelT">{this.state.insuranceRe.travelT}</span>
                                       <span className="travelM"><em>{this.state.insuranceRe.travelM}</em>元起</span>
                                   </div>
                               }
                               {
                                   this.state.insuranceRe.travelId !='6'&&this.state.insuranceRe.travelId !='7'&& <div className="travelImg">
                                       <span className="travelT">{this.state.insuranceRe.travelT}</span>
                                       <span className="travelM"><em>{this.state.insuranceRe.travelM}</em>元起</span>
                                   </div>
                               }
                              <span className="more">了解一下</span>
                               </a>
                           </div>
                       </div>

                   }

               </div>
                <div className="speakQuW">
                    <div className="speakQu">
                        <div className="speak100W">
                            <div className="speak100">
                                {
                                    this.state.frBShow&& this.state.frBottom.map((value,index)=>{
                                        return <a href="javascript:;" key={index} onClick={()=>this.speakButton(index,'first',value)}>{value}</a>
                                    })
                                }
                                {
                                    this.state.seBShow&& this.state.seBottom.map((value,index)=>{
                                        return <a href="javascript:;" key={index} onClick={()=>this.speakButton(index,'second',value)}>{value}</a>
                                    })
                                }
                                {
                                    this.state.thBShow&& this.state.thBottom.map((value,index)=>{
                                        return <a href="javascript:;" key={index} onClick={()=>this.speakButton(index,'third',value)}>{value}</a>
                                    })
                                }
                                {/*<a href="javascript:;">家庭综合保障</a>*/}
                                {/*<a href="javascript:;">我要旅游</a>*/}
                                {/*<a href="javascript:;">我要保护手机屏幕</a>*/}
                                {/*<a href="javascript:;">我要考驾照</a>*/}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="speakBottom">
                   <div className="speakBW">
                       <img src={require('../../images/sound@2x.png')} alt="" id="speak" onClick={()=>this.speak()} className="speakBL"/>
                       <input type="text"  placeholder="说点什么吧…" value={this.state.inputValue} onChange={(event)=>this.inputChange(event.target.value)} className="speakBM"/>
                       <span className="speakBR" onClick={()=>this.sendValue(this.state.inputValue)}>发送</span>
                   </div>
                </div>
            </div>

        );
    }
}

export default Speak;
