import './Global.css';
import Twitter from './assets/ic-twitter.png';
import Facebook from './assets/ic-facebook.png';
import Insta from './assets/ic-instagram.png';

function HeroSec() {
    return (
        <div className="hero-section text-center">
        <h2 className='hero-title'>Discover your place</h2>
        <h1 className='hero-title2 pb-7'>Explore The Best <span className='font-bold'>Beautiful Beaches</span></h1>
        <button className='font-semibold py-2 px-6 rounded-[10px] bg-green-900 cursor-pointer'>
          Explore
        </button>
        <div className="flex justify-center pt-7 gap-4 icon"> {/* Hapus w-2xl */}
          <img src={Twitter} alt="twitter" className="social-icon" />
          <img src={Facebook} alt="facebook" className="social-icon" />
          <img src={Insta} alt="insta" className="social-icon" />
        </div>
      </div>
    );
}

export default HeroSec;
