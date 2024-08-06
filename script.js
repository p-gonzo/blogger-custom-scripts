// IIFE to execute after DOM is rendered
(() => {
    setTimeout( () => {
        document.getElementsByClassName('blogger')[0].style.display = 'none';
        document.getElementsByClassName('copyright')[0].innerHTML = `&copy; Phil Gonzalez | ${new Date().getFullYear()}`;

        const myFunction = (x) => {
          if (x.matches) {
              document.getElementsByClassName("post-body entry-content")[0].style.fontSize = '1.1rem';
              document.getElementsByClassName('main_header_elements container')[0].style.overflowY = 'hidden';
          } else {
              document.getElementsByClassName("post-body entry-content")[0].style.fontSize = '1.1rem';
            }
        }
        var x = window.matchMedia("(max-width: 968px)");
        myFunction(x);
        x.addEventListener("change", function() {
          myFunction(x);
        });
    }, 0);
})();
