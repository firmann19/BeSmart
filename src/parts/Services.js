import React from 'react'
import Service from '../elements/Service'
import Icon1 from '../assets/images/seo-and-web 1.png'
import Icon2 from '../assets/images/mobile-development 1.png'
import Icon3 from '../assets/images/ui 1.png'

export default function Services() {
    return (
        <div className='services container'>
            <h1>Services</h1>
            <div className="our-services">
                <Service
                    icon={Icon1}
                    title='Web Development'
                    description='Belajar membangun website sampai mahir sesuai 
                kebutuhan industri.'>
                </Service>
                <Service
                    icon={Icon2}
                    title='Mobile Development'
                    description='Belajar membangun aplikasi android  untuk menjadi 
                    developer  android
                     standar global.'>
                </Service>
                <Service
                    icon={Icon3}
                    title='UI/UX Designer'
                    description='Belajar  membuat design prototype untuk menjadi
                    seorang UI/UX Design 
                   profesional.'>
                </Service>
            </div>
        </div>
    )
}
