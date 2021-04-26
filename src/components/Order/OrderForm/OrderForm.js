import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Input } from './OrderForm.style';
import { useForm } from 'hooks';
import { showOrderConfirm } from 'redux/orders/ordersActions';

const OrderForm = ({ authentication, logIn }) => {
  const dispatch = useDispatch();
  const { name, surname, address, phone, handleInputChange } = useForm();

  const onSubmit = e => {
    e.preventDefault();

    if (authentication) {
      dispatch(showOrderConfirm(true));
      console.log(formData);
    } else {
      logIn();
    }
  };

  const formData = { name, surname, address, phone };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="surname"
        placeholder="Surname"
        value={surname}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="address"
        placeholder="Address"
        value={address}
        onChange={handleInputChange}
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={handleInputChange}
      />
      <Button type="submit">Оформить заказ</Button>
    </Form>
  );
};

export default OrderForm;
