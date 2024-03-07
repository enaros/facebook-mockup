import { Link } from 'react-router-dom'
import { FacebookLogo } from '../facebook/Facebook'
import { useState } from 'react'
import axios from 'axios'
// axios.defaults.withCredentials = true

function Register() {
  const [password, setPassword] = useState('')

  const submit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const formObject = Object.fromEntries(form.entries())
    console.log('form data', formObject)
    // console.log('password', event.target.password.value)

    // post form to api
    const url = 'https://dummyjson.com/users/add'
    try {
      const response = await axios.post(url, formObject)
      console.log(response, response.data)
    } catch (e) {
      console.log(e.message)
    }
  }

  const validatePassword = () => {
    if (password.length < 4) return 'password must be at least 4 chars'
    return true
  }

  return (
    <div className="flex flex-col w-[250px] mx-auto justify-center m-5">
      <div className="border rounded-md p-6 shadow-md">
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10">
            <FacebookLogo />
          </div>
        </div>
        <form className="space-y-4" onSubmit={submit}>
          <div>
            <div>Email</div>
            <input
              type="email"
              name="email"
              className="border p-2 rounded"
              placeholder="example@google.com"
            />
          </div>
          <div>
            <div>Password</div>
            <input
              type="password"
              name="password"
              className="border p-2 rounded"
              placeholder="write 8 chars or more"
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length > 0 && validatePassword() !== true && (
              <div className="text-red-400 text-xs mt-1">
                {validatePassword()}
              </div>
            )}
          </div>
          <div className="mt-2 mb-2">
            <div>What's your gender?</div>
            <div>
              <div>
                <label className="cursor-pointer">
                  <input type="radio" name="gender" value="man" /> Man
                </label>
              </div>
              <div>
                <label className="cursor-pointer">
                  <input type="radio" name="gender" value="woman" /> Woman
                </label>
              </div>
            </div>
          </div>
          <div>
            <div>When were you born?</div>
            <input type="date" name="birthday" className="p-1 border" />
          </div>
          <div className="flex gap-2 my-4 items-center">
            <label>City</label>
            <select className="border rounded ml-2 p-1" name="city">
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
            <input type="checkbox" name="keepLoggedIn" className="mr-2" />
            Keep me logged in
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
      <Link to="/login" className="underline text-blue-500 mx-auto mt-4">
        Login
      </Link>
    </div>
  )
}

export default Register
