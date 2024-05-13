

const Navbar = () => {
  return (
    <>
    <div className="flex justify-evenly mt-5">
        <first className="flex gap-8 font-sans">
          <img src="https://static.vecteezy.com/system/resources/previews/010/994/232/non_2x/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt="logo" className="h-10 w-12" />
            <h1 className="font-bold text-2xl ml-8">Nike</h1>
            <button className="bg-zinc-500 text-white font-bold px-2 py-1 right-2 rounded">PRO</button>
            <div className="flex gap-12 text-zinc-600 font-semibold">
                <h2>Men</h2>
                <h2>Women</h2>
                <h2>Kids</h2>
            </div>
        </first>
        <second className="flex gap-5">
            <button className="bg-zinc-400 rounded px-3 py-1 text-white font-bold mr-2 hover:bg-slate-800">Search</button>
            <button className="bg-zinc-100 rounded px-3 py-1 font-bold border-2 border-zinc-400">Sign in</button>
        </second> 
    </div>
    </>
  )
}

export default Navbar