import { http } from './http';
import { ui } from './ui';

//get psots on DOM load
document.addEventListener('DOMContentLoaded', getPosts);
document.addEventListener('click', handleEdit);
document.addEventListener('click', submitPost);
document.addEventListener('click', deletePost);
document.addEventListener('click', updatePost);

function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => ui.showPosts(data))
    .catch((e) => console.log(e));
}

function handleEdit(e) {
  e.preventDefault();
  if (e.target.classList.contains('fa-pen')) {
    const id = parseInt(e.target.parentElement.getAttribute('data-id'));

    http
      .get(`http://localhost:3000/posts/${id}`)
      .then((data) => ui.showValues(data))
      .catch((e) => console.log(e));
  }
}

function submitPost(e) {
  if (e.target.classList.contains('post-submit')) {
    const newPost = ui.getInputValues();

    http
      .post(`http://localhost:3000/posts/`, newPost)
      .then((data) => {
        getPosts();
        ui.showAlert('Post added ', 'alert');
        ui.clearInputValues();
      })
      .catch((err) => console.log(err));
  }
}

function deletePost(e) {
  e.preventDefault();
  if (e.target.classList.contains('fa-trash')) {
    const id = parseInt(e.target.parentElement.getAttribute('data-id'));

    http
      .delete(`http://localhost:3000/posts/${id}`)
      .then((data) => {
        console.log(data);
        getPosts();
      })
      .catch((e) => console.log(e));
  }
}

function updatePost(e) {
  e.preventDefault();
  if (e.target.classList.contains('update-submit')) {
    const id = parseInt(document.querySelector('#id').value);
    const updatePost = ui.getInputValues();

    http
      .put(`http://localhost:3000/posts/${id}`, updatePost)
      .then((data) => {
        console.log(data);
        getPosts();
      })
      .catch((e) => console.log(e));
  }
}
