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
        while(userAnswer == 0 || userAnswer == 1 || userAnswer == 2 || userAnswer == 3 || userAnswer == 4){
         userAnswer = prompt('give a star rating between 1-5');
         document.write('<h3>' + '<img src="images/fatality.gif" width="100">' + userAnswer + ' is ' + ' never ' + ' right ' + '</h3>')
        console.log(i);
        }
        if (userAnswer == correctAnswer){
            alert('you got it right!');
            document.write ('<h2>' + userAnswer + ' is' + ' always' + ' right' + ' !' + '</h2>')
            break;

        }else {
            alert('there is only one answer , you know which one !');
        }
    }    
}