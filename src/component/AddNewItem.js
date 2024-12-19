import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddNewItem = () => {
  const initialValues = { name: '', price: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive('Must be positive'),
  });

  const onSubmit = async (values) => {
    await axios.post('http://localhost:3000/pizzas', values);
    alert('Pizza added!');
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
        <button type="submit">Add Pizza</button>
      </Form>
    </Formik>
  );
};

export default AddNewItem;