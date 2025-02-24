---
layout: default
title: "Dungeon Entrance"
---

<h1>Welcome to the Dungeon</h1>
<p>Choose a room to enter:</p>

<ul>
  {% for room in site.rooms %}
    <li>
      <input type="checkbox"><a href="{{ site.baseurl }}/{{ room.url }}">{{ room.title }}</a>
    </li>
  {% endfor %}
</ul>

<p>Explore the rooms and find your way through the dungeon!</p>

<!-- Random Room Button -->
<button id="random-room-button" class="button">Random Room</button>

<script>
  const rooms = [
    {% for room in site.rooms %}
      "{{ site.baseurl }}/{{ room.url }}"{% if forloop.last == false %}, {% endif %}
    {% endfor %}
  ];

  document.getElementById('random-room-button').onclick = function() {
    const randomIndex = Math.floor(Math.random() * rooms.length);
    window.location.href = rooms[randomIndex];
  };
</script>