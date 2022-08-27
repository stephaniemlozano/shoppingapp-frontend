import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SingleProduct = () => {
  const [form, setForm] = useState({})
  const [showForm, setShowForm] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const { name, description, sku, price, exp, index } = location.state
  console.log('location from product card', location)

  const handleDelete = (event) => {
    event.preventDefault()
    console.log('sending to API for delete')

    fetch(`http://localhost:4040?name=${name}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => navigate('/'))
      .catch((err) => console.error(err))
  }

  const handleUpdate = (event) => {
    event.preventDefault()
    console.log('sending to API for update')
    //const addSpecial = { special: true }

    fetch(`http://localhost:4040?name=${name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form), //can't just send variable to the body, must turn it to json and stringify
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
  }

  const handleForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <div className='container'>
      <div className='single-product'>
        <img src={`https://source.unsplash.com/random?sig=${index}`} alt='' />
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h4>{sku}</h4>
        <p>
          <b>Price: </b> ${price}
        </p>
        <p>
          <b>Exp: </b>
          {exp}
        </p>

        {showForm && (
          <form className='add-form'>
            <label htmlFor=''>Product Name: </label>
            <input
              onChange={(event) => handleForm(event)}
              type='text'
              placeholder='ex: Rice'
              name='name'
              id='name'
              defaultValue={name}
            />

            <label htmlFor=''>Sku: </label>
            <input
              onChange={(event) => handleForm(event)}
              type='number'
              min={0}
              placeholder='ex: 12345678'
              name='sku'
              id='sku'
              defaultValue={sku}
            />

            <label htmlFor=''>Description: </label>
            <input
              onChange={(event) => handleForm(event)}
              type='text'
              placeholder='ex: White Rice'
              name='description'
              id='description'
              defaultValue={description}
            />

            <label htmlFor=''>Price: </label>
            <input
              onChange={(event) => handleForm(event)}
              type='text'
              placeholder='ex: 2.78'
              name='price'
              id='price'
              defaultValue={price}
            />

            <label htmlFor=''>Exp: </label>
            <input
              onChange={(event) => handleForm(event)}
              type='number'
              min={0}
              placeholder='ex: 2018'
              name='exp'
              id='exp'
              defaultValue={exp}
            />
            <button onClick={handleUpdate}>Update Product</button>
          </form>
        )}

        <button onClick={handleDelete}>Delete Product</button>
        <button onClick={() => setShowForm(!showForm)}>Show Form</button>
      </div>
    </div>
  )
}

export default SingleProduct
