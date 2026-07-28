// Small, performant progressive-enhancement script.
// Fade-in on scroll using IntersectionObserver (respects reduced-motion).
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  var els = document.querySelectorAll('[data-reveal]');
  els.forEach(function(el){ el.style.opacity='0'; el.style.transform='translateY(12px)'; el.style.transition='opacity .5s ease, transform .5s ease'; });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.style.opacity='1'; e.target.style.transform='none'; io.unobserve(e.target); }
    });
  }, {rootMargin:'0px 0px -40px 0px', threshold:0.05});
  els.forEach(function(el){ io.observe(el); });
})();
