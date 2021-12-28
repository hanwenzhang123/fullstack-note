const bar = document.getElementById("search-bar");
const input = document.getElementById("search-input");
const btn = document.getElementById("search-icon");
const title = document.getElementById("search-title");
const content = document.getElementById("search-content");
const pagination = document.getElementById("pagination");
let currentPage = 1;
let itemPerPage = 30;
let ARTIST_NAME;
input.addEventListener("keyup", (e) => {
  ARTIST_NAME = e.target.value.trim();
});
title.innerHTML = "Search Albums by ArtistName:";

const clearData = () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

const clearPagination = () => {
  while (pagination.firstChild) {
    pagination.removeChild(pagination.firstChild);
  }
};

const displayList = (results, currentPage) => {
  clearData();
  let start = itemPerPage * currentPage - itemPerPage;
  let end =
    start + itemPerPage <= results.length
      ? start + itemPerPage
      : results.length;
  let paginatedItems = results.slice(start, end);

  title.innerHTML = `${results.length} results for "${ARTIST_NAME}", current page is ${currentPage}, display from ${start} to ${end} items`;

  paginatedItems.forEach((data) => {
    const box = document.createElement("div");
    box.setAttribute("class", "box");

    const text = document.createElement("p");
    text.setAttribute("class", "name");
    text.innerHTML = data.artistName;

    const photo = document.createElement("img");
    photo.setAttribute("class", "cover");
    photo.src = data.artworkUrl60;

    content.appendChild(box);
    box.appendChild(photo);
    box.appendChild(text);
  });
};

const displayData = (results) => {
  clearData();
  clearPagination();
  displayList(results, currentPage);

  const totalPageNumber = Math.ceil(results.length / itemPerPage);

  for (let i = 1; i <= totalPageNumber; i++) {
    const page = document.createElement("a");
    page.innerText = i;
    pagination.appendChild(page);
    if (currentPage == i) page.classList.add("active");
    page.addEventListener("click", () => {
      currentPage == i;
      displayList(results, i);
      let currentActive = document.querySelector("#pagination a.active");
      currentActive.classList.remove("active");
      page.classList.add("active");
    });
  }
};

const fetchData = async () => {
  try {
    if (ARTIST_NAME) {
      const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200`;
      const data = await fetch(url).then((res) => res.json());
      while (!data) {
        const loading = document.createElement("div");
        loading.setAttribute("id", "loader");
        content.appendChild(loading);
      }
      displayData(data.results);
    } else {
      alert("Fill out this field");
    }
  } catch (e) {
    alert(e);
    return "errors";
  }
};

btn.addEventListener("click", fetchData);
