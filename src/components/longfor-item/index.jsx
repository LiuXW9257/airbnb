import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'
const LongforItem = memo((props) => {
  const { roomInfo, itemWidth } = props
  return (
    <LongforWrapper itemWidth={itemWidth}>
       <div className='inner'>
        <div className='item-info'>
          <img className='cover' src={roomInfo.picture_url} alt="" />
          <div className='bg-cover'></div>
          <div className='info'>
            <div className='city'>{roomInfo.city}</div>
            <div className='price'>均价 {roomInfo.price}</div>
          </div>
        </div>
      </div>
    </LongforWrapper>
  )
})

LongforItem.propTypes = {
  roomInfo: PropTypes.object
}

export default LongforItem