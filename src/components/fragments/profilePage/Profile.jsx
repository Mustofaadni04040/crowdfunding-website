import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Avatar, Card } from 'flowbite-react';
import join from '../../../utils';
import Button from '../../elements/button/Button';

export default function Profile({ onDeleteUserAccount }) {
  const user = useSelector((state) => state.authUser.user);
  const token = useSelector((state) => state.authUser.token);

  return (
    <section className="container p-5 mx-auto">
      <h1 className="text-xl uppercase mb-5 text-primary font-bold lg:text-3xl">
        Assalamu&apos;alaikum Wr. Wb., {user?.displayName}
      </h1>
      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <div className="flex flex-col gap-1 items-center">
            <Avatar
              img={
                !user.image
                  ? 'https://cdn-icons-png.flaticon.com/256/3985/3985429.png'
                  : user.image
              }
              alt="user-profile"
              rounded
              size="xl"
            />
            <p className="text-sm text-slate-500">
              Bergabung Sejak: {join(user?.createdAt)}
            </p>

            <Button
              classname="p-[6px] rounded text-white bg-red-500 hover:bg-red-600 duration-200 lg:order-2"
              onClick={() => onDeleteUserAccount(user._id, token)}
            >
              Hapus Akun
            </Button>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between flex-col gap-5 md:flex-row md:gap-10">
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center gap-5">
                <p className="mb-3 text-sm text-primary">Nama:</p>
                <input
                  type="text"
                  value={user.displayName}
                  className="input"
                  onChange={() => {}}
                />
              </div>

              <div className="flex items-center gap-5">
                <p className="mb-3 text-sm text-primary">Email:</p>
                <input
                  type="text"
                  value={user.email}
                  className="input"
                  disabled
                />
              </div>
              <Button classname="button-primary max-w-20 mx-auto">
                Simpan
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
Profile.propTypes = {
  onDeleteUserAccount: PropTypes.func.isRequired,
};
