import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'flowbite-react';
import useIsDesktop from '../../../hooks/useIsDesktop';
import formattedTotal from '../../../utils/FormattedTotal';
import { dataShape } from '../FundraisersItem';

export default function FundraiserItemDetail({ data }) {
  const isDesktop = useIsDesktop(1024);
  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const endDate = new Date(data.endDate);
      const currentDate = new Date();
      const timeDifference = endDate - currentDate;
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      setDaysLeft(daysDifference);
    };
    calculateDaysLeft();
    const interval = setInterval(calculateDaysLeft, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  });

  return (
    <>
      <h1 className="text-2xl font-bold text-slate-500 mb-2 lg:text-3xl">
        {data.title}
      </h1>
      {isDesktop && <p className="text-lg ">{data.description}</p>}

      <div className="lg:mt-3">
        <div className="flex flex-col pt-5 border-t-[1px] border-slate-200">
          <p className="text-sm text-slate-500 lg:text-md">Dana Terkumpul</p>
          <p className="text-sm text-primary font-bold lg:text-md">
            {formattedTotal(data.collectedAmount)}
          </p>
        </div>

        <Progress
          progress={(data.collectedAmount / data.goal) * 100}
          color="lime"
          size="sm"
        />
        <div className="flex items-center justify-between mt-2 mb-5 pb-5 border-b-[1px] border-slate-200">
          <div>
            <p className="text-sm text-slate-500 lg:text-md">Terkumpul</p>
            <p className="text-sm text-slate-500 lg:text-md">
              {Math.floor((data.collectedAmount / data.goal) * 100)}% dari{' '}
              {formattedTotal(data.goal)}
            </p>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-sm text-slate-500 lg:text-md">Sisa Hari</p>
            <p className="text-sm text-primary font-bold lg:text-md">
              {daysLeft}
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

FundraiserItemDetail.propTypes = {
  data: PropTypes.shape(dataShape).isRequired,
};
