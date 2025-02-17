function togglePortfolio(){
    const panel = document.querySelector('.portfolio-panel');
    panel.classList.toggle('open');
    panel.scrollTo(0,0);
}
function contactUs(){
    const panel = document.querySelector('.portfolio-panel');
    panel.classList.add('open');
    panel.scroll(0,100);
  }
function closePortfolio(){
    const panel = document.querySelector('.portfolio-panel');
    panel.classList.remove('open');
}
document.body.addEventListener('click', function(event) {
    const panel = document.querySelector('.portfolio-panel');
    if (!panel.contains(event.target) && !event.target.closest('.nav-btn') && !event.target.closest('.button')) {
      closePortfolio();
    }
  });