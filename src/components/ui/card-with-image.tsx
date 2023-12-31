
interface ProjectCardProp{
    text:string;
    heading:string;
    imgSource:string;
}



export function ProjectCard({text,heading,imgSource}:ProjectCardProp){
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
                <img className="rounded-t-lg" src={imgSource} alt="image" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
                </a>
                <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">{text}</p>
                
            </div>
        </div>
        
    )
    
    
}
 export default ProjectCard;
