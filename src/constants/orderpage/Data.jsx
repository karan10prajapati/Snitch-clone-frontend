
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { MdOutlineCreditScore } from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import { CiHeart } from "react-icons/ci";
import { FaSearchDollar } from "react-icons/fa";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";

export const list = [
    {
        id:1,
        icon:<CiUser />,
        label:"MY Profile",
        border:false
    },
    {
        id:2,
        icon:<CiLocationOn />,
        label:"MY Address",
        border:true
    },
    {
        id:3,
        icon:<IoBag />,
        label:" MY Orders ",
        border:false,
        index:true
    },
    {
        id:4,
        icon:<MdOutlineCreditScore />,
        label:"MY Credits",
        border:false
    },
    {
        id:5,
        icon:<SiSololearn />,
        label:"How To Earn",
        border:false
    },
,
    {
        id:6,
        icon:<SiSololearn />,
        label:" How To Spend",
        border:true
    }
    ,
    {
        id:7,
        icon:<CiHeart />,
        label:"MY Whishlist",
        border:false
    },
    {
        id:8,
        icon:<FaSearchDollar />,
        label:"Recently Viewed ",
        border:false
    }
    ,
    {
        id:9,
        icon:<LiaUserFriendsSolid />,
        label:"  Refer Friend",
        border:true
    }
    ,
    {
        id:10,
        icon:<RiLockPasswordFill />,
        label:" Password",
        border:false,
        index:true
    }
    ,
    {
        id:11,
        icon:<MdOutlineLogout />,
        label:"Log out ",
        border:false
    }
]