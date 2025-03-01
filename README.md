# 🌟 Ink Documentation - Nextra Edition

Welcome to our experimental playground where we're exploring the migration of
Ink's documentation from Docusaurus to Nextra!

This repository serves as a proof-of-concept for modernizing our documentation
platform. We're evaluating Nextra's capabilities to create a more engaging and
developer-friendly documentation experience.

See why nextra and check the evaluation of required functions below

## Why Nextra?

- 🎨 Better Customization

  - Basically just building a react page with a mdx framework (nextra plugin)
  - Easy to [customize layout](https://nextra.site/docs/custom-theme)
  - Simple configuration through `theme.config.tsx`

- 🚀 Modern Architecture

  - Uses latest React and Next.js features (don't have to wait for docusaurus
    (plugin) updates to support latest react versions)
  - App Router support
  - Better build performance
  - Enhanced SEO capabilities

- 💻 Developer Experience
  - super TypeScript support
  - Simple file-based routing
  - libraries instead of plugins
  - In docuaurus, customizing search page, building a tags overview page
  - offers all features docusaurus offers out of the box (see table below)

My personal experience showed that working with docusaurus is not a great
developer experience. For polkadot.study I was trying to push it to the limits
by
[creating a new plugin for tutorials](https://github.com/PolkadotStudy/polkadot.study/tree/staging/plugin-content-tutorials)
with very
[opaque plugin structure, opaque execution flow](https://docusaurus.io/docs/advanced/plugins).
I ended up with copying the docs plugin and extending it, which was not easy due
to missing typings. Swizzled components for (e.g. sidebar) broke when migrating
to docusaurus 3.x. I feel that the plugin infrastrucutre is not contemporary. I
started a
[new (stale) version for polkadot.study](https://github.com/PolkadotStudy/polkadot.study/tree/staging/plugin-content-tutorials)
only based on mdx parsers (no nextra)

In summary I would very much prefer to migrate to nextra as a solid, future
ready framework that let's devs extend every aspect and rather focus on building
than working around mdx framework settings.

## 🎯 Goals

- Evaluate Nextra as a modern documentation solution
- Test migration feasibility from Docusaurus
- Explore new documentation features and improvements

## Evaluation

| Feature                                                          | Status | Notes                                                                                                                                                                                                              |
| ---------------------------------------------------------------- | :----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Repo Maintainance                                                |   ✅   | maintained by next.js core dev [shuding](https://github.com/shuding). 12.4 github ⭐️, [prominent users](https://nextra.site/showcase)                                                                             |
| Github Pages Hosting                                             |   ✅   | [Working with static site exports](https://nextra.site/docs/guide/static-exports). Loosing some features like next.js image optimization but no problem                                                            |
| Versioning                                                       |  ✅    | Not with a plugin but totally possible with subfolders like `/app/docs/v4`, `app/docs/v3`. then a config similar to docusaurus that lists all versions for a menu bar dropdown, latest would reside in `app/docs/` |
| 🔍 Search                                                        |   ✅   | [Native nextra search](https://nextra.site/docs/guide/search) that indexes page on build:                                                                                                                          |
| 📖 Table of Contents                                             |   ✅   | Auto-generated from .md(x) files, reusable in react components                                                                                                                                                     |
| 🚀 Performance                                                   |   ✅   | Faster build times than docusaurus. SSR. Latest React.                                                                                                                                                             |
| 🔗 Custom Components                                             |   ✅   | React components easily integrated into .mdx and custom pages. See [inkubator page](/app/ubator/page.tsx)                                                                                                          |
| 📝 Code Highlighting                                             |   ✅   | Supports multiple languages                                                                                                                                                                                        |
| 🌐 i18n Support                                                  |   🔄   | Need to test translations                                                                                                                                                                                          |
| 📊 SEO                                                           |   ✅   | Proven [next.js metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata) and static sites for fast loading.                                                                            |
| Mobile Responsiveness                                            |   ✅   | nextra doc layout responsive out of the box with collapsible and autocollapsing left toc sidebar, scrollspy right sidebar                                                                                          |
| 🌙 Dark Mode                                                     |   ✅   | Implemented with Tailwind and                                                                                                                                                                                      |
| [next-themes](https://github.com/pacocoursey/next-themes#readme) |
