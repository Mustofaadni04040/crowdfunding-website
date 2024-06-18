import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner, TextInput, Label, Button, Select } from 'flowbite-react';
import { getUserById, updateUser } from '../../components/states/Users/action';

export default function EditUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);
  const loading = useSelector((state) => state.authUser.loading);

  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (user && user._id === id) {
      setFormData({
        displayName: user.displayName || '',
        email: user.email || '',
        role: user.role || '',
      });
    }
  }, [user, id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(id, formData)).then(() => {
      navigate('/admin/users');
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {loading ? (
        <Spinner aria-label="Loading" />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="displayName">Nama</Label>
            <TextInput
              id="displayName"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <TextInput
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="role">Role</Label>
            <Select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Pilih Role
              </option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Update User
          </Button>
        </form>
      )}
    </div>
  );
}
