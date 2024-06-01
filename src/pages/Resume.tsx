import React, { useState } from 'react';

interface ResumeItem {
  types: ('project' | 'award' | 'association')[];
  title: string;
  date: string;
  description: string;
  languages: string[];
  imageUrl: string;
  linkUrls: string[];
}

const items: ResumeItem[] = [
  {
    types: ['project', 'award'],
    title: '(군) 해안통합관리시스템 (CIMS) 개발 및 테스트 버전 배포',
    date: '2022.01. ~ 2022.06.',
    description: '군에서 사용하던 여러가지 계산 프로그램을 하나로 합치고, 정확도를 개선하여 웹 사이트 형태로 인트라넷 배포',
    languages: ['HTML', 'CSS', 'JAVASCRIPT'],
    imageUrl:
      'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb4ca6b8a-c7c7-400e-a0dc-545069748884%2Fa8299a54-a1d4-464b-a629-ab5e618eeee4%2FUntitled.png?table=block&id=7c0f6774-cee2-4456-9108-dcee893607c3&spaceId=b4ca6b8a-c7c7-400e-a0dc-545069748884&width=1990&userId=905a882e-e2e7-4a70-838c-8aef09ca9d8f&cache=v2',
    linkUrls: ['https://ko.wikipedia.org/wiki/%EC%A0%9C23%EA%B2%BD%EB%B9%84%EC%97%AC%EB%8B%A8'],
  },
  {
    types: ['project'],
    title: '충남대학교 54 동행 총학생회 홈페이지 및 채널, 챗봇 제작 및 유지보수',
    date: '2023.02. ~ 2023.12.',
    description: 'CMS를 통해 웹 사이트 전반을 관리 및 수정하고, 챗봇을 개인 서버와 연동하여 순환버스 정보 및 도서관 좌석 정보 실시간 제공',
    languages: ['CSS', 'Jquery', 'Node.js'],
    imageUrl: 'https://ugc.production.linktr.ee/ThpcWAuQbe8ywVMGyrd4_O255dHbAvfu4KuIC?io=true&size=avatar-v3_0',
    linkUrls: [
      'https://cnustudent.cnu.ac.kr/cnustudent/index.do',
      'https://pf.kakao.com/_hlxlxaj',
      'https://github.com/cussle/cnu_dh.54_api',
      'https://www.instagram.com/p/CyAh_YZpIfP/?igsh=MXZic3g3OXM3eXR0NA%3D%3D&img_index=1',
    ],
  },
  {
    types: ['project'],
    title: '요리조리: 여행지 찾기, 여행 코스 계획, 여행 기록을 모두 한 곳에서!',
    date: '2023.10~2023.12',
    description: '한국관광공사 API를 이용하여 전국 각지 여행지를 검색하고, TSP 문제를 여러가지 알고리즘을 통해 해결하여 동선을 계산',
    languages: ['HTML', 'CSS', 'Jquery', 'PHP'],
    imageUrl:
      'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb4ca6b8a-c7c7-400e-a0dc-545069748884%2F2b9fea66-9c28-41fe-a8a8-ea89476f9237%2FKakaoTalk_20231211_050409202.png?table=block&id=3cd526ad-2f42-41ad-9198-492cc1ce8f88&spaceId=b4ca6b8a-c7c7-400e-a0dc-545069748884&width=1990&userId=905a882e-e2e7-4a70-838c-8aef09ca9d8f&cache=v2',
    linkUrls: ['https://github.com/cussle/yorijori'],
  },
  {
    types: ['association'],
    title: '카카오테크캠퍼스 2기 BE',
    date: '2024.02 ~',
    description: '카카오테크캠퍼스 2기 백엔드 (충남대)',
    languages: ['JAVA', 'Springboot', 'SQL'],
    imageUrl:
      'https://www.kakaotechcampus.com/fileUpDownload/download.do?p_savefile=notice_20240222050226519_1.png&p_realfile=20240222_%E1%84%92%E1%85%A7%E1%86%B8%E1%84%8B%E1%85%A3%E1%86%A8%E1%84%89%E1%85%B5%E1%86%A8.png',
    linkUrls: ['https://www.kakaotechcampus.com/'],
  },
];

const getTypeLabel = (type: ResumeItem['types'][number]) => {
  switch (type) {
    case 'project':
      return '프로젝트';
    case 'award':
      return '수상';
    case 'association':
      return '소속';
    default:
      return '';
  }
};

const getLanguageUrl = (language: string) => {
  const urls: { [key: string]: string } = {
    HTML: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    CSS: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    JAVASCRIPT: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    Jquery: 'https://jquery.com/',
    'Node.js': 'https://nodejs.org/',
    PHP: 'https://www.php.net/',
    JAVA: 'https://www.java.com/',
    Springboot: 'https://spring.io/projects/spring-boot',
    SQL: 'https://www.mysql.com/',
    Python: 'https://www.python.org/',
    Django: 'https://www.djangoproject.com/',
  };
  return urls[language] || '#';
};

const Resume: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setModalImage(imageUrl);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            marginTop: '40px',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            borderBottom: '1px solid #ddd',
            paddingBottom: '20px',
          }}
        >
          <div style={{ flex: 1, padding: '20px', wordBreak: 'keep-all' }}>
            <div style={{ marginBottom: '10px' }}>
              {item.types.map((type, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'inline-block',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    backgroundColor: 'rgb(50, 148, 248)',
                    color: 'white',
                    marginRight: '5px',
                    fontWeight: 'bold',
                  }}
                >
                  {getTypeLabel(type)}
                </div>
              ))}
            </div>
            <span style={{ fontWeight: 'bold', fontSize: '1.2em', wordBreak: 'keep-all' }}>{item.title}</span>
            <p>{item.date}</p>
            <p>{item.description}</p>
            <div style={{ margin: '10px 0' }}>
              {item.languages.map((language, idx) => (
                <a
                  key={idx}
                  href={getLanguageUrl(language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(50, 148, 248, 0.1)',
                    color: 'rgb(50, 148, 248)',
                    marginRight: '5px',
                    fontSize: '0.9em',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  }}
                >
                  {language}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {item.linkUrls.map((linkUrl, idx) => (
                <a
                  key={idx}
                  href={linkUrl}
                  style={{
                    color: 'rgb(50, 148, 248)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  관련 링크 {idx + 1}
                </a>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <img
              src={item.imageUrl}
              alt={`${item.title} 이미지`}
              style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
              onClick={() => handleImageClick(item.imageUrl)}
            />
          </div>
        </div>
      ))}
      {modalImage && (
        <div
          onClick={handleCloseModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            transition: 'opacity 0.3s ease',
            opacity: modalImage ? 1 : 0,
          }}
        >
          <img src={modalImage} alt="Modal 이미지" style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </div>
      )}
    </div>
  );
};

export default Resume;
