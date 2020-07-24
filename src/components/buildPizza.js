import React from 'react'
import Styled from 'styled-components'

const Div = Styled.div`
width: 60%;
margin: 0 auto;
text-align: center;
border: 3px solid green;
padding: 0 0 2rem;

#nameError{
    color:red;
    padding: 0;
    margin: 1rem;
}
`



const Pizza = (props) => {
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
      } = props
    
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
      }
    
      const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }

    return (
        <Div>     

            <h2>Build Your Own Pizza</h2>
            <div className='errors'>
                <div id='nameError'>{errors.name}</div>
            </div>
            <form onSubmit={onSubmit}>
                <div>
                <label>Name:
                    <input
                    type='text'
                    value={values.name}
                    placeholder='Enter your name'
                    name='name'
                    onChange={onInputChange}
                    >
                    </input>
                </label>
                </div>

                <div>
                <label htmlFor="size">Choice of Size:
                    <select
                    onChange={onInputChange}
                    value={values.size}
                    name='size'>
                        <option value=''>Select</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                </div>

                <div>
                <h3>Select Sauce</h3>
                <label htmlFor="sauce">Original Red
                   <input
                   type="radio"
                   name='sauce'
                   value='original'
                   checked={values.sauce === 'original'}
                   onChange={onInputChange}>
                   </input>
                </label>
                <label htmlFor="sauce">Garlic Ranch
                   <input
                   type="radio"
                   name='sauce'
                   value='garlic'
                   checked={values.sauce === 'garlic'}
                   onChange={onInputChange}>
                   </input>
                </label>
                <label htmlFor="sauce">BBQ Sauce
                   <input
                   type="radio"
                   name='sauce'
                   value='bbq'
                   checked={values.sauce === 'bbq'}
                   onChange={onInputChange}>
                   </input>
                </label>
                <label htmlFor="sauce">Spinach Alfredo
                   <input
                   type="radio"
                   name='sauce'
                   value='alfredo'
                   checked={values.sauce === 'alfredo'}
                   onChange={onInputChange}>
                   </input>
                </label>
                </div>
    
                <div>
                    <h3>Add toppings</h3>
                <label>
                    <input
                    type="checkbox"
                    name='pepperoni'
                    checked={values.toppings.pepperoni === true}
                    onChange={onCheckboxChange}
                    />pepperoni
                </label>
                <br></br>
                <label>
                <input
                    type="checkbox"
                    name='ham'
                    checked={values.toppings.ham === true}
                    onChange={onCheckboxChange}
                />ham
                </label>
                <br></br>
                <label>
                <input
                    type="checkbox"
                    name='bacon'
                    checked={values.toppings.bacon === true}
                    onChange={onCheckboxChange}
                />bacon
                </label>
                <br></br>
                <label>
                <input
                    type="checkbox"
                    name='pineapple'
                    checked={values.toppings.pineapple === true}
                    onChange={onCheckboxChange}
                />pineapple
                </label>
                </div>
                <div>
                <label>Any special requests?<br></br>
                    <input
                    type='text'
                    placeholder="Anything else you'd like to add?"
                    name='special'
                    onChange={onInputChange}
                    value={values.special}>
                    </input>
                </label>
                </div>

                <button disabled={disabled} id='submitBtn'>Add to Order</button>
            </form>
        </Div>
    )
}

export default Pizza