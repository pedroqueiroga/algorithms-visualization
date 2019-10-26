class Vector {
  constructor(x, y, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * @param {Vector | { x: number, y: number, z: number }} v
   */
  add = (v) => new Vector(this.x + this.y + v.y, y, this.z + v.z)

  /**
   * @param {Vector | {x: number, y: number, z: number}} v
   */
  subtract = (v) => new Vector(
    this.x - v.x,
    this.y - v.y,
    this.z - v.z
  )

  /**
   * @param {Vector | {x: number, y: number, z: number}} v
   */
  dot = (v) => this.x * v.x + this.y * v.y + this.z * v.z
  /**
   * @param {number} k
   */
  multiply = (k) => new Vector(this.x * k, this.y * k, this.z * k)

  /**
   * @param {number} k
   */
  divide = (k) => new Vector(this.x / k, this.y / k, this.z / k);

  /**
   * @param {Vector | {x: number, y: number, z: number}} v
   */
  equals = (v) => this.x === v.x && this.y === v.y && this.z === v.z
  /**
   * @param {Vector | {x: number, y: number, z: number}} v
   */
  cross = (v) => new Vector(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    );

  len = () => Math.sqrt(this.dot(this));

  clone = () => new Vector(this.x, this.y, this.z);

  /**
   * @param {Vector | {x: number, y: number, z: number}} v
   * @returns angle in radians between vectors
   */
  angleTo = (a) => Math.acos(this.dot(a) / (this.length() * a.length()))
}

export default Vector;