const blogBtn = document.getElementsByClassName('jBlogBtn');
for(let i=0; i<blogBtn.length; i++){
  blogBtn[i].addEventListener('click', () => {
    location.href="post.html";
  });
}