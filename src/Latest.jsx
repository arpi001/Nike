

const Latest = () => {
  return (
    <>
    <h1 className="mx-10 my-10 text-2xl font-semibold">The Latest</h1>
    <first className="flex justify-between mx-10 overflow-hidden relative">
    <div className="absolute top-1 left-4 px-6 py-4 text-black">
        <p className="text-xl font-bold mx-1">White Sneakers Shoes</p>
        <p className="text-2xl font-bold text-center mt-3">That Early-2000s Vibe.</p> 
        <button className="text-xl bg-white white-black px-5 py-2 rounded-3xl mt-5 shadow-lg">Shop</button>
    </div>
        <img src="https://images.unsplash.com/photo-1626379625260-7111605463e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img1" className="w-1/2 mx-4 h-auto"/>
        <img src="https://images.unsplash.com/photo-1638336530595-f0796327aa90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" className="w-1/2 mx-4 h-auto"/>
    </first>
    </>
  )
}

export default Latest