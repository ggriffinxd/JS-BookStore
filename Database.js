module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: []
  }

  find(key){
    return this.#storage[key]
  }
  
  //books

  findBook(bookName){
    return this.#storage.books.find(b => b.name === bookName)
  }

  saveAuthor(author){
    this.#storage.authors.push(author)
  }

  saveBook(book){
    const bookExists = this.findBook(book.name)
    if(!bookExists)[
      this.#storage.books.push(book)
    ]
  }

  addBooksToStock(bookName,quantity){
    const book = this.findBook(bookName)

    book?.addToStock(quantity)
  }

  removeBooksToStock(bookName,quantity){
    const book = this.findBook(bookName)

    book?.removeFromStock(quantity)
  }

  //posters
  
  savePoster(poster){
    const posterExists = this.findPoster(poster.name)
    if(!posterExists)[
      this.#storage.posters.push(poster)
    ]
  }

  findPoster(posterName){
    return this.#storage.posters.find(p => p.name === posterName)
  }

  addPosterToStock(posterName,quantity){
    const poster = this.findposter(posterName)

    poster?.addToStock(quantity)
  }

  removePostersToStock(posterName,quantity){
    const poster = this.findposter(posterName)

    poster?.removeFromStock(quantity)
  }

  //user
  findUser(user){
    return this.#storage.users.find(u => u.email === user.email)
  }

  saveUser(user){
    const userExists = this.findUser(user)
    if(!userExists){
      this.#storage.users.push(user)
    }
  }

  saveOrder(order){
    this.#storage.orders.push(order)
  }

  showStorage(){
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(o => o.itemsOrder))
  }
}