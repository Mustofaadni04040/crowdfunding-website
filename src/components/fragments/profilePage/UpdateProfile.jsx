import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  TextInput,
  Button as ButtonModal,
  Spinner,
  Toast,
} from 'flowbite-react';
import { HiCheck, HiMail, HiOutlineExclamationCircle } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../elements/button/Button';
import { asyncUpdateAccount } from '../../states/authUser/action';

export default function UpdateProfile({ user, token, onDeleteUserAccount }) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authUser.loading);
  const [email, setEmail] = useState(user?.email);
  const [displayName, setDisplayName] = useState(user?.displayName);
  const [openModal, setOpenModal] = useState(false);

  const handleUpdateProfile = async () => {
    const updateUser = { email, displayName };
    await dispatch(asyncUpdateAccount(token, updateUser, user._id));
  };

  return (
    <div className="flex flex-col gap-5 w-full md:relative">
      <h1 className="border-b-2 pb-2 border-primary w-max text-slate-500 font-bold mb-8">
        Ubah Profil
      </h1>
      <div className="flex items-center gap-3">
        <p className="text-sm text-primary min-w-10">Nama:</p>
        <TextInput
          type="text"
          required
          value={displayName}
          className="w-full rounded focus:ring-1 focus:border-none"
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-3">
        <p className="text-sm text-primary min-w-10">Email:</p>
        <TextInput
          type="email"
          icon={HiMail}
          placeholder="name@flowbite.com"
          required
          value={email}
          className="w-full rounded focus:ring-1 focus:border-none"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex justify-center gap-5">
        <Button
          classname="p-[6px] rounded text-white bg-red-500 hover:bg-red-600 duration-200"
          onClick={() => setOpenModal(true)}
        >
          Hapus Akun
        </Button>
        <Button
          classname="button-primary min-w-[70px]"
          onClick={handleUpdateProfile}
        >
          {loading ? <Spinner color="success" size="sm" /> : 'Simpan'}
        </Button>
        {loading === false && (
          <Toast className="absolute -top-10 right-0 md:top-0">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              Akun berhasil diperbarui
            </div>
            <Toast.Toggle />
          </Toast>
        )}
      </div>

      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Apakah anda yakin ingin menghapus akun?
            </h3>
            <div className="flex justify-center gap-4">
              <ButtonModal
                color="failure"
                onClick={() => onDeleteUserAccount(user?._id, token)}
              >
                Hapus
              </ButtonModal>
              <ButtonModal color="gray" onClick={() => setOpenModal(false)}>
                Kembali
              </ButtonModal>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

UpdateProfile.propTypes = {
  user: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
  onDeleteUserAccount: PropTypes.func.isRequired,
};
