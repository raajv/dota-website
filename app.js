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
        getDota();
    }
    return likeDota;    
}


function myFunction() {
    let x =
    document.getElementById("color");
    x.style.color = "green";
    }

function myGame() {
    let correctAnswer = 55;
    let numberOfGuesses = 10;

    for(i=0; i<numberofGuesses ; i +=1)
    let userAnswer = prompt('please enter a number');
    while(userAnswer <= 0 || userAnswer >100 ){
        userAnswer = prompt('please enter a number');
    }
    if(userAnswer == correctAnswer){
    alert = ('you win')
    }
    


}