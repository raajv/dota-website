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
        document.write('<img src="images/go home.gif" width"600">')
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
        let numberOfAttempts = 100 ;
        for(i=0 ; i<numberOfAttempts ; i+=1){
            userAnswer= prompt('give a star rating between 1-5')
        console.log(userAnswer);
        while(userAnswer == 0 || userAnswer == 1 || userAnswer == 2 || userAnswer == 3 || userAnswer == 4){
            userAnswer = prompt('give a star rating between 1-5');
            document.write('<h3>' + '<img src="images/fatality.gif" width="200">' + userAnswer + ' is ' + ' never ' + ' right ' + '</h3>')
           console.log(i);
           }
        if (userAnswer == correctAnswer){
            alert('you got it right!');
            document.write ('<h2>' + userAnswer + ' is' + ' always' + ' right' + ' !' + '</h2>');
            break;
            }else {
            alert('there is only one answer , you know which one !');
        }
    }    
}

    function gameOn(){
        let theAnswer= 'raaj';
        let userAnswer2 = prompt('who let the dogs out?')
        while(userAnswer2 !== 'raaj'){
            userAnswer2 = prompt('woof woof')
        if (userAnswer2==theAnswer){
           alert('welcome dawg!')
        }else{
            alert('try again')
        }
        }
        }
    