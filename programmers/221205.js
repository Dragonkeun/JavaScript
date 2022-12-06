// 숫자 찾기
function solution(num, k) {
    var num = String(num).split('');
    for(let i=0; i<num.length; i++) {
        if (String(k) === num[i]) {
            return i+1;
        }
    }
    return -1;
}f