import SocialShare from './modules/SocialShare';

const hooks = document.querySelectorAll('.social-share');

hooks.forEach((hook: HTMLElement) => {
    const w = new SocialShare(hook);
    w.render();
});


if (/^ru\b/.test(navigator.language)) {
  const peace = document.querySelector('.peace') as HTMLElement;      
  peace.style['display'] = 'block';  

  const btn = document.querySelector('.understand') as HTMLInputElement;

  btn.addEventListener('click', () => {
    peace.style['display'] = 'none';  
  });
}
