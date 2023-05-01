const postBtn = document.getElementById("btn-post");

postBtn.addEventListener("click", function () {
  const cmntBox = document.getElementById("input-comment");
  const commentValue = cmntBox.value;

  const commentContainer = document.getElementById("comment-container");
  const p = document.createElement("p");
  p.innerText = commentValue;
  commentContainer.appendChild(p);
  cmntBox.value = "";
});
