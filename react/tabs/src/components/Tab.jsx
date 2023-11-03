import React, {useState} from 'react'

const Tab = (props) => {
    const {tabs} = props

    const [activeContent, setActiveContent] = useState(tabs[0].content)
    console.log(tabs)
    console.log(activeContent)

    const activeTab = (index) => {
        console.log(index)
        setActiveContent(tabs[index].content)
        console.log(activeContent)
        if(tabs[index].callback){
            tabs[index].callback()
        }
    }

// ADD TRANSITIONAL ANIMATIONS

  return (
    <>
    <div className="tabList">
        {/* for each item in tab list make a button */}
        {tabs.map((tab, index) =>
            <button key={index} onClick={() => activeTab(index)} >{tab.title}</button>
            )}
    </div>
    <div className="tabContent">
        <p>
            {activeContent}
        </p>
    </div>
    </>
  )
}

export default Tab