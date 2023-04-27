const video = document.querySelector('.promo__video');

video.addEventListener('click', function () {
  if (video.classList.contains('ready')) {
    return;
  }
  video.classList.add('ready');

  const src = video.dataset.src;

  video.insertAdjacentHTML('afterbegin', '<iframe width="366" height="230" src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
});
