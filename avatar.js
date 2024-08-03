import React from "react";

export default function Avatar(props) {
    return (
      <>
        <img
            className="avatar"
            src="https://robohash.org/deebug"
            alt="Deebug Institute"
            width={500}
            height={500}

        />
        <p>{props.name}</p>
        </>
    );

}
