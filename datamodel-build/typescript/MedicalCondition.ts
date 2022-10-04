import { MedicalTherapy } from "./MedicalTherapy";
import { string,EventStatusType,MedicalStudyStatus } from "./string,EventStatusType,MedicalStudyStatus";
import { DDxElement } from "./DDxElement";
import { MedicalConditionStage } from "./MedicalConditionStage";
import { Drug } from "./Drug";
import { AnatomicalStructure,AnatomicalSystem,SuperficialAnatomy } from "./AnatomicalStructure,AnatomicalSystem,SuperficialAnatomy";
import { MedicalSignOrSymptom } from "./MedicalSignOrSymptom";
import { MedicalTest } from "./MedicalTest";
import { MedicalRiskFactor } from "./MedicalRiskFactor";


export class MedicalCondition extends MedicalEntity {
  possibleComplication: string;
  naturalProgression: string;
  primaryPrevention: MedicalTherapy;
  status: string,EventStatusType,MedicalStudyStatus;
  differentialDiagnosis: DDxElement;
  stage: MedicalConditionStage;
  pathophysiology: string;
  drug: Drug;
  secondaryPrevention: MedicalTherapy;
  associatedAnatomy: AnatomicalStructure,AnatomicalSystem,SuperficialAnatomy;
  signOrSymptom: MedicalSignOrSymptom;
  typicalTest: MedicalTest;
  epidemiology: string;
  riskFactor: MedicalRiskFactor;
  expectedPrognosis: string;
  possibleTreatment: MedicalTherapy;


}
