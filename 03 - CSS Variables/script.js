// this is a node list
const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function update_values(){
    const suffix = this.dataset.sizing || '';
    
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(values => values.addEventListener('change', update_values));
inputs.forEach(values => values.addEventListener('mousemove', update_values));