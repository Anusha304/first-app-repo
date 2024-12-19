import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UpdateItems = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      const response = await axios.get(`http://localhost:5000/pizzas/${id}`);
      setPizza(response.data);
    };
    fetchPizza();
  }, [id]);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive('Must be positive'),
  });

  const onSubmit = async (values) => {
    await axios.put(`http://localhost:5000/pizzas/${id}`, values);
    alert('Pizza updated!');
    navigate('/display'); // Redirect to the display page after update
  };

  if (!pizza) return <div>Loading...</div>;

  return (
    <Formik
      initialValues={{ name: pizza.name, price: pizza.price }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label>Price</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" component="div" />
        </div>
        <button type="submit">Update Pizza</button>
      </Form>
    </Formik>
  );
};

export default UpdateItems;