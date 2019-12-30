import React from 'react'
import Pagination from "react-bootstrap/Pagination"
function Page({current,total, setPage}) {
    return (
        <Pagination  size="md" style={{justifyContent:"center"}}>
            {Array(parseInt(total/10)).fill(0).map((x,i)=>
            <Pagination.Item key={i} active={current === i} onClick={()=> setPage(i)}>{i+1}</Pagination.Item>
            )}
        </Pagination>
    )
}

export default Page
