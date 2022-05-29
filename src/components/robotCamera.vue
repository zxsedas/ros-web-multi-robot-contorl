<template>
        <div id="bot1-wrap">
            <img id="bot1-view" v-bind:src="imgSrc">
        </div>   
        <button @click="sendMsg"></button>
</template>


<script>
    import { Base64 } from 'js-base64'
    import io from "socket.io-client"
   export default {
    props:['ros','ROSLIB','view_id'],
    data(){
        return {
            imgSrc: null,
            raw: '',
            can: document.createElement("canvas"),
            imgSrv: null,
            imgUpdateId: null,
            imgFps: 200,
        }
    },
    methods:{
        connect(){
            this.socketInstance = io("http://localhost:8000")
            this.socketInstance.on(`img${this.view_id}`,(data)=>{
                this.imgSrc = "data:image/jpg;base64," + data
            })
        },
        // createSrvTopic(){
        //     this.imgSrv = new this.ROSLIB.Service({
        //         ros: this.ros,
        //         name: this.view_sub_name,
        //         serviceType: 'url_interfaces/srv/ImgUrl'
        //     });
        // },
        // callImgUrl(){
        //     let request = new this.ROSLIB.ServiceRequest({});
        //     this.imgUpdateID = setInterval(()=>{
        //         this.imgSrv.callService(request, result=>{
        //             //console.log('Result for service call on ' + addTwoInts.name + ': ' + result.url);
        //             this.imgSrc = "data:image/jpg;base64," + result.url
        //         });
        //     },this.imgFps)
        //     // Send the request
            
        // },
        // subImgTopic(){         
        //     this.imgPublisher.subscribe((message)=>{
        //         this.imgSrc = "data:image/jpg;base64," + message.data
        //     })
        // },
        // rgb8ToImg(message){
        //     this.can.width = message.width;
        //     this.can.height = message.height;
        //     const ctx = this.can.getContext("2d");
        //     const imgData = ctx.createImageData(message.width, message.height);
        //     const data = imgData.data;
        //     // const inData = Buffer.from(message.data, 'base64').toString('utf8');
        //     const inData = Base64.atob(message.data)



        //     let j = 0;
        //     let i = 4; // j data in , i data out
        //     while (j < inData.length) {
        //         const w1 = inData.charCodeAt(j++); // read 3 16 bit words represent 1 pixel
        //         const w2 = inData.charCodeAt(j++);
        //         const w3 = inData.charCodeAt(j++);
        //         console.log(w1)
        //         data[i++] = w1; // red
        //         data[i++] = w2; // green
        //         data[i++] = w3; // blue
        //         data[i++] = 255; // alpha
        //     }
            
        //     ctx.putImageData(imgData, 0, 0);
        //     this.imgSrc= this.can.toDataURL();
        //     // console.log(this.imgSrc)
        // },
        
    },
    mounted() {
            //this.createImgTopic()
            // this.createSrvTopic()
            //this.subImgTopic()
            // this.callImgUrl()
            this.connect()
    },
    unmounted(){
        // clearInterval(this.imgUpdateID)
    }
   }
</script>

<style scoped>
    /* @media all and (max-width: 500px){
        #bot1-wrap{
            width: 300px;
        }
    }
    @media all and (min-width: 500px){
        #bot1-wrap{
            width: 50%;
        }        
    } */
    #bot1-wrap{
        padding: 10px;  
        display: inline-block;
        vertical-align: middle;
        width: 500px;
    }
    #bot1-view{
        box-shadow: 1px 1px 15px 5px black;
        border-radius: 3px;
        width: 100%;
        height: 100%;
    }
</style>