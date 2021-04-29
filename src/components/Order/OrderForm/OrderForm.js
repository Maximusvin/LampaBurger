import { useContext } from 'react';
import { Context } from 'Functions';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, InputWrap, Input } from './OrderForm.style';
import { showOrderConfirm } from 'redux/modals/modalsActions';
import {
  required,
  maxLength15,
  minLength2,
  phoneNumber,
  string,
} from './validateForm';

const customInput = ({
  input,
  meta: { touched, error, warning },
  type,
  placeholder,
}) => (
  <InputWrap error={error}>
    <Input
      {...input}
      errorMessage={error}
      type={type}
      placeholder={placeholder}
      error={error}
      touched={touched}
    />

    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </InputWrap>
);

let OrderFormPage = ({ handleSubmit, submitting }) => {
  console.log(!submitting);

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="name"
        component={customInput}
        type="text"
        placeholder="Name"
        validate={[required, string, maxLength15, minLength2]}
      />
      <Field
        name="surname"
        component={customInput}
        type="text"
        placeholder="Surname"
        validate={[required, string, maxLength15, minLength2]}
      />
      <Field
        name="address"
        component={customInput}
        type="text"
        placeholder="Address"
        validate={[required]}
      />
      <Field
        name="phone"
        component={customInput}
        type="tel"
        placeholder="Phone"
        validate={[required, phoneNumber]}
      />

      <Button type="submit" disabled={submitting} onDisabled={submitting}>
        Оформить заказ
      </Button>
    </Form>
  );
};

OrderFormPage = reduxForm({
  form: 'userContacts',
})(OrderFormPage);

const OrderForm = () => {
  const {
    auth: { authentication, logIn },
  } = useContext(Context);

  const dispatch = useDispatch();

  const submit = () => {
    if (authentication) {
      dispatch(showOrderConfirm(true));
    } else {
      logIn();
    }
  };

  return <OrderFormPage onSubmit={submit} />;
};

export default OrderForm;
