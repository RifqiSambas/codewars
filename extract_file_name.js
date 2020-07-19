class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    return dirtyFileName
      .replace(/[0-9]+_/, "")
      .split(".")
      .slice(0, 2)
      .join(".");
  }
}
