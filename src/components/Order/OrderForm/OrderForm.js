import { useContext } from 'react';
import { Context } from 'Functions';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Input } from './OrderForm.style';
import { showOrderConfirm } from 'redux/modals/modalsActions';

// const required = v => {
//   if (!v || v === '') {
//     return 'required';
//   }
// };

const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';

const customInput = ({
  input,
  meta: { touched, error, warning },
  type,
  placeholder,
}) => (
  <div>
    <Input
      {...input}
      errorMessage={error}
      type={type}
      placeholder={placeholder}
    />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

let OrderForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="name"
        component={customInput}
        type="text"
        placeholder="Name"
        validate={[required]}
      />
      <Field
        name="surname"
        component={customInput}
        type="text"
        placeholder="Surname"
        validate={required}
      />
      <Field
        name="address"
        component={customInput}
        type="text"
        placeholder="Address"
      />
      <Field
        name="phone"
        component={customInput}
        type="tel"
        placeholder="Phone"
      />

      <Button type="submit" disabled={submitting}>
        Оформить заказ
      </Button>
    </Form>
  );
};

OrderForm = reduxForm({
  form: 'userContacts',
})(OrderForm);

const OrderFormPage = () => {
  const {
    auth: { authentication, logIn },
  } = useContext(Context);

  const dispatch = useDispatch();

  const submit = values => {
    if (authentication) {
      dispatch(showOrderConfirm(true));
    } else {
      logIn();
    }
  };

  return <OrderForm onSubmit={submit} />;
};

export default OrderFormPage;
