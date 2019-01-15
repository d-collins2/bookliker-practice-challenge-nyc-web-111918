document.addEventListener("DOMContentLoaded", function() {
  const bookList = document.querySelector("#list")
  const showPanel = document.querySelector("#show-panel")
  let allBooks;

  function renderAllBooks(bookArray){
    bookList.innerHTML = bookArray.map(renderSingleBook).join("")
  }

  function renderSingleBook(book){
    return `<li id=${book.id}>${book.title}</li>`
  }

  function renderSingleShowPageBook(book){
    return `<h1>${book.title}</h1>
    <img src=${book.img_url}>
    <p>${book.description}</p>
    <button>"like"</button>
    `
  }

  fetch(`http://localhost:3000/books`)
  .then(r => r.json())
  .then(json => {
    allBooks = json
    console.log(allBooks)
    renderAllBooks(allBooks)
  })

  bookList.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
      const foundBook = allBooks.find(book => book.id == e.target.id)
      showPanel.innerHTML = renderSingleShowPageBook(foundBook)
    }
  })

});
