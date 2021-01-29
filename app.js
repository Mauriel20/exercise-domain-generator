 
 /*-Declaración de variables-*/
  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
  let netdomain = "";

  /*-Fin de la declaración--*/

/***Permite hacer todas las soluciones posibles */
pronoun.forEach((pronoun) =>{
    adj.forEach((adj) =>{
        noun.forEach((noun) =>{ 
            console.log(pronoun + adj + noun);
            netdomain += pronoun + adj + noun + '.geek' + '<br>';
        });
    });
});

document.querySelector("p").innerHTML = netdomain;

/* fin javascript */