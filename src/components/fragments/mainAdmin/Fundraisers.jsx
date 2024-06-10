/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Table,
  Pagination,
  Modal,
  Button,
  Label,
  TextInput,
} from 'flowbite-react';
import {
  HiOutlineExclamationCircle,
  // HiOutlinePlusCircle,
} from 'react-icons/hi';
import {
  asyncFetchFundraisers,
  asyncDeleteFundraiser,
  asyncCreateFundraiser,
} from '../../states/fundraisers/action';

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
};

export default function Fundraisers() {
  const dispatch = useDispatch();
  const { fundraisers } = useSelector((state) => state.fundraisers);
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [fundraiserIdToDelete, setFundraiserIdToDelete] = useState(null);
  const [newFundraiserData, setNewFundraiserData] = useState({
    title: '',
    description: '',
    goal: '',
    endDate: '',
    image: '',
  });

  useEffect(() => {
    dispatch(asyncFetchFundraisers());
  }, [dispatch]);

  const onPageChange = (page) => {
    setPage(page);
  };

  const handleDelete = () => {
    if (fundraiserIdToDelete) {
      dispatch(asyncDeleteFundraiser(fundraiserIdToDelete)).then(() => {
        setOpenModal(false);
        setFundraiserIdToDelete(null);
      });
    }
  };

  const openDeleteModal = (id) => {
    setFundraiserIdToDelete(id);
    setOpenModal(true);
  };

  const handleCreateFundraiser = () => {
    dispatch(asyncCreateFundraiser(newFundraiserData)).then(() => {
      setOpenModal(false);
      setNewFundraiserData({
        title: '',
        description: '',
        goal: '',
        endDate: '',
        image: '',
      });
    });
  };

  return (
    <div className="h-screen">
      <Button onClick={() => setOpenCreateModal(true)} className="mb-4">
        {/* <HiOutlinePlusCircle /> */}
        Create Fundraiser
      </Button>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Judul</Table.HeadCell>
            <Table.HeadCell>Deskripsi</Table.HeadCell>
            <Table.HeadCell>Goal</Table.HeadCell>
            <Table.HeadCell>Dana Terkumpul</Table.HeadCell>
            <Table.HeadCell>Tanggal Berakhir</Table.HeadCell>
            <Table.HeadCell>Aksi</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {Array.isArray(fundraisers) && fundraisers.length > 0 ? (
              fundraisers.map((fundraiser) => (
                <Table.Row
                  key={fundraiser._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {fundraiser.title}
                  </Table.Cell>
                  <Table.Cell>
                    {truncateText(fundraiser.description, 50)}
                  </Table.Cell>
                  <Table.Cell>{fundraiser.goal}</Table.Cell>
                  <Table.Cell>{fundraiser.collectedAmount}</Table.Cell>
                  <Table.Cell>
                    {new Date(fundraiser.endDate).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell className="flex">
                    <a
                      href={`/admin/fundraisers/edit/${fundraiser._id}`}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                    <button
                      type="button"
                      onClick={() => openDeleteModal(fundraiser._id)}
                      className="ml-2 font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan="6" className="text-center">
                  No fundraisers found
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
      <div className="flex mt-4 overflow-x-auto sm:justify-center">
        <Pagination
          layout="navigation"
          currentPage={page}
          totalPages={Math.ceil(fundraisers.length / 10)}
          onPageChange={onPageChange}
        />
      </div>

      {/* Delete Modal */}
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 text-gray-400 h-14 w-14 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Apakah Anda yakin ingin menghapus donasi ini?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDelete}>
                Ya, saya yakin
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Batal
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Create Fundraiser Modal */}
      <Modal
        show={openCreateModal}
        size="md"
        onClose={() => setOpenCreateModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Tambah Donasi
            </h3>
            <div>
              <div className="block mb-2">
                <Label htmlFor="title" value="Judul" />
              </div>
              <TextInput
                id="title"
                value={newFundraiserData.title}
                onChange={(e) =>
                  setNewFundraiserData({
                    ...newFundraiserData,
                    title: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <div className="block mb-2">
                <Label htmlFor="description" value="Deskripsi" />
              </div>
              <TextInput
                id="description"
                value={newFundraiserData.description}
                onChange={(e) =>
                  setNewFundraiserData({
                    ...newFundraiserData,
                    description: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <div className="block mb-2">
                <Label htmlFor="goal" value="Goal" />
              </div>
              <TextInput
                id="goal"
                type="number"
                value={newFundraiserData.goal}
                onChange={(e) =>
                  setNewFundraiserData({
                    ...newFundraiserData,
                    goal: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <div className="block mb-2">
                <Label htmlFor="endDate" value="End Date" />
              </div>
              <TextInput
                id="endDate"
                type="date"
                value={newFundraiserData.endDate}
                onChange={(e) =>
                  setNewFundraiserData({
                    ...newFundraiserData,
                    endDate: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <div className="block mb-2">
                <Label htmlFor="image" value="Image URL" />
              </div>
              <TextInput
                id="image"
                type="url"
                value={newFundraiserData.image}
                onChange={(e) =>
                  setNewFundraiserData({
                    ...newFundraiserData,
                    image: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="w-full">
              <Button onClick={handleCreateFundraiser}>
                Create Fundraiser
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
