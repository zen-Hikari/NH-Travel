import './Global.css'
function Place() {

    return(
        <section id='place' className='py-40'>
            <h1 className='text-4xl font-semibold text-center pb-10'>Explore Beautifull Place</h1>
            <div className="place-cont flex justify-center items-center gap-8 w-full">
                
                <div className="place-1 flex justify-center flex-col py-5 px-5 rounded-[10px] ">
                   <div className="detail-place flex flex-col mt-auto bg-white text-center py-3 rounded-[10px]">
                   <h1 className=' text-[20px] font-semibold'>Drini Beach</h1>
                   <p className='text-1xl text-gray-600 font-semibold'>Yogyakarta, Indonesia</p>
                   </div>
                </div>

                <div className="place-2 flex flex-col py-5 px-5 rounded-[10px]">
                    <div className="detail-place mt-auto bg-white text-center py-3 rounded-[10px]">
                    <h1 className=' text-[20px] font-semibold'>Baron Beach</h1>
                    <p className='text-1xl text-gray-600 font-semibold'>Yogyakarta, Indonesia</p>
                    </div>
                </div>

                <div className="place-3  flex flex-col py-5 px-5 rounded-[10px]">
                    <div className="detail-place  mt-auto bg-white text-center py-3 rounded-[10px]">
                    <h1 className=' text-[20px] font-semibold'>Trisik Beach</h1>
                    <p className='text-1xl text-gray-600 font-semibold'>Yogyakarta, Indonesia</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Place