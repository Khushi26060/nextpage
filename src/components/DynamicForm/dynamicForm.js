// components/DynamicForm.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { formConfig } from '../config/formConfig';

// Generate Yup validation schema based on form configuration
const generateValidationSchema = (config) => {
  const shape = {};
  config.forEach(field => {
    if (field.validation) {
      shape[field.name] = yup.string().required(field.validation.required);
      if (field.validation.pattern) {
        shape[field.name] = shape[field.name].matches(field.validation.pattern.value, field.validation.pattern.message);
      }
    }
  });
  return yup.object().shape(shape);
};

const validationSchema = generateValidationSchema(formConfig);

const DynamicForm = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    console.log('Form data:', data);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      const responseData = await response.json();
      console.log('Submission successful:', responseData);
      reset(); // Clear form on successful submission
    } catch (error) {
      console.error('Error during submission:', error);
      alert('Failed to submit the form. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formConfig.map((field, index) => (
        <div key={index} className="form-group">
          <label htmlFor={field.name}>{field.placeholder}</label>
          <Controller
            name={field.name}
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value, name, ref } }) => {
              if (field.type === 'textarea') {
                return (
                  <textarea
                    id={field.name}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                    placeholder={field.placeholder}
                    className="form-control"
                  />
                );
              }
              return (
                <input
                  id={field.name}
                  type={field.type}
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  placeholder={field.placeholder}
                  className="form-control"
                />
              );
            }}
          />
          {errors[field.name] && <p className="form-error">{errors[field.name]?.message}</p>}
        </div>
      ))}
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default DynamicForm;
