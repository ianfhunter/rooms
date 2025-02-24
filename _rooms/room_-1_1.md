---
layout: room
title: "Snow time like the present"
weather: "snow"
puzzle-lock: true
---

It is snowing in this room.

{% comment %}
Answer: 
{% endcomment %}

The doors lock behind you. It seems you cannot proceed without solving the puzzle.

A dead priest lies nearby, You find a scroll in his pocket:

<div class="scroll">
    The god of winter, Aelin is gracious. <br />

</div>

<div class="puzzle" data-puzzle-name="The Whispering Runes">

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg"><thead>
  <tr>
    <th class="tg-1wig">Name</th>
    <th class="tg-1wig">Aela</th>
    <th class="tg-1wig">Sovik</th>
    <th class="tg-1wig">Wiim</th>
    <th class="tg-1wig">Brú</th>
    <th class="tg-1wig">Losh</th>
  </tr></thead>
<tbody>
  <tr>
    <td class="tg-1wig">Symbol</td>
    <td>
        <select>
            <option value="">Spear</option>
            <option value="">Sickle</option>
            <option value="">Raindrop</option>
            <option value="">Icicle</option>
            <option value="">Coin</option>
        </select>
    </td>
    <td>
        <select>
            <option value="">Spear</option>
            <option value="">Sickle</option>
            <option value="">Raindrop</option>
            <option value="">Icicle</option>
            <option value="">Coin</option>
        </select>
    </td>
    <td>
        <select>
            <option value="">Spear</option>
            <option value="">Sickle</option>
            <option value="">Raindrop</option>
            <option value="">Icicle</option>
            <option value="">Coin</option>
        </select>
    </td>
    <td>
        <select>
            <option value="">Spear</option>
            <option value="">Sickle</option>
            <option value="">Raindrop</option>
            <option value="">Icicle</option>
            <option value="">Coin</option>
        </select>
    </td>
    <td>
        <select>
            <option value="">Spear</option>
            <option value="">Sickle</option>
            <option value="">Raindrop</option>
            <option value="">Icicle</option>
            <option value="">Coin</option>
        </select>
    </td>
    <!-- <td class="tg-0lax">Spear</td>
    <td class="tg-0lax">Sickle</td>
    <td class="tg-0lax">Raindrop</td>
    <td class="tg-0lax">Icicle</td>
    <td class="tg-0lax">Coin</td> -->
  </tr>
  <tr>
    <td class="tg-1wig">Major Domain</td>
    <td class="tg-0lax">Justice</td>
    <td class="tg-0lax">Death</td>
    <td class="tg-0lax">Love</td>
    <td class="tg-0lax">Winter</td>
    <td class="tg-0lax">War</td>
  </tr>
  <tr>
    <td class="tg-1wig">Minor Domain</td>
    <td class="tg-0lax">Travel</td>
    <td class="tg-0lax">Harvest</td>
    <td class="tg-0lax">Nature</td>
    <td class="tg-0lax">Dreams</td>
    <td class="tg-0lax">Trade</td>
  </tr>
  <tr>
    <td class="tg-1wig">Worshippers</td>
    <td class="tg-0lax">Dwarves</td>
    <td class="tg-0lax">Fairies</td>
    <td class="tg-0lax">Elves</td>
    <td class="tg-0lax">Humans</td>
    <td class="tg-0lax">Goblins</td>
  </tr>
  <tr>
    <td class="tg-1wig">Companion</td>
    <td class="tg-0lax">Owl</td>
    <td class="tg-0lax">Dire wolf</td>
    <td class="tg-0lax">Dragon</td>
    <td class="tg-0lax">Horse</td>
    <td class="tg-0lax">Snake</td>
  </tr>
</tbody></table>

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
