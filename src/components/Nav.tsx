import { useThemeContext } from '../context/ThemeProvider'
import { listItemType } from '../types'
import NotificationBell from './NotificationBell'
import ProfileImg from './ProfileImg'
import SearchBar from './SearchBar'


const ListItem = ({ children, className }: listItemType) => {
    return <li className={`${className ? className : ""} cursor-pointer scale-effect text-[0.95rem] text-gray-500`}>
        {children}
    </li>
}

const Nav = () => {
    const { toggleNavOpened, navOpened, profileOpened, setProfileOpened } = useThemeContext()

    return (
        <nav className='w-screen flex justify-between items-center bg-white drop-shadow-md py-5 px-8'>
            <h1 className='text-primary font-bold'>TransMonitor</h1>
            <SearchBar placeholder='Search...' />

            <ul className={`origin-top-left flex absolute md:static top-20 left-0 w-screen h-screen md:h-auto bg-white md:bg-transparent 
            ${profileOpened ? "animate-moveIn" : "animate-moveOut"} md:animate-none md:flex md:flex-row flex-col justify-start md:justify-between items-center py-8 md:py-0 space-y-8 md:space-y-0 md:w-96`}>
                <ListItem>
                    <a href='/'>Support</a>
                </ListItem>
                <ListItem>
                    <a href="/" title='Frequent Asked Question'>FAQ</a>
                </ListItem>
                <ListItem className='relative hidden md:block'>
                    <NotificationBell />
                </ListItem>
                <ListItem className='hidden md:flex'>
                    <div className='flex order-1 md:order-none flex-col mr-3 items-start md:items-end'>
                        <small>Hello</small>
                        <p>Oluwaleke Ojo</p>
                    </div>
                    <ProfileImg />
                </ListItem>
            </ul>

            <div className='flex space-x-7 items-center md:hidden'>
                <figure className='' onClick={() => {
                    setProfileOpened(!profileOpened)
                    toggleNavOpened(false)
                }}>
                    <img className='rounded-full w-10 h-10' src="/icons/profile_picture.png" alt="User Profile" />
                </figure>

                <div className='relative'>
                    <NotificationBell />
                </div>


                <figure
                    className='w-9 h-9'
                    onClick={() => {
                        toggleNavOpened(!navOpened)
                        setProfileOpened(false)
                    }}>
                    <img className='w-full h-auto inline-block ' src="/icons/hamburger__icon.svg" alt="hamburger icon" />
                </figure>
            </div>

        </nav>
    )
}

export default Nav