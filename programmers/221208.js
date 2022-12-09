// 배열 회전시키기
// unshift(값) : 배열 맨 앞에 값 추가
// shift() : 배열 맨 앞에 값 삭제
// push(값) : 배열 맨 뒤에 값 추가
// pop() : 배열 맨 뒤에 값 삭제
function solution(numbers, direction) {
    if (direction == "right") {
        // 배열 맨 앞에 값을 추가하는데 numbers.pop이므로 배열 맨 뒤에 값을 맨 앞에 추가하는 것
        numbers.unshift(numbers.pop());
    }
    else if (direction == "left") {
        // 배열 맨 뒤에 값을 추가하는데 numbers.shift이므로 배열 맨 앞에 값을 맨 뒤에 추가하는 것
        numbers.push(numbers.shift());
    }
    var answer = numbers;
    return answer;
}