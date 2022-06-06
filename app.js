const petWeight = document.querySelector("#dogWeight")
const petactivity = document.querySelector("#dogactivity")
const petAges = document.querySelector("#petAge")
const activities = ['lazy', 'normal', 'sporty']
const petAge = ['Puppy', 'Young', 'Adult']
let resultBoxforDogs = document.querySelector('.resultBoxforDogs')
let result_field_for_dogs = document.querySelector("#result_field_for_dogs");
const puppy_food = 6 / 100
// food proportions for pet based on the their activities 
const lazy_dog_portion = 80 / 100
const normal_dog_portion = 1
const sporty_dog_portion = 120 / 100
// let result_field_for_dogs = document.querySelector("#result_field_for_dogs");

const checkAge = () => {
    const pet = petAge[petAges.value]
    document.querySelector(".petAge").innerHTML = pet
}
petAges.addEventListener('change', checkAge)

const checkWeight = () => {
    const pet = petWeight.value
    document.querySelector(".dogWeightBox").innerHTML = pet
}
petWeight.addEventListener('change', checkWeight)


const checkpetactivity = () => {
    const pet = Number(petactivity.value)
    const petActive = activities[pet]
    document.querySelector(".dogactivityBox").innerHTML = petActive
}
petactivity.addEventListener('change', checkpetactivity)



// pet's food calculator 
const pet_calculator = () => {
    document.querySelector(".dogDaysCounter").classList.remove("inActive")
    const petWeightInGrams = (petWeight.value * 1000)
    // first check what is the age of the dog
    if (petAges.value === "0") {
        // if a puppy then this will run
        const food_For_puppy = petWeightInGrams * puppy_food
        result_field_for_dogs.value = food_For_puppy
        console.log(`Puppy has to eat ${food_For_puppy}g per day`)
    } else if (petAges.value === "1" || petAges.value === "2") {
        // if the dog is young or adult then this will run
        if (Number(petWeight.value) <= 5) {
            const food_For_dog_per_day = petWeightInGrams * 4 / 100
            result_field_for_dogs.value = (food_For_dog_per_day);
            if (petactivity.value === '0') {
                const food_for_lazy_dog_accurate = food_For_dog_per_day * lazy_dog_portion
                const food_for_lazy_dog = Math.ceil((food_for_lazy_dog_accurate + 1) / 10) * 10;
                result_field_for_dogs.value = (food_for_lazy_dog_accurate);
            } else if (petactivity.value === '1') {
                const food_for_normal_dog_accurate = food_For_dog_per_day * normal_dog_portion
                const food_for_normal_dog = Math.ceil((food_for_normal_dog_accurate + 1) / 10) * 10;
                result_field_for_dogs.value = food_for_normal_dog_accurate

            } else if (petactivity.value === '2') {
                const food_for_active_dog_accurate = food_For_dog_per_day * sporty_dog_portion
                const food_for_active_dog = Math.ceil((food_for_active_dog_accurate + 1) / 10) * 10;
                result_field_for_dogs.value = food_for_active_dog_accurate
            }

        } else if (Number(petWeight.value) > 5 && Number(petWeight.value) < 20) {
            const food_For_fat_dog = petWeightInGrams * 3 / 100
            result_field_for_dogs.value = food_For_fat_dog
            if (petactivity.value === '0') {
                const food_for_lazy_dog_accurate = food_For_fat_dog * lazy_dog_portion
                const food_for_lazy_dog = Math.ceil((food_for_lazy_dog_accurate + 1) / 10) * 10;
                result_field_for_dogs.value = food_for_lazy_dog_accurate
            } else if (petactivity.value === '1') {
                const food_for_normal_dog_accurate = food_For_fat_dog * normal_dog_portion
                const food_for_normal_dog = Math.ceil((food_for_normal_dog_accurate + 1) / 10) * 10;
                result_field_for_dogs.value = food_for_normal_dog_accurate

            } else if (petactivity.value === '2') {
                const food_for_active_dog_accurate = food_For_fat_dog * sporty_dog_portion
                const food_for_active_dog = Math.ceil((food_for_active_dog_accurate + 1) / 10) * 10;
                result_field_for_dogs.value = food_for_active_dog_accurate

            }
        }
        else if (Number(petWeight.value) >= 20) {
            const food_For_fat_dog = petWeightInGrams * 2.5 / 100
            result_field_for_dogs.value = food_For_fat_dog
            if (petactivity.value === '0') {
                const food_for_lazy_dog_accurate = food_For_fat_dog * lazy_dog_portion
                const food_for_lazy_dog = Math.ceil((food_for_lazy_dog_accurate + 1) / 10) * 10;
                result_field_for_dogs.value = food_for_lazy_dog_accurate
            } else if (petactivity.value === '1') {
                const food_for_normal_dog_accurate = food_For_fat_dog * normal_dog_portion
                const food_for_normal_dog = Math.ceil((food_for_normal_dog_accurate + 1) / 10) * 10;
                result_field_for_dogs.value = food_for_normal_dog_accurate

            } else if (petactivity.value === '2') {
                const food_for_active_dog_accurate = food_For_fat_dog * sporty_dog_portion
                const food_for_active_dog = Math.ceil((food_for_active_dog_accurate + 1) / 10) * 10;
                result_field_for_dogs.value = food_for_active_dog_accurate

            }
        }

    }
}




