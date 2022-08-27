import { useState } from 'react'

const AddProduct = () => {
  const [form, setForm] = useState({})

  const sendProduct = (event) => {
    event.preventDefault() // this stops form from refreshing page
    //const newProduct = { name: 'Pasta', description: 'Italian noodles', price: 1.99, exp: 2025}
    // if you leave it without a method it default to GET
    
    fetch('http://localhost:4040', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }) 
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

    console.log('Product sent to API')
  }

  const handleForm = (event) => {
    console.log(event.target.value)
    setForm({...form, [event.target.name]: event.target.value})
  }

  return (
    <div className='container'>
      <h1>Add Product Page</h1>
      <form className="add-form">
        <label htmlFor="">Product Name: </label>
        <input onChange={event => handleForm(event)} type='text' placeholder="ex: Rice" name="name" id="name" />

        <label htmlFor="">Sku: </label>
        <input onChange={event => handleForm(event)} type='number' min={0} placeholder="ex: 12345678" name="sku" id="sku" />

        <label htmlFor="">Description: </label>
        <input onChange={event => handleForm(event)} type='text' placeholder="ex: White Rice" name="description" id="description" />

        <label htmlFor="">Price: </label>
        <input onChange={event => handleForm(event)} type='text' placeholder="ex: 2.78" name="price" id="price" />

        <label htmlFor="">Exp: </label>
        <input onChange={event => handleForm(event)} type='number' min={0} placeholder="ex: 2018" name="exp" id="exp" />

        <button onClick={event => sendProduct(event)}>Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct