import axios from "axios";

class CarModel {
    constructor(brand, model, year, km, address) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.km = km;
        this.address = address;
    }

    kmPerYear() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year + 1;
        return this.km / age;
    }

    async calcPosition() {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=AIzaSyAi5g_KBXE7z_IVdXbbr3oJV3E8YUn7Fec`);
        this.position = response.data.results[0].geometry.location;
    }
}

export default CarModel;