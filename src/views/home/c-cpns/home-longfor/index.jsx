import LongforItem from '@/components/longfor-item'
import { HomeLongforWrapper } from './style'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import SectionFooter from '@/components/section-footer'

const HomeLongfor = memo((props) => {
  const { infoData } = props
  return (
    <HomeLongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
        <div className='longfor-list'>
          <ScrollView>
            {infoData.list.map((item,index)=>{
              return <LongforItem roomInfo={item} key={index} itemWidth="20%"/>
            })}
          </ScrollView>
        </div>
      <SectionFooter />
    </HomeLongforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor