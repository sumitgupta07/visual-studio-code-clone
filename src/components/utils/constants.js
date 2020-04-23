export const labels = {
  FileExplorer: 'File Explorer',
  Search: 'Search',
  SourceControl: 'Source Control',
  Debug: 'Debug',
  Extensions: 'Extensions'
};

export const classNames = {
  explorerClass: 'far fa-copy fa-3x',
  searchClass: 'fas fa-search fa-rotate fa-3x',
  sourcecontrolClass: 'fas fa-code-branch fa-3x',
  debugClass: 'fas fa-bug fa-3x',
  extensionsClass: 'fas fa-th-large fa-3x'
};

export const folders = [
  {
    id: 1,
    name: 'src',
    files: [
      {
        id: 'a',
        fileName: 'index.js',
        content: 'Placeholder for index.js. It has App.js as child components'
      },
      {
        id: 'b',
        fileName: 'App.js',
        content:
          'Placeholder for App.js. It has Header and Content as child components'
      },
      {
        id: 'c',
        fileName: 'Content.js',
        content:
          'Placeholder for Content.js file. It has Navbar, SelectPane and EditorPane as child components'
      }
    ]
  }
];
