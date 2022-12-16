// 합성수 찾기
function solution(n) {
    var answer = 0;
    for(let i=2; i<=n; i++){
        if(i % 2 == 0 && i != 2){
            answer++;
        }
        else if(i % 3 == 0 && i != 3){
            answer++;
        }
        else if(i % 5 == 0 && i != 5){
            answer++;
        }
        else if(i % 7 == 0 && i != 7){
            answer++;
        }
    }
    return answer;
}