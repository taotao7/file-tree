interface FileEntry {
  name: string;
  type: "file" | "directory";
  file: File | undefined;
  children?: FileEntry[];
}

async function getFilesInDirectory(
  dirHandle?: FileSystemDirectoryHandle,
): Promise<FileEntry[]> {
  const results: FileEntry[] = [];
  if (!dirHandle) {
    dirHandle = await window.showDirectoryPicker();
  }

  for await (const entry of dirHandle.values()) {
    const entryData: FileEntry = {
      name: entry.name,
      type: entry.kind as "file" | "directory",
      file: entry.kind === "file" ? await entry.getFile() : undefined,
      children: [],
    };

    if (entry.kind === "directory") {
      entryData.children = await getFilesInDirectory(
        entry as FileSystemDirectoryHandle,
      );
    }

    results.push(entryData);
  }

  return results;
}

async function selectDirectoryAndGetFiles() {
  return getFilesInDirectory();
}

export default selectDirectoryAndGetFiles;
export { FileEntry, getFilesInDirectory };
