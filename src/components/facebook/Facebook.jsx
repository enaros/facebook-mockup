import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faPen } from '@fortawesome/free-solid-svg-icons'
import LeftMenu from './LeftMenu'

function Facebook() {
  const rating = 2
  const cards = [...new Array(rating)]
  return (
    <>
      <div className="container mx-auto p-4">
        <TopNav />
        <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-1">
          <LeftMenu />
          {cards.map((card, index) => (
            <div key={index}>
              <Card />
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

export default Facebook

function TopNav() {
  // Data
  const username = 'Emiliano'
  const age = 39

  return (
    <div className="flex bg-blue-600 px-3 py-2 rounded-md mb-4 justify-between items-center text-white">
      <div className="w-8 h-8 border-4 border-solid border-white rounded-full">
        <FacebookLogo />
      </div>
      <MiddleMenu />
      <User username={username} age={age} isLoggedIn={true} />
    </div>
  )
}

function User(props) {
  console.log(props)
  const { username, age, isLoggedIn } = props

  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-3">
        {username}
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

function MiddleMenu() {
  const items = [
    { title: 'Casa', link: '/case' },
    { title: 'Notifications', link: '/notifications' },
    { title: 'Messages', link: '/messages' }
  ]

  return (
    <div className="flex gap-10 text-white cursor-pointer">
      {items.map((item) => (
        <Link to={item.link}>{item.title}</Link>
      ))}
    </div>
  )
}

function Card() {
  return (
    <div
      role="status"
      className="border border-gray-300 p-4 rounded-md shadow-md"
    >
      <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded mb-4">
        {/* <img src="https://placekitten.com/200/200" alt="kitten" /> */}
      </div>
      <div>
        <div className="h-3 bg-gray-200 rounded-full max-w-[70%] mb-4"></div>
        <div className="h-3 bg-gray-200 rounded-full max-w-[80%] mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full max-w-[360px]"></div>
      </div>
    </div>
  )
}

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

{
  /* <div>
            <FontAwesomeIcon icon={faCoffee} />
            <p>
              Content here{' '}
              <FontAwesomeIcon icon={faPen} className="text-blue-500" /> more
              content here...
            </p>
          </div> */
}
