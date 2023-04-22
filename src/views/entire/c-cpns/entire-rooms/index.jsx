import RoomItem from '@/components/room-item'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { RoomsWrapper } from './style'

const EntireRooms = memo((props) => {
  const { roomList } = props
  const { isLoading } = useSelector(state=>state.entire)
  return (
    <RoomsWrapper isLoading={isLoading}>
      {roomList.map((item)=>{
        return <RoomItem key={item["_id"]} roomInfo={item} itemWidth={"20%"}/>
      })}
      <div className='cover'>
      </div>
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {
  roomList: PropTypes.array
}

export default EntireRooms
