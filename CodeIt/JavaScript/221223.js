// 순이들의 시험 결과
let hyesoonScore = {
	'데이터 모델링의 이해': 10,
	'데이터 모델과 성능': 8,
	'SQL 기본': 22,
	'SQL 활용': 18,
	'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
	'데이터 모델링의 이해': 14,
	'데이터 모델과 성능': 8,
	'SQL 기본': 12,
	'SQL 활용': 4,
	'SQL 최적화 기본 원리': 16,
};
let a = 0;
function passChecker(scoreObject) {
  for (i in scoreObject) {
    a+=scoreObject[i];
  }
  if (a>=60) {
    console.log("축하합니다! 합격입니다!");
  }
  else {
    console.log("아쉽지만 불합격입니다..");
  }
  a = 0;
}

passChecker(hyesoonScore);
passChecker(minsoonScore);

// 우수사원 재상이
let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
  let timeDiff = ((today - jaeSangStart) / 1000 / 60 / 60 / 24) +1;
  console.log(`오늘은 입사한 지 ${timeDiff}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);

// 배열 인덱싱 연습하기
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];
for (i in dataType){
  console.log(dataType[i]);
}

// 온도 바꾸기
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 여기에 코드를 작성하세요
for (i in celsiusTemps){
  fahrenheitTemps.push((celsiusTemps[i] * 9 / 5) + 32);
}


// fahrenheitTemps 테스트
console.log(fahrenheitTemps);

// splice 연습하기
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요
fruits.splice(1, 1, '사과', '청포도');



// fruits 배열의 첫 번째 요소를 삭제해 주세요
fruits.splice(0, 1);

// ages 배열에 마지막 요소를 삭제해 주세요
ages.splice(-1, 1);


// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요
ages.splice(2, 2, 26, 28);


// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요
numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);


// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요
for (let i=0; i<numbers.length; i++){
  if(numbers[i] % 2 == 1){
    numbers.splice(i, 1);
    i-=1;
  }
}


// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);

// 투표 집계하기
// 투표 결과 리스트
let votes = [
    '이재식', '이재식', '이규하', '이규하', '이규하',
    '이재식', '이재식', '이규하', '이규하', '이재식',
    '이규하', '이규하', '이규하', '이규하', '이재식',
    '이재식', '이규하', '이재식', '이재식', '이재식',
    '이재식', '이재식', '이규하', '이규하', '이규하',
    '이규하', '이규하', '이재식', '이규하', '이규하',
    '이규하', '이규하', '이재식', '이규하', '이규하',
    '이규하', '이재식', '이재식', '이재식', '이규하',
  ];
  
  // 후보별 득표수 객체
  let voteCounter = {};
  
  // votes 배열을 이용해서 voteCounter 객체를 정리하기
  for (let name of votes) {
    if (name in voteCounter) {
      voteCounter[name] += 1;
    }
    else {
      voteCounter[name] = 1;
    }
  
  }
  
  // 후보별 득표수 출력
  console.log(voteCounter);

// 팀 나누기
let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],
	[],
];

// 여기에 코드를 작성하세요
for (let i=0; i<groups.length; i++){
  teams[0].push(groups[i][0]);
  teams[1].push(groups[i][1]);
}

// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);