// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {

  pcs: [ 'tutorial-pcs/intro',
    {
      type: 'category',
      label: 'Guide',
      items: [
        'tutorial-pcs/avatar-setup',
        'tutorial-pcs/how-to-use',
		'tutorial-pcs/audio-manager',
		'tutorial-pcs/sps-link',		
      ],
    },
	{
      type: 'category',
      label: 'Customization',
      items: [
        'tutorial-pcs/detection-output',
      ],
    },
	'tutorial-pcs/faq',
	'tutorial-pcs/changelog',
  ],
  
  lms: [ 'tutorial-lms/intro',
    {
      type: 'category',
      label: 'Guide',
      items: [
        'tutorial-lms/avatar-setup',	
        'tutorial-lms/how-to-use',		
      ],
    },
  ],

};

export default sidebars;
