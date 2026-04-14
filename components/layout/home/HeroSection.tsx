const HeroSection = () => {
    return (
        <div className="bg-[var(--primary)] w-full flex items-center justify-center h-[40vh]">

            <div className="flex flex-col gap-1">
              <h1 className="text-[32px] text-white font-[900] text-[var(--primary)] text-center ">Welcome to Eduscribe</h1>
              <p className="text-white text-center w-[400px]">Empowering learners and professionals with accesible, quality and ethical academic asssitance through innovative mobile technology.</p>
              <button className="bg-white rounded-full border border-white p-3 ">Learn More</button>
            </div>
        </div>
    )
}

export default HeroSection