import React from 'react'
import styles from './WishList.module.css'

export default function WishList() {
  return (<div className={`${styles.contain} container`}>
    <div className={`${styles.wishList} alert alert-secondary text-white fw-bold`} role="alert">
  There is no movies added.
</div>
    </div>
  )
}
