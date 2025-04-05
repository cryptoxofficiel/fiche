// Exemple de calculs pour la fiche de paie
function generatePaySlip() {
    const grossSalary = parseFloat(document.getElementById('grossSalary').value);
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);

    // Calculs des cotisations sociales
    const socialSecurity = grossSalary * 0.4140; // Exemple : 41.40%
    const complementaryHealth = grossSalary * 0.03155; // Exemple : 3.155%
    const retirement = grossSalary * 0.069; // Exemple : 6.9%

    // Calculs du salaire net
    const netSalary = grossSalary - socialSecurity - complementaryHealth - retirement;

    // Affichage des résultats
    const outputDiv = document.getElementById('pay-slip-output');
    outputDiv.innerHTML = `
        <h3>Fiche de Paie</h3>
        <p>Salaire Brut : ${grossSalary.toFixed(2)} €</p>
        <p>Cotisations Sociales :</p>
        <ul>
            <li>Sécurité Sociale : ${socialSecurity.toFixed(2)} €</li>
            <li>Complémentaire Santé : ${complementaryHealth.toFixed(2)} €</li>
            <li>Retraite : ${retirement.toFixed(2)} €</li>
        </ul>
        <p>Salaire Net : ${netSalary.toFixed(2)} €</p>
    `;
}

// Générer le PDF
document.getElementById('download-pdf').addEventListener('click', function () {
    const doc = new jsPDF();

    // Ajouter le contenu au PDF
    doc.setFontSize(18);
    doc.text("Fiche de Paie - Fihe-Pay", 10, 10);

    doc.setFontSize(12);
    doc.text(`Nom : Jean Dupont`, 10, 20);
    doc.text(`Salaire Brut : ${grossSalary.toFixed(2)} €`, 10, 30);
    doc.text(`Cotisations Sociales : ${socialSecurity.toFixed(2)} €`, 10, 40);
    doc.text(`Impôt sur le Revenu : ${incomeTax.toFixed(2)} €`, 10, 50);
    doc.text(`Salaire Net : ${netSalary.toFixed(2)} €`, 10, 60);

    // Sauvegarder le PDF
    doc.save("fiche-de-paie.pdf");
});
