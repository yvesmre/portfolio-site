import *  as React from 'react';

function GridLayout({ children }: any) {
    return <React.Fragment>
        <main className='pb-8 pt-8 flex flex-row  flex-wrap w-[80%] mx-[10%] [&>*:nth-child(3n)]:bg-stone-600 [&>*:nth-child(3n)]:bg-opacity-75
        [&>*:nth-child(3n-1)]:bg-stone-600 [&>*:nth-child(3n-1)]:bg-opacity-75 '  >
            {children}
        </main>
    </React.Fragment>
};

export default GridLayout