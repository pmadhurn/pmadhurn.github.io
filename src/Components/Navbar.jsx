import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        
        <ul className='navbarul'>
            <NavLink to="Aboutme" className='navtext'>About Me</NavLink>
            <NavLink to="Projects" className='navtext'>Projects</NavLink>
            <NavLink to="Contact" className='navtext'>Contact Me</NavLink>
        </ul>
    </div>
  )
}
export default Navbar;
