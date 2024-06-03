/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Pagination } from 'flowbite-react';
import { getUsers } from '../../states/Users/action';

export default function Users() {
  const dispatch = useDispatch();
  const { users, totalPages, currentPage } = useSelector(
    (state) => state.users,
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);

  const onPageChange = (page) => {
    setPage(page);
  };

  return (
    <div className="h-screen">
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Nama</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => (
                <Table.Row
                  key={user._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {/* <img
                      src={user.image}
                      alt={user.displayName}
                      className="w-10 h-10 rounded-full"
                    /> */}
                    {user.displayName}
                  </Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>
                    <a
                      href="/admin/users/edit"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                    <a
                      href="/admin/users/delete"
                      className="ml-2 font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      Delete
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan="4" className="text-center">
                  No users found
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
      <div className="flex mt-4 overflow-x-auto sm:justify-center">
        <Pagination
          layout="navigation"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
