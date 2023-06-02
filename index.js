document.getElementById('bout-div').addEventListener('click', function() {
    var A = parseInt(document.getElementById('addition').value);
    var B = parseInt(document.getElementById('multiplication').value);
    var C = parseInt(document.getElementById('fin').value); 
  
    var resultat = (A + B) * C; 
  
    document.getElementById('resultats-division').textContent = "Résultat : " + resultat;
  });
