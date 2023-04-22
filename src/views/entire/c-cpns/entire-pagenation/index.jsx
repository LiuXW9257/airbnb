import React, { memo } from 'react'

import { PagenationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntireRoomListAction } from '@/store/modules/entire';


const EntirePageNation = memo((props) => {
  const dispatch = useDispatch()
  const { totalCount, pageSize } = useSelector(state=>state.entire)
  
  const handleChangePage = (e, newPage)=>{
    // 修改当前页码
    // console.log(newPage);
    window.scroll(0,0)
    dispatch(fetchEntireRoomListAction(newPage-1))
  }

  return (
    <PagenationWrapper>
      <Pagination 
        count={Math.ceil(totalCount/pageSize)}
        onChange={handleChangePage} />
    </PagenationWrapper>
  )
})



export default EntirePageNation