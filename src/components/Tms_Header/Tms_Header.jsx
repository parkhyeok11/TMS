import React,{useState} from 'react';
import styles from './Tms_Header.module.css'

const TmsHeader = (props) => {
  const childModal1=()=>{
    props.ModalFunction1();
  }
  const childModal2=()=>{
    props.ModalFunction2();
  }
  const childModal3=()=>{
    props.ModalFunction3();
  }
  return (
    <>
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href=""><img className={styles.img} src="images/android-icon-96x96.png"></img></a>
        <h1><a href="" className={styles.title}>임시 TMS 데이터 스트리밍 시각화</a></h1>
      </div>
    </header>
    <div className={styles.modal}>
        <button onClick={childModal1}>TMS란?</button>
        <button onClick={childModal2}>Apache Kafka</button>
        <button onClick={childModal3}>Apache Flink</button>
    </div> 
    </>
    
  );
};

export default TmsHeader;