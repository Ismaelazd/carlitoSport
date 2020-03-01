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
    fake.style.height = nav.getBoundingClientRect().height + "px";
    let onScroll = function () {
        let hasScrollClass = nav.classList.contains('sticky')
        if (scrollY() > top && !hasScrollClass) {
            nav.classList.add('sticky')
            nav.parentNode.insertBefore(fake, nav)
        } else if (scrollY() < top && hasScrollClass) {
            nav.classList.remove('sticky')
            nav.parentNode.removeChild(fake)
        }

    }
    window.addEventListener('scroll', onScroll)



    const items = document.querySelectorAll(".accordion a");

    function toggleAccordion() {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));

    let block = document.querySelectorAll('.box');
    let rules = document.getElementById('rules');
    let li = rules.children
    for (let i = 0; i < li.length - 5; i++) {
        for (let i = 0; i < block.length; i++) {        
            block[i].style.height = String(320+((li.length - 5)*22))+'px';
        }
        
    }
    

})()

  
window.onload = function() {
    if(localStorage.getItem('popState') != 'shown'){
        document.getElementById('popupID').style.display = 'block';
        load()
        localStorage.setItem('popState','shown')
    }
};

function load() {
	document.getElementById('country').onclick = function() {
		this.style.display = 'none';
	};
};
