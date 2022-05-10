export const editorTheme = {
  plain: {
    color: 'var(--color-tarmac-grey-50)',
    backgroundColor: 'var(--color-tarmac-grey-700)',
  },
  styles: [
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: 'var(--color-heycar-mint-500)',
      },
      languages: ["bash", "css", "tsx"]
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: 'var(--color-mica-blue-200)',
      },
      languages: ["bash", "css", "tsx"]
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: 'var(--color-heycar-mint-500)',
      },
      languages: ["bash", "css", "tsx"]
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: 'var(--color-mica-blue-200)',
      },
      languages: ["bash", "css", "tsx"]
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: 'var(--color-heycar-mint-500)',
      },
      languages: ["bash", "css", "tsx"]
    },
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: 'var(--color-tarmac-grey-100)',
        fontStyle: 'italic',
      },
      languages: ["bash", "css", "tsx"]
    }
  ],
}
