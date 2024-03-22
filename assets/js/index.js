import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
//alert
// js-docs-start live-alert
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
  }

  const alertTrigger = document.getElementById('liveAlertBtn')
  if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      appendAlert('Mensaje enviado Correctamente!', 'success')
    })
  }
  // js-docs-end live-alert
  

//contaste de tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//constantes de Modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

//scrollMove
// $(document).ready(function(){
//   $("a").click(function() {
//     var li = this.hash
//     alert(li)
//     $("html, body").animate(
//       {
//         scrollTo:$(li).offset().top -70
//       },
//       4000
//     )
//   })
//  })