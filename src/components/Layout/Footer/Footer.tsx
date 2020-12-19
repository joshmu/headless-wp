/**
 * @path /src/components/Layout/Footer/Footer.tsx
 *
 * @project headless-wp
 * @file Footer.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Saturday, 19th December 2020
 * @modified Saturday, 19th December 2020 3:04:45 pm
 * @copyright © 2020 - 2020 MU
 */

import Link from 'next/link'

import { LinkType } from '../Header/Header'

interface Props {
  links: LinkType[]
}

export const Footer = ({ links }: Props) => {
  return (
    <div className='absolute bottom-0 flex items-center w-full py-4 mx-auto border-t text-md'>
      <div className='flex flex-col items-center justify-center w-full'>
        <p>Mu - {new Date().getFullYear()}</p>
        <nav>
          <ul className='flex space-x-4'>
            {links.map(link => {
              // do stuff...
              return (
                <li key={link.ID} className='cursor-pointer hover:underline'>
                  <Link href={link.url}>{link.title}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
