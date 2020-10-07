const cars = [
    {
        id: 1,
        marca: 'Renault',
        modelo: 'Renault 2021',
        color: 'Gris',
        año: 2021,
        precio: 5000000
    },
];

let editingCar = false;

function printCars() {
    const tableBody = document.getElementById('cars-table-body')
    tableBody.innerHTML = '' 
    cars.forEach((car) => {
        const td = `<tr>
                        <td>
                            ${car.marca}
                        </td>
                        <td>
                            ${car.modelo}
                        </td>
                        <td>
                            ${car.color}
                        </td>
                        <td>
                            ${car.año}
                        </td>
                        <td>
                            ${car.precio}
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="removeCar(${car.id})">
                                Eliminar
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="editCarButton(${car.id})">
                                Editar
                            </button>
                        </td>
                    </tr>`
        tableBody.innerHTML += td;
    })
}

function submitCar() {
    if(editingCar) {
        editCar();
    } else {
        addCar();  
    }
}

function editCar() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const año = document.getElementById('año').value;
    const precio = document.getElementById('precio').value;
    
    editingCar.marca = marca
    editingCar.modelo = modelo
    editingCar.color = color
    editingCar.año = año
    editingCar.precio = precio
    printCars();
    editingCar = false;
    document.getElementById('marca').value = ''
    document.getElementById('modelo').value = ''
    document.getElementById('color').value = ''
    document.getElementById('año').value = ''
    document.getElementById('precio').value = ''

    const button = document.getElementById('submit-button');
    button.textContent = 'Guardar';
    button.classList.remove('btn-secondary');
    button.classList.add('btn-primary');
}

function editCarButton(id) {
    const button = document.getElementById('submit-button');
    button.textContent = 'Editar';
    button.classList.remove('btn-primary');
    button.classList.add('btn-secondary');

    const car = cars.find((car) => car.id === id);
    document.getElementById('marca').value = car.marca;
    document.getElementById('modelo').value = car.modelo;
    document.getElementById('color').value = car.color;
    document.getElementById('año').value = car.año;
    document.getElementById('precio').value = car.precio;
    editingCar = car;
}

function addCar() {
    //const tableBody = document.getElementById('cars-table-body')
    //.value es el texto que tiene el input
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const año = document.getElementById('año').value;
    const precio = document.getElementById('precio').value;
    const newCar = { 
        id: cars.length + 1,
        marca: marca,
        modelo: modelo,
        color: color,
        año: año,
        precio: precio }
    cars.push(newCar);
    printCars();
}

function removeCar(id) {
    const position = cars.findIndex((car) => car.id === id);
    cars.splice(position, 1);
    printCars();
}

//Se ejecuta los usuarios de los usuarios actuales
printCars();