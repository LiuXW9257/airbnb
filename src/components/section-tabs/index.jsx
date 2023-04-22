import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const { List } = props
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleItemClick = (item, index)=>{
    setCurrentIndex(index)
    props.changeList(item)
  }
  return (
    <SectionTabsWrapper>
      <ScrollView>
        {List.map((item, index) => 
          <div
            key={index} 
            className={classNames("item", {active: index === currentIndex})}
            onClick={()=>handleItemClick(item, index)}
          >{item}</div>)}
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  List:PropTypes.array
}

export default SectionTabs