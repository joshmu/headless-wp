/**
 * @path /src/helpers.ts
 *
 * @project headless-wp
 * @file helpers.ts
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Saturday, 19th December 2020
 * @modified Saturday, 19th December 2020 3:31:24 pm
 * @copyright © 2020 - 2020 MU
 */

export const fetcher = async (url: string): Promise<any> =>
  fetch(url).then(res => res.json())

export const getSlug = (url: string): string => {
  return url
    .split('/')
    .filter(x => x.length)
    .slice(-1)[0]
}
