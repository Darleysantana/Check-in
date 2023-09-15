const checkInButton = document.getElementById("checkInButton");
        const lastCheckInTime = document.getElementById("lastCheckInTime");
        const mes = document.getElementById("mes");

        checkInButton.addEventListener("click", () => {
            const now = new Date();
            const formattedTime = now.toLocaleString();
            const day = now.getDate();
            const month = now.getMonth() + 1;

            // Armazene a hora do check-in no localStorage para persistência.
            localStorage.setItem("lastCheckInTime", formattedTime);

            // Atualize a exibição da última hora do check-in.
            lastCheckInTime.textContent = `Último check-in: ${formattedTime}`;

            // Atualiza o fundo do dia do check-in
            const bg = document.getElementById(day.toString());
            if (bg) {
                bg.style.backgroundColor = "green";
                bg.style.transition = "ease-in, 3s";
            }

            // Atualiza o nome do mês
            mes.textContent = `Calendário: ${month}`;     
        });

        // Recupere a última hora do check-in do localStorage quando a página é carregada.
        const storedTime = localStorage.getItem("lastCheckInTime");
        if (storedTime) {
            lastCheckInTime.textContent = `Último check-in: ${storedTime}`;
        }