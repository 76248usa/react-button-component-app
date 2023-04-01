import React from 'react'

function ItemsContent({content, id}) {
  return (
    <div>
        <p>{id}</p>
        <p>{content}</p>
    </div>
  )
}

export default ItemsContent