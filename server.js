const express =require('express');
const path = require('path')
const app = express();
const PORT =process.env.PORT || 8016;
const mongoose = require('mongoose');

mongoose.connect("mongodb://shogle:qwer1234@61.98.41.64:60032/",{dbName:'kafka_sensor'},{
  useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('MongoDB Connected..'))
.catch(err => console.log(err))
const WebSocket = require('ws');
const socket = new WebSocket.Server({
    port: 8017
});
const OtSchema = new mongoose.Schema({
    _id:Date,
    value:Number
},{collection:'sensor_datas'});

const Ot=mongoose.model("sensor_datas",OtSchema);

socket.on('connection', (ws, req)=>{
// 데이터 쿼리문으로 최근 10개 값으로 클라이언트에 보내줘야함 
// 데이터가 너무 크면 어쩔수 없는 지연이 발생한다.
    Ot.find().sort({_id : -1}).limit(10).exec((error,sensor_data)=>{
        console.log('--- Read all ---');
        if(error){
            console.log(error);
        }
        else{
            ws.send(JSON.stringify(sensor_data));
        }
    })
    ws.interval = setInterval(()=>{
        Ot.find().sort({_id: -1}).limit(1).exec((error,sensor_data)=>{
            console.log('--- Read all ---');
            if(error){
                console.log(error);
            }
            else{
                ws.send(JSON.stringify(sensor_data));
            }
        })
    },1900);
});

app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT,()=>{
    console.log(`Server ON : http:/localhost:${PORT}/`);
})

/*app.get('/data',(req,res)=>{
    Ot.find(function(error, sensor_data){
        console.log('--- Read all ---');
        if(error){
            console.log(error);
        }else{
            res.send(sensor_data);
        }
    })  
})*/