import React from 'react';
import instagram from '../imgs/instagram.png';
import LinkedIn from '../imgs/LinkedIn.png';
import github from '../imgs/github.png';
import SocialMedia from './SocialMedia';
import Form from './Form';

function ContactMe(){

    const socialMedias = [
        {
            image: instagram,
            description: 'Instagram',
            link: 'https://www.instagram.com/hritishmehta/'
        },
        {
            image: LinkedIn,
            description: 'LinkedIn',
            link: 'https://www.linkedin.com/in/hritish-mehta-33575a222'
        },
        {
            image: github,
            description: 'GitHub',
            link: 'https://github.com/hritishmehta'
        }

    ]
    return(
        <div className="pt-20 min-w-screen min-h-screen ">
            <div className="flex flex-col">
                <h1 className="text-center text-3xl font-bold font-roboto">Contact Me</h1>
                <form>
                    <div className="form-outline mb-4">
                        <label className="form-label"></label>

                    </div>
                </form>
                <Form/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 pb-4">
                {
                    socialMedias.map((socialMedia, index) => (
                        <SocialMedia
                          key={index}
                          image={socialMedia.image}
                          description={socialMedia.description}
                          link={socialMedia.link}
                        />
                ))}

            </div>
            <div></div>
            
        </div>
    ) 
}

export default ContactMe;