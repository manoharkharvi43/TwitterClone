import * as icon from 'react-icons/all'


const DATA = [
    {
    icon:<icon.SiTwitter color='white'  size={30} />,
    link:'/twitter'
    },

    {
        title:'Home',
        icon:<icon.RiHome7Fill size={24} color='white'/>,
        link:'/home'
    },
    {
        title:'Explore',
        icon: <icon.FiHash size={24} color='white'/>,
        link:'/explore'
    },
    {
        title:'Notifications',
        icon: <icon.VscBell size={24} color='white'/>,
        link:'/notifications'
    },
    {
        title:'Messages',
        icon: <icon.FiMail size={24} color='white'/>,
        link:'/messages'
    },
    {
        title:'Bookmarks',
        icon: <icon.FaRegBookmark size={24} color='white'/>,
        link:'/bookmarks'
    },
    {
        title:'Lists',
        icon: <icon.CgNotes size={24} color='white'/>,
        link:'/lists'
    },
    {
        title:'Profile',
        icon: <icon.HiOutlineUser size={24} color='white'/>,
        link:'/profile'
    },
    {
        title:'More',
        icon: <icon.CgMoreO size={24} color='white'/>,
        link:'/more'
    },

  
]

export default DATA