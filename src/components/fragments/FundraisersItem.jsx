import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Progress } from 'flowbite-react';
import useIsDesktop from '../../hooks/useIsDesktop';

export default function FundraisersItem({ data, formattedTotal }) {
  const isDesktop = useIsDesktop(1024);
  const navigate = useNavigate();

  const onDonationsClick = () => {
    navigate('/fundraisers/:id');
  };

  return (
    <>
      <a
        href="/fundraisers/:id"
        className="flex items-center gap-5 mx-auto mb-5 md:gap-0 md:flex-col md:justify-between"
        onClick={onDonationsClick}
      >
        <div className="HEADER min-w-[150px] max-w-[150px] sm:min-w-[250px] sm:max-w-[250px] md:max-w-[200px] md:min-w-[200px] md:max-h-[130px] md:min-h-[130px] md:rounded-tl md:rounded-tr lg:min-w-96 lg:min-h-[200px]">
          <img
            src={data.imageUrl}
            alt={data.title}
            className="w-full h-[100%] object-center"
          />
        </div>

        <div className="CONTENT max-w-[200px] md:shadow md:p-3 md:border-slate-500 md:rounded md:h-[100%] md:flex md:flex-col md:justify-between lg:min-w-96">
          <h1 className="text-sm font-bold text-slate-500 mb-2 lg:text-lg hover:text-primary">
            {data.title}
          </h1>
          {isDesktop && <p className="text-sm ">{data.description}</p>}

          <div className="lg:mt-3">
            <div className="flex flex-col">
              <p className="text-xs text-slate-500 lg:text-sm">
                Dana Terkumpul
              </p>
              <p className="text-xs text-primary font-bold lg:text-sm">
                {formattedTotal(data.collected)}
              </p>
            </div>

            <Progress
              progress={(data.collected / data.target) * 100}
              color="lime"
              size="sm"
            />
            <div className="flex items-center justify-between mt-2">
              <div>
                <p className="text-xs text-slate-500 lg:text-sm">Terkumpul</p>
                <p className="text-xs text-slate-500 lg:text-sm">
                  {Math.floor((data.collected / data.target) * 100)}% dari{' '}
                  {formattedTotal(data.target)}
                </p>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-xs text-slate-500 lg:text-sm">Sisa Hari</p>
                <p className="text-xs text-primary font-bold lg:text-sm">
                  {data.remainingDays}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export const dataShape = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  target: PropTypes.number.isRequired,
  collected: PropTypes.number.isRequired,
  remainingDays: PropTypes.number.isRequired,
};

FundraisersItem.propTypes = {
  data: PropTypes.shape(PropTypes.dataShape).isRequired,
  formattedTotal: PropTypes.func.isRequired,
};
