import "./HomeComponent.css"
import CompImg from "../../Assets/Image3.png";

function HomeComponent() {
    return (
        <div className="home">
            <h1>Home</h1>
            <div className="home_content">
                <div className="home_text">
                    <h2>Lead a wave of <span>change</span></h2>
                    <p>Technical society for Engineering, Computing, and Technology Information.</p>
                    <p>Effective networking channel </p>
                    <p>While the World benefits from whats new, IEEE focuses on whats new, IEEE
                    focuses on whats next</p>
                </div>
                <img src={CompImg} className="home_Img"/>
            </div>   
        </div>
    );
}
export default HomeComponent;