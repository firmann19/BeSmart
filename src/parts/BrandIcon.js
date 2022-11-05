import React from 'react'
import Button from 'elements/Button'
import Image from 'react/image'

function BrandIcon() {
  return (
    <Button className='brand-icon' href='' type='link'>
        <Image src='../assets/images/BeSmart-modified 1.png' width={60} height={60} alt="logo besmart" />
    </Button>
  )
}

export default BrandIcon