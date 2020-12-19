/**
 * @path /src/components/Layout/Header/Header.tsx
 *
 * @project headless-wp
 * @file Header.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Saturday, 19th December 2020
 * @modified Saturday, 19th December 2020 12:29:27 pm
 * @copyright © 2020 - 2020 MU
 */

import Link from 'next/link'

import { useThemeContext } from '@/context/themeContext'

export const Header = () => {
  const { toggleTheme } = useThemeContext()

  const handleClick = () => {
    toggleTheme()
  }

  return (
    <div className='container flex items-center py-4 mx-auto text-xl'>
      <div className='flex justify-between w-full'>
        <div
          onClick={handleClick}
          className='text-3xl font-bold cursor-pointer'
        >
          Headless Wordpress
        </div>
        <nav>
          <ul className='flex space-x-4'>
            <li className='cursor-pointer hover:underline'>
              <Link href='/'>Home</Link>
            </li>
            <li className='cursor-pointer hover:underline'>
              <Link href='/post-index'>All Posts</Link>
            </li>
            <li className='cursor-pointer hover:underline'>
              <Link href='/'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
