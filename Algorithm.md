빅오 : 최악의 경우
오메가 : 최선의 경우
세타 : 최악과 최선이 같을때

echo "hello" | pbcopy 터미널에서 클립보드에 복사해줌
pbphaste


Traversing : 순회

primitive type : 가장 기본적인 타입
derived type : 오브젝트

Array, List, ArrayList : 순차적으로 담는 컨테이너
Hash, Map, Dictionary, Object : 순서 없이 라벨(키)을 이용해서 담는 컨테이너

복합적인 자료구조의 사용
둘의 장점을 사용하기 위해 종종 2개 이상을 사용하기도 한다.

Call by Value
Call by Reference

밖에 있는게 아규먼트(argument)
안에 있는게 파라미터(parameter)

var a = 3;
a 는 변수(variable)
3 은 (literal)

동적 프로그래밍
Memoization

재귀함수를 쓰거나 반복적인 일을 할때
결과값을 저장해놓고 다시 쓰는 방법.


그리디 방법론
눈앞에 가장 이득이 되는것들을 쫓아가는 방법
의외로 효율이 좋다.

분할정복 방법론
큰일을 해결할 수 있는 작을일로 쪼개서 해결하는 방법

git diff --check
불필요한 공백 체크하는 명령어

Stable / Unstable stop
안정 정렬과 불안정 정렬
불안정 정렬 : 같은 값들의 상대적 위치가 변경될 수 있는 정렬
Unstable Sort : Quick sort
Stable Sort : Merge, Bubble, Insertion sort

Bubble Sort : 구현하기 쉽고 에러가 잘안난다.
Selection Sort: 버블소트와 비슷
Insertion Sort : 대부분의 원소가 정렬되 있을때 가장 빠르다. 안정 정렬
Quick Sort : 무난하게 빠르지만 피봇값을 잘못 정하면 느리다. 불안정 정렬
Merge Sort : 멀티쓰레드로 구현이 쉽고 안정 정렬이라 많이 사용한다.
Heap Sort : Heap 이라는 자료구조를 쓸때 쓰는 정렬
Radix Sort : 정수를 정렬할때 쓰는 특수한 것

Linked List
Collection, Container : 여러 개의 값을 가지고 있는 것

종류
싱글링크드리스트 : 일반적인 형태의 링크드리스트
더블링크드리스트 : prev가 추가돼 앞으로 검색할 수 있는 링크드리스트
서큘라리스트 : 끝이 앞을 가리키는 원형 리스트
더블서큘라리스트 : 원형리스트에 prev를 넣은 리스트, 요즘 가장 많이 쓰인다.

센티넬 : 헤드에 빈노드를 사용해서 구현을 쉽게 하는 방법

레드블랙트리
배열과 리스트의 장점을 갖춘 방식으로 만든다.

배열 or 리스트 와 해시테이블을 사용한다는 것만 알아두자.

서로서로 부르는 이름이 있다
오퍼레이션 - 오퍼랜드
메소드 - 파라미터

객체지향언어
객체로 만들때 좋은점
1) 유지보수
2) 커다란 프로그램을 만들때 좋음
3) GUI 프로그램을 만들때 좋음


overflow-y를 따로 주면 그 엘리먼트에서만 스크롤이 동작한다.

데모는 시나리오 테스트를 먼저 만들고 하면 쉽다.
내가 어떤 동작을 할지 먼저 시나리오를 짜자.

로컬스토레이지 는 검색자동완성이나 사용자가 검색을 무엇을 주로하나 확인용도로 자주 쓰인다

oop의 사용법은 다양하다.
css를 잘하자!

국내 브라우저의 점유율

프레임워크 : 패턴의 가지고 만든 큰 틀이 있음.
라이브러리 : 함수의 묶음.
