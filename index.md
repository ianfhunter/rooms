---
layout: default
title: "Dungeon Entrance"
---

<h1>Welcome to the Dungeon</h1>
<p>Choose a room to enter:</p>

v1:
<ul>
  {% for room in site.rooms %}
    <li>
      <a href="{{ room.url }}">{{ room.title }}</a>
    </li>
  {% endfor %}
</ul>

<p>Explore the rooms and find your way through the dungeon!</p>
