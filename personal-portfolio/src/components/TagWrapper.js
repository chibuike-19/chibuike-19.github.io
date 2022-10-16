import React from 'react'

const TagWrapper = ({tags}) => {
    const TagColor = () => {
        if(tags.color === 'red'){
            return 'red-tag'
        }else if(tags.color === 'blue'){
            return 'blue-tag'
        }else{
            return 'green-tag'
        }
    }
  return (
    <div className='tag-wrapper'>
        <span className={TagColor()}>{tags.tool}</span>
    </div>
  )
}

export default TagWrapper