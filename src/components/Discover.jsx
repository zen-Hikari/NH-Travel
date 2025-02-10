import './Global.css'

function Discover() {

    return(
        <section id='discover' className="py-20">
            
            <h1 className='title text-center text-4xl font-semibold pb-10'>Discover The Most <span className='flex text-center justify-center'>Attractive Places</span></h1>
             
           <div className=" discover flex justify-center gap-8 w-full items-center">
           <div className="discover-1 flex flex-col px-5 py-5">
               <h1 className='mt-auto text-2xl font-semibold'>Pakis Beach</h1>
               <p className='text-1xl'>karawang, Indonesia</p>
            </div>

            <div className="discover-2 flex flex-col px-5 py-5">
               <h1 className='mt-auto text-2xl font-semibold'>Suluban Beach</h1>
               <p className='text-1xl'>Bali, Indonesia</p>
            </div>

            <div className="discover-3 flex flex-col px-5 py-5">
               <h1 className='mt-auto text-2xl font-semibold'>Karimun Java</h1>
               <p className='text-1xl'>Jawa Tengah, Indonesia</p>
            </div>

           </div>

        </section>
    )
}

export default Discover