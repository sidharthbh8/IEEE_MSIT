import "./AboutEventsComponent.css"
import eventImage from "../../Assets/eventSamplejpg.jpg"
var HostName = "Host_name";
function AboutEventsComponent() {
    return (
        <div className="About_component">
            <div className="host_info">
                Host - <span>{HostName}</span>
            </div>
        </div>
    );
}
export default AboutEventsComponent;