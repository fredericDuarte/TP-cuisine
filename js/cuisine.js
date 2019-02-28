

document.querySelector("input").addEventListener("input", function(event){
    var coeff = parseInt(event.target.value, 10);

    Array.from(document.querySelectorAll('[data-value]'))
        .forEach(function(span) {
                span.innerHTML = parseInt(span.getAttribute('data-value'), 10) * coeff;
        });
  });