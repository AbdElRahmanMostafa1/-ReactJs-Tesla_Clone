import React from 'react';
import { Icon } from '@iconify/react';
import './Screen.css';

const Screen = ({backgroundImage, modelName, firstScreen, paragraph}) => {

  return (
    <section className='screen' style={{backgroundImage: `url(${backgroundImage})`}}>
      <h1 className='model-name'> {modelName} </h1> 
      <p className='order-online'>
        {paragraph || <p className='order-online'>order online for <a href="google.com">touchless delivery</a></p>}
      </p>
      <article className="btn-wrapper" id='btnWrapper'>
        <button>custom order</button>
        <button>existing inventory</button>
      </article>
      {firstScreen && <Icon icon="akar-icons:arrow-down-thick" className='down-arrow' />}
    </section>
  )
}


export default Screen
