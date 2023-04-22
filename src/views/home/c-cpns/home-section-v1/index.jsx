import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapperV1 } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const {infoData} = props
  return (
    <SectionWrapperV1>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
        <SectionRooms roomList={infoData.list ?? []} />
        <SectionFooter />
    </SectionWrapperV1>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1