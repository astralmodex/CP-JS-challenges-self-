/* CHALLENGE 1 */

var ageInput, ageInDays

function calcAgeInDays() {
          // ENABLE INPUT
          document.querySelector('.age-input').classList.add('active')
          // TAKE USER INPUT (MUST)
          ageInput = document.querySelector('.age-input').value

          document.querySelector('.green-btn').addEventListener('click', () => {
                    // IF USER INPUT > 0 , DISPLAY RESULT
                    if (ageInput > 0) {
                              ageInDays = ageInput * 365
                              document.querySelector('.flexbox-1-2').style.display = 'block'
                              document.querySelector('.flexbox-1-2').style.color = '#00cf00'        
                              document.querySelector('.flexbox-1-2').textContent = 'You are ' + ageInDays + ' days old.'
                    } else {
                              // ONLY IF USER INPUT is anything else, DISPLAY OTHER RESULT
                              document.querySelector('.flexbox-1-2').textContent = 'You are invalid.'
                              document.querySelector('.flexbox-1-2').style.color = 'red'
                    } 
          }) 
} 

function resetAgeCalc() {
          document.querySelector( '.flexbox-1-1' ).reset()
          document.querySelector('.age-input').classList.remove('active')
          document.querySelector('.flexbox-1-2').style.display = 'none'
          document.querySelector('.flexbox-1-2').style.color = '#00cf00'
}




/* CHALLENGE 2 */

var div = document.querySelector( '.flexbox-2-1' )
var image

function generateRocket () {
          image = document.createElement( 'img' )
          image.setAttribute( 'class' , 'rocketImg' )
          image.src = 'img/SPACEXstarship.jpg'
          div.appendChild( image )
} 

function resetRocket () {
          var img2 = document.querySelectorAll( '.rocketImg' )
          for ( let i=0 ; i < img2.length ; i++ ) {
                    img2[i].style.display = 'none'
          }
}



/* CHALLENGE 3*/

var vader , luke , obiwan , botChoice , yourChoice

botChoice = getRandomInt ( 1 , 3 )
console.log( botChoice )

function dloGame ( yourChoice ) {
          
}





function getRandomInt ( min , max ) {
          min = Math.ceil( min ) 
          max = Math.floor( max ) 
          return Math.floor( Math.random() * ( max - min + 1 ) ) + min
}