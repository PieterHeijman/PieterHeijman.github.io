if (/^ru\b/.test(navigator.language)) {
  const peace = document.querySelector('.peace') as HTMLElement;      
  peace.style['display'] = 'block';  

  const btn = document.querySelector('.understand') as HTMLInputElement;

  btn.addEventListener('click', () => {
    peace.style['display'] = 'none';  
  });
}
