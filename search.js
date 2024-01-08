document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const itemList = document.getElementById("itemList");

    const items = [
        "UP",
        "The Garden",
        "The midnight bloom",
        "Ignorance",
        "Deserted",
        "Unachieved",
        "Divine",
        "Heaven",
        "Lavender Haze"
    ];

    // Function to display items in the list
    function displayItemsInList(itemsToDisplay) {
        itemList.innerHTML = "";
        itemsToDisplay.forEach(function (itemText) {
            const li = document.createElement("li");
            li.textContent = itemText;
            li.addEventListener("click", function () {
                searchInput.value = itemText;
                itemList.style.display = "none"; // Hide the list
            });
            itemList.appendChild(li);
        });
        itemList.style.display = "block"; // Show the list
    }

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredItems = items.filter(function (item) {
            return item.toLowerCase().includes(searchTerm);
        });

        if (searchTerm.trim() === "") {
            itemList.style.display = "none"; // Hide the list if search input is empty
        } else {
            displayItemsInList(filteredItems);
        }
    });
});
function openWebpage() {
    const url = document.getElementById("searchInput").value;
    if (url == "The Garden") {
        window.location.href = "file:///C:/Users/AANCHAL%20SHAH/Desktop/Aanchal%20SEM%20V/FWD/Mini%20Project/the_garden.html";
    }

    else if (url == "UP") {
        window.location.href = "file:///C:/Users/AANCHAL%20SHAH/Desktop/Aanchal%20SEM%20V/FWD/Mini%20Project/serenity.html";
    }
    else if (url == "The midnight bloom") {
        window.location.href = "file:///C:/Users/AANCHAL%20SHAH/Desktop/Aanchal%20SEM%20V/FWD/Mini%20Project/midnight_bloom.html";
    }
    else if (url == "Ignorance") {
        window.location.href = "file:///C:/Users/AANCHAL%20SHAH/Desktop/Aanchal%20SEM%20V/FWD/Mini%20Project/ignorance.html";
    }
    else if (url == "Deserted") {
        window.location.href = "file:///C:/Users/AANCHAL%20SHAH/Desktop/Aanchal%20SEM%20V/FWD/Mini%20Project/deserted.html";
    }
    else if (url == "Unachieved") {
        window.location.href = "file:///C:/Users/AANCHAL%20SHAH/Desktop/Aanchal%20SEM%20V/FWD/Mini%20Project/unachieved.html";
    }
    else if (url == "Divine") {
        window.location.href = "file:///C:/Users/AANCHAL%20SHAH/Desktop/Aanchal%20SEM%20V/FWD/Mini%20Project/divine.html";
    }
    else if (url == "Lavender Haze") {
        window.location.href = "file:///C:/Users/AANCHAL%20SHAH/Desktop/Aanchal%20SEM%20V/FWD/Mini%20Project/lavendar_haze.html";

    }
    else if (url == "Heaven") {
        window.location.href = "file:///C:/Users/AANCHAL%20SHAH/Desktop/Aanchal%20SEM%20V/FWD/Mini%20Project/heaven.html";

    }
    else {
        alert("No Such Item Available");
    }

}
function openmainWebpage() {
    window.location.href = "C:\Users\AANCHAL SHAH\Desktop\Aanchal SEM V\FWD\Mini Project";
}

category.innerHTML = "";
figures.forEach((figure) => {
    category.appendChild(figure);
});

