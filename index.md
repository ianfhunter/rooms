---
layout: default
title: "Dungeon Entrance"
---

<h1>Welcome to the Dungeon</h1>
<p>Choose a room to enter:</p>

v1:
<ul>
  {% for room in site.pages %}
    What about {{room.path}}
    {% if room.path contains '_rooms/' %}
      <li>
        <a href="{{ room.url }}">{{ room.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

v2:
<ul>
  {% assign rooms = site.pages | where: "path", "_rooms/" %}
  {% for room in rooms %}
    <li>
      <a href="{{ room.url }}">{{ room.title }}</a>
    </li>
  {% endfor %}
</ul>

<p>Explore the rooms and find your way through the dungeon!</p>
