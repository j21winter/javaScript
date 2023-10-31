import React, { useState }from "react"

const Box = (props) => {
    const [input, setInput] = useState("")
    const [height, setHeight] = useState("50")
    const [width, setWidth] = useState("50")
    const [colorList, setColorList] = useState([])

    const handleForm = (e) => {
        e.preventDefault()
        // if input is not empty on submit, then we will create an object with the form input variables
        if(input){
            
            const formObject = {
                "color": input,
                "height": height,
                "width": width
            }
            setColorList([...colorList, 
                {
                    "color": input,
                    "height": height,
                    "width": width
                }
            ])
            console.log(formObject.color, formObject.height, formObject.width)
        }
        // reset the variables shown on the form for the next input
        setInput("")
        setHeight("50")
        setWidth("50")
    }

    // Keep the color input state variable updated
    const handleInput = (e) =>{
        const inputValue = e.target.value 
        setInput(inputValue)
    }

    // Keep the height input state variable updated
    const handleHeight = (e) =>{
        const inputValue = e.target.value 
        setHeight(inputValue)
    }

    // Keep the width input state variable updated
    const handleWidth = (e) =>{
        const inputValue = e.target.value 
        setWidth(inputValue)
    }

    // Function to create an object for inline styling on a box
    const boxStyle = (inputColor, inputHeight, inputWidth) => ({
        backgroundColor:  inputColor,
        height: inputHeight + "px",
        width: inputWidth + "px",
        margin: "5px"
    })

    return(
        <>
            {/* form to gain inputs */}
            <form className="form" onSubmit={ handleForm }>
                <div>
                    <label htmlFor="color">Pick a color:</label>
                    <input type="text" value={ input } onChange={ handleInput } placeholder="new color"/>
                </div>
                <div>
                    <label htmlFor="color">Height(px):</label>
                    <input type="number" value={ height } onChange={ handleHeight }/>
                </div>
                <div>
                    <label htmlFor="color">Width(px):</label>
                    <input type="number" value={ width } onChange={ handleWidth }/>
                </div>
                <button type="submit btn">Submit</button>
            </form>
            {/* div to contain your display boxes */}
            <div className="boxDisplay">
                {
                    // Map to read and display a box based on the array of objects
                    colorList.map((item, index) =>
                        // each box with the inline styling
                        <div className="box" key={ index } style={ boxStyle(item.color, item.height, item.width ) }></div>
                    )
                }
            </div>
        </>
    )
}

export default Box