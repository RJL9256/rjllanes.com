(function(){
  var els = document.querySelectorAll('section:not(.hero) .section-title, .stat-item, .about-text, .timeline-item, .project-card, .cert-card, .contact-inner');
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach(function(el){ el.classList.add('reveal'); io.observe(el); });
})();
