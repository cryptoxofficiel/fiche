document.getElementById('payrollForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Récupérer les informations du formulaire
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const hours = parseFloat(document.getElementById('hours').value);

    // Calcul du salaire net approximatif (en prenant en compte un taux moyen de cotisations sociales de 22%)
    const socialCharges = salary * 0.22;
    const netSalary = salary - socialCharges;

    // Génération du contenu de la fiche de paie
    const result = `
        <h2>Fiche de Paie</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Poste:</strong> ${position}</p>
        <p><strong>Salaire Brut:</strong> ${salary.toFixed(2)} €</p>
        <p><strong>Heures Travaillées:</strong> ${hours}</p>
        <p><strong>Cotisations Sociales (22%):</strong> -${socialCharges.toFixed(2)} €</p>
        <p><strong>Salaire Net à Payer:</strong> ${netSalary.toFixed(2)} €</p>
    `;

    // Affichage de la fiche de paie sur la page
    document.getElementById('payrollResult').innerHTML = result;
});
