import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style'

const HomeSectionV3 = memo((props) => {
  const {infoData} = props
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
        <ScrollView>
          {infoData.list.map((item)=>{
            return <RoomItem roomInfo={item} key={item.id}/>
          })}
        </ScrollView>
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData:PropTypes.object
}

export default HomeSectionV3