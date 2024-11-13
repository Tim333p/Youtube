import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { LuHistory } from "react-icons/lu";
import { LuListVideo } from "react-icons/lu";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaFire } from "react-icons/fa6";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { MdOutlineMovie } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { BsTrophy } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineFeedback } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


const sideBar = [
    {
        names: [
            { image: MdHome , name: 'Home', path: '/' },
            { image: SiYoutubeshorts, name: 'Shorts', path:'shorts'  },
            { image: MdOutlineSubscriptions, name: 'Subscriptions', path:'subscriptions' },
        ]
    },
    {
        names1: [
            {image: GrChannel,  name: 'Your Channel', path: 'yourchannel'},
            {image: LuHistory, name: 'History', path: 'history'},
            {image: LuListVideo, name: 'Lists', path: 'lists'},
            {image: RiVideoLine, name: 'Your videos', path: 'yourvideos'},
            {image: MdOutlineWatchLater, name: 'Watch later', path: 'watchlater'},
            {image: AiOutlineLike, name: 'Favorite videos', path: 'favoritevideos'},
        ]
    },
    {
        channels: [
            {image: 'https://i.pinimg.com/474x/7c/d9/eb/7cd9eb7049172b8b620af7baaf5d1afa.jpg', name: 'Albedo', path: '/'},
            {image: 'https://w0.peakpx.com/wallpaper/155/667/HD-wallpaper-overlord-ainz-anime.jpg', name: 'Shalltear', path: '/'},
            {image: 'https://img.wattpad.com/cover/178137938-288-k677036.jpg', name: 'Demiurge', path: '/'},
            {image: 'https://i.pinimg.com/564x/c4/84/0d/c4840da53ebc00cc638eb0a9a147bc09.jpg', name: 'Cocytus', path: '/'},
            {image: 'https://pbs.twimg.com/profile_images/1472370085931229191/7eUVOmp6_400x400.jpg', name: 'Aura', path: '/'},
            {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmT75dDEt-JyuU4-pZ_50R3T0Oq2YnPSVSw&s', name: 'Mare', path: '/'},
            {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7q6aThAc-xvQxj1qwiPLiRneLcwad96uCA&s', name: 'Gargantua', path: '/'}
        ],
    },
    {
        names2: [
            {image: FaFire, name: 'Popular', path: '/'},
            {image: IoMusicalNotesOutline, name: 'Music', path: '/'},
            {image: MdOutlineMovie, name: 'Movies', path: '/'},
            {image: SiYoutubegaming, name: 'Games', path: '/'},
            {image: BsTrophy, name: 'Sport', path: '/'}
        ]
    },
    {
        names3: [
            {image: FaYoutube, name: 'YouTube Premium', path: '/'},
            {image: SiYoutubestudio, name: 'YouTube Studio', path: '/'},
            {image: SiYoutubemusic, name: 'YouTube Music', path: '/'},
            {image: SiYoutubekids, name: 'YouTube Kids', path: '/'}
        ]
    },
    {
        names4: [
            {image: IoSettingsOutline, name: 'Settings', path: '/'},
            {image: IoFlagOutline, name: 'Reports history', path: '/'},
            {image: FaRegCircleQuestion, name: 'Helper', path: '/'},
            {image: MdOutlineFeedback, name: 'Feedback', path: '/'},
        ]
    },
    {
        names5: [
            { image: MdHome , name: 'Home', path: '/' },
            { image: SiYoutubeshorts, name: 'Shorts', path:'shorts'  },
            { image: MdOutlineSubscriptions, name: 'Subscriptions', path:'subscriptions' },
            { image: CgProfile, name: 'Mine', path: '/'}
        ]
    },
    {
        channels1: [
            {image: 'https://cdn.rafled.com/anime-icons/images/oiuVS0ZCftcniJ7UKSiVIa6XwNnjbwYW.jpg', name: 'Ulbert', path: '/'},
            {image: 'https://cdn.rafled.com/anime-icons/images/5ErywIFQ9CLEqEL6ARgMUNk7Ohh3x7Hi.jpg', name: 'Bukubukuchagama', path: '/'},
            {image: 'https://i.namu.wiki/i/q67SfYRrR0SZ9gtvEH8wE-AWTbgxsngHnV3d0fjni39lxIaimtVKd6MBJiis4aGZdsxUKJu9tcJWbUml9gznNw.webp', name: 'Peroroncino', path: '/'},
            {image: 'https://i.namu.wiki/i/ThrUSJRICw8Whw5gHqnTHhJghD--t88EdzspESShrFs6Ay0EuwZBxUs1exjaP52ReS9dcOrmc7xS2sN9urkXxA.webp', name: 'Punitto', path: '/'},
            {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMY2yH5Y-GnHPQHt5AcWTkzLjYk_Gmz_ZpEw&s', name: 'Yamaiko', path: '/'},
            {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZDwupeSUmi8cY5WC2UqhW7F4Pwjssv3aQw&s', name: 'Herohero', path: '/'},
        ]
    }
]

export default sideBar;