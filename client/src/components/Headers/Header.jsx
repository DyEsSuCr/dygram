import { NavLink } from 'react-router-dom'

export function Header () {
  return (
    <div className='fixed bottom-0 w-full flex justify-center bg-white'>
      <nav className='flex gap-2'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/explore'>Explore</NavLink>
        <NavLink to='/create'>Create</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
      </nav>
    </div>
  )
}
