import React,{useState} from 'react';
import styles from './Modal3.module.css';
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
            <h2>Apache Flink</h2>
          </div>
          <ul>
            <li>
              <p>Apache Flink는 <strong>무제한 및 제한 데이터 스트림 에 대한 상태 저장 계산</strong>을 위한 프레임워크 및 분산 처리 엔진입니다 . Flink는 모든 일반적인 클러스터 환경 에서 실행 되고 인메모리 속도 로 모든 규모 에서 계산을 수행 하도록 설계되었습니다 .</p>
            </li>
            <li>
              <p>Apache Flink는 <strong>제한되지 않은 데이터 세트를 처리</strong>하는 데 탁월합니다. 시간과 상태의 정확한 제어를 통해 Flink의 런타임은 무제한 스트림에서 모든 종류의 응용 프로그램을 실행할 수 있습니다. 제한된 스트림은 <strong>고정 크기 데이터 세트를 위해 특별히 설계된 알고리즘 및 데이터 구조</strong>에 의해 내부적으로 처리되어 탁월한 성능을 제공합니다.</p>
            </li>
            <p><strong>어디서나 애플리케이션 배포</strong></p>
            <li>
              <p>Apache Flink는 분산 시스템이며 응용 프로그램을 실행하기 위해 컴퓨팅 리소스가 필요합니다. Flink는 Hadoop YARN 및 Kubernetes 와 같은 모든 공통 클러스터 리소스 관리자와 통합 되지만 독립 실행형 클러스터로 실행되도록 설정할 수도 있습니다.</p>
            </li>
            <li>
              <p>Flink는 이전에 나열된 각 리소스 관리자가 잘 작동하도록 설계되었습니다. 이는 Flink가 관용적 방식으로 각 리소스 관리자와 상호 작용할 수 있도록 하는 리소스 관리자별 배포 모드를 통해 달성됩니다.</p>
            </li>
            <li>
              <p>Flink 애플리케이션을 배포할 때 Flink는 애플리케이션의 구성된 병렬 처리를 기반으로 필요한 리소스를 자동으로 식별하고 리소스 관리자에게 요청합니다. 장애가 발생한 경우 Flink는 새 리소스를 요청하여 실패한 컨테이너를 교체합니다. 애플리케이션을 제출하거나 제어하기 위한 모든 통신은 REST 호출을 통해 발생합니다. 이것은 많은 환경에서 Flink의 통합을 용이하게 합니다.</p>
            </li>
          </ul>
          
      </div>
    </div>
  );
};

export default React.memo(Modal);