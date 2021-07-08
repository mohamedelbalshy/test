class Park {
  constructor(maxCap) {
    this.maxCap = maxCap;
  }

  vehicles = [];

  numberOfVehicles() {
    return this.vehicles.length;
  }

  enter(vehicle) {
    if (this.canEnter()) {
      this.vehicles.push(vehicle);
    } else {
      console.log(`This ${vehicle.plate} cannot enter now max capicity`);
    }
  }

  exit(vehicleExit) {
    this.vehicle.filter((vehicle) => vehicle.plate !== vehicleExit.plate);
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
  /// Determines if a vehicle can enter or not. Also,
  /// includes the implementation to store the vehicle
  /// entering the parking system
  ///
  /// - Parameters:
  /// - vehicle: entering vehicle
  /// - entryTime: time in Int when the vehicle tries to enter
  /// - Returns: whether the vehicle can enter or not

  //         $3 from 6am to 10am
  //          ● $1 from 10am to Midnight.
  //          ● Parking is free from Midnight to 6am

  // hours are in 24 format (1 pm is 13)
  exit(entryTime, exitTime) {
    let fees = 0;
    for (let hour = entryTime; hour < exitTime; hour++) {
      if (hour >= 6 && hour <= 10) fees += 3;
      if ((hour >= 10) & (hour <= 24)) fees += 1;
    }

    return fees;
  }
}

const main = () => {
  const vehicleXYZ = new Vehicle("XYZ");

  const vehicleX = new Vehicle("X");

  // maxCap for this park is 3
  const park = new Park(3);

  park.enter(vehicleXYZ);

  park.enter(vehicleX);

  // we should validate that vehicle can not enter the park twice
  park.enter(vehicleX);
  park.enter(vehicleX);
  park.enter(vehicleX);

  console.log(park.numberOfVehicles());

  const parkingController = new ParkingController();

  const fees = parkingController.exit(10, 15);

  console.log(fees);
};

main();
