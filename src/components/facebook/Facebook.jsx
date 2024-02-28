import LeftMenu from './LeftMenu'

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
          <FacebookLogo />
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
    </div>
  )
}

function Card() {
  return (
    <div
      role="status"
      className="animate-pulse border border-gray-300 p-4 rounded-md shadow-md"
    >
      <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded mb-4">
        <svg
          className="w-10 h-10 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
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
