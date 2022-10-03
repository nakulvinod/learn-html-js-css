const v = (u) => {
  let container = document.getElementById("container");
  container.innerHTML = "";
  let message = document.createElement("div");
  message.classList = "message";
  message.innerHTML = "Loading";
  container.appendChild(message);
  const URL = document.location.search;
  let category = URL.slice(10, URL.length);
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
  }
  if (categoryList.includes(u)) {
    category = u;

    window.location = `${window.location.origin}?category=${u}`;
    document.getElementById(`${u}`).style.backgroundColor = "#ff3030";
  }

  if (
    categoryList.includes(u) == false &&
    categoryList.includes(category) == false
  ) {
    category = "science";
    window.location = `${window.location.origin}?category=${category}`;
  }
  console.log(u);
  console.log(category);

  let header = document.getElementById("header");
  header.innerHTML = `${category.toUpperCase()} NEWS`;
  document.title = `${category.toUpperCase()} NEWS`;

  fetch(`https://inshorts.deta.dev/news?category=${category}`, {
    method: "GET",
  }).then(async (response) => {
    container.innerHTML = "";
    const data = await response.json();
    for (i = 0; i < data.data.length; i++) {
      let news = document.createElement("div");
      let image = document.createElement("img");
      let title = document.createElement("div");
      let subtitle = document.createElement("div");
      let author = document.createElement("span");
      let date = document.createElement("span");
      let content = document.createElement("div");
      let readMore = document.createElement("button");
      let readMoreUrl = document.createElement("a");
      news.innerhtml = ` ${data.data[i]}`;
      news.classList = "News";
      image.src = data.data[i].imageUrl;
      image.classList = "image";
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
      news.appendChild(image);
      news.appendChild(title);
      news.appendChild(subtitle);
      news.appendChild(content);
      news.appendChild(readMore);
      container.appendChild(news);
      console.log(data.data[i]);
    }
  });
};
window.onload(v());
