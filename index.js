const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const bookList = document.querySelector("#bookList");
const button = document.querySelector(".btn");

button.addEventListener("click", function (e) {
  e.preventDefault();

  if (title.value == "" && author.value == "" && year.value == "") {
    alert("Please Submit Your Full Information");
  } else {
    const newRow = document.createElement("tr");

    const newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    const newYear = document.createElement("th");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    bookList.appendChild(newRow);
  }
});
