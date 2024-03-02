import { Link } from 'react-router-dom'
import { FacebookLogo } from '../facebook/Facebook'

function Register() {
  return (
    <div className="flex mx-auto justify-center m-5">
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
          <div className="mt-2 mb-2">
            <div>What's your gender</div>
            <div>
              <div>
                <input type="radio" name="gender" /> Man
              </div>
              <div>
                <input type="radio" name="gender" /> Woman
              </div>
            </div>
          </div>
          <div>
            <div>When were you born?</div>
            <input type="date" className="p-1 border" />
          </div>
          <div className="flex gap-2 my-4 items-center">
            <label>City</label>
            <select className="border rounded ml-2 p-1">
              <option>Amsterdam</option>
              <option>Barcelona</option>
              <option>Cancun</option>
            </select>
          </div>
          {/* <div className="mt-2 mb-2">
            <div>Upload a picture</div>
            <div>
              <div>
                <input type="file" />
              </div>
            </div>
          </div> */}
          {/* <div className="my-4">
            <textarea
              name="comments"
              className="border p-1"
              placeholder="write ur comment"
            ></textarea>
          </div> */}
          <div>
            <input type="checkbox" className="mr-2" />
            Keep logged in
          </div>
          <div className="flex justify-end gap-2">
            <button className="border rounded bg-blue-600 text-white p-4 py-2 mt-2">
              Register
            </button>
            <Link to="/">
              <button className="border rounded bg-blue-100 text-black p-4 py-2 mt-2">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
