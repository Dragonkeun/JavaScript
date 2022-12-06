// 369게임
function solution(order) {
    var answer = 0;
    var order = String(order).split("");
    for (let i=0; i<order.length; i++){
        if (order[i] != 0 && order[i] % 3 == 0){
            answer+=1;
        }
    }
    return answer;
}