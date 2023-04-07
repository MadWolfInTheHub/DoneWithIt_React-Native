import React from 'react'
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import Picker from '../Picker';

const FormPicker = ({ 
    items,
    name, 
    numberOfColumns,
    PickerItemComponent,
    placeholder,
    width
  }) => {

  const { touched, errors, setFieldValue, values } = useFormikContext();

  return (
    <>
      <Picker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={ (item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
    )
};

export default FormPicker;