let funcaoQueFazLogDeUsuarioDoGitHub = (userid) => {
    fetch(`https://api.github.com/users/${userid}`)
    .then((response) => 
      response.json()
    )
    .then((data) => {
        console.log('all data:', data);
        console.log('type: ', typeof(data));
      })
    .catch(error => {
        console.error(error);
    })
};
  
funcaoQueFazLogDeUsuarioDoGitHub('Esqu1l0');