// add icon and label to parent

document.addEventListener('DOMContentLoaded', () => {
    const monsterContent = '<i class="fa fa-ghost"></i>monster:'
    const itemContent = '<i class="fa-solid fa-khanda"></i>item:'
  
    const targets = document.querySelectorAll('.monster, .item')
  
    targets.forEach(parent => {
      const child = document.createElement('span')
      child.classList.add('icon')
      if (parent.classList.contains('monster')) {
        child.innerHTML = monsterContent
        parent.prepend(child)
      } else if (parent.classList.contains('item')) {
        child.innerHTML = itemContent
        parent.prepend(child)
      }
    })
  })