import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Display = () => {
    const {input1, input2, input3} = useParams();


  return (
    <div>
        <p style={{
            color: input2 || "",
            backgroundColor: input3 || ""
            }}>
            {
                isNaN(input1) ?
                `The word is: ${input1}`:
                `The number is: ${input1}`
            }
        </p>
    </div>
  )
}

export default Display