/**
 * @path /src/components/Layout/Header/Header.tsx
 *
 * @project headless-wp
 * @file Header.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Saturday, 19th December 2020
 * @modified Saturday, 19th December 2020 3:35:08 pm
 * @copyright © 2020 - 2020 MU
 */

import Link from 'next/link'
import { getSlug } from 'src/helpers'

import { useThemeContext } from '@/context/themeContext'

export interface LinkType {
  ID: number
  url: string
  title: string
}

interface Props {
  links: LinkType[]
}

export const Header = ({ links }: Props) => {
  const { toggleTheme } = useThemeContext()

  return (
    <div className='container flex items-center py-4 mx-auto text-xl'>
      <div className='flex justify-between w-full'>
        <div
          onClick={toggleTheme}
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
            {links.map(link => (
              <li key={link.ID} className='cursor-pointer hover:underline'>
                <Link href={`/${getSlug(link.url)}`}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
