import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const { name } = props
  const navigate = useNavigate()
  let showName = "显示更多"
  if(name) {
    showName = `显示更多${name}房源`
  }

  function handleMoreClick(){
    navigate("/entire")
  }
  return (
    <FooterWrapper color={name? "#00848A": "#000"}>
      <div className='info' onClick={handleMoreClick}>
        <span className='text'>{showName}</span>
        <IconMoreArrow/>
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter