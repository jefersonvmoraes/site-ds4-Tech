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
  console.log(dadosForm)
  alert('Entraremos em contato em breve' + dadosForm)
  document.getElementById('name').value = ''
  document.getElementById('tell').value = ''
  document.getElementById('email').value = ''
  document.getElementById('message').value = ''
})