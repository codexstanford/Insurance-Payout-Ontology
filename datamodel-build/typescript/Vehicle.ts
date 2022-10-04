import { QuantitativeValue } from "./QuantitativeValue";
import { EngineSpecification } from "./EngineSpecification";
import { date } from "./date";
import { QuantitativeValue,number } from "./QuantitativeValue,number";
import { number,QuantitativeValue } from "./number,QuantitativeValue";
import { SteeringPositionValue } from "./SteeringPositionValue";
import { string,number } from "./string,number";
import { string,string,QualitativeValue } from "./string,string,QualitativeValue";
import { string,QualitativeValue,string } from "./string,QualitativeValue,string";
import { string,DriveWheelConfigurationValue } from "./string,DriveWheelConfigurationValue";
import { QualitativeValue,string,string } from "./QualitativeValue,string,string";
import { CarUsageType,string } from "./CarUsageType,string";


export class Vehicle extends Product {
  fuelCapacity: QuantitativeValue;
  accelerationTime: QuantitativeValue;
  speed: QuantitativeValue;
  trailerWeight: QuantitativeValue;
  vehicleEngine: EngineSpecification;
  emissionsCO2: number;
  purchaseDate: date;
  numberOfForwardGears: QuantitativeValue,number;
  weightTotal: QuantitativeValue;
  productionDate: date;
  numberOfPreviousOwners: number,QuantitativeValue;
  steeringPosition: SteeringPositionValue;
  wheelbase: QuantitativeValue;
  vehicleInteriorType: string;
  numberOfAirbags: string,number;
  fuelType: string,string,QualitativeValue;
  cargoVolume: QuantitativeValue;
  vehicleTransmission: string,QualitativeValue,string;
  payload: QuantitativeValue;
  driveWheelConfiguration: string,DriveWheelConfigurationValue;
  knownVehicleDamages: string;
  fuelConsumption: QuantitativeValue;
  vehicleInteriorColor: string;
  numberOfAxles: number,QuantitativeValue;
  modelDate: date;
  numberOfDoors: QuantitativeValue,number;
  vehicleSeatingCapacity: QuantitativeValue,number;
  callSign: string;
  tongueWeight: QuantitativeValue;
  fuelEfficiency: QuantitativeValue;
  vehicleModelDate: date;
  vehicleConfiguration: string;
  mileageFromOdometer: QuantitativeValue;
  seatingCapacity: QuantitativeValue,number;
  bodyType: QualitativeValue,string,string;
  dateVehicleFirstRegistered: date;
  vehicleIdentificationNumber: string;
  meetsEmissionStandard: string,string,QualitativeValue;
  vehicleSpecialUsage: CarUsageType,string;


}
