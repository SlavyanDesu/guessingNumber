const randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)

const checkGuess = () => {
    const myGuess = guess.value
    if (myGuess == randomNumber) {
      feedback.textContent = 'You got it right!'
    } else if (myGuess > randomNumber) {
      feedback.textContent = `Your guess was "${myGuess}" and that's too high. Please try again!`
    } else if (myGuess < randomNumber) {
      feedback.textContent = `Your guess was "${myGuess}" and that's too low. Please try again!`
    }
}

submitGuess.addEventListener('click', checkGuess)
