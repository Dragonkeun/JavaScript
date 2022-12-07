// 외계행성의 나이
function solution(age) {
    var answer = '';
    var alphabet = "abcdefghij".split("");
    age = String(age).split("");
    for (let i=0; i<age.length; i++){
        for(let j=0; j<alphabet.length; j++){
            if (age[i] == j){
                answer += alphabet[j];
            }
        }
    }
    return answer;
}