# 🥞 Pancake UIkit

[![Version](https://img.shields.io/npm/v/wedex-uikit/src)](https://www.npmjs.com/package/wedex-uikit/src) [![Size](https://img.shields.io/bundlephobia/min/wedex-uikit/src)](https://www.npmjs.com/package/wedex-uikit/src)

Pancake UIkit is a set of React components and hooks used to build pages on Pancake's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add wedex-uikit/src`

## Setup

### Theme

Before using Pancake UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'wedex-uikit/src'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'wedex-uikit/src'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://pancakeswap.github.io/pancake-uikit/)
