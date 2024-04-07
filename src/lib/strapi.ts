interface Props {
  endpoint: string
  query?: string
  wrappedByKey?: string
  wrappedByList?: boolean
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
}: Props): Promise<T> {
  const url = new URL(
    `${import.meta.env.STRAPI_URL}/api/${endpoint}${query ? `?${query}` : ''}`
  )

  const headers = new Headers({
    Authorization: `Bearer ${import.meta.env.STRAPI_API_TOKEN}`,
  })

  const res = await fetch(url.toString(), {
    headers,
  })
  let data = await res.json()

  return data.data as T
}
