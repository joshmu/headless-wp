/**
 * @path /src/helpers.ts
 *
 * @project headless-wp
 * @file helpers.ts
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Saturday, 19th December 2020
 * @modified Saturday, 19th December 2020 12:57:51 pm
 * @copyright © 2020 - 2020 MU
 */

export const fetcher = async (url: string): Promise<any> =>
  fetch(url).then(res => res.json())
