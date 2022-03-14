import TileFlaggedEnum from "./enums/TileFlaggedEnum";
import TileStateEnum from "./enums/TileStateEnum";

type TruthyOrFalsy = number | boolean

class Tile {  
  /**
   * Creates a new `Tile` instance
   * @param value Truthy/falsy value indicating whether or not the tile is filled
   * @param x Horizontal position of the tile
   * @param y Vertical position of the time
   */
  constructor(value: TruthyOrFalsy, x: number, y: number)

  /** Horizontal position of the tile */
  x: number
  /** Vertical position of the time */
  y: number
  /** Whether or not the tile is filled */
  filled: boolean
  /** Whether or not the tile is opened */
  state: TileStateEnum
  /** Whether or not the tile is flagged */
  flag: TileFlaggedEnum
}