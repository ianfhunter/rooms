---
layout: room
title: "The Chamber of Echoes"
puzzle-lock: true
---

{% comment %}
Answer: F W E A W F A
{% endcomment %}

At the very heart of the dungeon, is the Chamber of Echoes.

As you enter, the air feels thick with anticipation. The walls are adorned with ancient runes that shimmer faintly in the dim light. In the center of the room stands a large stone pedestal, upon which rests a beautifully crafted silver mirror. The mirror reflects not only your image but also faint whispers that seem to emanate from the walls, creating an eerie atmosphere.

<!-- <audio controls>
  <source src="{{ '/assets/audio/whispers.wav' | relative_url }}" type="audio/wav">
   
</audio> -->

The doors lock behind you. It seems you cannot proceed without solving the puzzle.


It appears there's a scroll nearby. However, the contents seems like nonsense.
<div class="scroll">
    <ul>
        <li>Confirmed</li>
        <li>Afterwards</li>
        <li>Charter</li>
        <li>Cavalier</li>
        <li>Strawberries</li>
        <li>Suffering</li>
        <li>Viscera</li>
    </ul>
</div>

<div class="puzzle" data-puzzle-name="The Whispering Runes">
<b>The Whispering Runes</b>

There are four sets of runes on the walls, each representing a different element: Fire, Water, Earth, and Air. Each set has three runes, each inscribed with a word related to its element (e.g., Fire: Flame, Ember, Ash).

When you speak a word aloud while looking into the mirror, the mirror will reflect a faint glow if the word is part of the correct sequence. If the word is incorrect, the mirror remains dark.

<div style="text-align:center">
    <button>⛰️</button>
    <button>🔥</button>
    <button>🌪️</button>
    <button>🌊</button>
</div>
<p id="message"></p>

<script>
    const correctOrder = ['⛰️', '🔥', '🌪️', '🌊', '🔥', '🌊', '🌪️'];
    let userOrder = [];

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            userOrder.push(button.textContent);
            checkOrder();
        });
    });

    function checkOrder() {
        const currentIndex = userOrder.length - 1;
        if (userOrder[currentIndex] !== correctOrder[currentIndex]) {
            document.getElementById('message').textContent = 'Wrong order! Try again.';
            userOrder = []; // Reset the order
        } else if (userOrder.length === correctOrder.length) {
            document.getElementById('message').textContent = 'The Doors Unlock!';
        } else {
            document.getElementById('message').textContent = '';
        }
    }
</script>

</div>
