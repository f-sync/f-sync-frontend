import NavBar from "./NavBar";
const About = () => {
    return (
        <div className="page_container">
            <NavBar />
            <h1 className="page_title">F-sync</h1>
            <p className="title_description">Fashion-as-a-service</p>

            <h2 className="about_title">Technology</h2>
            <p className="about_description">A seamless, branded user experience for your customers. A
            backend system giving you full visibility. Designed to work at scale.</p>
        
            <h2 className="about_title">Operations</h2>
            <p className="about_description">Stock management, request products across locations, delivery &
            returns partnerships - we’ve got it down to a science.</p> 
            <h2 className="about_title">Data</h2>
            <p className="about_description">Get the reporting you need to keep track of stock levels in realtime across your different sales channels</p> 

        </div>
    )
}

export default About
