import React from 'react'

function Home(props) {
    return (
        <div>
            value is :{props.a} <br />

            the string value is :{props.str}

            <br />
            The object value are
            <br />
            name :{props.obj.name}
            <br />
            age :{props.obj.age}
            <br />
            Emial :{props.obj.email}


            Array elements are :{props.arr[2]}

            {console.log("hello")}

            

            <h2>This is my home page</h2>
        </div>
    )
}

export default Home