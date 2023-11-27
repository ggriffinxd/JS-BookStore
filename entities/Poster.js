const Product = require("./Product");

module.exports = class Poster extends Product{
  constructor(name,description,height,width,price,inStock){
    super(`Poster: ${name}`,description,price,inStock)
    this.name = name
    this.width = width
    this.height = height
  }
}