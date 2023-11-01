import React from 'react'
import SubContents from './SubContents'
import Advertisement from './Advertisement'

const MainContent = (props) => {

    const {row1, row2} = props

    return (
        <div className="main" >
            <div className="row">
                {
                    row1.map((Item, index) => {
                        return <Item key={index}/>
                    }
                    )
                }
            </div>
            <div className="row">
                {
                    row2.map((Item, index) => {
                        return <Item key={index}/>
                    }
                    )
                }
            </div>
            
        </div>

    )
}

export default MainContent