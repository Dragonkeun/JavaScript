// 이자 계산기
// 여기에 코드를 작성하세요
function interestCalculator(r, v, n){
    value = (v * n * (n+1) / 2 * r / 12).toFixed(0);
    console.log(value);
  }
  
  
  // 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
  interestCalculator(0.043, 800000, 24);
  
  // 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
  interestCalculator(0.043, 600000, 24);

// 그래, 우리 함께
let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

let hyungdon = "[null]";

// 여기에 코드를 작성하세요
const a = lyrics.indexOf('[형돈]');
const b = lyrics.indexOf('[길]');
hyungdon = lyrics.slice(a, b);

// 테스트 코드
console.log(hyungdon);

// 레시피 만들기
// 아래 코드중 잘못된 부분을 수정해 주세요
let espresso = ['espresso'];

let americano = espresso.slice();
americano.push('water');

let caffeLatte = espresso.slice();
caffeLatte.push('milk');

// 여기에 caffeMocha와 vanillaLatte 레시피를 만들어 주세요
let caffeMocha = caffeLatte.slice();
caffeMocha.push('chocolateSyrup');

let vanillaLatte = caffeLatte.slice();
vanillaLatte.push('vanillaSyrup');


// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);

// 팩토리얼
function factorial(n) {
    let result = 1;
      for(let i=1; i<=n; i++){
        result *= i;
       
      }
      
    return result;
  }
  
  // 테스트 코드
  console.log(factorial(12));
  console.log(factorial(6));
  console.log(factorial(3));
  console.log(factorial(0));

// 거스름돈 구하기
function calculateChange(payment, cost) {
    let change = payment - cost;
    if (parseInt(change / 50000)){
      var a = parseInt(change / 50000);
      change -= 50000*a;
    }
    else {
      var a = 0;
    }
    if (parseInt(change / 10000)){
      var b = parseInt(change / 10000);
      change -= 10000*b;
    }
    else {
      var b = 0;
    }
    if (parseInt(change / 5000)){
      var c = parseInt(change / 5000);
      change -= 5000*c;
    }
    else {
      var c = 0;
    }
    if (parseInt(change / 1000)){
      var d = parseInt(change / 1000);
      change -= 1000*d;
    }
    else {
      var d = 0;
    }
    console.log(`50000원 지폐: ${a}장`);
    console.log(`10000원 지폐: ${b}장`);
    console.log(`5000원 지폐: ${c}장`);
    console.log(`1000원 지폐: ${d}장`);
  }
  
  // 테스트 코드
  calculateChange(100000, 33000);
  console.log('');
  calculateChange(500000, 378000);

// 팰린드롬
function isPalindrome(word) {
    // 여기에 코드를 작성하세요
    if(word == word.split('').reverse().join('')){
      return true;
    }
    else {
      return false;
    }
  }
  
  // 테스트 코드
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("stars"));
  console.log(isPalindrome("기러기"));
  console.log(isPalindrome("123321"));
  console.log(isPalindrome("hello"));
  console.log(isPalindrome("kayak"));