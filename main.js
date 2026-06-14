document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("cert.json");
    const data = await res.json();

    const container = document.querySelector(".certification");
    const radios = document.querySelectorAll('input[name="sort"]');

    let certifications= data.certifications;

    function render(certs) {
        container.innerHTML = "";

        certs.forEach(cert => {
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
    }

    render(certifications);

    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            let sorted = [...certifications];

            if (document.getElementById("opt1").checked) {
                sorted.sort((a,b) =>
                    a.year - b.year || a.month - b.month
                );
            }

            if (document.getElementById("opt2").checked) {
                sorted.sort((a,b) =>
                    a.name.localeCompare(b.name, "ja")
                );
            }
            render(sorted)
        });
    });
});
