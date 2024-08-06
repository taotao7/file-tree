# File Explorer Library

A simple JavaScript library that allows users to select a folder and returns all the files within the selected directory.

## Features

- Select a folder using a file input dialog.
- Retrieve a list of all files in the selected directory.
- Supports various file types.

## Installation

You can include the library in your project by using npm:

```bash
npm install @taotao7/file-tree


```typescript
import {FileEntry},selectDirectoryAndGetFiles from '@taotao7/file-tree';

const main = async () => {
    const files = await selectDirectoryAndGetFiles();
    console.log(files)
}


```