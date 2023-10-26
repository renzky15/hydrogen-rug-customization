import React from 'react';
import '@pqina/pintura/pintura.css';
import {getEditorDefaults} from '@pqina/pintura';
import {PinturaEditor} from '@pqina/react-pintura';
// import image from '../../public/image.jpeg';

// get default properties
const editorConfig = getEditorDefaults();
export function PinturaEditorComponent() {
  return (
    <div className="h-[70vh] w-full border border-green-500">
      <h1>Test</h1>
      <div>
        <PinturaEditor
          {...editorConfig}
          src="https://cdn.shopify.com/static/sample-images/garnished.jpeg"
          imageCropAspectRatio={1}
        ></PinturaEditor>
      </div>
    </div>
  );
}
