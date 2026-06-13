document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("cert.json");
    const data = await res.json();

    const container = document.querySelector(".certification");

    data.certifications.forEach((cert) => {

        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = cert.name;

        const label = document.createElement("div");
        label.classList.add("date-label");
        label.textContent = `取得年月: ${cert.year}/${cert.month}`;

        card.appendChild(label);
        card.appendChild(title);
        container.appendChild(card);
    });

    const radios = document.querySelectorAll('input[name="sort"]');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            container.classList.add('stack');
        });
    });

});
