import React from 'react'

const List = ({list}) => {
  return (
    <div>
      <ol>
        {list.map(list=><li>{list}</li>)}
      </ol>
    </div>
  )
}

export default List