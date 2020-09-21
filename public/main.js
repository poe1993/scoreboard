function main() {
  let teamOneScore = 0
  let teamTwoScore = 0

  const teamNameElementOne = document.querySelector('.team1 h2')
  console.log(teamNameElementOne)
  const teamNameElementTwo = document.querySelector('.team2 h2')
  console.log(teamNameElementTwo)

  function handleChangeTeamOneName(event) {
    const elementThatChanged = event.target
    const inputFieldValue = elementThatChanged.value
    teamNameElementOne.textContent = inputFieldValue
  }
  const teamOneInput = document.querySelector('.team1 input')
  teamOneInput.addEventListener('input', handleChangeTeamOneName)

  function handleChangeTeamTwoName(event) {
    const elementThatChangedTwo = event.target
    const inputFieldValueTwo = elementThatChangedTwo.value
    teamNameElementTwo.textContent = inputFieldValueTwo
  }

  const teamTwoInput = document.querySelector('.team2 input')
  teamTwoInput.addEventListener('input', handleChangeTeamTwoName)

  function incrementTheScoreForTeamOne(event) {
    event.preventDefault()
    console.log('I clicked the button')
    teamOneScore = teamOneScore + 1
    console.log(teamOneScore)
    const teamOneScoreElement = document.querySelector('.team1 h3')
    console.log(teamOneScoreElement)
    teamOneScoreElement.textContent = teamOneScore

    if (teamOneScore === 21) {
      window.alert(`Team 1 is the winner!`)
      teamOneScoreElement.textContent = 0
    }
  }

  function incrementTheScoreForTeamTwo(event) {
    event.preventDefault()
    console.log('I clicked the button')
    teamTwoScore = teamTwoScore + 1
    console.log(teamTwoScore)
    const teamTwoScoreElement = document.querySelector('.team2 h3')
    console.log(teamTwoScoreElement)
    teamTwoScoreElement.textContent = teamTwoScore

    if (teamTwoScore === 21) {
      window.alert(`Team 2 is the winner!`)
      teamTwoScoreElement.textContent = 0
    }
  }

  const teamOneAddButton = document.querySelector('.team1 .add')
  console.log(teamOneAddButton)
  const teamTwoAddButton = document.querySelector('.team2 .add')
  console.log(teamTwoAddButton)

  teamOneAddButton.addEventListener('click', incrementTheScoreForTeamOne)
  teamTwoAddButton.addEventListener('click', incrementTheScoreForTeamTwo)

  function decreaseScoreForTeamOne(event) {
    event.preventDefault()
    console.log('I clicked the button')
    teamOneScore = teamOneScore - 1
    console.log(teamOneScore)
    const teamOneScoreElement = document.querySelector('.team1 h3')
    console.log(teamOneScoreElement)
    teamOneScoreElement.textContent = teamOneScore

    if (teamOneScore < 0) {
      window.alert('Cannot go below 0')
      teamOneScoreElement.textContent = 0
    }
  }

  function decreaseScoreForTeamTwo(event) {
    event.preventDefault()
    console.log('I clicked the button')
    teamTwoScore = teamTwoScore - 1
    console.log(teamTwoScore)
    const teamTwoScoreElement = document.querySelector('.team2 h3')
    console.log(teamTwoScoreElement)
    teamTwoScoreElement.textContent = teamTwoScore

    if (teamTwoScore < 0) {
      window.alert('Cannot go below 0')
      teamTwoScoreElement.textContent = 0
    }
  }

  const teamOneAddNextButton = document.querySelector('.team1 .subtract')
  console.log(teamOneAddNextButton)
  const teamTwoAddNextButton = document.querySelector('.team2 .subtract')
  console.log(teamTwoAddNextButton)

  teamOneAddNextButton.addEventListener('click', decreaseScoreForTeamOne)
  teamTwoAddNextButton.addEventListener('click', decreaseScoreForTeamTwo)

  function resetBothScores() {
    const teamOneScoreElement = document.querySelector('.team1 h3')
    const teamTwoScoreElement = document.querySelector('.team2 h3')
    teamOneScoreElement.textContent = 0
    teamTwoScoreElement.textContent = 0
    console.log(teamOneScoreElement.textContent)
    console.log(teamTwoScoreElement.textContent)

    window.alert('Scores have been reset.')
  }
  const resetButton = document.querySelector('.team3 .subtract')
  resetButton.addEventListener('click', resetBothScores)
}
document.addEventListener('DOMContentLoaded', main)
