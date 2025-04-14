# React UI Component Library with Rslib 

> [!IMPORTANT]
> This project is a test project to use Rslib to demonstrate the output of the library. Don't use in production.

Creating a good React component library is notoriously challenging. Most out-of-the-box solutions bundle all styles into a single `style.css` file, which creates inherent problems:

- Performance suffers dramatically. Imagine a library with 100 components where a user only needs 10, but still has to download styles for the entire 90 unused components.
- Consumer applications must explicitly import styles, which isn't just an inconvenience but also creates a less-than-ideal developer experience.

The ideal solution would involve handling styles from UI libraries (CSS modules, imported CSS, Tailwind, global styles) automatically and correctly, with code-splitting that provides an excellent development experience and performance. Crucially, these styles should be loaded as CSS files, not JavaScript modules.

I've experimented with various bundling tools like Webpack, Vite Library mode, and Rollup, but none fully met my requirements. I did explore some promising Rollup plugins:
- [rollup-plugin-inline-postcss](https://github.com/steveblue/rollup-plugin-inline-postcss), which had a great concept but was outdated and incompatible with recent Rollup versions.
- [rollup-plugin-lib-style](https://github.com/DanielAmenou/rollup-plugin-lib-style), which allowed component-specific style bundling but proved too limited for my needs.

When NextJS 15.3 released notes mentioned [support for RSpack](https://nextjs.org/blog/next-15-3#community-support-for-rspack-experimental) in experimental mode, I decided to investigate. Fortunately, they also provide a wrapper called [Rslib](https://lib.rsbuild.dev/guide/start/).

I'm genuinely impressed by Rslib. Its minimal configuration delivers exactly what I wanted: seamless code-splitting, TypeScript declarations, and CSS import capabilities out of the box. Moreover, it preserves React directives like `"use client"`, enabling React Server Component imports with zero configuration.

## TODO
- [x] Code-spliting
- [x] Support non-scoped CSS import
- [x] Support CSS-modules import
- [x] Support Tailwind
    - Tested with DaisyUI, work on Storybook, Nextjs but not on the React consumer. On the React consumer, seems like the styles are not loaded.
- [ ] Support global styles
- [ ] Support CSS variables
- [x] Support persisting React directive
- [ ] Copy files
- [ ] Tree-shaking
- [ ] Externals
- [ ] ESM and CJS outputs
- [ ] PostCSS
- [ ] Importing images
- [ ] Bundle stats