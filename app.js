 
 /*-----------BEGIN vars-----------*/
  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
  let netdomain = "";

  /*----------END vars------------*/

/***for each statement using arrow function*/
pronoun.forEach((pronoun) =>{
    adj.forEach((adj) =>{
        noun.forEach((noun) =>{ 
            console.log(pronoun + adj + noun);
            netdomain += pronoun + adj + noun + '.geek' + '<br>';
        });
    });
});

document.querySelector("p").innerHTML = netdomain;