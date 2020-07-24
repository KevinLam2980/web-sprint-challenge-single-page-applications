import React, {useState, useEffect} from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Pizza from './components/buildPizza'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import Styled from 'styled-components'

const Nav = Styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
height: 100px;
align-items:center;
background-color: red;
color: black;
h1{
  padding-left: 3rem;
}
div{
  padding-right: 3rem;
  button{
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
  }
}
`
const IMG = Styled.img`
width: 100%;
`
const BtnDiv = Styled.div`
display: flex;
justify-content: center;
text-decoration: none;
`
const PizzaBTN = Styled.button`
padding: 1rem 2rem;
background-color: green;
font-size: 1.5rem;
border: none;
`


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
      console.log(err)
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
    [name]: value 
  })
}

const checkboxChange = (name, isChecked) => {
  setFormValues({
    ...formValues,
    toppings: {
      ...formValues.toppings,
      [name]: isChecked, 
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
  formSchema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])

  return (
    <>
      <Nav>
      <h1>Lambda Eats</h1>
        <div>
          <Link to='/'>
          <button id='homeBtn'>Home</button>
          </Link>
          <button>Help</button>
        </div>
      </Nav>
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
        <IMG src={require('./Assets/Pizza.jpg')} ></IMG>
        <Link to='/pizza'>
          <BtnDiv>
        <PizzaBTN id='pizzaForm'>Pizza?</PizzaBTN>
          </BtnDiv>
        </Link>
      </Route>
      </Switch>
    </>
  );
};
export default App;
