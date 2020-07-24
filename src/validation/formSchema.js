import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be atleast 2 character")
    .required("Name is required"),
  size: yup
    .string()
    .required("size is required"),
  sauce: yup
    .string()
    .required("sauce is required"),
  special: yup
    .string()
})
 
export default formSchema
