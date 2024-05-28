import React from 'react';
import { useLocation } from 'react-router-dom';
import { Footer } from 'flowbite-react';
import Logo from '../elements/logo/Logo';

export default function FooterSection() {
  const { pathname } = useLocation();

  if (pathname !== '/login' && pathname !== '/register') {
    return (
      <Footer container className="border-t border-slate-200">
        <div className="container mx-auto">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex lg:p-10 lg:gap-10">
            <div className="max-w-96 mb-7">
              <Logo />
              <p className="mt-3 text-sm text-slate-500">
                Bersama Palestina adalah lembaga donasi nasional, yang
                berkhidmat dalam pemberdayaan masyarakat palestina melalui
                pendayagunaan donasi baik dari perseorangan, lembaga, perusahaan
                dan instansi lainnya. Bersama Palestina tidak menerima segala
                bentuk dana yang bersumber dari kejahatan. UU RI No. 8 Tahun
                2010 Tentang Pencegahan dan Pemberantasan Tindak Pidana
                Pencucian Uang
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 sm:gap-6">
              <div>
                <Footer.Title title="Alamat Pusat" className="text-primary" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    Jl. Menteng Raya No.62, RT.3/RW.9, Kb. Sirih, Kec. Menteng,
                    Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10340
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  title="Bersama Palestina"
                  className="text-primary"
                />
                <Footer.LinkGroup col>
                  <Footer.Link href="/" className="hover:text-primary">
                    Tentang
                  </Footer.Link>
                  <Footer.Link
                    href="/fundraisers"
                    className="hover:text-primary"
                  >
                    Donasi
                  </Footer.Link>
                  <Footer.Link href="news" className="hover:text-primary">
                    Berita
                  </Footer.Link>
                  <Footer.Link href="partners" className="hover:text-primary">
                    Mitra Kami
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="Bersama Palestina"
              year={2024}
              className="text-primary"
            />
          </div>
        </div>
      </Footer>
    );
  }
}
