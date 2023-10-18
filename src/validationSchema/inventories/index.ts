import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  product_id: yup.string().nullable().required(),
  store_id: yup.string().nullable().required(),
});
