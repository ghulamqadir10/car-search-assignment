console.log(`assignment`);

//  object for cars 
let carBrands = {
    Toyota: {
        Models: {
            Corolla: {
                Year: 2021,
                Engine: "1.8L 4-cylinder",
                Transmission: ["Manual", "Automatic"],
                FuelType: "Petrol",
                image: "corolla.jpg",
                Price: "$20,000",
                SafetyRating: "5 Stars",
                Mileage: "30 MPG"
            },
            Camry: {
                Year: 2021,
                Engine: "2.5L 4-cylinder",
                Transmission: ["Automatic"],
                FuelType: "Petrol",
                image: "camry.jpg",
                Price: "$25,000",
                SafetyRating: "5 Stars",
                Mileage: "28 MPG"
            },
            RAV4: {
                Year: 2021,
                Engine: "2.5L 4-cylinder",
                Transmission: ["Automatic"],
                FuelType: "Petrol",
                image: "rav4.jpg",
                Price: "$28,000",
                SafetyRating: "5 Stars",
                Mileage: "26 MPG"
            }
        }
    },
    Honda: {
        Models: {
            Civic: {
                Year: 2021,
                Engine: "2.0L 4-cylinder",
                Transmission: ["Manual", "Automatic"],
                FuelType: "Petrol",
                image: "civic.jpg",
                Price: "$22,000",
                SafetyRating: "5 Stars",
                Mileage: "32 MPG"
            },
            Accord: {
                Year: 2021,
                Engine: "1.5L 4-cylinder",
                Transmission: ["Automatic"],
                FuelType: "Petrol",
                image: "accord.jpg",
                Price: "$24,000",
                SafetyRating: "5 Stars",
                Mileage: "30 MPG"
            },
            CRV: {
                Year: 2021,
                Engine: "1.5L 4-cylinder",
                Transmission: ["Automatic"],
                FuelType: "Petrol",
                image: "crv.jpg",
                Price: "$27,000",
                SafetyRating: "5 Stars",
                Mileage: "28 MPG"
            }
        }
    },
    Ford: {
        Models: {
            Mustang: {
                Year: 2021,
                Engine: "5.0L V8",
                Transmission: ["Manual", "Automatic"],
                FuelType: "Petrol",
                image: "mustang.jpg",
                Price: "$35,000",
                SafetyRating: "4 Stars",
                Mileage: "18 MPG"
            },
            F150: {
                Year: 2021,
                Engine: "3.5L V6",
                Transmission: ["Automatic"],
                FuelType: "Petrol",
                image: "fordf150.jpg",
                Price: "$40,000",
                SafetyRating: "5 Stars",
                Mileage: "20 MPG"
            },
            Explorer: {
                Year: 2021,
                Engine: "2.3L 4-cylinder",
                Transmission: ["Automatic"],
                FuelType: "Petrol",
                image: "explorer.jpg",
                Price: "$33,000",
                SafetyRating: "5 Stars",
                Mileage: "24 MPG"
            }
        }
    },
    BMW: {
        Models: {
            Series3: {
                Year: 2021,
                Engine: "2.0L 4-cylinder",
                Transmission: ["Automatic"],
                FuelType: ["Petrol", "Diesel"],
                image: "series 3.jpg",
                Price: "$41,000",
                SafetyRating: "5 Stars",
                Mileage: "27 MPG"
            },
            X5: {
                Year: 2021,
                Engine: "3.0L 6-cylinder",
                Transmission: ["Automatic"],
                FuelType: ["Petrol", "Diesel"],
                image: "X5.jpg",
                Price: "$59,000",
                SafetyRating: "5 Stars",
                Mileage: "24 MPG"
            },
            Series5: {
                Year: 2021,
                Engine: "2.0L 4-cylinder",
                Transmission: ["Automatic"],
                FuelType: ["Petrol", "Diesel"],
                image: "series 5.jpg",
                Price: "$52,000",
                SafetyRating: "5 Stars",
                Mileage: "25 MPG"
            }
        }
    },
    Audi: {
        Models: {
            A4: {
                Year: 2021,
                Engine: "2.0L 4-cylinder",
                Transmission: ["Automatic"],
                FuelType: ["Petrol", "Diesel"],
                image: "Audi A4.jpg",
                Price: "$39,000",
                SafetyRating: "5 Stars",
                Mileage: "27 MPG"
            },
            Q7: {
                Year: 2021,
                Engine: "3.0L V6",
                Transmission: ["Automatic"],
                FuelType: ["Petrol", "Diesel"],
                image: "Audi Q7.jpg",
                Price: "$55,000",
                SafetyRating: "5 Stars",
                Mileage: "22 MPG"
            },
            A6: {
                Year: 2021,
                Engine: "2.0L 4-cylinder",
                Transmission: ["Automatic"],
                FuelType: ["Petrol", "Diesel"],
                image: "Audi A6.jpg",
                Price: "$54,000",
                SafetyRating: "5 Stars",
                Mileage: "26 MPG"
            }
        }
    }
};


