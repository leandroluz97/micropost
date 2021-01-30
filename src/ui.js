class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
            <div class="card-body">
                <h4 class="card-title"> ${post.title}</h4>
                <p class="card-text">${post.body}</p>
                <a href="#" class="edit card-link" data-id="${post.id}">
                <i class="fas fa-pen"></i>
                </a>
                <a href="#" class="delete card-link" data-id="${post.id}">
                <i class="fas fa-trash"></i>
                </a>
            </div>
       </div>
       `;
    });

    this.post.innerHTML = output;
  }

  showValues(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    document.querySelector('.update-submit').classList.remove('d-none');
    document.querySelector('.cancel-submit').classList.remove('d-none');
    this.postSubmit.classList.add('d-none');
    this.forState = data.id;
    this.idInput.value = data.id;
  }

  getInputValues() {
    let title = this.titleInput.value;
    let body = this.bodyInput.value;

    return {
      title,
      body,
    };
  }
  showAlert(message, className) {
    this.clearAlert();
    //create div
    const div = document.createElement('div');
    //add classes
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.postsContainer');
    // get posts
    const posts = document.querySelector('#posts');
    //insert in dom
    container.insertBefore(div, posts);

    setTimeout(this.clearAlert, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }
  clearInputValues() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }
}

export const ui = new UI();
