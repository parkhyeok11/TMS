import React,{ useState , useEffect} from 'react';
import styles from './Tms_body.module.css'
// import Line from '../Line_chart/Line_chart'
import ReactEcharts from 'echarts-for-react';
import * as _ from 'lodash';
let count = 10;
let a;
let push_cnt =0;
let b=[];
let c=[];
let tempx;
let tempy;
let bin=[];
let Graph = [
  {date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},
  {date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},
  {date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},
  {date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},
  {date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},
  {date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},
  {date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},
  {date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'},{date:'-', value: '-'}
];
console.log(new Date().getSeconds());
const socket = new WebSocket("ws://localhost:8017");
socket.onopen = function () {
  console.log('서버와 웹소켓 연결 성공');
}
socket.onmessage = function (event) {
  console.log(JSON.parse(event.data));
  a = JSON.parse(event.data);
  if(a.length == 10){
    console.log("첫번째 통과")
    for(let i=0;i<10;i++){
      console.log("세번째");
      b[i]=a[i].value;
      console.log(b[i]);
      c[i]=a[i]._id;
      console.log(c[i]);
      }
      console.log(b);
      console.log(c);
  }
  else{    
// 5분 주기 if 조건
// if((new Date().getMinutes() % 10 ===0) && (new Date().getSeconds() <= 1)  || (new Date().getMinutes() % 10===5)&& (new Date().getSeconds() <=1)){
// 2분 주기 if 조건 
  if((new Date().getMinutes() % 2 ===0) && (new Date().getSeconds() <= 1)){ 
    if(push_cnt === 48){
        Graph.shift();
        push_cnt = 47;
      }
      const result = bin.reduce(function add(sum,currvalue){
        return sum + currvalue;
      },0)
      const average = result / bin.length;
      Graph.splice(push_cnt,1,{date:new Date().getHours()+'시'+new Date().getMinutes()+'분', value:average.toFixed(1)})
      push_cnt++;
      bin =[];
    }
    bin.push(a[0].value);
    tempx = a[0]._id;
    tempy = a[0].value;
    console.log(tempx);
    console.log(tempy);
  }
  
}; 
const TmsBody = (props) => {
  console.log("두번째");
  const [options, setOptions] = useState({
    title: {
      text: 'TMS Data'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
    legend: {},
    toolbox: {
      show: false,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data:(function () { 
          let now = new Date();
          let res = [];
          let len = 10;
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
            now = new Date(+now - 2000);
          }
          return res;
        })()
      },
      {
        type: 'category',
        boundaryGap: true,
        data: (function () { 
          let res = [];
          let len = 10;
          while (len--) {
            res.push(10 - len - 1);
          }
          return res;
        })()
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: 'Value',
        max: 50,
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name: 'Dynamic Line',
        type: 'line',
        data: (function () { // 꺽은선 데이터
        let res = [];
        let len = 9;
        setTimeout(function(){
          while (len >=0) {
            res.push(+(b[len]).toFixed(1));
            len--;
          }
        },1000)
          return res;
        })()
      }
    ]
  }
  );
  function fetchNewData() {
    const axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
    const newOption = _.cloneDeep(options); 
    const data0 = newOption.series[0].data;
    //const data1 = newOption.series[1].data;
    data0.shift();
    data0.push(+(tempy).toFixed(1));
    /*
    data0.shift();
    data0.push(0);
    data1.shift();
    data1.push(+(tempy).toFixed(1));
    */
    newOption.xAxis[0].data.shift();
    newOption.xAxis[0].data.push(axisData);
    newOption.xAxis[1].data.shift();
    newOption.xAxis[1].data.push(count++);
    setOptions(newOption);
  }

  useEffect(() => {
    const timer = setInterval(()=>{
      fetchNewData();
    },2000);
    return () => clearInterval(timer);
  })

  return (
    <body className={styles.body}>
      {/*
      Nivo 차트 부분
     <Line/>*/
       /*    <img className={styles.img} src="images/공사중.jpg"></img>*/
      }
      <div className={styles.chart}>
      <ReactEcharts
        option = {options}
      />
      </div>
      <div className={styles.ex1}>
        <div className={styles.graph1}>
        <iframe src="http://61.98.41.64:60033/#/notebook/2HJ5PH8TV/paragraph/paragraph_1669372170486_1204146585?asIframe" height="425px" width="100%" ></iframe>
        </div>
        <div className={styles.graph2}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>{Graph[0].date}</th>
              <td>{Graph[0].value}</td>
              <th>{Graph[1].date}</th>
              <td>{Graph[1].value}</td>
              <th>{Graph[2].date}</th>
              <td>{Graph[2].value}</td>
              <th>{Graph[3].date}</th>
              <td>{Graph[3].value}</td>
              <th>{Graph[4].date}</th>
              <td>{Graph[4].value}</td>
              <th>{Graph[5].date}</th>
              <td>{Graph[5].value}</td>
            </tr>
            <tr>
              <th>{Graph[6].date}</th>
              <td>{Graph[6].value}</td>
              <th>{Graph[7].date}</th>
              <td>{Graph[7].value}</td>
              <th>{Graph[8].date}</th>
              <td>{Graph[8].value}</td>
              <th>{Graph[9].date}</th>
              <td>{Graph[9].value}</td>
              <th>{Graph[10].date}</th>
              <td>{Graph[10].value}</td>
              <th>{Graph[11].date}</th>
              <td>{Graph[11].value}</td>
            </tr>
            <tr>
              <th>{Graph[12].date}</th>
              <td>{Graph[12].value}</td>
              <th>{Graph[13].date}</th>
              <td>{Graph[13].value}</td>
              <th>{Graph[14].date}</th>
              <td>{Graph[14].value}</td>
              <th>{Graph[15].date}</th>
              <td>{Graph[15].value}</td>
              <th>{Graph[16].date}</th>
              <td>{Graph[16].value}</td>
              <th>{Graph[17].date}</th>
              <td>{Graph[17].value}</td>
            </tr>
            <tr>
              <th>{Graph[18].date}</th>
              <td>{Graph[18].value}</td>
              <th>{Graph[19].date}</th>
              <td>{Graph[19].value}</td>
              <th>{Graph[20].date}</th>
              <td>{Graph[20].value}</td>
              <th>{Graph[21].date}</th>
              <td>{Graph[21].value}</td>
              <th>{Graph[22].date}</th>
              <td>{Graph[22].value}</td>
              <th>{Graph[23].date}</th>
              <td>{Graph[23].value}</td>
            </tr>
            <tr>
              <th>{Graph[24].date}</th>
              <td>{Graph[24].value}</td>
              <th>{Graph[25].date}</th>
              <td>{Graph[25].value}</td>
              <th>{Graph[26].date}</th>
              <td>{Graph[26].value}</td>
              <th>{Graph[27].date}</th>
              <td>{Graph[27].value}</td>
              <th>{Graph[28].date}</th>
              <td>{Graph[28].value}</td>
              <th>{Graph[29].date}</th>
              <td>{Graph[29].value}</td>
            </tr>
            <tr>
              <th>{Graph[30].date}</th>
              <td>{Graph[30].value}</td>
              <th>{Graph[31].date}</th>
              <td>{Graph[31].value}</td>
              <th>{Graph[32].date}</th>
              <td>{Graph[32].value}</td>
              <th>{Graph[33].date}</th>
              <td>{Graph[33].value}</td>
              <th>{Graph[34].date}</th>
              <td>{Graph[34].value}</td>
              <th>{Graph[35].date}</th>
              <td>{Graph[35].value}</td>
            </tr>
            <tr>
              <th>{Graph[36].date}</th>
              <td>{Graph[36].value}</td>
              <th>{Graph[37].date}</th>
              <td>{Graph[37].value}</td>
              <th>{Graph[38].date}</th>
              <td>{Graph[38].value}</td>
              <th>{Graph[39].date}</th>
              <td>{Graph[39].value}</td>
              <th>{Graph[40].date}</th>
              <td>{Graph[40].value}</td>
              <th>{Graph[41].date}</th>
              <td>{Graph[41].value}</td>
            </tr>
            <tr>
              <th>{Graph[42].date}</th>
              <td>{Graph[42].value}</td>
              <th>{Graph[43].date}</th>
              <td>{Graph[43].value}</td>
              <th>{Graph[44].date}</th>
              <td>{Graph[44].value}</td>
              <th>{Graph[45].date}</th>
              <td>{Graph[45].value}</td>
              <th>{Graph[46].date}</th>
              <td>{Graph[46].value}</td>
              <th>{Graph[47].date}</th>
              <td>{Graph[47].value}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

    </body>
  );
};

export default TmsBody;