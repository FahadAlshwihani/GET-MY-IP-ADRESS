import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const AboutUs = () => {
    return (
        <>
            <header>
                <Header />

            </header>

            <main className="container">
                <div className="row-sm-9 mt-3 d-flex justify-content-center">
                    <div className="col">
                        <div className="card rounded">
                            <div className="card-header rounded">
                                <div className="card-body">
                                    <h1 className="mt-1">About us</h1>
                                    <h4 className="mt-5"><strong>Welcome to Get My IP Address!</strong></h4>
                                    <small>At Get My IP Address, we simplify the process of discovering your IP address. Whether you're a tech enthusiast, a developer, or just curious, our user-friendly platform provides quick and accurate results.</small>
                                    <br /><br /><p className="border-bottom"></p>
                                    <h4 className="mt-5"><strong>Our Mission</strong></h4>
                                    <small>Our mission is to make IP address identification effortless and accessible for everyone. We aim to provide a seamless experience with a clean interface and reliable information.</small>
                                    <br /><br /><p className="border-bottom"></p>
                                    <h4 className="mt-5"><strong>Meet the Creator</strong></h4>
                                    <small>Hello! I'm Eng. Fahad, the developer behind Get My IP Address. With a passion for technology and user experience, I created this tool to help individuals easily find their IP addresses without any hassle.</small>
                                    <br /><br /><p className="border-bottom"></p>
                                    <br /><h5 className="text-center mt-3"><small>Developed with <small><i className="bi bi-heart-fill" style={{ color: 'red' }}></i><br /></small> <strong>Stay Connected </strong>Follow me on LinkedIn, and GitHub to stay updated on new features and tech insights.</small></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <Footer />

            </footer>
        </>
    );
}

export default AboutUs;