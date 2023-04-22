import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollWrapper } from './style'

const ScrollView = memo((props) => {

  const scrollContentRef = useRef()
  const [showRightBtn, setShowRightBtn] = useState(false)
  const [showLeftBtn, setShowLeftBtn] = useState(false)
  const [itemIndex, setItemIndex] = useState(0)
  const totalDistenceRef = useRef()


  useEffect(()=>{
    const totalDistence= scrollContentRef.current.scrollWidth - scrollContentRef.current.clientWidth
    setShowRightBtn(totalDistence > 0)
    totalDistenceRef.current = totalDistence
  },[])

  const handlerBtnClick = (isLeft)=>{
    const newIndex = isLeft ? itemIndex-1 : itemIndex+1;
    const newElement = scrollContentRef.current.children[newIndex]
    const newElementOffsetLeft = newElement.offsetLeft
    // translate 是指移动到那个位置
    scrollContentRef.current.style.transform = `translate(-${newElementOffsetLeft}px)`
    setItemIndex(newIndex)
    setShowRightBtn(totalDistenceRef.current > newElementOffsetLeft)
    setShowLeftBtn(newElementOffsetLeft > 0)
  }

  return (
    <ScrollWrapper>
      {showLeftBtn && (
        <div className='control left' onClick={()=>handlerBtnClick(true)}>
          <IconArrowLeft/>
        </div>
      )}
      {showRightBtn && 
      <div className='control right' onClick={()=>handlerBtnClick(false)}>
        <IconArrowRight />
      </div>}
      <div className='scroll'>
        <div ref={scrollContentRef} className='scroll-content'>
          {props.children}
        </div>
      </div>
      
    </ScrollWrapper>
  )
})


export default ScrollView