import './header.css';
import header_icon from '../../assets/icon/header_icon.svg';

const Header = () => {
    return (
        <div className="header__section">
            <div className="header">
                <div className="container h-full flex items-center">
                    <div>
                        <p className='font-bold text-5xl w-[522px] text-white leading-[65px]'>
                            Dunyoning istalgan nuqtasida istalgan qurilmada kitoblarni o`qing va tinglang
                        </p>
                    </div>
                    <div>
                        <img
                            src={header_icon}
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
