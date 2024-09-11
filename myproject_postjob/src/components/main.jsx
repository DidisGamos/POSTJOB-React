import Nav from "./nav.jsx"
import BodyPostJob from "./secpostjob.jsx"
import SubmitPostJob from "./subpostjob.jsx"

const Main=()=>{
    return(
        <div className="bg-[rgb(22,24,21,255)] h-auto font-SFProText w-full">
            <Nav/>
            <BodyPostJob />
            <SubmitPostJob/>
        </div>
    )
}

export default Main