import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Avatar, TextInput } from 'flowbite-react';
import { CgCalendarDates } from 'react-icons/cg';
import { HiMail } from 'react-icons/hi';
import join from '../../../utils';
import Button from '../../elements/button/Button';

export default function Profile({ onDeleteUserAccount }) {
  const user = useSelector((state) => state.authUser.user);
  const token = useSelector((state) => state.authUser.token);

  return (
    <section className="container p-5 mx-auto mb-10 grid gap-3 md:grid-cols-2">
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

      <div className="flex flex-col gap-5 w-full">
        <h1 className="border-b-2 pb-2 border-primary w-max text-slate-500 font-bold mb-8">
          Ubah Profile
        </h1>
        <div className="flex items-center gap-3">
          <p className="text-sm text-primary min-w-10">Nama:</p>
          <TextInput
            type="text"
            required
            value={user?.displayName}
            className="w-full rounded focus:ring-1 focus:border-none"
            onChange={() => {}}
          />
        </div>

        <div className="flex items-center gap-3">
          <p className="text-sm text-primary min-w-10">Email:</p>
          <TextInput
            type="email"
            icon={HiMail}
            placeholder="name@flowbite.com"
            required
            value={user?.email}
            className="w-full rounded focus:ring-1 focus:border-none"
            onChange={() => {}}
          />
        </div>

        <div className="flex justify-center gap-5">
          <Button
            classname="p-[6px] rounded text-white bg-red-500 hover:bg-red-600 duration-200"
            onClick={() => onDeleteUserAccount(user?._id, token)}
          >
            Hapus Akun
          </Button>
          <Button classname="button-primary">Simpan</Button>
        </div>
      </div>
    </section>
  );
}
Profile.propTypes = {
  onDeleteUserAccount: PropTypes.func.isRequired,
};
