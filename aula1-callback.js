const people_aproved = [];
const validateSignUpName = (name, cb) => { cb (name && name.length >= 3) };
const validateSignUpAge = (age, cb) => { cb (age && age >= 18) };
const validateSignUpPersonType = (type, cb) => { cb (type && type === "fisica") };
const validateSingUpCPF = (cpf, cb) => { cb (!people_aproved.length || !people_aproved.find(aprovada => aprovada.cpf === cpf) )};
const validateSignUp = (person, cb) => {
    const { name,  age, type, cpf } = person || {};
    validateSignUpName(name, (resultName) => {
        if(resultName){
            validateSignUpAge(age, (resultAge) => {
                if (resultAge) {
                    validateSignUpPersonType(type, (resultType) => {
                        if (resultType){
                            validateSingUpCPF(cpf, (resultCPF) => {
                                if(resultCPF){
                                    cb(true)
                                } else {
                                    cb(false)
                                }
                            })
                        } else {
                            cb(false)
                        }
                    })
                } else {
                    cb(false)
                }
            })
        } else {
            cb(false)
        }
    })
}


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
  validateSignUp(person, (resultSign) => {
      if(resultSign){
        people_aproved.push(person);
      }
  })
})
console.log(people_aproved);
