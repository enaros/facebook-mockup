import { Link } from 'react-router-dom'
import LeftMenu from './LeftMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPen } from '@fortawesome/free-solid-svg-icons'

function Facebook() {
  return (
    <>
      <div className="container mx-auto p-4">
        <TopNav />
        <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-1">
          <LeftMenu />
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
        <div className="flex justify-center h-20 mt-10 pt-10 border-t border-gray-100">
          {/* <FacebookLogo /> */}
          <div>
            <FontAwesomeIcon icon={faCoffee} />
            <p>
              Content here{' '}
              <FontAwesomeIcon icon={faPen} className="text-blue-500" /> more
              content here...
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Facebook

function TopNav() {
  return (
    <div className="flex bg-blue-600 px-3 py-2 rounded-md mb-4 justify-between items-center">
      <div className="w-8 h-8 border-4 border-solid border-white rounded-full">
        <FacebookLogo />
      </div>
      <MiddleMenu />
      <div className="w-8 h-8 rounded-full bg-white overflow-hidden border-0 border-solid border-white">
        <img
          src="https://avatars.githubusercontent.com/u/4212467?v=4"
          alt="user"
        />
      </div>
    </div>
  )
}

function MiddleMenu() {
  return (
    <div className="flex gap-10 text-white cursor-pointer">
      <div>Home</div>
      <div>Notifications</div>
      <div>Messages</div>
      <Link to="/login" className="hover:text-black">
        <div>Login</div>
      </Link>
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
        <img src="https://placekitten.com/200/200" alt="kitten" />
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
