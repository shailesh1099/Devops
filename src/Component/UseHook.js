import React from 'react'

const UseHook = () => {

    const myBioData =[
        {Name:"Shailesh", Age: 38, RollNumber:99},
        {Name:"Jack", Age: 22, RollNumber:101}
    ]

    const [myArray, setMyArray] = React.useState(myBioData);

    const ChangeArray  =(id) =>{
        console.log(myArray);
            setMyArray([...myArray], myArray[0].Name="",myArray[0].Age=null)
    }
    return (
        <div>
            <h1>React</h1>
            {
            myArray.map((currentElement) =>{
                return (
                    <>
                    <hr/>
                    Name is : {currentElement.Name}
                    <hr/>
                   and Age is:  {currentElement.Age}
                    </>
                )

            })
        }
    <input type="submit"  onClick={ChangeArray}/>
        </div>
    )
}

export default UseHook
