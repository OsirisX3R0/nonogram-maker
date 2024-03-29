const TileStateEnum = require("./enums/TileStateEnum");

class Tile {
  #x = 0;
  #y = 0;
  #filled = false;
  #state = TileStateEnum.CLOSED;
  #flagged = false;

  constructor(value, x, y) {
    this.#x = x;
    this.#y = y;
    this.#filled = value ? true : false;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  get filled() {
    return this.#filled;
  }

  get state() {
    return this.#state;
  }

  get flagged() {
    return this.#flagged;
  }

  toggleOpen() {
    if (!this.#flagged) {
      // If the space is not filled, flag it and mark it as wrong
      if (!this.#filled) {
        this.toggleFlag();
        this.#state = TileStateEnum.WRONG;
        return;
      }

      // Otherwise, toggle it open/close
      this.#state =
        this.#state === TileStateEnum.CLOSED
          ? TileStateEnum.OPEN
          : TileStateEnum.CLOSED;
    }

    if (this.#state === TileStateEnum.WRONG) return;
  }

  toggleFlag() {
    if (this.#state === TileStateEnum.CLOSED) this.#flagged = !this.#flagged;
  }
}

module.exports = Tile;
