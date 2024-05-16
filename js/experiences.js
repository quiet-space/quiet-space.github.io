const stackBundle = document.querySelectorAll(".exp");

stackBundle.forEach((target) => {
  target.addEventListener("click", clickExp);
});

const desc = {
  first: {
    subject: "반응형 웹 애플리케이션 개발과 CDN 서버 구현",
    team: "아정네트웍스",
    period: "2023.09. ~ 2023.12.",
    content: `회사 PR 및 채용 페이지를 반응형 웹 애플리케이션으로 구현
              - CSS 미디어 쿼리를 이용하여 다양한 해상도에 대응하는 FE 개발이 가능합니다.

              CDN 서버 구축
              - AWS S3로 CDN 서버를 구축하여, 이미지와 동영상을 로드할 때 브라우저 부하를 최소화할 수 있습니다.`,
    stack: ["HTNL/CSS", "AWS"],
  },
  second: {
    subject: "컴포넌트 개발과 배포",
    team: "아정네트웍스",
    period: "2023.10. ~ 2023.12.",
    content: `Vue UI 프레임워크인 Quasar로 커스텀 컴포넌트 개발
              - Tree Select, Multi Tree Select, Searchable Select 등 복잡한 기능의 컴포넌트를 자료구조 지식 기반으로 개발이 가능합니다.
                    
              사내 라이브러리 저장소 구축 및 배포    
              - Sonatype Nexus 라이브러리 환경을 구축하고, Yarn을 활용하여 배포할 수 있습니다.                    
        `,
    stack: ["Vue", "Nexus"],
  },
  third: {
    subject: "AWS 배포 자동화",
    team: "아정네트웍스",
    period: "2022.10. ~ 2024.02.",
    content: `Bitbucket Pipeline, AWS S3, CloudFront, Route53을 활용하여 자동 배포 환경 개발
              
              AWS 서비스를 이용한 배포 방식을 이해하고, 이것을 문서로 작성하여 공유할 수 있습니다.
              bitbucket-pipeline.yml을 규칙에 맞게 작성하여, master branch 갱신 시 배포를 자동화할 수 있습니다.`,
    stack: ["AWS", "Bitbucket"],
  },
  fourth: {
    subject: "파고북스 Pagobooks",
    team: "부트캠프 팀 프로젝트",
    period: "2022.02. ~ 2022.03.",
    content: `문서, 동영상, 음성 녹음 파일의 번역을 지원하고 번역 결과를 파일로 다운로드받을 수 있는 번역 통합 솔루션
                    
              UI 디자인, FE 개발, 유저 DB 설계 및 ERD 작성에 참여하였습니다.`,
    stack: ["Javascript", "HTML/CSS", "Java"],
  },
  fifth: {
    subject: "그림판",
    team: "개인",
    period: "2022.03. ~ 2022.03.",
    content: `Canvas API로 웹 브라우저 환경에서 사용할 수 있는 그림판
                    
              커서의 2D 좌표 위치, 색과 굵기를 포함한 선의 종류를 mouse 이벤트로 수집하여 그림을 완성하고, 완성된 그림은 jpg 파일로 저장할 수 있습니다.`,
    stack: ["Javascript", "HTML/CSS"],
  },
};

const keys = ["subject", "content", "stack", "team", "period"];
let isClicked = {
  first: false,
  second: false,
  third: false,
  fourth: false,
  fifth: false,
};

function clickExp({ target }) {
  const clicked = document.getElementById(target.id);
  if (!clicked) return;

  isClicked[target.id] = !isClicked[target.id];

  const canvas = document.getElementById(`c-${target.id}`);

  if (!isClicked[target.id]) {
    canvas.className = "hidden";
    canvas.replaceChildren();
  } else {
    keys.forEach((key) => {
      canvas.className = "canvas";
      const subContext = document.createElement("div");

      subContext.className = key;
      subContext.innerText = desc[target.id][key];

      canvas.appendChild(subContext);
    });

    clicked.appendChild(canvas);
  }
}
