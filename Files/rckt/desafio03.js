function temHabilidade(skills){
    for (let i in skills){
        if(skills[i] === "Javascript"){
            return true;
        }
    }

    return false;
}

let skills = ["Javascript", "Typescript", "qualfoi"];

console.log(temHabilidade(skills))