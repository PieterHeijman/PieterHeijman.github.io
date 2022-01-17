import SocialShare from './modules/SocialShare';

const hooks = document.querySelectorAll('.social-share');

hooks.forEach((hook: HTMLElement) => {
    const w = new SocialShare(hook);
    w.render();
});

