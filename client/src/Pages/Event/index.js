import Head from "../../components/Event/Head";
import ContactUs from "../../components/Event/Contact";
import Description from "../../components/Event/Description";
import Location from "../../components/Event/Location";
import MoreEvents from "../../components/Event/MoreEvents";
import "./style.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const EventsPage = () => {
    const location = useLocation();
  const { desc, date, image } = location.state || {};
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
            <Head image={image}/>
            <div className="container2">
                <div className="description"><Description  description={desc} eventDate={date}/></div>
                <div className="location"><Location /></div>
            </div>
            <ContactUs />
            <MoreEvents />
        </>
    );
};
export default EventsPage;

