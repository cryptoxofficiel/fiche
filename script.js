document.getElementById('salary-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Récupérer le salaire brut saisi par l'utilisateur
  const brut = parseFloat(document.getElementById('brut').value);

  if (isNaN(brut) || brut <= 0) {
    alert('Veuillez entrer un salaire brut valide.');
    return;
  }

  // Simuler des taux de cotisations (exemple simplifié)
  const cotisations = brut * 0.25; // 25% de cotisations
  const impots = brut * 0.10;     // 10% d'impôts
  const net = brut - cotisations - impots;

  // Afficher le résultat
  document.getElementById('resultat').innerHTML = `
    Salaire brut : ${brut.toFixed(2)} €<br>
    Cotisations : ${cotisations.toFixed(2)} €<br>
    Impôts : ${impots.toFixed(2)} €<br>
    Salaire net : <strong>${net.toFixed(2)} €</strong>
  `;
});
