## Database

1. Data : 저장할수 있는 어떤 값의 집합

2. Database : 저장할 수 있는 값의 집합을 저장한 곳

3. DBMS : 저장할 수 있게 만든 프로그램

Data에서 우리에게 필요한 정보를 가공하면 Information

Information을 인간적인 관점에서 필요한 내용으로 가공하면 Knowledge

data는 나에게 필요한 양만, 적으면 적을수록 좋다.(메모리를 적게 잡아 먹을수 있기 때문에)

관계형 데이터베이스의 시작
SQL의 출현 (Structured Query Language)
NOSQL의 등장(관계형 디비가 아닌 디비들)

CAP
Consistency 일관성 : 값이 바뀌어도 모든 사용자가 같은 값을 가져가야 한다.
Availability 가용성 : 장애 시간이 적어야 한다.
Partition Tolerence : 서버에 장애가 와도 이상없이 서비스 해야 한다.
서버는 3대가 기본이며 홀수이다(죽었는지 살았는지 다수결을 정하기 위해).
셋중에 하나는 희생해야 한다. 보통 Consistency를 희생한다.

ACID 관계형 데이터베이스의 속성
Atomicity 원자성 : 어떤 일이든 동시에 되던지 아예 안되던지.
Consistency 일관성
Isolation 고립성 : 여러명이 쓰지만 혼자 쓰는 것 처럼 보여준다.
Durability 내구도 : 값을 쓰면 영구적으로 저장되어야 한다.

NOSQL은 BASE라는 게 있다.

확장성
수평확장이 더 좋은데 관계형데이터베이스는 안된다.
nosql은 수평확장이 잘된다.
수평확장 : 서버를 여러대 늘린다.
수직확장 : 더 좋은 서버(스펙)로 교체한다.

Graph DB : Neo4j
친구찾기 관계형 데이터베이스에 많이 사용한다.

Document DB : MongoDB
json기반 레코드 저장
아무거나 막 저장 할수 있고 비교적 빠르고 사용이 간단하다.

Key-Value DB : Redis, Mem-cached
키와 밸류로만 저장하는 오브젝트형 DB
단순데이터를 처리하는 엄청 빠른 DB

locality 지역성
시간지역성 : 방금 사용한 데이터가 다시 사용할 확률이 높다.
공간지역성 : 내가 사용한 데이터의 주변 데이터가 사용할 확률이 높다.

WebServer
Apache(정적인 페이지 관리) - WAS(동적인 작용 관리) - cache(Redis) - DB(데이터 저장)
DB가 할일을 cache가 할 수 있으면 처리한다

Cloud DB : AWS DyanmoDB
우리는 디비를 사용하고 관리는 다른곳에서 해주는 디비

ETC
Hadoop Eco System
GFS + GMR + GBT를 자바로 만든 시스템

Cassandra
아파치에서 만든 디비

Elastic Search
검색엔진 (디비위에 얹기만 하면 된다)

GFS
1) 3Copy
2) 분산저장
3)

GMR
노는 CPU로 병렬처리를...

GBT
무한대의 용량을 가진 Key-Value 디비


docker
가벼운 가상화 컴퓨터를 생성한다.

db에서 %는 모두, 전부라고 쓰인다

테이블 생성 옵션
PRIMARY KEY 중복된 값이 들어갈수 없게 한다. (고유한 값)
프라이머리키는 B-Tree Index를 자동 생성한다. 검색이 빨라진다.(빠른 검색)

AUTO_INCREMENT
My-sql 전용 명령어 : 생성될때마다 1씩 올려주면서 생성해준다.

NOT NULL
NULL 값이 들어가면 안된다. 무조건 값이 있어야 한다.

DEFAULT
기본값

UNIQUE
프라이머리 키는 아니지만 중복된 값을 넣으면 안될떄

데이터 타입
INT         정수
DEC(5,2)    소수점표시
DOUBLE
CHAR(8)     고정길이문자열
VARCHAR(64) 가변길이문자열
DATETIME    날짜

TIMESTAMP 는 자기가 알아서 현재시간을 채워넣는다.
SELECT NOW(), CURTIME(), CURDATA(); 디비에서 쓸 수 있는 시간관련 함수

테이블과 테이블을 조인시켜 필요한 정보를 알아내는 방법
조인은 b-tree 인덱스를 사용하므로 빠르게 할 수 있다.

SELECT * FROM USER U CROSS JOIN BOARD B WHERE U.ID = B.UID ;
CROSS JOIN 컬럼 전부다 조인

SELECT * FROM USER U RIGHT JOIN BOARD B ON U.ID = B.UID;
SELECT * FROM USER U LEFT JOIN BOARD B ON U.ID = B.UID;
레프트 조인과 라이트 조인을 유니온(union)하면 풀아우터조인을 구현할 수 있다.(하지만 성능이 안좋으므로 쓰지 말자)

cascade
다른 테이블이 변경될때 연쇄적으로 변경되게 하는 명령어

1:N일때는 N쪽에 foreign key를 붙인다
M:N일때는 새로운 테이블을 만들어서 데이터를 새로 만들어서 foreign key 생성.

복합 프라이머리 키
컬럼 2개를 합해서 프라이머리 키를 만드는 것.

아니면 그냥 가상키를 만들어서 프라이머리 키로 사용한다.

주소록
필요한 데이터 : 이름 주소 전화번호 이메일 SNS
기능 : 이름순으로 정렬하기
      검색하기 : 이름, 주소, 전화번호, 이메일 등등
      추가하기
      수정하기
      삭제하기
      전화연결()
      메일연결
      문자연결
      SNS 방문하기

내가 구현을 하면은
Object 데이터 구현하고
정렬하기 : sort알고리즘
검색하기 : for문 돌려서 주륵주륵
추가하기 : 뒤에서 넣기
삭제하기 : 찾아서 삭제하기

```javascript
var addressBook = [{ name : "kkk",
                    address : "korea",
                    phone : 010,
                    email : "abc@korea.com",
                    sns : "face@book.com"}, ...];

function sorting() {
  for(var i = 0; addressBook.length; i++) {
    for(var j = i+1; addressBook.length; j++) {
      var temp = addressBook[i].name;
    }
  }
}

function index() {
  for(var i = 0; addressBook.length; i++) {

  }
}

function insert() {

}

function delete() {

}
```
