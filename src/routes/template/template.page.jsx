import React from 'react';
import { Sidebar } from '../../components';
import Demo from '../demo/demo.routes';
import './template.styles.css';

const DemoTemplate = () => {
  return (
    <div className='template'>
        <Sidebar/>
        <Demo/>
    </div>
  )
}

export default DemoTemplate;