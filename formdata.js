/* restore localstorage value to input */
let localValue = JSON.parse(localStorage.getItem('nutritionData'));

if(localValue!==null){
    console.log("Proceed");
    let nutritionData = localValue.data.data;
    let inputFields = [...document.getElementsByName('percentage')]
    inputFields.map( (inputField, index)=>{
        console.log(inputField);
        inputField.setAttribute('value',nutritionData[index].value)
        console.log(nutritionData[index]);
    })
    
}else{
    console.log("local storage is empty")
}
/* restore localstorage value to input */

/* Percentage input calculation */
var isRunning = false;

[...document.getElementsByName('percentage')].forEach(function(item) {
if (!isRunning) {
  item.addEventListener('change', function(element) {
   
    const getVal = parseInt(element.target.value);
    if (getVal <= 100) {
      isRunning = true;
      
      const otherFields = Array.from(document.getElementsByName("percentage")).filter(e => e != item);
      const change = 100 - otherFields.map(e => parseInt(e.value)).reduce((prev, curr) => prev + curr) - getVal;
      const oldRest = 100 - (getVal + change);
      otherFields.forEach(function(elem) {
        const old = parseInt(elem.value);
        elem.value = Math.round(Math.round((old + ((old / oldRest) * change)) * 100) / 100);
      })
      isRunning = false;
    }
  })
}
  })
/* Percentage input calculation */

/* Taking formdata and saving it to localstorage input calculation */
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
                        name: "Proteins", value: document.getElementById('proteins').value
                    },
                    {
                        name: "Carbs", value: document.getElementById('carbs').value
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
/* Taking formdata and saving it to localstorage input calculation */