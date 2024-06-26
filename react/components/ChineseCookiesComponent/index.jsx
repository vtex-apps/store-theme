/*
ORIGINAL

import React, { useState, useEffect } from 'react'

// Components
import ChineseCookiesButton from './ChineseCookiesButton/ChineseCookiesButton'
import ChineseCookiesPhrase from './ChineseCookiesPhrase/ChineseCookiesPhrase'
import ChineseCookiesNumber from './ChineseCookiesNumber/ChineseCookiesNumber'
import { Spinner } from 'vtex.styleguide'

const ChineseCookiesComponent = () => {
  const [data, setData] = useState(null)
  const [randomPhrase, setRandomPhrase] = useState('')
  const [randomNumber, setRandomNumber] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/dataentities/CF/search?_fields=CookieFortune`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Content': 'application/json',
            'X-VTEX-API-AppKey': 'vtexappkey-valtech-VYSKNU',
            'Connection': 'Keep-alive',
            'X-VTEX-API-AppToken': 'DAZJCIBVZBKTWRSUFMTYAHCAYCJDBYZEOWWERNDDZBEGMBUEVXROTCDDBGKMEAHSIERQMVVVKRQSLITOBVWILJTHHPDXKPGQEPTUTOTIJIQBDOMLDOZJLLFDOLIHPCLG'
          }
        })

        if (!response.ok) {
          throw new Error('Response throws an error')
        }

        const jsonData = await response.json()
        setData(jsonData)
      } catch (err) {
        console.error('Error data', err)
      }
    }

    fetchData()
  }, [])

  console.log(data, 'data')

  const selectRandomPhrase = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
  }

  const generateRandomNumber = () => {
    const getRandomTwoDigits = () => String(Math.floor(Math.random() * 100)).padStart(2, '0')
    const getRandomFourDigits = () => String(Math.floor(Math.random() * 10000)).padStart(4, '0')

    return `${getRandomTwoDigits()}-${getRandomTwoDigits()}-${getRandomFourDigits()}`
  }

  const fortuneHandler = () => {
    if (data) {
      setLoading(true)
      setTimeout(() => {
        const newRandomPhrase = selectRandomPhrase(data)
        const newRandomNumber = generateRandomNumber()
        setRandomPhrase(newRandomPhrase)
        setRandomNumber(newRandomNumber)
        setLoading(false)
      }, 1000)
    }
  }

  return (
    <div>
      <ChineseCookiesButton fortuneHandler={fortuneHandler} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {
            data && (
              <>
                {randomPhrase !== '' && <ChineseCookiesPhrase phrase={randomPhrase.CookieFortune} />}
                {randomNumber !== '' && <ChineseCookiesNumber fortuneNumber={randomNumber} />}
              </>
            )
          }
        </>
      )}
    </div>
  )
}

export default ChineseCookiesComponent
 */

/*
CON EL MIDDLEWARE

import React, { useState, useEffect } from 'react'

// Components
import ChineseCookiesButton from './ChineseCookiesButton/ChineseCookiesButton'
import ChineseCookiesPhrase from './ChineseCookiesPhrase/ChineseCookiesPhrase'
import ChineseCookiesNumber from './ChineseCookiesNumber/ChineseCookiesNumber'
import { Spinner } from 'vtex.styleguide'

const ChineseCookiesComponent = () => {
  const [data, setData] = useState(null)
  const [randomPhrase, setRandomPhrase] = useState('')
  const [randomNumber, setRandomNumber] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/fortune')

        if (!response.ok) {
          throw new Error('Response throws an error')
        }

        const jsonData = await response.json()
        setData(jsonData)
      } catch (err) {
        console.error('Error data', err)
      }
    }

    fetchData()
  }, [])

  console.log(data, 'data')

  const selectRandomPhrase = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
  }

  const generateRandomNumber = () => {
    const getRandomTwoDigits = () => String(Math.floor(Math.random() * 100)).padStart(2, '0')
    const getRandomFourDigits = () => String(Math.floor(Math.random() * 10000)).padStart(4, '0')

    return `${getRandomTwoDigits()}-${getRandomTwoDigits()}-${getRandomFourDigits()}`
  }

  const fortuneHandler = () => {
    if (data) {
      setLoading(true)
      setTimeout(() => {
        const newRandomPhrase = selectRandomPhrase(data)
        const newRandomNumber = generateRandomNumber()
        setRandomPhrase(newRandomPhrase)
        setRandomNumber(newRandomNumber)
        setLoading(false)
      }, 1000)
    }
  }

  return (
    <div>
      <ChineseCookiesButton fortuneHandler={fortuneHandler} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {
            data && (
              <>
                {randomPhrase !== '' && <ChineseCookiesPhrase phrase={randomPhrase.CookieFortune} />}
                {randomNumber !== '' && <ChineseCookiesNumber fortuneNumber={randomNumber} />}
              </>
            )
          }
        </>
      )}
    </div>
  )
}

export default ChineseCookiesComponent
 */


import React from 'react'

// Components
import ChineseCookiesButton from './ChineseCookiesButton/ChineseCookiesButton'
import FortuneDisplay from './FortuneDisplay/FortuneDisplay'
import { Spinner } from 'vtex.styleguide'

// Hook
import useFortuneData from './hooks/useFortuneData'

// CSS
import styles from '../../../styles/css/chinese-cookies/chinese-cookies.css'

const ChineseCookiesComponent = () => {
  const {
    data,
    randomPhrase,
    randomNumber,
    loading,
    fortuneHandler
  } = useFortuneData()

  return (
    <div className={styles.ChineseCookiesContainer}>
      <ChineseCookiesButton fortuneHandler={fortuneHandler} />
      {loading ? (
        <Spinner />
      ) : (
        data && randomPhrase ? (
          <FortuneDisplay phrase={randomPhrase ? randomPhrase : 'Cookie defecto'} number={randomNumber} />
        ) : null
      )}
    </div>
  )
}

export default ChineseCookiesComponent
