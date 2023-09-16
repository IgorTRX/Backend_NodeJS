document.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id
    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  } else if (event.target.dataset.type === 'edit') {
    const editNote = prompt('Введите новое название')
    if (editNote) {
      const data = {}
      data.title = editNote
      data.id = event.target.dataset.id
      edit(data).then(() => {
        event.target.closest('li').children[0].innerText = data.title
      })
    }
  }
})

async function remove(id) {
  await fetch(`/${id}`, { method: 'DELETE' })
}
async function edit(data) {
  await fetch('/', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(data),
  })
}
