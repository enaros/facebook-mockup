function login() {
  return (
    <div className="flex mx-auto justify-center m-5">
      <div className="border rounded p-4">
        <form action="">
          <div>
            <div>Email</div>
            <input
              type="email"
              className="border"
              placeholder="example@google.com"
            />
          </div>
          <div>
            <div>Password</div>
            <input
              type="text"
              className="border"
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
          <div className="flex gap-2 my-4">
            <label>City</label>
            <select>
              <option>Amsterdam</option>
              <option selected>Barcelona</option>
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
          <div className="my-4">
            <textarea
              name="comments"
              className="border p-1"
              placeholder="write ur comment"
            ></textarea>
          </div>
          <div>
            <input type="checkbox" className="mr-2" />
            Keep logged in
          </div>
          <div className="flex justify-end gap-2">
            <button className="border bg-blue-600 text-white p-4 py-2 mt-2">
              Login
            </button>
            <button className="border bg-blue-100 text-black p-4 py-2 mt-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default login
