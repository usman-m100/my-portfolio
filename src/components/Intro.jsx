import React from 'react';

function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Usman</h1>
            <p className="text-base md:text-xl mb-3 font-medium ">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I'm a software engineer & web developer with a strong will to learn, research new technologies, and design software architecture. 
                                                           I like creating practical business solutions and making development processes as efficient as possible.
                                                           <br />
                                                           All coding projects involves a process of creating and developing a solution from the initial planning and design stages to ultimately using code to address real-world issues. 
                                                           When I'm not using my computer, I enjoy engaging in activities such as swimming, playing chess, and football.
                                                           You can also check out my{' '} <a
                                                           href="https://github.com/usman-m100"
                                                           target="_blank"
                                                           className="text-cyan-600 hover:underline underline-offset-2 decoration-2
                                                           decoration-red-600" rel="norefferrer noopener">
                                                            Github
                                                            </a>{' '}page where i share all of my projects.
                                                            
                                                            </p>
        </div>
    )
}

export default Intro;