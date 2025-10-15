// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  function wireToggle(buttonId, navId){
    var btn = document.getElementById(buttonId);
    var nav = document.getElementById(navId);
    if(!btn || !nav) return;
    btn.addEventListener('click', function(){
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if(nav.style.display === 'flex' || nav.style.display === 'block'){
        nav.style.display = 'none';
      } else {
        nav.style.display = 'block';
      }
    });
  }
  wireToggle('nav-toggle', 'main-nav');
  wireToggle('nav-toggle-2', 'main-nav-2');

  // Simple client-side form validation feedback for contact form
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        e.preventDefault();
        alert('Please fill out all required fields correctly.');
      } else {
        e.preventDefault();
        alert('This site demo does not send messages — form submission simulated.');
        form.reset();
      }
    });
  }
});
