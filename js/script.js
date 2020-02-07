(function () {

    let scrollY = function () {
        let supportPageOffset = window.pageXOffset !== undefined;
        let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    let nav = document.querySelector('.navbar');
    let top = nav.getBoundingClientRect().top + scrollY();
    let width = nav.getBoundingClientRect().width
    let fake = document.createElement('div')
    fake.style.height = nav.getBoundingClientRect().height+"px";
    let onScroll = function () {
        let hasScrollClass = nav.classList.contains('sticky')
        if (scrollY() > top && !hasScrollClass) {
            nav.classList.add('sticky')
            nav.parentNode.insertBefore(fake,nav)
        }else if(scrollY() < top && hasScrollClass){
            nav.classList.remove('sticky')
            nav.parentNode.removeChild(fake)
        }


    }
    window.addEventListener('scroll', onScroll)

})()