 function getUsername(){
    let userName = prompt('Please Enter Your Name');
    document.write ( 'Welcome ' +  userName  +  '!' )
    return userName;
}


 function getDota(){
    let likeDota= prompt('Do You Like DOTA?')

    if(likeDota == 'yes'){
        document.write('YOU ARE MOST WELCOME!')
    } else if (likeDota =='no'){
        document.write('<img src="images/go home.gif">')
    }
    else {
        prompt('YOU MUST ENTER YES OR NO')
    
    }
    return likeDota;    
}


  function myFunction() {
    let x =
    document.getElementById("color");
     x.style.color = "green";
      }

function myGame(){
        
        let correctAnswer= 5;
        let numberOfAttempts = 5;
        for( let i=0 ; i < numberOfAttempts ;i += 1){
        let userAnswer = prompt('give a star rating between 1-5');
        console.log(i);
        
        if (userAnswer == correctAnswer){
            alert('you got it right!');
            break;
        }else {
            alert('try again');
        }
    }    
}