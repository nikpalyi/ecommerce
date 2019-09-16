import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handlechange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handlechange} {...otherProps} />
    {
         label ? 
         <label>
         (<label className={`${otherProps.value.length ? 'shrink' : ''} form-inout-label `}>
         {label}
         </label>)
         : null
    }
  </div>
);
