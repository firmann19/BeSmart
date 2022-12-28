import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-wrapper'>
                <div className='footer-container'>
                    <div className='footer-main'>
                        <div className='footer-content'>
                            <h2>Layanan Produk</h2>
                            <div className="li-footer">
                                <h5>UI/UX Design</h5>
                                <h5>Website Development</h5>
                                <h5>Android Development</h5>
                            </div>
                        </div>
                        <div className='footer-content'>
                            <h2>Tentang Kami</h2>
                            <div className="li-footer">
                                <h5>Visi & Misi Perusahaan</h5>
                                <h5>Komunitas</h5>
                                <h5>Strukstur Perusahaan</h5>
                            </div>
                        </div>
                        <div className='footer-content'>
                            <h2>Bantuan</h2>
                            <div className="li-footer">
                                <h5>FAQ</h5>
                                <h5>Syarat & Ketentuan</h5>
                            </div>
                        </div>
                        <div className='footer-content'>
                            <h2>Social Media</h2>
                            <div className="li-footer">
                                <h5>LinkedIn</h5>
                                <h5>Instagram</h5>
                                <h5>Youtube</h5>
                                <h5>Email</h5>
                                <h5>Blog</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom container'>
                    <p>BeSmart Comunity</p>
                </div>
            </div>
        )
    }
}