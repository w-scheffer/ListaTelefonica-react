const people_aproved = [];
const validateSignUpName = name => name && name.length >= 3;
const validateSignUpAge = age => age && age >= 18;
const validateSignUpPersonType = type => type && type === "fisica";
const validateSingUpCPF = cpf => !people_aproved.length || !people_aproved.find(aprovada => aprovada.cpf === cpf);
const validateSignUp = (person) => {
  const { name,  age, type, cpf } = person || {};
  return validateSignUpName(name) && validateSignUpAge(age) && validateSignUpPersonType(type) && validateSingUpCPF(cpf);
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
  makePerson( "maeria", 19, "12"),
];
people_to_validate.forEach(person => {
  if (validateSignUp(person)) {
    people_aproved.push(person);
  }
})
console.log(people_aproved);
