import IconFile from "../assets/icon/file.svg";
import IconPointAccess from "../assets/icon/radio.svg"
import IconScan from "../assets/icon/maximize.svg"
const BodyPostJob=()=>{
    return(
        <div className="flex flex-col items-center ssm:text-center justify-center">
            <h1 className="text-8xl text-[rgba(107,227,83)] ssm:text-7xl lg:text-8xl">Win your dream job</h1>
            <h1 className="text-8xl text-white ssm:text-7xl lg:text-8xl">with PostJob</h1>
            <div className="w-4/12 text-md text-[rgba(97,98,97,255)] mt-5 text-center ssm:w-5/6 sm:w-5/6 md:w-5/6
            lg:w-5/6">
                Submit better job app - 10x faster. AI cover letter <br />
                generator, resume keyword checker, outreach message <br />
                writer, and more. Powered by GPT
            </div>
            <div className="w-4/12 h-14 flex justify-between rounded-2xl border-2 border-[rgba(97,98,97,255)]
            mt-5 ssm:w-5/6 sm:w-5/6 lg:w-4/12">
                <input type="email" name="" id="" placeholder="Your Email" className="bg-transparent 
                text-[rgba(97,98,97,255)] ml-10 outline-none"/>
                <button className="mr-1.5 w-4/12 h-10 mt-1.5 text-center items-center bg-[rgba(107,227,83)]
                rounded-xl text-[rgb(22,24,21,255)]">Started For Free</button>
            </div>
            <div>
                <div className="grid text-start gap-10 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-3">
                    <div className="w-82 p-5 rounded-xl h-auto bg-[rgba(30,32,29)]">
                        <img className="" src={IconFile}/>
                        <p className="text-white font-semibold mt-3">AI Cover Letter Generator</p>
                        <div className="text-[rgba(97,98,97,255)] mt-3 w-80">
                            The AI Cover Letter Generator is a tool that uses artificial intelligence <br /> algorithm s to create
                            personalized cover letters for job applicants.
                        </div>
                    </div>
                    <div className="w-82 p-5 rounded-xl h-auto bg-[rgba(30,32,29)]">
                        <img className="" src={IconPointAccess}/>
                        <p className="text-white font-semibold mt-3">Smart Personalization</p>
                        <div className="text-[rgba(97,98,97,255)] mt-3 w-80">
                            Smart Personalization refers to the use <br /> of data and technology to deliver <br /> tailored experiences and content
                            to individual customers or users.
                        </div>
                    </div>
                    <div className="w-82 p-5 rounded-xl h-auto bg-[rgba(30,32,29)]">
                        <img className="" src={IconScan}/>
                        <p className="text-white font-semibold mt-3">Resume Scanner</p>
                        <div className="text-[rgba(97,98,97,255)] mt-3 w-80">
                            A resume scanner is a software <br /> application that uses optical character recognition (ORC) technology to extract <br />
                            and analyze data from resumes.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyPostJob