---
layout: default
title: "Dungeon Entrance"
---

<h1>Welcome to the Dungeon</h1>
<p>Choose a room to enter:</p>

<ul>
  {% for room in site.pages %}
    {% if room.path contains '_rooms/' %}
      <li>
        <a href="{{ room.url }}">{{ room.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

<p>Explore the rooms and find your way through the dungeon!</p>
