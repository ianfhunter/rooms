// add icon and label to parent

const tldrContent = '<i class="fa fa-bolt"></i>monster:'
const infoContent = '<i class="fa fa-info-circle"></i>item:'

const targets = document.querySelectorAll('.monster, .item')

targets.forEach(parent => {
  const child = document.createElement('span')
  child.classList.add('icon')
  if (parent.classList.contains('monster')) {
    child.innerHTML = tldrContent
    parent.prepend(child)
  } else if (parent.classList.contains('item')) {
    child.innerHTML = infoContent
    parent.prepend(child)
  }
})