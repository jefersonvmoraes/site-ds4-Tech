const dadosForm = {
  name:'',
  numberTell: '',
  email: '',
  message: ''
}
document.getElementById('formulario').addEventListener('submit', function(ev){
  ev.preventDefault()
  dadosForm.name = document.getElementById('name').value
  dadosForm.numberTell = document.getElementById('tell').value
  dadosForm.email = document.getElementById('email').value
  dadosForm.message = document.getElementById('message').value

  const popup = document.getElementById('div-popup')
  const textPopup = document.getElementById('text-popup')
  
  textPopup.innerText = `${dadosForm.name} obrigado por entrar em contato! Em breve retornaremos.`
  
  popup.style.display = 'flex'
  document.getElementById('btn-close-popup').addEventListener('click', function(){
    popup.style.display = 'none'
  })

  console.log(dadosForm)
  document.getElementById('name').value = ''
  document.getElementById('tell').value = ''
  document.getElementById('email').value = ''
  document.getElementById('message').value = ''
})