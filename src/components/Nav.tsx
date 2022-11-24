import { useThemeContext } from '../context/ThemeProvider'
import { listItemType } from '../types'
import SearchBar from './SearchBar'


const ListItem = ({ children, className }: listItemType) => {
    return <li className={`${className ? className : ""} text-[0.95rem] text-gray-500`}>
        {children}
    </li>
}

const Nav = () => {
    const { toggleNavOpened, navOpened } = useThemeContext()

    return (
        <nav className='w-screen flex justify-between items-center bg-white drop-shadow-md py-3 px-8'>
            <h1 className='text-primary font-bold'>TransMonitor</h1>
            <SearchBar placeholder='Search...' />
            <ul className={`md:flex hidden justify-between items-center w-11/12 max-w-md`}>
                <ListItem>
                    <a href='/'>Support</a>
                </ListItem>
                <ListItem>
                    <a href="/" title='Frequent Asked Question'>FAQ</a>
                </ListItem>
                <ListItem className='relative'>
                    <small className='absolute -top-3 -right-2 flex justify-center items-center rounded-full w-5 h-5 text-title_sm text-white bg-primary'>3</small>
                    <img src='/icons/bell-53.svg' alt='Bell icon' />
                </ListItem>
                <ListItem className='flex'>
                    <div className='flex flex-col mr-3 items-end'>
                        <small>Hello</small>
                        <p>Oluwaleke Ojo</p>
                    </div>
                    <img className='rounded-full w-10 h-10' src="/icons/profile_picture.png" alt="User Profile" />
                </ListItem>
            </ul>
            <figure
                className='w-11 h-11 block md:hidden'
                onClick={() => toggleNavOpened(!navOpened)}>
                <img className='w-full h-auto inline-block ' src="/icons/hamburger__icon.svg" alt="hamburger icon" />
            </figure>
        </nav>
    )
}

export default Nav