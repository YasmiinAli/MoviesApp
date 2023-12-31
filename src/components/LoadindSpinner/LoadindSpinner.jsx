import React from 'react'
import { CircleLoader } from 'react-spinners';
import styles from './LoadindSpinner.module.css'
export default function LoadindSpinner() {
  return (
    <div className={styles.loading}>
        <CircleLoader color="rgba(41, 142, 249, 0.925)" className={styles.loader}/>
    </div>
  )
}
