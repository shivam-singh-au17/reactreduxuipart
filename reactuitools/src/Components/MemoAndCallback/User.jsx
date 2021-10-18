import React, { memo } from "react";

const User = ({name, age}) => {
    return (
        <div>
            <h1>My name is {name}, And I'm { age} year old.</h1>
        </div>
    )
}

const MemUser = memo(User, function (name, age){
    return name.name === age.name
})

export { MemUser };
