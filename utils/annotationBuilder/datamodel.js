let datamodel = {
  "Amount": {
    "documentation": "An object representing an Amount",
    "type": "object",
    "properties": {
      "value": {
        "type": "number"
      },
      "unit": {
        "type": "UnitEnum"
      },
      "unitDimension": {
        "type": "UnitDimensionEnum"
      }
    }
  },
  "CompositionOperatorEnum": {
    "type": "enum",
    "values": {
      "and": {
        "documentation": "And"
      },
      "or": {
        "documentation": "Or"
      }
    }
  },
  "InsurancePayout": {
    "documentation": "An object representing an insurance payout",
    "type": "object",
    "properties": {
      "payoutType": {
        "type": "PayoutTypeEnum"
      },
      "amount": {
        "type": "Amount",
        "documentation": "The amount of the payout"
      },
      "minimalAmount": {
        "type": "Amount",
        "documentation": "The minimal amount"
      },
      "multipliers": {
        "type": "Multiplier",
        "documentation": "The Payout multiplier"
      },
      "for": {
        "type": "List",
        "of": "PayoutScopeServiceEnum",
        "documentation": "The scope of the payout"
      },
      "forComposition": {
        "type": "CompositionOperatorEnum",
        "documentation": "Composition of payout scopes"
      },
      "isExtra": {
        "type": "boolean",
        "documentation": "Does the payout impact the consumption of other payout"
      }
    }
  },
  "Multiplier": {
    "type": "object",
    "properties": {
      "time": {
        "type": "MultiplierTimeEnum"
      },
      "person": {
        "type": "MultiplierPersonEnum"
      },
      "occurence": {
        "type": "MultiplierOccurenceEnum"
      },
      "insuredObject": {
        "type": "MultiplierInsuredObjectEnum"
      }
    }
  },
  "MultiplierOccurenceEnum": {
    "type": "enum",
    "values": {
      "perClaim": {
        "documentation": "per claim"
      },
      "perLine": {
        "documentation": "per line of claim"
      },
      "perIncident": {
        "documentation": "per incident"
      }
    }
  },
  "MultiplierPersonEnum": {
    "type": "enum",
    "values": {
      "perPerson": {
        "documentation": "Per person"
      },
      "perPassenger": {
        "documentation": "Per passenger"
      },
      "perEmployee": {
        "documentation": "Per employee"
      },
      "perLoneTraveler": {
        "documentation": "Per lone traveler"
      }
    }
  },
  "MultiplierTimeEnum": {
    "type": "enum",
    "values": {
      "perMinutes": {
        "documentation": "Per minutes"
      },
      "perHour": {
        "documentation": "Per hour"
      },
      "perDay": {
        "documentation": "Per Day"
      },
      "perMonth": {
        "documentation": "Per Month"
      },
      "perCalendarMonth": {
        "documentation": "Per Calendar Month"
      },
      "perYear": {
        "documentation": "Per Year"
      },
      "perPeriodOfInsurance": {
        "documentation": "Per period of insurance"
      }
    }
  },
  "PayoutScopeServiceEnum": {
    "type": "enum",
    "values": {
      "indemnity": {
        "documentation": "an indemnity"
      },
      "legalCost": {
        "documentation": "Legal costs"
      },
      "legalExpenses": {
        "documentation": "Legal expenses"
      },
      "windscreenRepair": {
        "documentation": "Windsceen repair",
        "lob": "motor"
      },
      "windscreenReplacement": {
        "documentation": "Windsceen replacement",
        "lob": "motor"
      },
      "carStorageFee": {
        "documentation": "Car storage fee",
        "lob": "motor"
      },
      "travelingCost": {
        "documentation": "Traveling costs"
      },
      "courtesyCar": {
        "documentation": "Courtesy car"
      },
      "carHire": {
        "documentation": "Car hire"
      },
      "alternativeTransport": {
        "documentation": "Alternative Transports"
      },
      "towing": {
        "documentation": "Towing of vehicle"
      },
      "overnightAccomodation": {
        "documentation": "overnight accomodation"
      },
      "bedAndBreakfast": {
        "documentation": "Bed and breakfast"
      }
    }
  },
  "PayoutTypeEnum": {
    "type": "enum",
    "values": {
      "Limit": {
        "documentation": "A Limit"
      },
      "Excess": {
        "documentation": "An Excess"
      },
      "Deductible": {
        "documentation": "A Deductible"
      },
      "Franchise": {
        "documentation": "A Franchise"
      },
      "StrictLimit": {
        "documentation": "A Strict Limit"
      }
    }
  },
  "UnitDimensionEnum": {
    "type": "enum",
    "values": {
      "Monetary": {
        "documentation": "A monetary amount"
      },
      "Time": {
        "documentation": "A time"
      },
      "Distance": {
        "documentation": "A distance"
      },
      "Person": {
        "documentation": "Persons"
      }
    }
  },
  "UnitDistanceEnum": {
    "type": "enum",
    "inherit": "UnitEnum",
    "values": {
      "kilometer": {
        "documentation": "kilometer"
      },
      "miles": {
        "documentation": "miles"
      }
    }
  },
  "UnitMonetaryEnum": {
    "type": "enum",
    "inherit": "UnitEnum",
    "values": {
      "EUR": {
        "documentation": "eur"
      },
      "GBP": {
        "documentation": "gbp"
      }
    }
  },
  "UnitPersonEnum": {
    "type": "enum",
    "inherit": "UnitEnum",
    "values": {
      "person": {
        "documentation": "A person"
      },
      "passenger": {
        "documentation": "A passenger"
      },
      "driver": {
        "documentation": "A driver"
      },
      "policyholder": {
        "documentation": "A policyholder"
      }
    }
  },
  "UnitTimeEnum": {
    "type": "enum",
    "inherit": "UnitEnum",
    "values": {
      "day": {
        "documentation": "day"
      },
      "consecutiveDay": {
        "documentation": "consecutive day"
      },
      "night": {
        "documentation": "night"
      }
    }
  }
}