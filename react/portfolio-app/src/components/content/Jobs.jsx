
export function Job({img,msg,name,period}) {


    return (
        <>
            <img src={img} alt={msg}/>
            <p className="job-name">{name}</p>
            <p className="job-period">{period}</p>
        </>
    );
}

export function Jobs() {
    const jobs = [
        {
            "img" : "/portfolio_image/jobs/google.png",
            "msg" : "google_img",
            "name" : "Google As Junior Software Engineer",
            "period" : "2019 Oct - Until now"
        },
        {
            "img" : "/portfolio_image/jobs/samsung.png",
            "msg" : "samsung_img",
            "name" : "Samsung As Junior Software Engineer",
            "period" : "2010 Oct - 2019 Oct"
        }
    ]
    return (
         <ul className="jobs">
            { jobs && jobs.map((job)=> 
                <li className="job">
                        <Job img={job.img}
                            msg={job.msg}
                            name={job.name}
                            period={job.period}/>
                </li>
            )}
        </ul>
    );
}