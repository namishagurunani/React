import image1 from "./assets/images/img1.jpg"
import './body.css'

function Body(){
    return(
        <div className="container">
            <div className="imageContainer">
                <img src={image1} alt="Family" className="bodyImg" />
                <div className="icons">
                    <i class="fa-solid fa-chevron-left"></i>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            
            <div className="section1">
                <div className="title">
                    <p className="titleHead">Think Health. Think Massage.</p>
                    <p className="titleinfo">We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 987-654-3210 today!</p>
                </div>
                <div className="buttons">
                    <button className="btn1">LEARN MORE ABOUT US</button>
                    <button className="btn2">CONTACT US TODAY</button>
                </div>
            </div>
            <div className="section2">
                <div className="subsection">
                    <p className="para1">Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
                    <p className="para2">We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
                    <p className="para3">We welcome you to come explore all the benefits you’ll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.</p>
                </div>
            </div>
            <div className="border">
            </div>
            <div className="section3">
                <div className="sec3Title">
                    <p className="section3_head">Family Wellness Massage Therapy</p>
                </div>
                <div className="sec3Details">
                    <p>9876 Main Street, Suite 123, Mainland, ML12345</p>
                    <p>Phone: 987.654.3210</p>
                </div>
            </div>
            
        </div>
    );
}

export default Body;