import React from 'react';
import Header from './Header.jsx';
import ComponentTree from './ComponentTree.jsx';
import Visualizer from './Visualizer.jsx';

// Page that will show once directory has been imported
export default function RenderedPage() {
return (
    <div className='renderedPage'>
      <Header />
      <ComponentTree />
      <Visualizer />
    </div>
  );
}


