window.onload = function () {

  document.getElementById('navMinimizeButton').onclick = function() {
    siteMainView.classList.toggle('navClosed');
    siteNav.classList.toggle('navClosed');
  }

  siteNav.onmouseover = function(event) {
    if (!this.classList.contains('navClosed')) {
      return;
    }
    let target = event.target;
    if (!target.hasAttribute('no-nav-hover')) {
     if (!this.classList.contains('navClosedHover')) {
      this.classList.add('navClosedHover');
     }
    }
  };

  siteNav.onmouseout = function(event) {
    let target = event.target;
    let relatedTarget = event.relatedTarget;

    // checks if element also has a parent THIS
    while (relatedTarget) {
      if (relatedTarget == this) 
        return;
      relatedTarget = relatedTarget.parentNode;
    }
    this.classList.remove('navClosedHover');
  };

  window.addEventListener('scroll', function() {
    let windowHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    let currentScroll = window.pageYOffset;
    console.log(windowHeight, currentScroll)

    if (currentScroll > 400) {
      navScrollButton.classList.add('siteNavButton-scroll-active', 'siteNavButton-scroll-up');
      navScrollButton.classList.remove('siteNavButton-scroll-down','siteNavButton-scroll-fixed');
    } else if (navScrollButton.classList.contains('siteNavButton-scroll-fixed')) {
      navScrollButton.classList.remove('siteNavButton-scroll-up');
      navScrollButton.classList.add( 'siteNavButton-scroll-down');
    } else {
      navScrollButton.classList.remove('siteNavButton-scroll-active', 'siteNavButton-scroll-up');
      navScrollButton.classList.add( 'siteNavButton-scroll-down');
    }
  });

  navScrollButton.onclick = function() {
    if (this.classList.contains('siteNavButton-scroll-active')){
      if (this.classList.contains('siteNavButton-scroll-up')){
        let currentScroll = window.pageYOffset;
        this.prevy = currentScroll;
        this.setAttribute('prevy', currentScroll);
        this.classList.add('siteNavButton-scroll-fixed');
        window.scrollTo({top:0, behavior: 'auto'});
      } else {
        window.scrollTo({top:this.prevy, behavior: 'auto'});
        console.log(this.prevy)
      }
    }
    
  };

}