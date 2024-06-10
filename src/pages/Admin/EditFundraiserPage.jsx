import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner, TextInput, Label, Button, Textarea } from 'flowbite-react';
import {
  asyncFetchFundraiserById,
  asyncEditFundraiser,
} from '../../components/states/fundraisers/action';

export default function EditFundraiserPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fundraiser = useSelector((state) => state.fundraisers.fundraiser);
  const loading = useSelector((state) => state.authUser.loading);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    endDate: '',
    image: '',
  });

  useEffect(() => {
    dispatch(asyncFetchFundraiserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (fundraiser && fundraiser._id === id) {
      setFormData({
        title: fundraiser.title || '',
        description: fundraiser.description || '',
        goal: fundraiser.goal || '',
        endDate: fundraiser.endDate
          ? new Date(fundraiser.endDate).toISOString().slice(0, 10)
          : '',
        image: fundraiser.image || '',
      });
    }
  }, [fundraiser, id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncEditFundraiser(id, formData)).then(() => {
      navigate('/admin/fundraisers');
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {loading ? (
        <Spinner aria-label="Loading" />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="title">Title</Label>
            <TextInput
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="goal">Goal</Label>
            <TextInput
              id="goal"
              name="goal"
              type="number"
              value={formData.goal}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="endDate">End Date</Label>
            <TextInput
              id="endDate"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="image">Image URL</Label>
            <TextInput
              id="image"
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Update Fundraiser
          </Button>
        </form>
      )}
    </div>
  );
}
