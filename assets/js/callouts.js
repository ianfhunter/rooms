// // add icon and label to parent

// document.addEventListener('DOMContentLoaded', () => {
//     const monsterContent = '<i class="fa fa-ghost"></i>Monster:'
//     const itemContent = '<i class="fa-solid fa-khanda"></i>Item:'
//     const puzzleContent = "<i class="fa-solid fa-puzzle-piece"></i>Puzzle:"
  
//     const targets = document.querySelectorAll('.monster, .item, .puzzle')
  
//     targets.forEach(parent => {
//       const child = document.createElement('span')
//       child.classList.add('icon')
//       if (parent.classList.contains('monster')) {
//         child.innerHTML = monsterContent
//         parent.prepend(child)
//       } else if (parent.classList.contains('item')) {
//         child.innerHTML = itemContent
//         parent.prepend(child)
//       }else if (parent.classList.contains('puzzle')) {
//         child.innerHTML = puzzleContent
//         parent.prepend(child)
//       }
//     })
//   })

document.addEventListener('DOMContentLoaded', () => {
    // Define a mapping of class names to their corresponding content
    const contentMap = {
        'monster': '<i class="fa fa-ghost"></i>Monster:',
        'item': '<i class="fa-solid fa-khanda"></i>Item:',
        'puzzle': '<i class="fa-solid fa-puzzle-piece"></i>Puzzle:'
    };

    // Create a selector string from the keys of contentMap
    const targetsSelector = Object.keys(contentMap).map(key => `.${key}`).join(', ');

    // Select all target elements
    const targets = document.querySelectorAll(targetsSelector);

    targets.forEach(parent => {
        const child = document.createElement('span');
        child.classList.add('icon');

        // Get the class name that matches the parent
        const className = Array.from(parent.classList).find(cls => contentMap[cls]);

        if (className) {
            child.innerHTML = contentMap[className];
            parent.prepend(child);
        }
    });
});
