function title_case(s)
{
    return String(s[0]).toUpperCase() + String(s).slice(1);
}

document.addEventListener('DOMContentLoaded', () => {
    // Define a mapping of class names to their corresponding content
    const contentMap = {
        'monster': 'fa fa-ghost',
        'item':    'fa-solid fa-khanda',
        'puzzle':  'fa-solid fa-puzzle-piece',
        'scroll':  'fa-solid fa-scroll'
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
            child.innerHTML = 
                '<i class="' + contentMap[className] + '"></i>' + title_case(className) + ":";
            parent.prepend(child);
        }
    });
});
