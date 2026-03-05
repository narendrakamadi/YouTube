import { useDispatch } from "react-redux";
import hamburger from "../../assets/icons/hamburger.svg";
import youtube from "../../assets/icons/youtube.svg";
import { toggleMenu } from "../../utils/appSlice";

const Logo = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleMenu());
    };
    return (
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <div className="p-1.5 sm:px-4 sm:py-2">
                <img
                    src={hamburger}
                    alt="Menu"
                    onClick={handleClick}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                />
            </div>
            <div>
                <img
                    src={youtube}
                    alt="Logo"
                    className="w-20 sm:w-25 h-5 sm:h-6"
                />
            </div>
        </div>
    );
};

export default Logo;
