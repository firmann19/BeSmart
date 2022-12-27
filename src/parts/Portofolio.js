import React from 'react'
import PortofolioItem from '../elements/PortofolioItem'

export default function Portofolio() {
    return (
        <main className='container'>
            <section className='portofolio '>
                <h1>Portofolio</h1>
                <p>Cari portofolio terbaik menurut anda untuk bahan referensi dalam menciptakan sebuah inovasi yang <br></br>bermanfaat</p>
                <div className="porto-project">
                    <h3 className='active'>All Project</h3>
                    <h3>Web Development</h3>
                    <h3>Mobile Development</h3>
                    <h3>UI/UX Designer</h3>
                </div>
                <div className="portofolio-item">
                    <PortofolioItem />
                </div>

            </section>
        </main>
    )
}
