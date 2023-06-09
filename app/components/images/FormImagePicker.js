import React from 'react';
import { useFormikContext } from 'formik';



import ImageInputList from './ImageInputList';
import { ErrorMessage } from '../forms';

const FormImagePicker = ({ name }) => {
  const { touched, errors, setFieldValue, values } = useFormikContext();

  const imageUris = values[name]

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri])
  } 
  
  const handleRemove = (uri) => {
    setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
  }

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}


export default FormImagePicker;