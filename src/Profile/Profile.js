import React from 'react';



const Profile =({fullName,bio,profession,children,HandleName})=>{


    return (
            <div className="Profile">
                <h1>{fullName}</h1>
                <img src={children} width="340px" height="400px" onClick={()=>HandleName(fullName)} />
                <p>{bio} </p>
                <h3>{profession}</h3>   

            </div>


    )



}

export default Profile 