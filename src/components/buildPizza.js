import React from 'react'


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
        <div>     
            <div className='errors'>
                <div>{errors.name}</div>
            </div>
\
            <h2>Build Your Own Pizza</h2>
            <form onSubmit={onSubmit}>
                <label>
                    <input
                    type='text'
                    value={values.name}
                    placeholder='Enter name'
                    name='name'
                    onChange={onInputChange}
                    >
                    </input>
                </label>

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

                <p>Choice of sauce</p>
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



                <label>pepperoni
                    <input
                    type="checkbox"
                    name='pepperoni'
                    checked={values.toppings.pepperoni === true}
                    onChange={onCheckboxChange}
                    />
                </label>

                <label>ham
                <input
                    type="checkbox"
                    name='ham'
                    checked={values.toppings.ham === true}
                    onChange={onCheckboxChange}
                />
                </label>

                <label>bacon
                <input
                    type="checkbox"
                    name='bacon'
                    checked={values.toppings.bacon === true}
                    onChange={onCheckboxChange}
                />
                </label>

                <label>pineapple
                <input
                    type="checkbox"
                    name='pineapple'
                    checked={values.toppings.pineapple === true}
                    onChange={onCheckboxChange}
                />
                </label>


                <label>
                    <textarea
                    type='text'
                    placeholder="Anything else you'd like to add?"
                    name='special'
                    onChange={onInputChange}
                    value={values.special}>
                        
                    </textarea>
                </label>

                <button disabled={disabled}>submit</button>
            </form>
        </div>
    )
}

export default Pizza