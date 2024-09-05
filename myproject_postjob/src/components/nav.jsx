import LogoPostJob from "../assets/icon/Logo.svg"
const Nav=()=>{
    return(
        <section className="flex justify-between p-14">
            <div className="ml-24 flex space-x-12">
                <div className="flex">
                    <img className="w-7 h-7" src={LogoPostJob} alt=""/><label className="text-white">PostJob</label>
                </div>
                <div className="space-x-5 text-[rgba(97,98,97,255)] sm:invisible 2xl:visible
                xl:visible lg:invisible md:invisible">
                    <a href="#">AI Cover Letter Generator</a>
                    <a href="#">Resume Template</a>
                    <a href="#">Pricing</a>
                </div>
            </div>
            <div className="mr-24 flex gap-3">
                <button className="h-10 w-28 bg-none border-2 border-[rgba(107,227,83)] rounded-xl text-white
                hover:bg-[rgba(107,227,83)] hover:text-black font-semibold">
                    Sign In
                </button>
                <button className="h-10 w-36 bg-[rgba(107,227,83)] text-black rounded-xl font-semibold">
                    Get started
                </button>
            </div>
        </section>
    )
}

export default Nav