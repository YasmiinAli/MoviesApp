import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <div className={styles.footer} >
  <div className="container p-4">
  <div className="text-center p-3" >
    © 2023 Copyright: 
    <a className="text-black" href="https://www.themoviedb.org/">TMBD Movies</a>
  </div>
  </div>
</div>
    </>
  )
}
