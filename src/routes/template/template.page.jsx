import React, { useState } from 'react';
import { Drawer, ButtonToolbar, Button, IconButton, Placeholder } from 'rsuite';
// import { Sidebar } from '../../components';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import Demo from '../demo/demo.routes';
import './template.styles.css';



const DemoTemplate = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };

  return (
    <div className='template'>
      <ButtonToolbar>
        <IconButton icon={<AngleRightIcon />} onClick={() => handleOpen('left')}>
          Options
        </IconButton>
      </ButtonToolbar>
      <div>
        <Drawer size="sm" placement={placement} open={open} onClose={() => setOpen(false)}>
          <Drawer.Header>
              <Drawer.Title>Choose from existing videos</Drawer.Title>
              <Drawer.Actions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </Drawer.Actions>
          </Drawer.Header>
          <Drawer.Body>
            {[...Array(5)].map((thumb) => (
              <div className='thumb-nail'>
              </div>
            ))}
            <Placeholder.Paragraph rows={8} />
          </Drawer.Body>
        </Drawer>
      </div>
      <Demo />
    </div>
  )
}

export default DemoTemplate;