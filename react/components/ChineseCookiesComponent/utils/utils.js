export const selectRandomPhrase = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

export const generateRandomNumber = () => {
  const getRandomTwoDigits = () => String(Math.floor(Math.random() * 100)).padStart(2, '0')
  const getRandomFourDigits = () => String(Math.floor(Math.random() * 10000)).padStart(4, '0')

  return `${getRandomTwoDigits()}-${getRandomTwoDigits()}-${getRandomFourDigits()}`
}
