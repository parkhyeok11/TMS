import React,{useState} from 'react';
import styles from './Modal1.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const Modal = (props) => {
  const closeModal = ()=>{
    props.closeModal();
  } 
  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <button id={styles.modalCloseBtn} onClick={closeModal}>
            ✖
        </button>
        <div className={styles.read}>READ.ME</div> {/* 주제 */}
          <div className={styles.comment} >
            <img className={styles.img} src=""></img>
            <h2>TMS란?</h2>
          </div>
          <ul>
            <li>
              <p><strong>굴뚝원격감시체계</strong>를 뜻하는 것으로, 대기오염물질 배출사업장에 부착하여 <strong>배출현황을 24시간 실시간으로 관리하는 시스템</strong>을 말함</p>
            </li>
            <li>
              <p><strong>환경부</strong>는 <strong>대기오염사고 사전예방 및 행정처분, 배출부과금 부과</strong> 등에 활용하고, <strong>사업자</strong>는 대기오염물질 배출농도·유량 등을 실시간 확인하여방지시설 운전조건 개선 등 <strong>자율적 환경관리에 활용</strong></p>
            </li>
            <li>
              <p>1~3종 대기배출사업장 중 <strong>일정용량 이상*의 배출시설에 대해 TMS 부착</strong>을의무화하고 있으며, ’15년말 기준 <strong>560개 사업장**, 1,505개 굴뚝에 설치</strong>됨</p>
            </li>
            <p className={styles.ex}>* 발전시설 : 50MW이상, 소각시설 : 1톤/h이상 (생활폐기물 기준) 등</p>
            <p className={styles.ex}>** 사업장 수로는 전체 사업장의 16%, 배출량 기준으로는 전체의 90%</p>
          </ul>
         
      </div>
      
    </div>
  );
};

export default React.memo(Modal);