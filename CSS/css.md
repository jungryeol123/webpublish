## 1. CSS - HTML로 생성된 틀에 모양, 스타일을 입히는 속성
- HTML 태크에 속성으로 추가하거나, 별도의 파일로 분리하여 생성

## 2. 사용법
- Inline(인라인) 방식 : HTML 태그에 style 속성을 추가하여 작성
syntax> style = "프로퍼티 : 값;"
- Internal 방식 : HTML 파일의 head 태그에 페이지에서 호출되는 style 속성 정리 
- EXternal 방식 : style 속성을 별도의 파일로 생성하여 호출 

## 3. Internal, External 방식의 문법
- 형식 : 선택자(Selector) {프로퍼티(Property) : 값(value);}
- selector 종류 : HTML 태그, Class(.), Id(#)

## 4. 단위 - pixel, %, em, rem ...
- pixel은 고정된 길이로 설정, 화면 크기가 변경되어도 사이즈 유지
- %는 상대적 크기로, 화면 크기가 변경되면 그 크기에 따라 퍼센트에 맞춰 사이즈가 조정
- 부모의 크기가 픽셀로 고정되어 있는 경우, 자식은 퍼센트로 설정하여 크기 조정
- 부모의 크기가 퍼센트이면, 자식도 화면 크기 변경시 화면 크기에 맞춰 사이즈가 조정