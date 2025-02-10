import Img from './assets/about-img.png';

function About() {
    return (
        <section id='about' className='py-20 flex justify-center items-center'>
            <div className="container flex items-center gap-10 justify-center  max-w-4xl w-full">
                {/* Gambar */}
                <img src={Img} alt="About" className="" />

                {/* Detail */}
                <div className="detail">
                    <h1 className="text-3xl font-semibold pb-5">More information <span className='span flex'>about the best beaches</span></h1>
                    <p className='text-md text-gray-600 pb-5'>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum asperiores illo laboriosam deserunt dolore nisi soluta impedit necessitatibus nulla dicta!
                    </p>
                    <button className='btn md:w-auto w-full cursor-pointer py-3 px-6 rounded-[10px] bg-green-800 text-white font-semibold text-1xl'>
                        Explore Now
                    </button>
                </div>
            </div>
        </section>
    );
}

export default About;
