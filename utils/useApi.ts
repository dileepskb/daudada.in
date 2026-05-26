"use client"

import { useState } from "react"
import axios, {
  AxiosRequestConfig,
  Method,
} from "axios"

type ApiOptions = {
  url: string
  method?: Method
  data?: any
  config?: AxiosRequestConfig
}

export function useApi<T = any>() {

  const [pending, setPending] =
    useState(false)

  const [data, setData] =
    useState<T | null>(null)

  const [error, setError] =
    useState<string | null>(null)

  const request = async ({
    url,
    method = "GET",
    data,
    config,
  }: ApiOptions) => {

    try {

      setPending(true)

      setError(null)

      const res = await axios({
        url,
        method,
        data,
        ...config,
      })

      setData(res.data)

      return res.data

    } catch (err: any) {

      const message =
        err?.response?.data?.error ||
        err.message ||
        "Something went wrong"

      setError(message)

    } finally {

      setPending(false)
    }
  }

  return {
    pending,
    data,
    error,
    request,
  }
}