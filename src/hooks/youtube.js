import { useState, useEffect } from 'react'

export const useFetch = (url, options = {}) => {
  if (options.page) {
    url += `&pageToken=${options.page}`
  }
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
        setIsLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [url, options.page])

  return { data, error, isLoading }
}

