import ImgProject from "../assets/illustration/image-project.png"

const SubmitPostJob = () => {
    return (
        <div className="flex justify-center items-center mt-24">
            <div className="text-center h-auto bg-[rgba(107,227,83)] w-10/12 rounded-xl">
                <div>
                    <p className="mt-10 text-5xl text-center">Submit Better job <br /> application</p>
                    <h1 className="pb-2 text-9xl">10x faster</h1>
                    <p className="pb-2">AI cover letter generator, resume keyword checker, outreach <br /> message whiter, and more. Powered by GPT</p>
                </div>
                <div className="flex justify-center">
                    <img src={ImgProject} alt="" className="max-w-6xl md:max-w-2xl lg:max-w-4xl xlg:max-w-6xl x2lg:max-w-5xl" />
                </div>
            </div>
        </div>
    )
}

export default SubmitPostJob