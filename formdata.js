const percentageInputs = document.querySelectorAll('.nutrition');

percentageInputs.forEach( input =>{

    // input.addEventListener('input', ()=>{
        
    // })
})


document.addEventListener( 'DOMContentLoaded', ()=>{

    const form = document.getElementById('nutrition-form');

    form.addEventListener( 'submit', (event)=>{
        event.preventDefault();

        const formData = {
            budget: document.getElementById('budget').value,
            data: {
                label: "%nutrients",
                data: [
                    {
                        name: "Carbs", value: document.getElementById('carbs').value
                    },
                    {
                        name: "Proteins", value: document.getElementById('proteins').value
                    },
                    {
                        name: "Fats", value: document.getElementById('fats').value
                    },
                    {
                        name: "Vitamins", value: document.getElementById('vitamins').value
                    },
                    {
                        name: "Minerals", value: document.getElementById('minerals').value
                    },
                    {
                        name: "Water", value: document.getElementById('water').value
                    }
                ]
            }
            
        };
        

        const jsonData = JSON.stringify(formData);

        localStorage.setItem('nutritionData', jsonData);

        window.location.reload();

    })
})