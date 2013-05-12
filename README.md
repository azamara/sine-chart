# Node 설치
http://nodejs.org/


# Yeoman 설치 및 웹앱 뼈대 생성

* 요맨 설치여부 확인

```
curl -L get.yeoman.io | bash
```

* 노드 패키지 매니저를 이용해 요맨 설치(미설치된 경우)

```
npm install -g yo grunt-cli bower
```

* 웹앱 뼈대 생성

```
yo webapp
```

* sass, requirejs 관련 질문은 사용자의 환경에 맞게 설정 

* 코너스톤 라이브러리 설치(bower 등록 전이므로 github에 등록된 wdk를 직접 설치)

```
bower install cornerstone-framework-dist
```
or
> component.json 파일의 dependencies 블록에 "cornerstone-framework-dist": "latest" 추가 후 webapp root에서 

```
bower install 
```

* backbone 파일을 생성해주는 generator설치 (옵션)

```
npm install generator-backbone
```

사용법
``` 
yo backbone:model sine
```

* 웹서버 실행

```
grunt server
```

* 배포

```
grunt build:dist
```

