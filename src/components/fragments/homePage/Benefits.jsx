import React from 'react';
import { PiHandshake } from 'react-icons/pi';
import { LuHeartHandshake } from 'react-icons/lu';
import { LiaHandHoldingUsdSolid } from 'react-icons/lia';

export default function Benefits() {
  return (
    <section className="w-full border border-y-primary mt-7">
      <div className="container mx-auto p-5">
        <h1 className="text-2xl uppercase text-primary font-bold lg:text-4xl">
          Mengapa Berbagi
          <br /> Bersama Kami?
        </h1>
        <div className="flex flex-col items-center lg:flex-row lg:px-20">
          <div className="flex items-center gap-3">
            <PiHandshake className="text-primary text-9xl" />
            <div>
              <p className="text-primary text-lg font-bold lg:mb-3">
                Responsif
              </p>
              <p className="text-sm text-primary">
                Merespon kebutuhan masyarakat palestina dengan cepat dan tepat
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LuHeartHandshake className="text-primary text-9xl" />
            <div>
              <p className="text-primary text-lg font-bold lg:mb-3">
                Sustainable Program
              </p>
              <p className="text-sm text-primary">
                Program jangka panjang untuk kemandirian masyarakat palestina
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LiaHandHoldingUsdSolid className="text-primary text-9xl" />
            <div>
              <p className="text-primary text-lg font-bold lg:mb-3">
                Credibility
              </p>
              <p className="text-sm text-primary">
                Bertanggung jawab penuh menjalankan amanah program donasi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
