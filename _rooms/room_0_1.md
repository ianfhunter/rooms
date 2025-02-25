---
layout: room
title: "Bucket Room"
---

{% comment %}
Answer: Coin
{% endcomment }

You are in the room to the right of the starting room. There is an empty bucket.
<!-- 
<p class="item">
A bucket.
</p> -->

You pick up a scroll.

<div class="scroll">
Lxwpajcdujcrxwb, hxd qjen mnlhyqnanm vh blaxuu. Qxfnena, cqnan rb vxan hxd wnnm cx mx. Bxuen cqrb armmun, cqn jwbfna rb j brwpun fxam: R qjen j cjru, jwm R qjen j qnjm, kdc R qjen wx kxmh. Fqjc jv R?
</div>

<div class="puzzle">
    <input id="answer" /><button onclick="checkAnswer()">Submit</button>
</div>
<p id="message"></p>


<script>
function checkAnswer() {
    var answer = document.getElementById("answer").value.toLowerCase();
    
    const message = document.getElementById("message");
    if (answer === "coin") {
        message.textContent = "Correct! You may proceed.";
    } else {
        message.textContent = "Incorrect. Please try again.";
    }
}
</script>