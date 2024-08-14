document.addEventListener('DOMContentLoaded', () => {
    const birthDate = new Date('2011-06-08');
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('age').textContent = `Age: ${age} years old`;
});
