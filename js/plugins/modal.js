function _createModal(options) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <span id="title" class="modal-title">Modal Title</span>
          <span class="modal-close">&times;</span>
        </div>
        <div class="modal-content">
          <img id="mdImg" src="https://images.unsplash.com/photo-1596741964346-791466b552b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="">
          <p id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam blanditiis aspernatur corporis similique libero perspiciatis nisi facilis quibusdam perferendis placeat, soluta incidunt dolore, assumenda, nulla quam possimus architecto recusandae. Non?</p>
        </div>
        <div class="modal-footer">
          <p><a href="" id="link">Check official site</a></p>
        </div>
      </div>
    </div>
  `);

  document.body.appendChild(modal);
  return modal;
}

$.modal = function(options) {
  const ANIMATION_DUR = 300;
  const $modal = _createModal(options); 
  let closing = false;

  const modalOverlay = document.querySelector('.modal-overlay');
  const modalTitle = document.querySelector('#title');
  const modalImg = document.querySelector('#mdImg');
  const modalText = document.querySelector('#text');
  const modalLink = document.querySelector('#link');

  function setNewAttribute($el, remAtt, addAtt, val) {
    $el.removeAttribute(remAtt);
    $el.setAttribute(addAtt, val);
  }

  return {
    open(options) {
      !closing && $modal.classList.add('open');
      modalTitle.innerHTML = `${options.title}`;
      setNewAttribute(modalImg, 'src', 'src', options.image);
      modalText.innerHTML = `${options.mainContent}`;
      setNewAttribute(modalLink, 'href', 'href', options.url);
      setNewAttribute(modalLink, 'target', 'target', '_blank');
    },
    close() {
      closing = true;
      $modal.classList.remove('open');
      $modal.classList.add('hide');
      setTimeout(() => {
        $modal.classList.remove('hide');
        closing = false;
      }, ANIMATION_DUR);
    },
    destroy() {
      document.body.removeChild($modal);
    } 
  }
}