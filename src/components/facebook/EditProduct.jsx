import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import LeftMenu from './LeftMenu'
import { useEffect, useState } from 'react'
import axios from 'axios'

function EditProduct() {
  const { searchQuery } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState(searchQuery)
  const [columns, setColumns] = useState(4)

  const getData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        'https://dummyjson.com/products' + (search ? '/search?q=' + search : '')
      )
      console.log(response)
      setProducts(response.data.products)
      setLoading(false)
    } catch (err) {
      setProducts([])
      setLoading(false)
      alert('error fetching')
    }
  }

  useEffect(() => {
    getData()
  }, [search])

  let columnsTailwind =
    columns === 6
      ? 'md:grid-cols-6'
      : columns === 5
        ? 'md:grid-cols-5'
        : 'md:grid-cols-4'

  return (
    <>
      <div className="container mx-auto p-4">
        <TopNav setColumns={setColumns} columns={columns} />
        <div className="flex justify-center pt-0 pb-4 gap-4 items-center">
          <div className="w-20"></div>
          <input
            type="text"
            placeholder="Search"
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded w-96 border-blue-500 border-2"
          />
          <div className="w-20">
            {loading && (
              <FontAwesomeIcon
                icon={faSpinner}
                className="text-md animate-spin"
              />
            )}
          </div>
        </div>
        {products.length === 0 && !loading && (
          <div className="flex justify-center">no results</div>
        )}
        <div className={`grid ${columnsTailwind} gap-4 sm:grid-cols-2`}>
          {/* <LeftMenu /> */}
          {products.map((product, index) => (
            <div key={index}>
              <Card product={product} />
            </div>
          ))}
        </div>
        <div className="flex justify-center h-20 mt-10 pt-10 border-t border-gray-100">
          <FacebookLogo />
        </div>
      </div>
    </>
  )
}

export default EditProduct

function Card(props) {
  const product = props.product

  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md relative">
      <div className="absolute bg-white p-2 right-0 rounded-bl-lg font-bold">
        ${product.price}
      </div>
      <div>
        <img src={product.thumbnail} alt="kitten" className="w-full" />
      </div>
      <div className="p-4 bg-slate-100 mt-4 rounded-md space-y-2">
        <div className="font-bold">{product.brand}</div>
        <div>{product.description}</div>
      </div>
    </div>
  )
}

function TopNav(props) {
  const { columns } = props
  return (
    <div className="flex bg-blue-600 px-3 py-2 rounded-md mb-4 justify-between items-center text-white">
      <div className="w-48">
        <div className="w-8 h-8 border-4 border-solid border-white rounded-full">
          <FacebookLogo />
        </div>
      </div>
      <strong>Marketplace</strong>
      <div className="flex gap-2 w-48">
        <button
          onClick={() => props.setColumns(6)}
          className={
            'opacity-80 py-1 rounded px-4 bg-white text-black' +
            (columns === 6 ? ' bg-black text-white' : '')
          }
        >
          6
        </button>
        <button
          onClick={() => props.setColumns(5)}
          className={
            'opacity-80 py-1 rounded px-4 bg-white text-black' +
            (columns === 5 ? ' bg-black text-white' : '')
          }
        >
          5
        </button>
        <button
          onClick={() => props.setColumns(4)}
          className={
            'opacity-80 py-1 rounded px-4 bg-white text-black' +
            (columns === 4 ? ' bg-black text-white' : '')
          }
        >
          4
        </button>
        <User />
      </div>
    </div>
  )
}

function User() {
  const isLoggedIn = true
  // const username = 'Emiliano'
  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-3 ml-2">
        {/* {username} */}
        <div className="w-8 h-8 rounded-full bg-white overflow-hidden border-0 border-solid border-white">
          <img
            src="https://avatars.githubusercontent.com/u/4212467?v=4"
            alt="user"
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex gap-1">
        <Link to="/login">Login</Link>
        <div> | </div>
        <Link to="/register">Sign Up</Link>
      </div>
    )
  }
}

// function MiddleMenu() {
//   const items = [
//     { title: 'Home', link: '/' },
//     { title: 'Notifications', link: '/' },
//     { title: 'Messages', link: '/' }
//   ]

//   return (
//     <div className="flex gap-10 text-white cursor-pointer">
//       {items.map((item) => (
//         <Link to={item.link} key={item.title}>
//           {item.title}
//         </Link>
//       ))}
//     </div>
//   )
// }

function FacebookLogo() {
  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
        alt="facebook"
      />
    </>
  )
}

export { FacebookLogo }
