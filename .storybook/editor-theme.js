export const editorTheme = {
  plain: {
    color: 'white',
    backgroundColor: '#303030',
  },
  styles: [
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: '#00cea5',
      },
      languages: ["bash", "css", "tsx"]
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: '#a2b7da',
      },
      languages: ["bash", "css", "tsx"]
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: '#00cea5',
      },
      languages: ["bash", "css", "tsx"]
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: '#a2b7da',
      },
      languages: ["bash", "css", "tsx"]
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: '#00cea5',
      },
      languages: ["bash", "css", "tsx"]
    },
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: '#d6d6d6',
        fontStyle: 'italic',
      },
      languages: ["bash", "css", "tsx"]
    }
  ],
}
