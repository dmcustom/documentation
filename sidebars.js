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

  pcs: [ 'tutorial-pcs/intro', 'tutorial-pcs/avatar-setup',
    {
      type: 'category',
      label: 'Guide',
      items: [
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
	{
      type: 'category',
      label: 'Release Notes',
      items: [
'tutorial-pcs/release-notes/r1.11.0-beta.2',
'tutorial-pcs/release-notes/r1.11.0-beta.1',
'tutorial-pcs/release-notes/r1.10.0',
'tutorial-pcs/release-notes/r1.9.2',
'tutorial-pcs/release-notes/r1.9.1',
'tutorial-pcs/release-notes/r1.9.0',
'tutorial-pcs/release-notes/r1.8.1',
'tutorial-pcs/release-notes/r1.8.0',
'tutorial-pcs/release-notes/r1.7.2',
'tutorial-pcs/release-notes/r1.7.1',
'tutorial-pcs/release-notes/r1.7.0',
'tutorial-pcs/release-notes/r1.6.2',
'tutorial-pcs/release-notes/r1.6.1',
'tutorial-pcs/release-notes/r1.6.0',
'tutorial-pcs/release-notes/r1.5.2',
'tutorial-pcs/release-notes/r1.5.1',
'tutorial-pcs/release-notes/r1.5.0',
'tutorial-pcs/release-notes/r1.4.1',
'tutorial-pcs/release-notes/r1.4.0',
'tutorial-pcs/release-notes/r1.3.0',
'tutorial-pcs/release-notes/r1.2.1',
'tutorial-pcs/release-notes/r1.2.0',
'tutorial-pcs/release-notes/r1.1.0',
'tutorial-pcs/release-notes/r1.0.0',	
      ],
    },
  ],
  
  lms: [ 'tutorial-lms/intro', 'tutorial-lms/avatar-setup',
    {
      type: 'category',
      label: 'Guide',
      items: [	
        'tutorial-lms/how-to-use',		
      ],
    },
	'tutorial-lms/faq',
	'tutorial-lms/changelog',	
  ],

};

export default sidebars;
