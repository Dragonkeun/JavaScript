// 피자 나눠 먹기(2)
function solution(n) {
    const first = n;
    while(n % 6 != 0 ) {
        n+=first;
    }
    return parseInt(n / 6);
}

// 최댓값 만들기(2)
function solution(numbers) {
    numbers.sort((a, b) => a - b);
    var front = numbers[0] * numbers[1];
    var back = numbers[numbers.length-1] * numbers[numbers.length-2];
    if (front > back){
        return front;
    }
    else{
        return back;
    }
}