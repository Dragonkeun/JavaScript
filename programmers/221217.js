// 팩토리얼
function solution(n) {
    let value = 1;
    let count = 0;
    while(true){
        if(value <= n) {
            value *= count+1;
            count++;
        }
        else {
            break;
        }
    }
    return count-1;
}