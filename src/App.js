import React, {useState, useEffect} from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Pizza from './components/buildPizza'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './validation/formSchema'


const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  toppings: {
    pepperoni: false,
    ham: false,
    bacon: false,
    pineapple: false
  },
  special: ''
}
const initialFormErrors = {
  name: '',
}
const initialDisabled = true

const App = () => {
const [pizza, setPizza] = useState([])
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors) // object
const [disabled, setDisabled] = useState(initialDisabled) 



const postNewPizza = newPizza => {
  axios.post('https://reqres.in/api/users', newPizza)
    .then(res => {
      setPizza([res.data, ...pizza])
      setFormValues(initialFormValues)
      console.log(res.data)
    })
    .catch(err => {
      debugger
    })
}

const inputChange = (name, value) => {
  yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })
  setFormValues({
    ...formValues,
    [name]: value // NOT AN ARRAY
  })
}

const checkboxChange = (name, isChecked) => {
  setFormValues({
    ...formValues,
    toppings: {
      ...formValues.toppings,
      [name]: isChecked, // not an array
    }
  })
}

const submit = () => {
  const newPizza = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    sauce: formValues.sauce.trim(),
    toppings: Object.keys(formValues.toppings).filter(t => formValues.toppings[t]),
    special: formValues.special.trim(),
  }
  postNewPizza(newPizza)
}

useEffect(() => {
  // 🔥 STEP 10- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
  formSchema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])

  
  return (
    <>
      <nav>
      <h1>Lambda Eats</h1>
        <div>
          <Link to='/'>
          <button>Home</button>
          </Link>
          <button>Help</button>
        </div>
      </nav>
      <Switch>
      <Route path='/pizza'>
        <Pizza 
           values={formValues}
           inputChange={inputChange}
           checkboxChange={checkboxChange}
           submit={submit}
           disabled={disabled}
           errors={formErrors}
        />
      </Route>

      <Route path='/'>
        <img src={require('./Assets/Pizza.jpg')} ></img>
        <Link to='/pizza'>
        <button>Pizza?</button>
        </Link>
      </Route>
      </Switch>
    </>
  );
};
export default App;
