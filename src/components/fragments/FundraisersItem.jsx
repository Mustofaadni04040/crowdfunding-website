import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Progress } from 'flowbite-react';
import useIsDesktop from '../../hooks/useIsDesktop';

export default function FundraisersItem({ data, formattedTotal }) {
  const isDesktop = useIsDesktop(1024);
  const navigate = useNavigate();
  const [daysLeft, setDaysLeft] = useState(null);

  const onDonationsClick = () => {
    navigate(`/donasi/${data._id}`);
    window.scrollTo(0, 0);
  };

  const onFundraiserPress = (e) => {
    if (e.key === 'Enter' && e.key === ' ') {
      onDonationsClick();
      navigate(`/donasi/${data._id}`);
      window.scrollTo(0, 0);
    }
  };

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
      <div
        className="flex items-center gap-5 mx-auto md:gap-0 md:flex-col md:justify-between"
        onClick={onDonationsClick}
        tabIndex={0}
        onKeyDown={onFundraiserPress}
        role="button"
      >
        <div className="HEADER min-w-[150px] max-w-[150px] sm:min-w-[250px] sm:max-w-[250px] md:max-w-[200px] md:min-w-[200px] md:max-h-[130px] md:min-h-[130px] lg:min-w-96 lg:min-h-[200px]">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-28 md:h-full md:rounded-tl md:rounded-tr object-center"
          />
        </div>

        <div className="CONTENT max-w-[200px] md:shadow md:p-3 md:border-slate-500 md:rounded md:h-[100%] md:flex md:flex-col md:justify-between lg:min-w-96">
          <h1 className="text-sm font-bold text-slate-500 mb-2 lg:text-lg hover:text-primary">
            {data.title}
          </h1>
          {isDesktop && (
            <p className="text-sm text-slate-600">{data.description}</p>
          )}

          <div className="lg:mt-3">
            <div className="flex flex-col">
              <p className="text-xs text-slate-500 lg:text-sm">
                Dana Terkumpul
              </p>
              <p className="text-xs text-primary font-bold lg:text-sm">
                {formattedTotal(data.collectedAmount)}
              </p>
            </div>

            <Progress
              progress={(data.collectedAmount / data.goal) * 100}
              color="lime"
              size="sm"
            />
            <div className="flex items-center justify-between mt-2">
              <div>
                <p className="text-xs text-slate-500 lg:text-sm">Terkumpul</p>
                <p className="text-xs text-slate-500 lg:text-sm">
                  {Math.floor((data.collectedAmount / data.goal) * 100)}% dari{' '}
                  {formattedTotal(data.goal)}
                </p>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-xs text-slate-500 lg:text-sm">Sisa Hari</p>
                <p className="text-xs text-primary font-bold lg:text-sm">
                  {daysLeft}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const dataShape = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  goal: PropTypes.number.isRequired,
  collectedAmount: PropTypes.number.isRequired,
  endDate: PropTypes.string.isRequired,
};

FundraisersItem.propTypes = {
  data: PropTypes.shape(PropTypes.dataShape).isRequired,
  formattedTotal: PropTypes.func.isRequired,
};
