function Houses() {
  return (
    <div className="container mx-auto">
      {/* searches for houses */}
      <div className="flex justify-between gap-1 grid-cols-5 grid-rows-1 bg-sky-200">
        <div className="bg-sky-500">1</div>
        <div className="bg-sky-500">2</div>
        <div className="bg-sky-500">3</div>
        <div className="bg-sky-500">4</div>
        <div className="bg-sky-500">5</div>
        <div className="bg-sky-500">6</div>
      </div>
      <div className="grid gap-4 grid-cols-5 grid-rows-2 bg-pink-200">
        <div className="bg-pink-500">1</div>
        <div className="bg-pink-500">2</div>
        <div className="bg-pink-500">3</div>
        <div className="bg-pink-500">4</div>
        <div className="bg-pink-500">5</div>
        <div className="bg-pink-500">6</div>
        <div className="bg-pink-500">7</div>
      </div>
    </div>
  )
}

export default Houses
