import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Popover from '@radix-ui/react-popover';

export default class SocialShare {
  hook: HTMLElement;
  title: string;
  url: string;
  image: string;
  twitter: string;
  facebook: string;
  pinterest: string;
  linkedin: string;
  reddit: string;

  constructor(hook: HTMLElement) {
    this.hook = hook;
    this.title = this.hook.getAttribute('data-title');
    this.url = this.hook.getAttribute('data-url');  
    this.image = this.hook.getAttribute('data-image');  
    this.twitter = `https://twitter.com/share?url=https://www.trivialdiscourse.com${this.url}&text=${this.title}`;
    this.facebook = `https://www.facebook.com/sharer.php?u=https://www.trivialdiscourse.com${this.url}`;
    this.pinterest = `https://pinterest.com/pin/create/bookmarklet/?media=https://www.trivialdiscourse.com${this.image}&url=https://www.trivialdiscourse.com${this.url}&description=${this.title}`;
    this.linkedin = `https://www.linkedin.com/shareArticle?url=https://www.trivialdiscourse.com${this.url}&title=${this.title}`;
    this.reddit = `https://reddit.com/submit?url=https://www.trivialdiscourse.com${this.url}&title=${this.title}`;
  }

  render() {
    ReactDOM.render(
      <div>
          <Popover.Root>
            <Popover.Trigger className="trigger">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            </Popover.Trigger>
            <Popover.Content side="top" sideOffset={8} className="social-share-content">
              <ul className="links">
                <li>
                  <a href={this.twitter} target="_blank" aria-label="Share this on Twitter" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      aria-label="Twitter" role="img"
                      viewBox="0 0 512 512"><rect
                      width="512" height="512"
                      rx="15%"
                      fill="#1da1f2"/><path fill="#fff" d="M437 152a72 72 0 01-40 12a72 72 0 0032-40a72 72 0 01-45 17a72 72 0 00-122 65a200 200 0 01-145-74a72 72 0 0022 94a72 72 0 01-32-7a72 72 0 0056 69a72 72 0 01-32 1a72 72 0 0067 50a200 200 0 01-105 29a200 200 0 00309-179a200 200 0 0035-37"/></svg>
                  </a>
                  <a href={this.facebook} target="_blank" aria-label="Share this on Facebook" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      aria-label="Facebook" role="img"
                      viewBox="0 0 512 512"><rect
                      width="512" height="512"
                      rx="15%"
                      fill="#1877f2"/><path d="M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z" fill="#fff"/></svg>
                  </a>
                  <a href={this.pinterest} target="_blank" aria-label="Share this on Pinterest" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      aria-label="Pinterest" role="img"
                      viewBox="0 0 512 512"><rect
                      width="512" height="512"
                      rx="15%"
                      fill="#bd081b"/><path d="m265 65c-104 0-157 75-157 138 0 37 14 71 45 83 5 2 10 0 12-5l3-18c2-6 1-7-2-12-9-11-15-24-15-43 0-56 41-106 108-106 60 0 92 37 92 85 0 64-28 116-70 116-23 0-40-18-34-42 6-27 19-57 19-77 0-18-9-34-30-34-24 0-42 25-42 58 0 20 7 34 7 34l-29 120a249 249 0 0 0 2 86l3-1c2-3 31-37 40-72l16-61c7 15 29 28 53 28 71 0 119-64 119-151 0-66-56-126-140-126z" fill="#fff"/></svg>
                  </a>
                  <a href={this.linkedin} target="_blank" aria-label="Share this on Linkedin" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      aria-label="LinkedIn" role="img"
                      viewBox="0 0 512 512"
                      fill="#fff"><rect
                      width="512" height="512"
                      rx="15%"
                      fill="#0077b5"/><circle cx="142" cy="138" r="37"/><path stroke="#fff" stroke-width="66" d="M244 194v198M142 194v198"/><path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"/></svg>
                  </a>
                  <a href={this.reddit} target="_blank" aria-label="Share this on Reddit" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      aria-label="Reddit" role="img"
                      viewBox="0 0 512 512"><rect
                      width="512" height="512"
                      rx="15%"
                      fill="#f40"/><g fill="#fff"><ellipse cx="256" cy="307" rx="166" ry="117"/><circle cx="106" cy="256" r="42"/><circle cx="407" cy="256" r="42"/><circle cx="375" cy="114" r="32"/></g><g stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="m256 196 23-101 73 15" stroke="#fff" stroke-width="16"/><path d="m191 359c33 25 97 26 130 0" stroke="#f40" stroke-width="13"/></g><g fill="#f40"><circle cx="191" cy="287" r="31"/><circle cx="321" cy="287" r="31"/></g></svg>
                  </a>
                </li>
              </ul>  
            </Popover.Content>
          </Popover.Root>
      </div>,
      this.hook
    );
  }
}
