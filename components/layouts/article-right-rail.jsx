/*  /components/layouts/basic.jsx  */

import React from 'react'

const ArticleLayout = (props) => {
  return (
    <div>
      <header className='col-xs-12 fixed-on-small'>
        <img src='/resources/logo.png' alt='Logo' />
        {props.children[0]}
      </header>
      <main className='col-xs-10'>
        {props.children[1]}
      </main>
      <div className='col-xs-2'>
        {props.children[2]}
      </div>
      <footer className='col-xs-12'>
        {props.children[3]}
        <p>Copyright &copy; 2018</p>
      </footer>
    </div>
  )
}

ArticleLayout.sections = ['header', 'main', 'rightrail', 'footer']

export default ArticleLayout
