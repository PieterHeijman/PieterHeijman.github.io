document.addEventListener('click', function(e) {
        var el = e.target;

        // Go up in the nodelist until we find a node with .href (HTMLAnchorElement)
        while (el && !el.href) {
          el = el.parentNode;
        }

        if (el) {
          if (!el.hasAttribute('target')) {
            e.preventDefault();
            history.pushState(null, null, el.href);
            changePage();
            return;
          }
        }
      });
      
      window.addEventListener('popstate', changePage);

      var cache = {};

      function loadPage(url) {
        if (cache[url]) {
          return cache[url];
        } else {
          var xhttp = new XMLHttpRequest();
          xhttp.open("GET", url, false);
          xhttp.send();
          cache[url] = xhttp.responseText;
          return xhttp.responseText;
        }
      }

      var main = document.querySelector('main');

      function changePage() {
        // Note, the URL has already been changed
        var url = window.location.href;

        var responseText = loadPage(url);
        var wrapper = document.createElement('div');
            wrapper.innerHTML = responseText;

        var oldContent = document.querySelector('.page-content');
        var newContent = wrapper.querySelector('.page-content');

        main.appendChild(newContent);
        animate(oldContent, newContent);
      }

      function animate(oldContent, newContent) {
        oldContent.parentNode.removeChild(oldContent);
        window.scrollTo(0, 0);
      }