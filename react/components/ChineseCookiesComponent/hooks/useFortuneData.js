import { useState, useEffect, useCallback } from 'react'
import { selectRandomPhrase, generateRandomNumber } from '../utils/utils'

const useFortuneData = () => {
  const [data, setData] = useState(null)
  const [randomPhrase, setRandomPhrase] = useState('')
  const [randomNumber, setRandomNumber] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dataentities/CF/search?_fields=CookieFortune')

        if (!response.ok) {
          throw new Error('Response throws an error')
        }

        const jsonData = await response.json()

        const filteredData = jsonData.filter(item => item.CookieFortune !== null && item.CookieFortune !== '')

        setData(filteredData)
      } catch (err) {
        console.error('Error fetching data', err)
      }
    }

    fetchData()
  }, [])

  const fortuneHandler = useCallback(() => {
    if (data) {
      console.log(data, 'data')
      setLoading(true)
      setTimeout(() => {
        const newRandomPhrase = selectRandomPhrase(data)
        const newRandomNumber = generateRandomNumber()
        setRandomPhrase(newRandomPhrase)
        setRandomNumber(newRandomNumber)
        setLoading(false)
      }, 1000)
    }
  }, [data])

  return {
    data,
    randomPhrase,
    randomNumber,
    loading,
    fortuneHandler
  }
}

export default useFortuneData
