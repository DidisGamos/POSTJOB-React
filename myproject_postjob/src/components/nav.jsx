import LogoPostJob from "../assets/icon/Logo.svg"
const Nav=()=>{
    return(
        <section className="flex justify-between p-20">
            <div className="flex gap-10">
                <div className="flex">
                    <img src={LogoPostJob} alt=""/><label className="text-white">PostJob</label>
                </div>
                <div className="text-[rgba(97,98,97,255)]">
                    <a href="#" className="m-5">AI Cover Letter Generator</a>
                    <a href="#" className="m-5">Resume Template</a>
                    <a href="#" className="m-5">Pricing</a>
                </div>
            </div>
            <div className="flex gap-5">
                <a href="#">Sign In</a>
                <a href="#">Get Started</a>
            </div>
        </section>
    )
}

export default Nav