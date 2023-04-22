import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterList from "@/assets/data/filter_data.json"
import classNames from 'classnames'

const EntireFilter = memo(() => {
  const [selectedList, setSelectedList] = useState([])

  const handleClickCondition = (condition) => {
    let newList = [...selectedList]
    if (newList.includes(condition)) {
      newList = newList.filter((item)=> item !== condition )
    } else {
      newList.push(condition)
    }
    setSelectedList(newList)
  }
  return (
    <FilterWrapper>
      <div className='filter'>
        {filterList.map((item,index)=>{
          return (
          <div 
            key={index}
            className={classNames("item", {active: selectedList.includes(item)})}
            onClick={e=>handleClickCondition(item)}
          >{item}</div>
        )})}
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter