import React from 'react';

import { StyleSheet, css } from 'aphrodite';

const quarterStyle = StyleSheet.create({

  flexWrapper: {
    display:'flex',
    'flex-wrap':'wrap',
    width: '100vw',
    paddingTop:'50px',
    'justify-content':'flex-start',
    overflow:'hidden'
  },
  quarter: {
    width: '43vw',
    padding:'24px',
    background:'rgba(255,255,255,.5)',
    borderRadius: '10px',
    margin:'15px',
    height: '40vh',
    transition: 'all 200ms ease-in',
    transform: 'scale(1)',

    ':hover': {
      background:'rgba(255,255,255,1)',
      boxShadow:' 0px 0px 20px rgba(0,0,0,.5)',
      zIndex: 2,
      transition: 'all 200ms ease-in',
      transform: 'scale(1.04)',
    }
  },
})

const ContactContent = () =>
  <div className={css(quarterStyle.container)}>
    <div className={css(quarterStyle.flexWrapper)}>
      <div className={css(quarterStyle.quarter)} />
      <div className={css(quarterStyle.quarter)} />
      <div className={css(quarterStyle.quarter)} />
      <div className={css(quarterStyle.quarter)} />
    </div>
  </div>
export default ContactContent;
