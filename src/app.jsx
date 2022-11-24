// TMS 홈페이지를 토대로 만들자!

import React,{useState, useEffect} from 'react';
import styles from './app.module.css';
import TmsHeader from './components/Tms_Header/Tms_Header';
import TmsBody from './components/Tms_Body/Tms_body';
import Modal1 from './components/Modal/Modal1';
import Modal2 from './components/Modal/Modal2';
import Modal3 from './components/Modal/Modal3';

function App() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  function ModalFunction1(){
    setModal1(!modal1);
  }
  function ModalFunction2(){
    setModal2(!modal2);
  }
  function ModalFunction3(){
    setModal3(!modal3);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
      <TmsHeader ModalFunction1={ModalFunction1} ModalFunction2={ModalFunction2} ModalFunction3={ModalFunction3}/>
      {modal1 === true ? <Modal1 closeModal={()=>ModalFunction1()} modal={modal1}/> : null}
      {modal2 === true ? <Modal2 closeModal={()=>ModalFunction2()} modal={modal2}/> : null}
      {modal3 === true ? <Modal3 closeModal={()=>ModalFunction3()} modal={modal3}/> : null}
      <TmsBody/>
      </div>
    </div>
  );

}

export default App;