function getUsername(){
    let userName = prompt('Please Enter Your Name');
    document.write ( 'Welcome ' +  userName  +  '!' )
    return userName;
}
let userName = getUsername();
console.log(userName)

function getDota(){
    let likeDota= prompt('Do You Like DOTA?')

    if(likeDota == 'yes'){
        document.write('YOU ARE MOST WELCOME!')
    } else if (likeDota !='no'){
        document.write('<img src="images/go home.gif">')
    }
    else {
        prompt('YOU MUST ENTER YES OR NO')
    }
    return likeDota;    
}
let likeDota = getDota();
console.log(likeDota);

function myFunction() {
    let x =
    document.getElementById("color");
    x.style.color = "green";
    }



