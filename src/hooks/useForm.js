import { useState } from 'react';

export const useForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name': {
        setName(value);
        break;
      }

      case 'surname': {
        setSurname(value);
        break;
      }
      case 'phone': {
        setPhone(value);
        break;
      }
      case 'address': {
        setAddress(value);
        break;
      }
      default:
        return;
    }
  };

  return {
    name,
    surname,
    address,
    phone,
    handleInputChange,
  };
};