let selectbrand = document.getElementById(`mobilebrand`)
let selectmodels = document.getElementById(`models`)
let searchbtn = document.getElementById(`search`)
let specsDiv = document.getElementById(`specs`)
let button = document.getElementById("search");
let brandvalue, models,series;



// console.log(carBrands[`Audi`].Models.A4)
for (let company in carBrands) {
    // console.log(company) //company names
    for (let models in carBrands[company].Models) {
        // console.log(models);//model names
        let modelProperties = carBrands[company].Models[models];
        // console.log(modelProperties)


         series = `<div class="card" style="width: 18rem;">
            <img src="${modelProperties.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${company} ${models}</h3>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Engine:  <strong>${modelProperties.Engine}</strong></li>
                <li class="list-group-item">Transmission: <strong>${modelProperties.Transmission}</strong></li>
                <li class="list-group-item">Fuel Type: <strong>${modelProperties.FuelType}</strong></li>
                <li class="list-group-item">Year: <strong>${modelProperties.Year}</strong></li>
                <li class="list-group-item">Price: <strong>${modelProperties.Price}</strong></li>
                <li class="list-group-item">Safety Rating: <strong>${modelProperties.SafetyRating}</strong></li>
                <li class="list-group-item">Mileage: <strong>${modelProperties.Mileage}</strong></li>
                </ul>
                </div>`
        specs.innerHTML += series;
    }
    // console.log(company)
    let brandoption = document.createElement(`option`);
    brandoption.text = company;
    brandoption.value = company;
    selectbrand.appendChild(brandoption);
}

selectbrand.addEventListener("change", function (event) {
    brandvalue = event.target.value;//for value get
    // console.log(brandvalue);
    selectmodels.innerHTML = `<option> ~~Select Model~~ </option>`
    for (let model in carBrands[brandvalue].Models) {
        // console.log(model);
        let modeloption = document.createElement("option")
        modeloption.text = model;
        modeloption.value = model;
        selectmodels.appendChild(modeloption)
    }
})

selectmodels.addEventListener("change", function (event) {
    model = event.target.value;
    //   console.log(model)
})

function search() {
    specs.innerHTML=``;
    let brand = brandvalue
    data = carBrands[brandvalue].Models[model]
    // console.log(specsref)
    specs =
        `<div id="card-style">
        <img src="${data.image}"></img>
        <h2>Brand Name: <strong>${brand}</strong></h2>
        <h3>Model Name: <strong>${model}</strong></h3>
        <h4>Engine Specs: <strong>${data.Engine}</strong></h4>
        <h4>Transmission: <strong>${data.Transmission}</strong></h4>
        <h4>Fuel: <strong>${data.FuelType}</strong></h4>
        <h4>Price: <strong>${data.Price}</strong></h4>
        <h4>Year: <strong>${data.Year}</strong></h4>
        <h4>Safety Rating: <strong>${data.SafetyRating}</strong></h4>
        <h4>Mileage: <strong>${data.Mileage}</strong></h4>

        </div>`;
specsDiv.innerHTML=specs;
};