const userData = [
    {
        isOnline : false,
        profileImg : "",
        fullName : "Siva R",
        role : "Java Developer",
        skills : ["Java","Selenium","SQL"]
    }
    ,
    {
        isOnline : true,
        profileImg : "images/1.jpeg",
        fullName : "Selva M",
        role : "Python Developer",
        skills : ["python","SQLite","tkinter","pandas","openpyxl"]
    }
    ,
    {
        isOnline : false,
        profileImg : "",
        fullName : "Siva Prakash",
        role : "Full Stack Developer",
        skills : ["React JS","Node JS","SQL"]
    }
    ,
    {
        isOnline : false,
        profileImg : "images/2.jpg",
        fullName : "Sakthivel Prasanna",
        role : "Front-End Developer",
        skills : ["React JS","HTML","CSS","Javascript"]
    }
    ,
    {
        isOnline : true,
        profileImg : "",
        fullName : "Surya K",
        role : "Technical Member Staff",
        skills : ["Java","Spring","SQL"]
    }
]
const Profile = (probs) => {
return(
    <div className="profile-card">
        <img className={probs.isOnline?"profile-img-online":"profile-img-offline"} src={probs.profileImg} alt=""/>
        <p className="online-status">{probs.isOnline?"Online":"Offline"}</p>
        <h1>{probs.fullName}</h1>
        <p>{probs.role}</p>
        <div className="Buttons">
            <button className="message-btn">Message</button>
            <button className="follow-btn">Follow</button>
        </div>
        <br></br>
        <div className="skills-container">
            <h3>Skills</h3>
            <ul>
                {probs.skills.map((data,index)=>(<li key={index}>{data}</li>))}
            </ul>
        </div>
    </div>
)
}

export const  ProfileCard = () => {
    return(
        <div className="main-container">
        {
            userData.map((data,index)=>(<Profile key={index} isOnline={data.isOnline} profileImg = {data.profileImg} fullName={data.fullName} role={data.role} skills={data.skills} />))
        }
        </div>
    )
}