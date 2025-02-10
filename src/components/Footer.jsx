import Logo from './assets/logo.svg';

function Footer() {
    return (
        <footer className="bg-green-800 pt-20 pb-10 text-white">
            <div className="container mx-auto px-8 flex flex-col items-center text-center md:text-left">

                {/* Bagian atas: Logo & Links */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src={Logo} alt="Logo" width="150px" />
                    </div>

                    {/* Pemisah (dashed line) */}
                    <div className="hidden md:block flex-1 border-t-2 border-dashed border-white mx-8"></div>

                    {/* Links */}
                    <nav className="flex flex-col md:flex-row gap-6 text-lg font-semibold">
                        <a href="#" className="hover:text-gray-300">Home</a>
                        <a href="#about" className="hover:text-gray-300">About</a>
                        <a href="#discover" className="hover:text-gray-300">Discover</a>
                        <a href="#place" className="hover:text-gray-300">Place</a>
                    </nav>
                </div>

                {/* Garis Horizontal */}
                <hr className="border-t border-white my-10 opacity-50 w-full" />

                {/* Copyright */}
                <p className="text-sm font-light">
                    &copy; 2025 Designed by <a href='https://azuracoder.vercel.app/' className="font-medium underline">AzuraCoder</a> | Developed by <span className="font-medium">Novalhasmi</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
