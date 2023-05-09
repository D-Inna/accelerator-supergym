const containerVideo = document.querySelector('.promo__container-video');
const link = document.querySelector('.promo__link-video');
const promoVideo = document.querySelector('[data-promo-video]');
const buttonPlay = document.querySelector('.promo__icon');

link.removeAttribute('href');

const createIframe = (video) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', video.dataset.src);

  return iframe;
};


if (buttonPlay) {
  buttonPlay.addEventListener('click', () => {
    if (promoVideo && containerVideo) {
      const iframeVideo = createIframe(promoVideo);

      link.remove();
      buttonPlay.remove();
      promoVideo.appendChild(iframeVideo);
    }
  });
}
