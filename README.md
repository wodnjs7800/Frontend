# 패스파인더 웹프론트엔드 과제

## 개발환경

- React

## 빌드 및 실행 방법

- npm install gh-pages --save-dev
- "predeploy": "npm run build",
	 "deploy": "gh-pages -d build"
- git init
- git add *
- git commit -m '버전'
- git remote add origin https://github.com/wodnjs7800/frontend
- git push -u origin master
- npm run deploy

## 테스트 코드 실행 방법 (선택사항)

- 테스트 코드 실행 방법을 기술하세요.
- 선택사항으로 테스트 코드를 작성하지 않았다면 작성하지 않으셔도 됩니다.

## 사용한 패키지와 사용 목적

- axios를 사용해서 api를 호출하려고 했으나, key을 제대로 사용하지 못해서 "mylist.json"을 사용

## API

- URL: https://api.kakaobrain.com/v1/pathfinder/music/mylist
- API Key: 6d79e41a-6e8f-406a-a5e4-99efcbcc63fa
