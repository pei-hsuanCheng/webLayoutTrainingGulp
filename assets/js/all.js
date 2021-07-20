"use strict";

var blogBtn = document.getElementsByClassName('jBlogBtn');

for (var i = 0; i < blogBtn.length; i++) {
  blogBtn[i].addEventListener('click', function () {
    location.href = "post.html";
  });
}
//# sourceMappingURL=all.js.map
