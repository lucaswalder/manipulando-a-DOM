const buttonModal = document.getElementById('openModal')
const closeModal = document.getElementById('closeModal')


buttonModal.addEventListener('click', openModal) 
function openModal() {
    closeModal.classList.add('enable')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    if(isEscKey && closeModal.classList.contains('enable')) {
        closeModal.classList.remove('enable')
    }
} )