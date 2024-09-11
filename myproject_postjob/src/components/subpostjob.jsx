import ImgProject from "../assets/illustration/image-project.png"

const SubmitPostJob = () => {
    return (
        <div className="flex justify-center items-center mt-24">
            <div className="text-center h-auto bg-[rgba(107,227,83)] w-10/12 rounded-xl">
                <div>
                    <p className="mt-10 text-[48px] font-semibold text-center">Submit Better job <br /> application</p>
                    <h1 className="text-[152px] font-semibold leading-normal">10x faster</h1>
                    <p className="pb-2">AI cover letter generator, resume keyword checker, outreach <br /> message whiter, and more. Powered by GPT</p>
                </div>
                <div className="flex justify-center bg-gradient-to-b from-transparent/0 to-black/80">
                    <img src={ImgProject} alt="" className="object-cover mix-blend-overlay max-w-6xl md:max-w-2xl lg:max-w-4xl xlg:max-w-6xl 2xlg:max-w-5xl" />
                </div>
            </div>
        </div>
    )
}

export default SubmitPostJob