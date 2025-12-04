// Interacción básica para los botones pedidos
document.addEventListener('DOMContentLoaded', function () {
  // Modal misión / visión
  const btnVision = document.getElementById('btn-vision');
  const modal = document.getElementById('modal-vision');
  const closeModal = document.getElementById('close-modal');
  const modalOk = document.getElementById('modal-ok');

  function openModal(){
    modal.setAttribute('aria-hidden','false');
  }
  function hideModal(){
    modal.setAttribute('aria-hidden','true');
  }

  btnVision.addEventListener('click', openModal);
  closeModal.addEventListener('click', hideModal);
  modalOk.addEventListener('click', hideModal);

  // Ministerio de jóvenes panel toggle
  const btnJovenes = document.getElementById('btn-jovenes');
  const panelJovenes = document.getElementById('panel-jovenes');
  btnJovenes.addEventListener('click', function(){
    const isHidden = panelJovenes.style.display === 'none' || panelJovenes.style.display === '';
    panelJovenes.style.display = isHidden ? 'block' : 'none';
    panelJovenes.setAttribute('aria-hidden', !isHidden ? 'true' : 'false');
  });

  // Cerrar botones de paneles
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-close');
      const el = document.getElementById(id);
      if(el){
        el.style.display = 'none';
        el.setAttribute('aria-hidden','true');
      }
    });
  });

  // Ministry danza -> mostrar SHEKINAH animado
  const btnDanza = document.getElementById('btn-danza');
  const shekinah = document.getElementById('shekinah');
  btnDanza.addEventListener('click', function(){
    shekinah.style.display = 'block';
    shekinah.setAttribute('aria-hidden','false');
    // pequeña animación: scale y fade
    shekinah.animate([
      { transform: 'scale(0.85)', opacity: 0 },
      { transform: 'scale(1.02)', opacity: 1 },
      { transform: 'scale(1)', opacity: 1 }
    ], {
      duration: 500,
      easing: 'cubic-bezier(.2,.9,.2,1)'
    });
    // opcional: esconder después de 6s
    setTimeout(() => {
      shekinah.style.display = 'none';
      shekinah.setAttribute('aria-hidden','true');
    }, 6000);
  });

  // Horario
  const btnHorario = document.getElementById('btn-horario');
  const panelHorario = document.getElementById('panel-horario');
  btnHorario.addEventListener('click', function(){
    const isHidden = panelHorario.style.display === 'none' || panelHorario.style.display === '';
    panelHorario.style.display = isHidden ? 'block' : 'none';
    panelHorario.setAttribute('aria-hidden', !isHidden ? 'true' : 'false');
  });

  // Accessibility: close modal with Esc
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') hideModal();
  });
});
