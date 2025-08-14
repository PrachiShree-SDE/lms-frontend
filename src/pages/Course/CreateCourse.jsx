import { useDispatch } from "react-redux";
import HomeLayout from "../../layouts/HomeLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { CreateNewCourse } from "../../redux/slices/courseSlice";
 import { Link } from "react-router-dom";
 import { AiOutlineArrowLeft } from "react-icons/ai";

function CreateCourse() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput ] = useState({
        title: "",
        description: "",
        category: "",
        thumbnail: null, //file
        previewImage: ""

    });


    function handleImageUpload (e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(uploadedImage) {
           const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function() {
                setUserInput({
                    ...userInput,
                    thumbnail: uploadedImage,
                    previewImage: this.result
                });
            } );
        }

    } 

    function handleUserInput(e) {
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    }

  async  function onFormSubmit (e) {
        e.preventDefault();
        if(!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail){
           toast.error("All fields are mandatory");
            return;
        }
        const response =await dispatch(CreateNewCourse(userInput));
        console.log(response);
        if(response?.payload?.success) {
           setUserInput({
                 title: "",
                description: "",
                category: "",
                thumbnail: null, //file
                previewImage: ""
           });
           navigate("/courses");

        }

    }


return(
        <HomeLayout>
            <div className="h-[100vh] flex items-center justify-center">

                  <form 
                        onSubmit={onFormSubmit}

                        className="flex flex-col 
                        items-center justify-center h-[500px] p-4 gap-5 w-[700px] my-10 shadow-[0_0_10px_black]"
                       
                  >
                  <div className="w-full flex items-center justify-start">
                        <Link onClick={() => navigate(-1)} className="  top-8  text-2xl link  text-accent  cursor-pointer" >
                           <AiOutlineArrowLeft /> 
                        </Link>
                  </div>
                    <h1 className=" flex text-center text-2xl  font-bold">
                        Create new course
                    </h1>

                    <main className="flex gap-x-10">
                        {/**left */}
                        <div className="gap-y-6">
                            <div>
                                    <label htmlFor="image_uploads" className="cursor-pointer">
                                        {userInput?.previewImage?(
                                            <img 
                                                src={userInput?.previewImage}
                                                className="w-full h-44 m-auto border"
                                            />
                                        ):(
                                            <div className="w-full h-44 m-auto flex items-center justify-center border  ">
                                                <h1 className="font-bold text-lg ">upload course thumbnail</h1>
                                            </div>
                                        )}
                                    </label>
                                    <input
                                    className="hidden"
                                     type="file"
                                     id="image_uploads"
                                     accept=".jpg, .png, .jpeg, .svg "
                                     name="image_uploads"
                                     onChange={handleImageUpload}
                                    />
                            </div>
                            <div className="flex flex-col gap-1">

                                <label 
                                htmlFor="title"
                                className="text-lg font-semibold"
                                >
                                    Course title
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="enter the title of the course"
                                    onChange={handleUserInput}
                                    value={userInput.title}
                                    className="bg-transparent px-2 py-1 border"

                                 />

                            </div>
                        </div>
                        {/**right */}

                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-1 ">
                                   <label 
                                        htmlFor="createdBY"
                                        className="text-lg font-semibold"
                                   >
                                   Instructor
                                   </label>

                                <input
                                    required
                                    type="text"
                                    name="createdBY"
                                    id="createdBY"
                                    placeholder="enter the instructor of the course"
                                    onChange={handleUserInput}
                                    value={userInput.createdBY}
                                    className="bg-transparent px-2 py-1 border"

                                 />
                            </div>


                             <div className="flex flex-col gap-1 ">
                                   <label 
                                        htmlFor="category"
                                        className="text-lg font-semibold"
                                   >
                                   Category
                                   </label>

                                <input
                                    required
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="enter the category of the course"
                                    onChange={handleUserInput}
                                    value={userInput.category}
                                    className="bg-transparent px-2 py-1 border"

                                 />
                            </div>


                             <div className="flex flex-col gap-1 ">
                                   <label 
                                        htmlFor="description"
                                        className="text-lg font-semibold"
                                   >
                                   Description
                                   </label>

                                <textarea
                                    required
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="enter the description of the course"
                                    onChange={handleUserInput}
                                    value={userInput.description}
                                    className="bg-transparent px-2 py-1 border h-30 resize-none overflow-y-scroll"

                                 /> 
                            </div>

                        </div>
                    </main>

                    <button
                     type="submit"
                     className="w-full py-2 rounded-sm font-semibold text-lg cursor-pointer bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300" 
                     >
                            Create Course
                    </button>

                  </form>

            </div>
        </HomeLayout>
);

}

export default CreateCourse;