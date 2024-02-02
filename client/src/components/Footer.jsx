import React from 'react'

const Footer = () => {
    return (
        <section className='bg-white py-2 border-t border-t-[#e6ebf4]'>
            <p className='text-center text-[#050d14] text-sm font-extrabold underline'>
                Built by Kaushal Soni
            </p>
            <div className="text-center text-[#060e16] font-extrabold">
                <a target="_blank" rel="noreferrer" href='https://github.com/ksoni15' className="text-sm hover:text-[#ff1010ea]">Source code</a>
            </div>
        </section>
    )
}

export default Footer