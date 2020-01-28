const Url = require("url");
const my_url = Url.parse('https://nodejs.org/api/url.html');
console.log(my_url.href);
console.log(my_url.host);
console.log(my_url.port);
console.log(my_url.protocol);
console.log(my_url.searchParams);