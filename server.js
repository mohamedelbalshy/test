class Park {
  constructor(maxCap) {
    this.maxCap = maxCap;
  }

  vehicles = [];

  numberOfVehicles() {
    return this.vehicles.length;
  }

  enter(vehicle) {
    if (this.canEnter() && !this.vehicles.includes(vehicle)) {
      console.log(`Vehicle ${vehicle.plate} has entered the park`);
      this.vehicles.push(vehicle);
    } else {
      console.log(
        `This ${vehicle.plate} cannot enter now max capicity or entered before`
      );
    }
  }

  exit(vehicleExit) {
    this.vehicles = this.vehicles.filter(
      (vehicle) => vehicle.plate !== vehicleExit.plate
    );

    console.log(`Vehicle ${vehicleExit.plate} exit from park`);
  }

  canEnter() {
    return this.vehicles.length === this.maxCap ? false : true;
  }
}

class Vehicle {
  plate = "";

  constructor(plate) {
    this.plate = plate;
  }
}

class ParkingController {
  //          ● $3 from 6am to 10am
  //          ● $1 from 10am to Midnight.
  //          ● Parking is free from Midnight to 6am

  // hours are in 24 format (1 pm is 13)

  fees = 0;

  // assuming this in int numbers
  calculateFees(entryTime, exitTime) {
    if (exitTime <= entryTime) {
      const firstChunk = this.calculateChunk(entryTime, 24);
      const secondChunk = this.calculateChunk(0, exitTime);
      this.fees = firstChunk + secondChunk;
    } else {
      this.fees = this.calculateChunk(entryTime, exitTime);
    }

    return this.fees;
  }

  calculateChunk(entryTime, exitTime) {
    let chunkFees = 0;
    for (let hour = entryTime; hour < exitTime; hour++) {
      if (hour >= 6 && hour <= 10) chunkFees += 3;
      if (hour >= 10 && hour <= 24) chunkFees += 1;
    }

    return chunkFees;
  }
}

const main = () => {
  const vehicleXYZ = new Vehicle("XYZ");

  const vehicleX = new Vehicle("X");

  // maxCap for this park is 3
  const park = new Park(3);

  park.enter(vehicleXYZ);

  park.enter(vehicleX);

  park.exit(vehicleX);
  park.enter(vehicleX);
  park.exit(vehicleX);
  park.enter(vehicleX);
  park.exit(vehicleX);
  park.enter(vehicleX);

  const vehicleXY = new Vehicle("XY");

  park.enter(vehicleXY);

  park.enter(vehicleXY);

  console.log(
    park.numberOfVehicles(),
    " number of vehicles now inside the park"
  );

  const parkingController = new ParkingController();

  const fees = parkingController.calculateFees(23, 23);

  console.log(fees);
};

main();
