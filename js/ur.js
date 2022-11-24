// const rawUrl =
//     "http://localhost:63342/project/Japan/examen_css_html_frontend-2/url.html?_ijt=t92c380p2d8qsms6otmc37rqb9&_ij_reload=RELOAD_ON_SAVE";
//
// const query = "ipsum";
// const sortField = "title";
// const sortOrder = "desc";
// const pageNumber = "1";
// const itemsPerPage = "10";
// const templateUrl = `http://localhost:63342/project/Japan/examen_css_html_frontend-2/url.html?_ijt=t92c380p2d8qsms6otmc37rqb9&_ij_reload=RELOAD_ON_SAVE/posts?q=${query}&_sort=${sortField}&_order=${sortOrder}&_limit=${itemsPerPage}&_page=${pageNumber}`;
//
// const queries = {
//     q: "ipsum",
//     _sort: "title",
//     _order: "desc",
//     _page: "1",
//     _limit: "10"
// };
// const params = new URLSearchParams(queries);
// const url = "http://localhost:63342/project/Japan/examen_css_html_frontend-2/url.html?_ijt=t92c380p2d8qsms6otmc37rqb9&_ij_reload=RELOAD_ON_SAVE";
// const fullUrl = url + "?" + params.toString();
//
// const baseUrl = "http://localhost:63342/project/Japan/examen_css_html_frontend-2/url.html?_ijt=t92c380p2d8qsms6otmc37rqb9&_ij_reload=RELOAD_ON_SAVE";
// const postUrl = new URL("posts", baseUrl);
// // postUrl.searchParams.append('q', 'ipsum');
// // postUrl.searchParams.append('_sort', 'title');
// // postUrl.searchParams.append('_order', 'desc');
// // postUrl.searchParams.append('_page', '1');
// // postUrl.searchParams.append('_limit', '10');
// postUrl.search = params.toString();
//
// document.getElementById("app").innerHTML = `
// <div>
//   ${params.toString()} <br><br>
//   ${fullUrl.toString()} <br><br>
//   ${postUrl.toString()} <br><br>
// </div>
// `;

const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"