import { FacebookLogo } from '../facebook/Facebook'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="flex flex-col w-[250px] mx-auto justify-center m-5">
      <div className="border rounded-md p-6 shadow-md">
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10">
            <FacebookLogo />
          </div>
        </div>
        <form action="" className="space-y-4">
          <div>
            <div>Email</div>
            <input
              type="email"
              className="border p-2 rounded"
              placeholder="example@google.com"
            />
          </div>
          <div>
            <div>Password</div>
            <input
              type="text"
              className="border p-2 rounded"
              placeholder="write 8 chars or more "
            />
          </div>
          <div>
            <input type="checkbox" className="mr-2" />
            Keep logged in
          </div>
          <div className="flex justify-end gap-2">
            <button className="border rounded bg-blue-600 text-white p-4 py-2 mt-2">
              Login
            </button>
            <Link to="/">
              <button className="border rounded bg-blue-100 text-black p-4 py-2 mt-2">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
      <Link to="/register" className="underline text-blue-500 mx-auto mt-4">
        Create new account
      </Link>
    </div>
  )
}

export default Login
