/**
 * @path /src/components/Layout/Footer/Footer.tsx
 * 
 * @project headless-wp
 * @file Footer.tsx
 * 
 * @author Josh Mu <hello@joshmu.dev>
 * @created Saturday, 19th December 2020
 * @modified Saturday, 19th December 2020 12:55:47 pm
 * @copyright © 2020 - 2020 MU
 */

export const Footer = () => {
  return (
    <div className='flex items-center py-4 mx-auto border-t text-md'>
      <div className='flex items-center justify-center w-full'>
        <p>Mu - {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}
