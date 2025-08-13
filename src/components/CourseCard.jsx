import { useNavigate } from "react-router-dom";

function CourseCard ({data}) {
    const navigate = useNavigate();

    return(
        <div
         className="text-white w-[22rem] h-[430px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700"
         >
            <div
            onClick={() => navigate("/course/desciption", {state: {...data}} )} 
            className="overflow-hidden">   
                <img 
                 alt="Course thumbnail"
                 src={data?.thumbnail?.secure_url} 
                 className="h-48 w-full rounded-tl-lg rounded-tr-lg group:hover:scale = [1,2] transition-all ease-in-out duration-300"
                />
                <div className="p-3 space-y-1 text-white ">
                    <h2 className="text-cl font-bold text-yellow-500 line-clamp-2">
                        {data?.title}
                    </h2>
                    <p className="line-clamp-2">
                         {data?.description}
                    </p>
                    <p className="font-semibol">
                       Category: <span className="font-bold text-yellow-500">{data?.category}</span>
                    </p>
                     <p className="font-semibol">
                      Instructor: <span className="font-bold text-yellow-500">{data?.createdBy}</span>
                    </p>
                     <p className="font-semibol">
                      Total Lectures: <span className="font-bold text-yellow-500">{data?.numberOfLecture}</span>
                    </p>
                </div>
            </div>
        </div>
    );

}

export default CourseCard;