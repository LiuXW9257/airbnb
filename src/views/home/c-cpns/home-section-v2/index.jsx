import React, { memo, useCallback, useState } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import PropTypes from 'prop-types'
import { SectionWrapperV2 } from './style'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const {infoData} = props
  const initName = infoData.dest_address[0].name
  const [name, setName] = useState(initName)
  // 如果不适用useCallback，会导致每次render都重新定义一次函数，效率问题
  const handleChangeList = useCallback((name)=>{
    setName(name)
  },[])
  return (
    <SectionWrapperV2>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs changeList={handleChangeList} List={infoData.dest_address.length && infoData.dest_address.map((item)=>item.name)} />
      <SectionRooms roomList={infoData.dest_list?.[name]} numsEachRow={3}/>
      <SectionFooter name={ name }/>
    </SectionWrapperV2>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2