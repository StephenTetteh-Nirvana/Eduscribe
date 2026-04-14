const HeroSection = () => {
    return (
        <div className="bg-[var(--primary)] w-full flex items-center justify-center h-screen">

            <div className="flex flex-col">
              <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-white font-[900] text-[var(--primary)] text-center ">Welcome to Eduscribe</h1>

              <p className="text-[14px] text-white text-center md:w-[600px] mx-auto mt-1">Empowering learners and professionals with accesible, quality and ethical academic asssitance through innovative mobile technology.</p>

              <button className="bg-[var(--accent)] text-white rounded-full p-3 mt-2 w-[200px] mx-auto cursor-pointer">Learn More</button>
            </div>
        </div>
    )
}

export default HeroSection