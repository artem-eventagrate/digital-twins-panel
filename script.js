const avatars = [
    {
        name: "Avatar 01",
        id: 1,
    },
    {
        name: "Avatar 02",
        id: 2,
    },
    {
        name: "Avatar 03",
        id: 3,
    },
    {
        name: "Avatar 04",
        id: 4,
    },
    {
        name: "Avatar 05",
        id: 5,
    },
    {
        name: "Avatar 06",
        id: 6,
    },
    {
        name: "Avatar 07",
        id: 7,
    },
];
const displays = [
    {
        name: "Display 01",
        id: 1,
    },
    {
        name: "Display 02",
        id: 2,
    },
    {
        name: "Display 03",
        id: 3,
    },
    {
        name: "Display 04",
        id: 4,
    },
    {
        name: "Display 05",
        id: 5,
    },
    {
        name: "Display 06",
        id: 6,
    },
    {
        name: "Display 07",
        id: 7,
    },
];

openDisplays = () => {
    displays.forEach((item) => {
        const elem = document.getElementById(item.id);
        if (elem) {
            elem.remove();
        }
    });
    showSelector = document.getElementById("displaySelect");
    showSelector.style.display = "flex";

    displays.forEach((item) => {
        let displayElement = document.createElement("span");
        let divider = document.createElement("div");
        displayElement.className = "selector-name";
        divider.className = "divider";
        displayElement.id = item.id;
        displayElement.innerText = item.name;
        displayElement.appendChild(divider);
        showSelector.appendChild(displayElement);

        const proccessClickDisplays = () => {
            displays.forEach((item) => {
                const elem = document.getElementById(item.id);
                if (elem) {
                    elem.remove();
                    showSelector.style.display = "none";
                }
            });
            displayElement.removeEventListener("click", proccessClickDisplays);
            console.log("selected display name", item.name);
            console.log("selected display id", item.id);
        };

        displayElement.addEventListener("click", proccessClickDisplays);
    });
};
openAvatars = (seatId) => {
    avatars.forEach((item) => {
        const elem = document.getElementById(item.id);
        if (elem) {
            elem.remove();
        }
    });
    showAvatarSelector = document.getElementById("avatarSelect");
    showAvatarSelector.style.display = "flex";
    avatarButtonWrapper = document.getElementById(seatId);
    offText = document.getElementById("off-text");
    avatarButtonWrapper.classList.toggle("avatar-button-on");
    offText.style.display = "none";

    avatars.forEach((item) => {
        let avatarElement = document.createElement("span");
        let divider = document.createElement("div");

        avatarElement.className = "selector-name";
        divider.className = "divider";
        avatarElement.id = item.id;
        avatarElement.innerText = item.name;
        avatarElement.appendChild(divider);
        showAvatarSelector.appendChild(avatarElement);

        const proccessClick = () => {
            avatarNumber = item.name;
            let avatarSelectedNumber = document.createElement("span");
            avatarSelectedNumber.innerHTML = avatarNumber;
            avatarButtonWrapper.appendChild(avatarSelectedNumber);
            console.log("selected avatar number: " + avatarNumber);
            console.log("selected seatId", seatId);
            avatarElement.removeEventListener("click", proccessClick);
            showAvatarSelector.style.display = "none";
            avatars.forEach((item) => {
                const elem = document.getElementById(item.id);
                if (elem) {
                    elem.remove();
                }
            });
        };
        avatarElement.addEventListener("click", proccessClick);
    });
};


console.log("Hi!");
