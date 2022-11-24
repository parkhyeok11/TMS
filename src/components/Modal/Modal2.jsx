import React,{useState} from 'react';
import styles from './Modal2.module.css';
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
            <h2>Apache Kafka</h2>
          </div>
          <ul>
            <li>
              <p>Kafka는<strong>높은 처리량과 짧은 대기 시간을 제공하는 확장성이 뛰어난 분산 메시징 시스템</strong>입니다.</p>
            </li>
           <li>
              <p><strong>짧은 대기 시간 메시지 전달</strong>을 지원하고 시스템 오류가 있는 경우 내결함성을 보장합니다. 다양한 소비자를 수용할 수 있는 능력을 가지고 있습니다.</p>
           </li>
            <li>
              <p>
                Kafka는 매우 빠르며 초당 200만 쓰기를 수행합니다. 모든 데이터를 디스크에 유지하므로 기본적으로 모든 쓰기가 OS(RAM)의 페이지 캐시로 이동합니다. 
                이것은 페이지 캐시에서 네트워크 소켓으로 데이터를 전송하는 것을 안정적이고 매우 효율적으로 만듭니다.
              </p>
            </li>
            <li>
              <p> Kafka는 여러 브로커(broker)로 구성된 클러스터가 있으며 메시지를 프로듀서(producer)가 브로커(broker)로 전송하거나 컨슈머(consumer)가 읽어가는 데이터 전달이 일어난다. Kafka는 메시지 피드들을 토픽으로 구분하고, 각 토픽의 이름은 카프카 내에서 고유하게 됩니다. 토픽이 한번에 처리 할 수 있는 단계를 높이기 위해서 토픽을 여러 개로 나눠 병렬 처리가 가능하게 만든 것을 파티션이라고 합니다. 그림 1. 이렇게 하나를 여러개로 나누면 분산처리가 가능해지며, 파티션 수 만큼 컨슈머(consumer)를 연결 할수 있게 됩니다.</p>
            </li>
          </ul>
          
      </div>
      
    </div>
  );
};

export default React.memo(Modal);