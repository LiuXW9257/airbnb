import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import { fetchEntireRoomListAction } from '@/store/modules/entire'
import { EntireWrapper } from './style'
import EntirePageNation from './c-cpns/entire-pagenation'

const Entire = memo(() => {
  const dispatch = useDispatch()
  const { roomList=[] } = useSelector(state=>state.entire)

  const handleShowCover = ()=>{
    console.log('--------------');
  }
  useEffect(()=>{
    dispatch(fetchEntireRoomListAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms roomList={roomList}/>
      <EntirePageNation handleShowCover={handleShowCover} />
    </EntireWrapper>
  )
   })

export default Entire