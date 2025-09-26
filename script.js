 document.body.style.fontFamily = "'Inter', sans-serif";

toggleNav()

function toggleNav() {
    const sideNav = document.getElementById('side-nav');
    const menuTexts = document.getElementsByClassName('menu-text');
    const groupNames = document.getElementsByClassName('group-name');
    const separators = document.getElementsByClassName('separator');

    const logo = document.getElementById('logo');
    const toggleBtn = document.getElementById('toggle-btn');


    if (sideNav.classList.contains('collapse')) {
        sideNav.classList.remove('collapse');
        sideNav.classList.add('expand');

        for (let i = 0; i < menuTexts.length; i++) {
            menuTexts[i].classList.add('menu-expand');
            menuTexts[i].classList.remove('menu-collapse');
        }

        for (let i = 0; i < groupNames.length; i++) {
            groupNames[i].style.display = '';
        }

        for (let i = 0; i < separators.length; i++) {
            separators[i].style.display = 'none';
        }

        logo.src = "assets/logo.png";
        toggleBtn.src = "assets/chevron-left.svg";

        return;
    }else {
        sideNav.classList.remove('expand');
        sideNav.classList.add('collapse');

        for (let i = 0; i < menuTexts.length; i++) {
            menuTexts[i].classList.add('menu-collapse');
            menuTexts[i].classList.remove('menu-expand');
        }

        for (let i = 0; i < groupNames.length; i++) {
            groupNames[i].style.display = 'none';
        }
        for (let i = 0; i < separators.length; i++) {
            separators[i].style.display = '';
        }
        logo.src = "assets/min-logo.png";
        toggleBtn.src = "assets/chevron-right.svg";


        return;
    }

    
}


document.addEventListener("DOMContentLoaded", function() {
    const navMenus = document.querySelectorAll('.nav-menu');
    navMenus.forEach(menu => {
        menu.addEventListener('click', function(e) {
            navMenus.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
        });
    });


    // Avatar context menu toggle
    const avatarBtn = document.getElementById('avatar');
    const userMenu = document.getElementById('user-menu');

    avatarBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        avatarBtn.classList.toggle('avatar-active');
        userMenu.style.display = (userMenu.style.display === 'block') ? 'none' : 'block';
        // Position menu below avatar
        const rect = avatarBtn.getBoundingClientRect();
        userMenu.style.position = 'absolute';

        userMenu.style.top = rect.bottom+4 + 'px';
        userMenu.style.left = rect.left-234 + 'px';
        
        userMenu.style.zIndex = 999;
    });

    // Hide user-menu on outside click
    document.addEventListener('click', function(e) {
        if (!userMenu.contains(e.target) && e.target !== avatarBtn) {
            userMenu.style.display = 'none';
            avatarBtn.classList.remove('avatar-active');
        }
    });




    // Help context menu toggle
    const helpBtn = document.getElementById('help-btn');
    const helpMenu = document.getElementById('help-menu');

    helpBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        helpBtn.classList.toggle('topbtn-active');
        helpMenu.style.display = (helpMenu.style.display === 'block') ? 'none' : 'block';
        // Position menu below avatar
        const rect = helpBtn.getBoundingClientRect();
        helpMenu.style.position = 'absolute';

        helpMenu.style.top = rect.bottom+4 + 'px';
        helpMenu.style.left = rect.left-144 + 'px';
        
        helpMenu.style.zIndex = 999;
    });

    // Hide user-menu on outside click
    document.addEventListener('click', function(e) {
        if (!helpMenu.contains(e.target) && e.target !== helpBtn) {
            helpMenu.style.display = 'none';
            helpBtn.classList.remove('topbtn-active');
        }
    });






    // Org context menu toggle
    const orgBtn = document.getElementById('org-switch');
    const orgMenu = document.getElementById('org-menu');

    orgBtn.addEventListener('click', function(e) {
        e.stopPropagation();

        orgBtn.classList.toggle('org-active');
        orgMenu.style.display = (orgMenu.style.display === 'block') ? 'none' : 'block';
        // Position menu below avatar
        const rect = orgBtn.getBoundingClientRect();
        orgMenu.style.position = 'absolute';

        orgMenu.style.top = rect.bottom+4 + 'px';
        orgMenu.style.left = rect.left + 'px';
        
        orgMenu.style.zIndex = 999;
    });

    // Hide user-menu on outside click
    document.addEventListener('click', function(e) {
        if (!orgMenu.contains(e.target) && e.target !== orgBtn) {
            orgMenu.style.display = 'none';
            orgBtn.classList.remove('org-active');
        }
    });

});



document.addEventListener("DOMContentLoaded", function() {
                // Map nav-menu hrefs to page ids
                const navMap = {
                    "#leads": "leads-page",
                    "#lists": "lists-page",
                    "#assets": "assets-page",
                    "#integrations": "integrations-page",
                    "#partners": "partners-page",
                    "#buying groups": "bg-page",
                    "#channels": "channels-page",
                    "#campaigns": "campaigns-page",
                    "#sources": "sources-page",
                    "#insights": "insights-page", 

                };

                // Assign hrefs to nav-menu links for navigation
                document.querySelectorAll('.nav-menu').forEach(function(link) {
                    const text = link.querySelector('.menu-text').textContent.trim().toLowerCase();
                    if (navMap["#" + text]) {
                        link.setAttribute('href', "#" + text);
                    }
                });

                // Show correct page on nav click
                function showPage(pageId) {
                    document.querySelectorAll('.page-content').forEach(function(page) {
                        page.style.display = "none";
                    });
                    const page = document.getElementById(pageId);
                    if (page) page.style.display = "";
                }


                // Navigation click handler
                document.querySelectorAll('.nav-menu').forEach(function(link) {
                    link.addEventListener('click', function(e) {
                        const href = link.getAttribute('href');
                        if (navMap[href]) {
                            e.preventDefault();
                            showPage(navMap[href]);
                            document.querySelectorAll('.nav-menu').forEach(l => l.classList.remove('active'));
                            link.classList.add('active');
                        }
                    });
                });
            });


            document.getElementById('customChannelToggle').addEventListener('change', function() {
                this.checked ? 'ON' : 'OFF';
            });
