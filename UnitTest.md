정상일때의 테스트
비정상일때의 테스트

node_modules 는 gitignore에 등록해서 깃에 안올라가게 해야한다

chai assert chai의 구문찾아보기

테스트코드를 짜는 방법
//given 데이터가 주어졌을때
var arr = [1,2,3];
//when  어떤 행동을 했을때
arr.push(999);
//then  기대하는 결과
assert.equal(arr.length, 4);
