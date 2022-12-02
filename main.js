
const driver = new Driver();

driver.defineSteps([
    {
        element: "#sector",
        popover: {
            title: "Here You can see our product",
            description: ``,
            position: "right",
        }
    },
    {
        element: "#gea",
        popover: {
            title: "Card 2 Here You can lorem",
            description: "This Is Description ahahsgsahga",
            position: "bottom",
        }
    },
    {
        element: "#gela2",
        popover: {
            title: "Card 3 Here You can lorem",
            description: "This Is Description ahahsgsahga",
            position: "right",
        }
    },
])

driver.start()

