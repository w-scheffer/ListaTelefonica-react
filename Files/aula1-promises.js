const people_aproved = [];
const validateSignUpName = (name) => new Promise((resolve, reject) => {
    const nameValid = name && name.length >= 3;
    if (nameValid) {
        return resolve();
    } else {
        return reject('Nome Invalido');
    }
})
const validateSignUpAge = (age) => new Promise((resolve, reject) => {
    const ageValid = age && age >= 18;
    if (ageValid) {
        return resolve();
    } else {
        return reject('Idade Invalida');
    }
})
const validateSignUpPersonType = (type) => new Promise((resolve, reject) =>{
    const typeValid = type && type === "fisica";
    if (typeValid) {
        return resolve();
    } else {
        reject('Tipo Invalido');
    }
})
const validateSingUpCPF = (cpf) => new Promise((resolve, reject) => {
    const cpfValid = (!people_aproved.length || !people_aproved.find(aprovada => aprovada.cpf === cpf));
    if (cpfValid) {
        return resolve();
    } else {
        reject('CPF Invalido');
    }
}) 
const validateSignUp = (person) => new Promise ((resolve, reject) => {
    const { name,  age, type, cpf } = person || {};
    validateSignUpName(name)
    .then(() => 
        validateSignUpAge(age)
    )
    .then(() => 
        validateSignUpPersonType(type)
    )
    .then(() => 
        validateSingUpCPF(cpf)
    )
    .then(() => 
        resolve()
    ).catch(error => {
        reject()
    })
})


const makePerson = (name, age, cpf, type = "fisica") => {
  return {
    name: name,
      age: age,
      type: type,
      cpf: cpf
  };
};
const people_to_validate = [
    makePerson( "joao", 20, "12"),
    makePerson( "ana", 17, "13"),
    makePerson( "maria", 19, "12"),
];
people_to_validate.forEach(person => {
  validateSignUp(person).then(() => {
    people_aproved.push(person);
  }).catch(error => {
      console.log("cadastro invalido");
  })
})

console.log(people_aproved)
