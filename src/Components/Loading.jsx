import React from 'react'

export const Loading = () => {

    return (
        
        <div className='flex min-h screen items-center justify-center '>
            <div className='flex gap-5'>
                <div className='relative w-72 space-y-3 overflow-hidden rounded-md bg-neutral-800 p-3 shadow
      before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent 
      before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]
      '>
                    <div className='h-36 w-full rounded-g bg-neutral-600'></div>
                    <div className='space-y-3'>
                        <div className='h-5 w-8/12 rounded-full bg-neutral-600'></div>
                        <div className='space-y-1'>
                            <div className='h-4 w-full rounded-full bg-neutral-600 shadow'></div>
                            <div className='h-4 w-full rounded-full bg-neutral-600 shadow'></div>
                            <div className='h-4 w-full rounded-full bg-neutral-600 shadow'></div>
                            <div className='h-4 w-7/12 rounded-full bg-neutral-600 shadow'></div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='h-5 w-16 rounded-full bg-neutral-600'></div>
                            <div className='h-5 w-12 rounded-full bg-neutral-600'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
