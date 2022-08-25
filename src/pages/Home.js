import { useState, useEffect } from "react"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:4040/')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error(error))
  }, [])

  const allProducts = products.map(eachProduct => <li>{eachProduct.name}</li>)

  return (
    <>
      <h1>Home Component</h1>
      {allProducts}
    </>
  )
}

export default Home