//  this is for cats //

const catWeight = document.querySelector("#catWeight")
const catactivity = document.querySelector("#catactivity")
const catAge = document.querySelector("#catAge")
const catActivities = ['lazy', 'normal', 'sporty']
const cat_Ages = ['kitten', 'Young', 'Adult']
let resultBoxforCats = document.querySelector('.resultBoxforCats')
const kitten_food = 8 / 100
const young_n_adult_cat_food = 5 / 100
// food proportions for pet based on the their activities 
const lazy_cat_portion = 80 / 100
const normal_cat_portion = 1
const sporty_cat_portion = 120 / 100
const result_field_for_cats = document.querySelector("#result_field_for_cats")

const check_cat_Age = () => {
    const pet = cat_Ages[catAge.value]

    document.querySelector(".catAgeBox").innerHTML = pet
}
catAge.addEventListener('change', check_cat_Age)

const check_cat_Weight = () => {

    const pet = catWeight.value
    document.querySelector(".catWeightBox").innerHTML = pet + 'kg'
}
catWeight.addEventListener('change', check_cat_Weight)


const checkpet_cat_activity = () => {

    const pet = Number(catactivity.value)
    const petActive = catActivities[pet]
    document.querySelector(".catactivityBox").innerHTML = petActive
}
catactivity.addEventListener('change', checkpet_cat_activity)

// pet's food calculator 
const cat_food_calculator = () => {
    document.querySelector('.catDaysCounter').classList.remove('inActive')
    const petBodyWeightInGrams = (catWeight.value * 1000)
    // first check what is the age of the cat
    if (catAge.value === "0") {
        // if a kitten then this will run
        const food_For_kitten = petBodyWeightInGrams * kitten_food
        resultBoxforCats.innerHTML = `food_for_lazy_cat ${food_For_kitten}g per day that calzium and omega 3 is very important for growing up  `;
        console.log(`kitten has to eat ${food_For_kitten}g per day`)

    } else if (catAge.value === "1" || catAge.value === "2") {
        const food_For_cat_per_day = petBodyWeightInGrams * young_n_adult_cat_food
        // resultBoxforCats.innerHTML = `food_for_lazy_cat ${food_For_cat_per_day}g per day `;
        if (catactivity.value === '0') {
            const food_for_lazy_cat_accurate = food_For_cat_per_day * lazy_cat_portion
            const food_for_lazy_cat = Math.ceil((food_for_lazy_cat_accurate + 1) / 10) * 10;
            resultBoxforCats.innerHTML = (`food_for_lazy_cat ${food_for_lazy_cat_accurate}g per day   `);
        } else if (catactivity.value === '1') {
            const food_for_normal_cat_accurate = food_For_cat_per_day * normal_cat_portion
            const food_for_normal_cat = Math.ceil((food_for_normal_cat_accurate + 1) / 10) * 10;
            resultBoxforCats.innerHTML = (`food_for_normal_cat ${food_for_normal_cat_accurate}g per day   `);

        } else if (catactivity.value === '2') {
            const food_for_active_cat_accurate = food_For_cat_per_day * sporty_cat_portion
            const food_for_active_cat = Math.ceil((food_for_active_cat_accurate + 1) / 10) * 10;
            resultBoxforCats.innerHTML = (`food_for_active_cat ${food_for_active_cat_accurate}g per day   `);
        }
    }

}




const dayCounter_Dog = document.querySelector("#dayCounter_Dog");

const changeTheDay = () => {
    
}
dayCounter_Dog.addEventListener('change', changeTheDay)


// let myNumber = document.querySelector("#myNumber");
// const input_range = document.querySelector("#input_range");
// const update_by_day = () => {
//     myNumber.value = myNumber.value * input_range.value
// }
// dayCounter_Dog.addEventListener('change', update_by_day)    