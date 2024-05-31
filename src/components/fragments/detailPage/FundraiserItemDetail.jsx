import React from 'react';
import { Progress } from 'flowbite-react';
import useIsDesktop from '../../../hooks/useIsDesktop';

export default function FundraiserItemDetail() {
  const isDesktop = useIsDesktop(1024);
  return (
    <>
      <h1 className="text-2xl font-bold text-slate-500 mb-2 lg:text-3xl">
        Satukan Support untuk Palestina
      </h1>
      {isDesktop && (
        <p className="text-lg ">
          Innalillahi! Hanya kepulan asap dan debu membubung tinggi menyelimuti
          langit setelah serangan udara Zionis Israel!
        </p>
      )}

      <div className="lg:mt-3">
        <div className="flex flex-col pt-5 border-t-[1px] border-slate-200">
          <p className="text-sm text-slate-500 lg:text-md">Dana Terkumpul</p>
          <p className="text-sm text-primary font-bold lg:text-md">
            200.000.00
          </p>
        </div>

        <Progress progress={45} color="lime" size="sm" />
        <div className="flex items-center justify-between mt-2 mb-5 pb-5 border-b-[1px] border-slate-200">
          <div>
            <p className="text-sm text-slate-500 lg:text-md">Terkumpul</p>
            <p className="text-sm text-slate-500 lg:text-md">
              20% dari 1.000.000.00
            </p>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-sm text-slate-500 lg:text-md">Sisa Hari</p>
            <p className="text-sm text-primary font-bold lg:text-md">
              210 hari
            </p>
          </div>
        </div>
        <button
          className="w-full p-2 rounded flex items-center justify-center bg-primary text-white hover:bg-[#228211] duration-200"
          type="button"
        >
          Donasi
        </button>
      </div>
    </>
  );
}
