let lastScrollTop = 0;

    window.addEventListener("scroll", function(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let navbar = document.getElementById("mainNavbar");

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.top = "-80px";  // Adjust the value based on the height of your navbar
        } else {
            // Scrolling up
            navbar.style.top = "0";
        }

        lastScrollTop = scrollTop;
    });