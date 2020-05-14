/* CHALLENGE 1 */

var ageInput, ageInDays

function calcAgeInDays() {
          // ENABLE INPUT
          document.querySelector('.age-input').classList.add('active')
          // TAKE USER INPUT (MUST)
          ageInput = document.querySelector('.age-input').value

          document.querySelector('.green-btn').addEventListener('click', () => {
                    // IF USER INPUT > 0 , DISPLAY RESULT
                    console.log(ageInput)
                    if (ageInput > 0) {
                              ageInDays = ageInput * 365
                              document.querySelector('.flexbox-1-2').textContent = 'You are ' + ageInDays + ' days old.'
                    } else {
                              // ONLY IF USER INPUT is anything else, DISPLAY OTHER RESULT
                              document.querySelector('.flexbox-1-2').textContent = 'You are invalid.'
                    }
          })
}




/* CHALLENGE 2 */