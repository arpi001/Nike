

const Seconds = () => {
  return (
    <>
    <first>
        <h1 className="ml-20 text-3xl font-semibold tracking-wider">Featured</h1>
    </first>
    <second className="w-full flex justify-center items-center relative">
    <div className="absolute top-10 left-20 px-6 py-4 text-black">
        <p className="text-7xl text-white font-extrabold w-1/2">THIS SEASONS'S FRESH FITS</p>
        <p className="text-4xl font-bold text-white text-center mt-6">Step into the new year with a wardrobe refresh that bring out your best personal style.</p> 
        <button className="text-2xl bg-white white-black px-5 py-2 rounded-3xl font-bold mt-5">Shop</button>
    </div>
        <img src="https://images.unsplash.com/photo-1597949992171-689c5673b936?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="shoes" className="mt-10 ml-20 mr-20 overflow-hidden"/>
    </second>
    </>
  )
}

export default Seconds