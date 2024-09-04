import LogoPostJob from "../assets/icon/Logo.svg"
const Nav=()=>{
    return(
        <section className="flex justify-between p-20">
            <div className="flex gap-10">
                <div className="flex">
                    <img src={LogoPostJob} alt=""/><label>PostJob</label>
                </div>
                <div>
                    <a href="#" className="m-5">AI Cover Letter Generator</a>
                    <a href="#" className="m-5">Resume Template</a>
                    <a href="#" className="m-5">Pricing</a>
                </div>
            </div>
            <div>
                <button>Sign In</button>
                <button>Get Started</button>
            </div>
        </section>
    )
}

export default Nav