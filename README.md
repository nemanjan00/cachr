# keshr

[![npm version](https://badge.fury.io/js/keshr.svg)](https://badge.fury.io/js/keshr)
[![npm](https://img.shields.io/npm/dt/keshr.svg)](https://www.npmjs.com/package/keshr)
[![dependencies Status](https://david-dm.org/nemanjan00/keshr/status.svg)](https://david-dm.org/nemanjan00/keshr)

Keshr is Node.js task scheduler, cacher and notification manager.

## Summary

<!-- vim-markdown-toc GFM -->

* [Features](#features)
* [Architecture](#architecture)
	* [Daemon](#daemon)
	* [Client](#client)
* [Developers guide](#developers-guide)
	* [Yarn package manager](#yarn-package-manager)
	* [Document](#document)
	* [Coding Style](#coding-style)
		* [Linting](#linting)
	* [Testing](#testing)
* [Authors](#authors)

<!-- vim-markdown-toc -->

## Features

 * [ ] Schedule tasks

 * [ ] Wrapper for cached tasks

 * [ ] Notifications

## Architecture

### Daemon

What daemon does is runs tasks, holds cache and display notifications.

### Client

Client sends commands to daemon. 

It can be used as command wrapper. 

## Developers guide

### Yarn package manager

For this project development, we are using faster, [yarn](https://yarnpkg.com/lang/en/) package manager. 

To install it, run: 

```bash
sudo npm install -g yarn
```

After that, you need to install dependencies, using: 

```bash
yarn
```

### Document

```
yarn document
```

tells you which module is used for what. 

### Coding Style

Coding style of this project is defined inside ``.editorconfig`` and to use it, download [Editor Config plugin](https://editorconfig.org/) for your text editor. 

#### Linting

For linting, we are using eslinter and to run it, you can just use: 

### Testing

To run tests, we use mocha. 

To run it, simply: 

```
yarn test
```

```bash
yarn lint
```

## Authors

[Nemanja Nedeljković](https://nemanja.top/)

