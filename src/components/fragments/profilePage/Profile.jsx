import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Avatar } from 'flowbite-react';
import { CgCalendarDates } from 'react-icons/cg';
import join from '../../../utils';
import UpdateProfile from './UpdateProfile';

export default function Profile({ onDeleteUserAccount }) {
  const user = useSelector((state) => state.authUser.user);
  const token = useSelector((state) => state.authUser.token);

  return (
    <section className="relative container p-5 mx-auto mb-10 grid gap-3 md:grid-cols-2">
      <div className="flex flex-col items-center mb-5 gap-1 md:flex-row md:gap-5 md:place-self-start">
        <Avatar
          img={
            !user?.image
              ? 'https://cdn-icons-png.flaticon.com/256/3985/3985429.png'
              : user?.image
          }
          alt="user-profile"
          size="xl"
        />

        <div className="flex flex-col items-center gap-1 md:items-start">
          <p className="text-primary font-bold text-lg md:text-xl">
            Assalamu&apos;alaikum, {user?.displayName}
          </p>

          <div className="flex items-center justify-center gap-1">
            <CgCalendarDates className="text-primary" />
            <p className="text-[12px] text-slate-500 md:text-sm">
              Bergabung Sejak: {join(user?.createdAt)}
            </p>
          </div>
        </div>
      </div>

      <UpdateProfile
        user={user}
        token={token}
        onDeleteUserAccount={onDeleteUserAccount}
      />
    </section>
  );
}
Profile.propTypes = {
  onDeleteUserAccount: PropTypes.func.isRequired,
};
