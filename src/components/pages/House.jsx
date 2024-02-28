function Houses() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-10 grid-rows-1 bg-pink-200">
        <div className="bg-pink-500">1</div>
        <div className="bg-pink-500">
          <div className="grid gap-3 grid-cols-3 grid-rows-3 bg-pink-200">
            <div className="bg-pink-500">1</div>
            <div className="bg-pink-500">2</div>
            <div className="bg-pink-500">3</div>
            <div className="bg-pink-500">4</div>
            <div className="bg-pink-500">5</div>
            <div className="bg-pink-500">6</div>
            <div className="bg-pink-500">7</div>
            <div className="bg-pink-500">8</div>
            <div className="bg-pink-500">9</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-36  bg-pink-200">
        <div className="bg-pink-500 col-span-2">
          3
          <div className="flex grid-cols-2 gap-2 grid-rows-1 bg-sky-200">
            <div className="bg-sky-500">3.1</div>
            <div className="bg-sky-500">3.2</div>
          </div>
          <div className="flex grid-cols-2 grid-rows-1 gap-2 bg-sky-200">
            <div className="bg-sky-500">5.1</div>
            <div className="bg-sky-500">5.2</div>
          </div>
        </div>
        <div className="bg-pink-500">
          4{' '}
          <div className="flex grid-cols-2 justify-between grid-rows-1 gap-2 bg-sky-200">
            <div className="bg-sky-500">4.1</div>
            <div className="bg-sky-500">4.2</div>
          </div>
          <div className="bg-pink-500">6</div>
        </div>
      </div>
    </div>
  )
}

export default Houses
