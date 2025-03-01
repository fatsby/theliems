function Card({ name, subject, imageURL }){
    return(
        <div className="h-70 w-75 bg-zinc-900 rounded-lg shadow-lg shadow-zinc-900 shadow-transparent flex flex-col items-center">
                <img className="w-36 h-36 rounded-full mt-4" src={imageURL} alt="profile picture"></img>
                <h2 className="font-bold text-xl mt-4">{name}</h2>
                <p className="text-gray-400">{subject}</p>
        </div>
    );
}

export default Card