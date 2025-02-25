---
layout: room
title: "A Fishy Bucket"
---

{% comment %}
Answer: Coin
{% endcomment %}

You are in the room to the right of the starting room. There is a bucket of red fish. 

Nestled between the fish, is a scroll. Is it written in some sort of strange fish language?

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