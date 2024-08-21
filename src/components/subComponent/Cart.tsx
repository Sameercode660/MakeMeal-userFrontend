import React from 'react'

function Cart() {
    return (
        <div className='w-full flex flex-col justify-center items-center md:flex-col lg:flex-row p-5 border-b border-gray-500 '>
            <div className='w-[300px] h-[150px]'>
                <img src="https://rp-media.faasos.io/catalog/images/WHTP0IVCRM.jpeg" className='w-full h-full object-cover rounded-lg' alt="" />
            </div>
            <div className='pl-5'>
                <div>
                    <span className='text-[1rem] sm:text-[1.1rem] md:text-[1.2] font-semibold'>Lazeez Bhuna Murgh Biryani (Dum Chicken Biryani - Serves 1)</span>
                </div>
                <div className='text-justify '>
                    <span className='text-[0.8rem]'>(Boneless, Served with 1 Gulab Jamun & Mint Raita) In this culinary jewel from Behrouz, Tender chicken pieces are marinated with exuberant bhuna spices that are freshly ground and dum pukht with aromatic rice.</span>
                </div>
                <div className='w-full flex justify-between items-center p-3'>
                    <div>
                        <span className='font-semibold text-[1.2rem]'>Rs.234</span>
                    </div>
                    <div className='border w-[100px] h-[30px] grid grid-cols-3'>
                        <button className='bg-yellow-200'>-</button>
                        <span className='text-center'>1</span>
                        <button className='bg-yellow-200'>+</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart
