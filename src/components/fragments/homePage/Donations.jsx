import React from 'react';
import { Progress } from 'flowbite-react';
import HomePageData from '../../../json/HomePage.json';
import useIsDesktop from '../../../hooks/useIsDesktop';
import { formattedTotal } from './Milestones';

export default function Donations() {
  const isDesktop = useIsDesktop(1024);

  return (
    <section className="container p-5 mx-auto mt-7 w-full">
      <h1 className="uppercase mb-7 text-2xl text-primary font-bold lg:text-4xl">
        Mari Bantu Mereka
      </h1>
      <div className="flex flex-col md:flex-row md:gap-3 lg:flex-wrap">
        {HomePageData.donations.map((donation) => (
          <div
            key={donation._id}
            className="flex items-center gap-5 mx-auto mb-5 md:gap-0 md:flex-col md:justify-between"
          >
            <div className="HEADER min-w-[150px] max-w-[150px] overflow-hidden sm:min-w-[250px] sm:max-w-[250px] md:max-w-[200px] md:min-w-[200px] md:max-h-[130px] md:min-h-[130px] md:rounded-tl md:rounded-tr lg:min-w-96 lg:min-h-[200px]">
              <img
                src={donation.imageUrl}
                alt={donation.title}
                className="w-full h-[100%] object-center"
              />
            </div>

            <div className="CONTENT max-w-[200px] md:shadow md:p-3 md:border-slate-500 md:rounded md:h-[100%] md:flex md:flex-col md:justify-between lg:min-w-96">
              <h1 className="text-sm font-bold text-slate-500 mb-2 lg:text-lg">
                {donation.title}
              </h1>
              {isDesktop && <p className="text-sm ">{donation.description}</p>}

              <div>
                <Progress
                  progress={(donation.collected / donation.target) * 100}
                  color="lime"
                  size="sm"
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex flex-col">
                    <p className="text-xs text-slate-500 lg:text-sm">
                      Terkumpul
                    </p>
                    <p className="text-xs text-primary font-bold lg:text-sm">
                      {formattedTotal(donation.collected)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end">
                    <p className="text-xs text-slate-500 lg:text-sm">
                      Sisa Hari
                    </p>
                    <p className="text-xs text-primary font-bold lg:text-sm">
                      {donation.remainingDays}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
