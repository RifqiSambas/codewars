class PaginationHelper {
  constructor(a, p) {
    Object.assign(this, { a, p });
  }
  itemCount() {
    return this.a.length;
  }
  pageCount() {
    return -~(this.a.length / this.p);
  }
  pageItemCount(i) {
    return i < this.pageCount()
      ? (i + 1) * this.p <= this.itemCount()
        ? this.p
        : this.itemCount() % this.p
      : -1;
  }
  pageIndex(i) {
    return i < 0 || i >= this.itemCount() ? -1 : (i / this.p) | 0;
  }
}
