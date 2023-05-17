import svg from "../assets/svg/user.svg"

function UserProfile(){
    
    return(
        <>
        <div className="toatal-user-profile text-slate-100 flex flex-col items-center justify-center gap-3 pt-4">
            <div className="userlog text-3xl">User Log</div>
            <div className="w-1/2 border-4 rounded-full border-lime-100 py-2 px-2">
                <img  className="" src={svg}/>
            </div>
            <div className="username text-2xl">
                User Name
            </div>
        </div>
        </>

    )
}
export default UserProfile