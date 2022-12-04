// 학점 계산기
function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
  // 여기에 코드를 작성하세요
  if (totalScore >= 90) console.log("A");
  else if (totalScore >= 80) console.log("B");
  else if (totalScore >= 70) console.log("C");
  else if (totalScore >= 60) console.log("D");
  else console.log("F");
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);

// 서열 정리
// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성하세요
  if (myAge == yourAge) return callFriend;
  else if (myAge < yourAge && yourGender == myGender) {
    return callOlderBrother;
  }
  else if (myAge < yourAge && yourGender != myGender) {
    return callOlderSister;
  }
  else if (myAge > yourAge && yourGender == myGender) {
    return callYoungerBrother;
  }
  else return callYoungerSister;
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// 등급별 티켓 가격
// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요
function checkPrice(grade) {
	// 여기에 코드를 작성하세요
	switch(grade){
	  case('R'):
	    console.log(`R석은  ${RPrice}만원 입니다.`)
	    break
	 case('VIP'):
	    console.log(`VIP석은  ${VIPPrice}만원 입니다.`)
	    break
	 case('S'):
	    console.log(`S석은  ${SPrice}만원 입니다.`)
	    break
	 case('A'):
	    console.log(`A석은  ${APrice}만원 입니다.`)
	    break
	 default:
	    console.log("VIP, R, S, A 중에서 하나를 선택해 주세요.")
	    break
	}
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');

// for문 연습하기
// 여기에 코드를 작성하세요
for(i=1; i<=100; i++){
	if(i % 2 == 0) console.log(i)
  }

// for문 더 연습하기
function printTriangle(height) {
	// 여기에 코드를 작성하세요
	for(i=1; i<=height; i++){
	  for(j=0; j<i; j++){
	    process.stdout.write('*');
	  }
	  console.log("");
	}
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);

// while문 연습하기
// 여기에 코드를 작성하세요
var i = 0
while(i<100){
  i++
  if (i % 2 == 1) console.log(i)
}

// while문 더 연습하기
const N = 180;
var count = 0;
var i = 0
// 여기에 코드를 작성하세요
while(N>=i){
  i++
  if (N % i == 0) {
    console.log(i)
    count++
  }
}
console.log(`${N}의 약수는 총 ${count}개입니다.`)

// 구구단 만들기
// 여기에 코드를 작성하세요
for(dan=1; dan<=9; dan++){
	for(gop=1; gop<=9; gop++){
	  console.log(`${dan} * ${gop} = ${dan*gop}`)
	}
  }

// 피보나치 수열
let current = 1;
let previous = 0;
for(let i=1; i<=50; i++){
  console.log(current)
  oldprevious = previous
  previous = current
  current += oldprevious
}

// 영어 단어장
let myVoca = {
	function : '함수',
	variable : '변수',
	constant : '상수',
	local : '지역의',
	global : '전반적인'
  };
  
  console.log(myVoca);
  console.log(myVoca.local);
  console.log(myVoca.constant);
  console.log(myVoca.function);

// 영어 단어장 2
let myVoca = {
	function: '함수',
	variable: '변수',
	constant: '상수',
	local: '지역의',
	global: '전반적인',
};

// 1. 이미 외운 단어 3개를 삭제해 주세요
// 여기에 코드를 작성하세요
delete myVoca.function;
delete myVoca.constant;
delete myVoca.local;

console.log(myVoca);
console.log(myVoca.constant);


// 2. 오늘 외울 단어 4개를 추가해 주세요
// 여기에 코드를 작성하세요
myVoca.extend = '확장하다';
myVoca.export = '내보내다';
myVoca.import = '불러오다';
myVoca['default value'] ='기본값'

console.log(myVoca);
console.log(myVoca.export);


// 3. default value의 뜻을 출력해 주세요
// 여기에 코드를 작성하세요
console.log(myVoca['default value'])