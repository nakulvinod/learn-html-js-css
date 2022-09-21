const URL = document.location.search;
let category = URL.slice(10, URL.length);
console.log(category);
let categoryList = [
  "national",
  "business",
  "sports",
  "world",
  "politics",
  "technology",
  "startup",
  "entertainment",
  "miscellaneous",
  "hatke",
  "science",
  "automobile",
];
if (categoryList.includes(category)) {
  console.log("Category is valid");
} else {
  category = "science";
}
fetch(`https://inshorts.deta.dev/news?category=${category}`, {
  method: "GET",
}).then(async (response) => {
  const data = await response.json();
  for (i = 0; i < data.data.length; i++) {
    let newElement = document.createElement("div");
    let title = document.createElement("div");
    let subtitle = document.createElement("div");
    let author = document.createElement("span");
    let date = document.createElement("span");
    let content = document.createElement("div");
    let readMore = document.createElement("button");
    let readMoreUrl = document.createElement("a");
    newElement.innerhtml = ` ${data.data[i]}`;
    newElement.classList = "News";
    title.classList = "title";
    title.innerHTML = data.data[i].title;
    author.classList = "author";
    author.innerHTML = data.data[i].author;
    date.classList = "date";
    date.innerHTML = data.data[i].date;
    subtitle.classList = "subtitle";
    content.innerHTML = data.data[i].content;
    content.classList = "content";
    readMoreUrl.href = data.data[i].readMoreUrl;
    readMoreUrl.innerHTML = "Read More";
    readMoreUrl.classList = "readMoreUrl";
    readMore.classList = "readMore";
    subtitle.appendChild(author);
    subtitle.appendChild(date);
    readMore.appendChild(readMoreUrl);
    newElement.appendChild(title);
    newElement.appendChild(subtitle);
    newElement.appendChild(content);
    newElement.appendChild(readMore);
    container.appendChild(newElement);
    console.log(data.data[i]);
  }
});
