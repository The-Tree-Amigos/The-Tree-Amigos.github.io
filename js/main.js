// Progressive enhancements only; all page content is static HTML.

// Mobile navigation toggle.
(function () {
    var header = document.querySelector('.site-header');
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if (!header || !toggle || !nav) return;

    function setOpen(open) {
        header.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    function isOpen() {
        return toggle.getAttribute('aria-expanded') === 'true';
    }

    toggle.addEventListener('click', function () {
        setOpen(!isOpen());
    });

    nav.addEventListener('click', function (event) {
        if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('click', function (event) {
        if (isOpen() && !header.contains(event.target)) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && isOpen()) {
            setOpen(false);
            toggle.focus();
        }
    });
})();

// The embedded Google Form shows its confirmation at the top of a very tall frame, while the
// visitor is still looking at the Submit button near the bottom. The frame fires `load` again on
// every navigation inside it (submit, "submit another response"), so bring the card back into view.
(function () {
    var frame = document.querySelector('.estimate-form');
    var card = document.querySelector('.form-card');
    if (!frame || !card) return;

    var loads = 0;
    frame.addEventListener('load', function () {
        loads += 1;
        if (loads > 1) card.scrollIntoView({ block: 'start' });
    });
})();
