let datamodel = {
  "Amount": {
    "documentation": "An object representing an Amount. <br/> In our representation an amount contain a quantity (how much), a unit (how much of what?), and a unit dimension (in which dimension do we measure, eg: distance,monetary, ...)",
    "type": "object",
    "namespace": "org.codex.insurance.core",
    "properties": {
      "quantity": {
        "type": "string",
        "documentation": {
          "en": "A string representing a quantity. Can contain a number, a name variable, or a numerical expression : supporting ( ) + - * / %"
        }
      },
      "unit": {
        "type": "UnitEnum",
        "documentation": {
          "en": "The unit of the amount. It is recommended that it match an enum value corresponding to the dimension object."
        }
      },
      "unitDimension": {
        "type": "UnitDimensionEnum",
        "documentation": {
          "en": "The dimension of the value"
        }
      }
    },
    "sample": {
      "simpleNumeric": {
        "name": "A simple numeric amount",
        "legalese": "300 USD",
        "explanation": "In this case, quantity will be 300, the unit will be USD, and the unitDimension will be Monetary",
        "table": {
          "quantity": 300,
          "unit": "UnitMonetaryEnum.USD",
          "unitDimension": "UnitDimensionEnum.Monetary"
        }
      }
    }
  },
  "Benefits": {
    "type": "class",
    "properties": {
      "payouts": {
        "type": "List",
        "of": "InsurancePayout"
      },
      "riskChain": {
        "type": "RiskChain"
      },
      "text": {
        "type": "string"
      }
    }
  },
  "ChainCompositionOr": {
    "type": "object",
    "documentation": "Represent a composition in a chain, aka an OR on multiple risk chains",
    "inherit": "Chainable",
    "namespace": "org.codex.insurance.core",
    "properties": {
      "operands": {
        "type": "List",
        "of": "RiskChain"
      }
    }
  },
  "ChainOperator": {
    "type": "object",
    "documentation": "Represent an operator in a chain, such as a wildcard or initial",
    "inherit": "Chainable",
    "namespace": "org.codex.insurance.core",
    "properties": {
      "type": {
        "type": "ChainOperatorEnum"
      }
    }
  },
  "ChainOperatorEnum": {
    "type": "enum",
    "namespace": "org.codex.insurance.core",
    "doc": "A list of supported chain operators",
    "values": {
      "wildcard": {
        "doc": "The wildcard operator, match anything"
      },
      "not": {
        "doc": "the Not operator"
      }
    }
  },
  "Chainable": {
    "type": "object",
    "isAbstract": true,
    "namespace": "org.codex.insurance.core"
  },
  "InsurancePayout": {
    "documentation": "An object representing an insurance payout: what modification should be apply to the claim amount, as describe in a contract. <br/><br/>There is different type of payout (see PayoutTypeEnum), such as Limit or Deductible. This model was develop to be able to represent any type of payouts. (see Documentation)",
    "type": "object",
    "namespace": "org.codex.insurance.core",
    "properties": {
      "payoutType": {
        "type": "PayoutTypeEnum",
        "documentation": {
          "en": "Describe the 'type' of payout, eg: 'Limit'"
        },
        "default": "Limit"
      },
      "amount": {
        "type": "List",
        "of": "Amount",
        "documentation": "The amounts of the payout. It is a list as some Payout require multiple amounts.",
        "sample": {
          "multiple": {
            "name": "Multiple amount in a limit",
            "legalese": "if our rescue team decide to provide overnight accommodation, we will pay a maximum of £40 per person for one night for up to 6 passengers.",
            "explanation": "In this case there is 3 amount: 40GBP(Monetary), 1 night(time), 6 passenger(person)"
          }
        }
      },
      "minimalAmount": {
        "type": "List",
        "of": "Amount",
        "documentation": "The minimal amount of the payout. (See Minimal amount Doc)",
        "sample": {
          "minimal": {
            "name": "A limit with a minimal amount",
            "legalese": "In case of fire we will pay you up to 10% of value insured but at least $5000",
            "explanation": "In this case the minimal amount will be $5000"
          }
        }
      },
      "multipliers": {
        "type": "Multiplier",
        "documentation": "The Payout multiplier, eg: per Person. As it is not possible to have 2 multipliers affecting the same dimension the multiplier object is used as a way to constraint to one multiplier per dimension."
      },
      "for": {
        "type": "RiskChain",
        "documentation": "The scope of the payout. 'It is a limit for'",
        "sample": {
          "forBailsBonds": {
            "name": "A limit applying to a payout for a specific indemnity",
            "legalese": "We will cover up to $300 for the cost of bail bonds required because of accident or traffic law violation arising out of use of your insured car.",
            "explanation": "In this case the $300 Limit apply for money financing bails bonds"
          }
        }
      },
      "impactOtherConsumption": {
        "type": "boolean",
        "documentation": "Sometime (rare case) some insurance payout are specify to not impact other payout. This mean that they should be taken into consideration on their own, and every payment modified by this payout should not impact other contract modifications.",
        "default": false,
        "sample": {
          "extraSample": {
            "name": "A limit that is out of other limit consumption",
            "legalese": "If you car can not be fix during the day, we will pay up to $100 for overnight accommodation independently of other limits.",
            "explanation": "In this case the $100 amount should not be taken in consideration in other limits, therefore isExtra should be set to true"
          }
        }
      }
    }
  },
  "Multiplier": {
    "type": "object",
    "documentation": {
      "en": "Multiplier indicate how the amount to be pay or retain is to be multiply. A payment of $10 per person have a perPerson multiplier. There could be only one multiplier of each type."
    },
    "namespace": "org.codex.insurance.core",
    "properties": {
      "time": {
        "type": "MultiplierTimeEnum"
      },
      "person": {
        "type": "MultiplierPersonEnum"
      },
      "occurrence": {
        "type": "MultiplierOccurrenceEnum"
      },
      "insuredObject": {
        "type": "MultiplierInsuredObjectEnum"
      },
      "other": {
        "type": "List",
        "of": "string"
      }
    }
  },
  "MultiplierInsuredObjectEnum": {
    "type": "enum",
    "namespace": "org.codex.insurance.core",
    "values": {
      "perCar": {
        "documentation": "per car"
      }
    }
  },
  "MultiplierOccurrenceEnum": {
    "type": "enum",
    "namespace": "org.codex.insurance.core",
    "values": {
      "perClaim": {
        "documentation": "an amount that apply per claim"
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
    "namespace": "org.codex.insurance.core",
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
    "namespace": "org.codex.insurance.core",
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
  "PayoutTypeEnum": {
    "type": "enum",
    "namespace": "org.codex.insurance.core",
    "documentation": "A list of insurance payout. Details on implementation can be found here https://docs.google.com/document/d/15mNl4lbPMjJRJJXz3XEEOuGSJdn55uWDyvAezr3CEng/edit?usp=sharing (to be update to direct doc insertion once finished)",
    "values": {
      "Limit": {
        "documentation": "A Limit is a maximum amount to be paid during a claim. Limit can apply across claims or for a given claim or claim line."
      },
      "Excess": {
        "documentation": "An excess is an amount withheld from the claim amount before applying any other modification. It can be applied per line or per claim."
      },
      "Deductible": {
        "documentation": "A deductible is an amount withheld from the claim amount paid to the insurer. It can be applied per line or per claim."
      },
      "Franchise": {
        "documentation": "A Franchise is an amount of liability under which the responsibility of the insurer is not engaged. However, contrary to an excess the full claimed amount will be liable if the franchise amount is reached."
      },
      "StrictLimit": {
        "documentation": "A StrictLimit is the opposite of a franchise. If the strictLimit amount is attained, then the claim amount is brought to zero. If the amount is under then the claim amount is conserved."
      },
      "Exclusion": {
        "documentation": "An exclusion means the sum to pay is zero. Exclusion takes precedence over every other modification applied to the payout. If an exclusion applies, the payout is always zero for the claim or line of claim the exclusion applies to."
      },
      "CoPayment": {
        "documentation": "A co pay is an amount to be withheld before deductible apply"
      },
      "CoInsurance": {
        "documentation": "A co pay is an amount to be withheld before deductible apply"
      }
    }
  },
  "Product": {
    "type": "class",
    "properties": {
      "benefits": {
        "type": "List",
        "of": "Benefits"
      },
      "riskObjects": {
        "type": "List",
        "of": "RiskObjects"
      }
    }
  },
  "Relation": {
    "type": "object",
    "namespace": "org.codex.insurance.core",
    "properties": {
      "impacterId": {
        "type": "string"
      },
      "impactedId": {
        "type": "string"
      },
      "verb": {
        "type": "string"
      }
    }
  },
  "RiskChain": {
    "documentation": "Represent a chain of risks in the form of a knowledge graph",
    "type": "object",
    "namespace": "org.codex.insurance.core",
    "properties": {
      "chain": {
        "type": "List",
        "of": "Chainable"
      },
      "actors": {
        "type": "List",
        "of": "RiskObject"
      },
      "relations": {
        "type": "List",
        "of": "Relation"
      }
    }
  },
  "RiskObject": {
    "type": "object",
    "isAbstract": true,
    "documentation": "Represent a real thing in the world!",
    "namespace": "org.codex.insurance.core",
    "properties": {
      "id": {
        "type": "string",
        "documentation": "A unique id for the object"
      }
    }
  },
  "Situation": {
    "type": "object",
    "inherit": "Chainable",
    "namespace": "org.codex.insurance.core",
    "documentation": "Represent a Situation",
    "properties": {
      "id": {
        "type": "string"
      },
      "event": {
        "type": "string"
      },
      "location": {
        "type": "string"
      },
      "period": {
        "type": "string"
      }
    }
  },
  "UnitDimensionEnum": {
    "type": "enum",
    "namespace": "org.codex.insurance.core",
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
    "namespace": "org.codex.insurance.core",
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
  "UnitEnum": {
    "type": "enum",
    "isAbstract": true,
    "namespace": "org.codex.insurance.core"
  },
  "UnitMonetaryEnum": {
    "type": "enum",
    "namespace": "org.codex.insurance.core",
    "inherit": "UnitEnum",
    "documentation": {
      "en": "A List of currency based on iso 4217"
    },
    "values": {
      "AED": {
        "iso4217Code": "AED",
        "iso4217Number": "784",
        "iso4217MinorUnit": "2",
        "name.en": "United Arab Emirates dirham",
        "symbol": "د.إ"
      },
      "AFN": {
        "iso4217Code": "AFN",
        "iso4217Number": "971",
        "iso4217MinorUnit": "2",
        "name.en": "Afghan afghani",
        "symbol": "؋"
      },
      "ALL": {
        "iso4217Code": "ALL",
        "iso4217Number": "8",
        "iso4217MinorUnit": "2",
        "name.en": "Albanian lek",
        "symbol": "L"
      },
      "AMD": {
        "iso4217Code": "AMD",
        "iso4217Number": "51",
        "iso4217MinorUnit": "2",
        "name.en": "Armenian dram",
        "symbol": "֏"
      },
      "ANG": {
        "iso4217Code": "ANG",
        "iso4217Number": "532",
        "iso4217MinorUnit": "2",
        "name.en": "Netherlands Antillean guilder",
        "symbol": "ƒ"
      },
      "AOA": {
        "iso4217Code": "AOA",
        "iso4217Number": "973",
        "iso4217MinorUnit": "2",
        "name.en": "Angolan kwanza",
        "symbol": "Kz"
      },
      "ARS": {
        "iso4217Code": "ARS",
        "iso4217Number": "32",
        "iso4217MinorUnit": "2",
        "name.en": "Argentine peso",
        "symbol": "$"
      },
      "AUD": {
        "iso4217Code": "AUD",
        "iso4217Number": "36",
        "iso4217MinorUnit": "2",
        "name.en": "Australian dollar",
        "symbol": "$"
      },
      "AWG": {
        "iso4217Code": "AWG",
        "iso4217Number": "533",
        "iso4217MinorUnit": "2",
        "name.en": "Aruban florin",
        "symbol": "ƒ"
      },
      "AZN": {
        "iso4217Code": "AZN",
        "iso4217Number": "944",
        "iso4217MinorUnit": "2",
        "name.en": "Azerbaijani manat",
        "symbol": "₼"
      },
      "BAM": {
        "iso4217Code": "BAM",
        "iso4217Number": "977",
        "iso4217MinorUnit": "2",
        "name.en": "Bosnia and Herzegovina convertible mark",
        "symbol": "KM"
      },
      "BBD": {
        "iso4217Code": "BBD",
        "iso4217Number": "52",
        "iso4217MinorUnit": "2",
        "name.en": "Barbados dollar",
        "symbol": "$"
      },
      "BDT": {
        "iso4217Code": "BDT",
        "iso4217Number": "50",
        "iso4217MinorUnit": "2",
        "name.en": "Bangladeshi taka",
        "symbol": "৳"
      },
      "BGN": {
        "iso4217Code": "BGN",
        "iso4217Number": "975",
        "iso4217MinorUnit": "2",
        "name.en": "Bulgarian lev",
        "symbol": "лв."
      },
      "BHD": {
        "iso4217Code": "BHD",
        "iso4217Number": "48",
        "iso4217MinorUnit": "3",
        "name.en": "Bahraini dinar",
        "symbol": ".د.ب"
      },
      "BIF": {
        "iso4217Code": "BIF",
        "iso4217Number": "108",
        "iso4217MinorUnit": "0",
        "name.en": "Burundian franc",
        "symbol": "Fr"
      },
      "BMD": {
        "iso4217Code": "BMD",
        "iso4217Number": "60",
        "iso4217MinorUnit": "2",
        "name.en": "Bermudian dollar",
        "symbol": "$"
      },
      "BND": {
        "iso4217Code": "BND",
        "iso4217Number": "96",
        "iso4217MinorUnit": "2",
        "name.en": "Brunei dollar",
        "symbol": "$"
      },
      "BOB": {
        "iso4217Code": "BOB",
        "iso4217Number": "68",
        "iso4217MinorUnit": "2",
        "name.en": "Boliviano",
        "symbol": "Bs."
      },
      "BOV": {
        "iso4217Code": "BOV",
        "iso4217Number": "984",
        "iso4217MinorUnit": "2",
        "name.en": "Bolivian Mvdol (funds code)",
        "symbol": ""
      },
      "BRL": {
        "iso4217Code": "BRL",
        "iso4217Number": "986",
        "iso4217MinorUnit": "2",
        "name.en": "Brazilian real",
        "symbol": "R$"
      },
      "BSD": {
        "iso4217Code": "BSD",
        "iso4217Number": "44",
        "iso4217MinorUnit": "2",
        "name.en": "Bahamian dollar",
        "symbol": "$"
      },
      "BTN": {
        "iso4217Code": "BTN",
        "iso4217Number": "64",
        "iso4217MinorUnit": "2",
        "name.en": "Bhutanese ngultrum",
        "symbol": "Nu."
      },
      "BWP": {
        "iso4217Code": "BWP",
        "iso4217Number": "72",
        "iso4217MinorUnit": "2",
        "name.en": "Botswana pula",
        "symbol": "P"
      },
      "BYN": {
        "iso4217Code": "BYN",
        "iso4217Number": "933",
        "iso4217MinorUnit": "2",
        "name.en": "Belarusian ruble",
        "symbol": "Br"
      },
      "BZD": {
        "iso4217Code": "BZD",
        "iso4217Number": "84",
        "iso4217MinorUnit": "2",
        "name.en": "Belize dollar",
        "symbol": "$"
      },
      "CAD": {
        "iso4217Code": "CAD",
        "iso4217Number": "124",
        "iso4217MinorUnit": "2",
        "name.en": "Canadian dollar",
        "symbol": "$"
      },
      "CDF": {
        "iso4217Code": "CDF",
        "iso4217Number": "976",
        "iso4217MinorUnit": "2",
        "name.en": "Congolese franc",
        "symbol": "Fr"
      },
      "CHE": {
        "iso4217Code": "CHE",
        "iso4217Number": "947",
        "iso4217MinorUnit": "2",
        "name.en": "WIR euro (complementary currency)",
        "symbol": ""
      },
      "CHF": {
        "iso4217Code": "CHF",
        "iso4217Number": "756",
        "iso4217MinorUnit": "2",
        "name.en": "Swiss franc",
        "symbol": "Fr."
      },
      "CHW": {
        "iso4217Code": "CHW",
        "iso4217Number": "948",
        "iso4217MinorUnit": "2",
        "name.en": "WIR franc (complementary currency)",
        "symbol": ""
      },
      "CLF": {
        "iso4217Code": "CLF",
        "iso4217Number": "990",
        "iso4217MinorUnit": "4",
        "name.en": "Unidad de Fomento (funds code)",
        "symbol": ""
      },
      "CLP": {
        "iso4217Code": "CLP",
        "iso4217Number": "152",
        "iso4217MinorUnit": "0",
        "name.en": "Chilean peso",
        "symbol": "$"
      },
      "COP": {
        "iso4217Code": "COP",
        "iso4217Number": "170",
        "iso4217MinorUnit": "2",
        "name.en": "Colombian peso",
        "symbol": "$"
      },
      "COU": {
        "iso4217Code": "COU",
        "iso4217Number": "970",
        "iso4217MinorUnit": "2",
        "name.en": "Unidad de Valor Real (UVR) (funds code)[9]",
        "symbol": ""
      },
      "CRC": {
        "iso4217Code": "CRC",
        "iso4217Number": "188",
        "iso4217MinorUnit": "2",
        "name.en": "Costa Rican colon",
        "symbol": "₡"
      },
      "CUC": {
        "iso4217Code": "CUC",
        "iso4217Number": "931",
        "iso4217MinorUnit": "2",
        "name.en": "Cuban convertible peso",
        "symbol": ""
      },
      "CUP": {
        "iso4217Code": "CUP",
        "iso4217Number": "192",
        "iso4217MinorUnit": "2",
        "name.en": "Cuban peso",
        "symbol": "$"
      },
      "CVE": {
        "iso4217Code": "CVE",
        "iso4217Number": "132",
        "iso4217MinorUnit": "2",
        "name.en": "Cape Verdean escudo",
        "symbol": "Esc"
      },
      "CZK": {
        "iso4217Code": "CZK",
        "iso4217Number": "203",
        "iso4217MinorUnit": "2",
        "name.en": "Czech koruna",
        "symbol": "Kč"
      },
      "DJF": {
        "iso4217Code": "DJF",
        "iso4217Number": "262",
        "iso4217MinorUnit": "0",
        "name.en": "Djiboutian franc",
        "symbol": "Fr"
      },
      "DKK": {
        "iso4217Code": "DKK",
        "iso4217Number": "208",
        "iso4217MinorUnit": "2",
        "name.en": "Danish krone",
        "symbol": "kr"
      },
      "DOP": {
        "iso4217Code": "DOP",
        "iso4217Number": "214",
        "iso4217MinorUnit": "2",
        "name.en": "Dominican peso",
        "symbol": "RD$"
      },
      "DZD": {
        "iso4217Code": "DZD",
        "iso4217Number": "12",
        "iso4217MinorUnit": "2",
        "name.en": "Algerian dinar",
        "symbol": "د.ج"
      },
      "EGP": {
        "iso4217Code": "EGP",
        "iso4217Number": "818",
        "iso4217MinorUnit": "2",
        "name.en": "Egyptian pound",
        "symbol": " ج.م"
      },
      "ERN": {
        "iso4217Code": "ERN",
        "iso4217Number": "232",
        "iso4217MinorUnit": "2",
        "name.en": "Eritrean nakfa",
        "symbol": "Nfk."
      },
      "ETB": {
        "iso4217Code": "ETB",
        "iso4217Number": "230",
        "iso4217MinorUnit": "2",
        "name.en": "Ethiopian birr",
        "symbol": "Br"
      },
      "EUR": {
        "iso4217Code": "EUR",
        "iso4217Number": "978",
        "iso4217MinorUnit": "2",
        "name.en": "Euro",
        "symbol": "€"
      },
      "FJD": {
        "iso4217Code": "FJD",
        "iso4217Number": "242",
        "iso4217MinorUnit": "2",
        "name.en": "Fiji dollar",
        "symbol": "$"
      },
      "FKP": {
        "iso4217Code": "FKP",
        "iso4217Number": "238",
        "iso4217MinorUnit": "2",
        "name.en": "Falkland Islands pound",
        "symbol": "£"
      },
      "GBP": {
        "iso4217Code": "GBP",
        "iso4217Number": "826",
        "iso4217MinorUnit": "2",
        "name.en": "Pound sterling",
        "symbol": "£"
      },
      "GEL": {
        "iso4217Code": "GEL",
        "iso4217Number": "981",
        "iso4217MinorUnit": "2",
        "name.en": "Georgian lari",
        "symbol": "₾"
      },
      "GHS": {
        "iso4217Code": "GHS",
        "iso4217Number": "936",
        "iso4217MinorUnit": "2",
        "name.en": "Ghanaian cedi",
        "symbol": "₵"
      },
      "GIP": {
        "iso4217Code": "GIP",
        "iso4217Number": "292",
        "iso4217MinorUnit": "2",
        "name.en": "Gibraltar pound",
        "symbol": "£"
      },
      "GMD": {
        "iso4217Code": "GMD",
        "iso4217Number": "270",
        "iso4217MinorUnit": "2",
        "name.en": "Gambian dalasi",
        "symbol": "D"
      },
      "GNF": {
        "iso4217Code": "GNF",
        "iso4217Number": "324",
        "iso4217MinorUnit": "0",
        "name.en": "Guinean franc",
        "symbol": "Fr"
      },
      "GTQ": {
        "iso4217Code": "GTQ",
        "iso4217Number": "320",
        "iso4217MinorUnit": "2",
        "name.en": "Guatemalan quetzal",
        "symbol": "Q"
      },
      "GYD": {
        "iso4217Code": "GYD",
        "iso4217Number": "328",
        "iso4217MinorUnit": "2",
        "name.en": "Guyanese dollar",
        "symbol": "$"
      },
      "HKD": {
        "iso4217Code": "HKD",
        "iso4217Number": "344",
        "iso4217MinorUnit": "2",
        "name.en": "Hong Kong dollar",
        "symbol": "$"
      },
      "HNL": {
        "iso4217Code": "HNL",
        "iso4217Number": "340",
        "iso4217MinorUnit": "2",
        "name.en": "Honduran lempira",
        "symbol": "L"
      },
      "HRK": {
        "iso4217Code": "HRK",
        "iso4217Number": "191",
        "iso4217MinorUnit": "2",
        "name.en": "Croatian kuna",
        "symbol": "kn"
      },
      "HTG": {
        "iso4217Code": "HTG",
        "iso4217Number": "332",
        "iso4217MinorUnit": "2",
        "name.en": "Haitian gourde",
        "symbol": "G"
      },
      "HUF": {
        "iso4217Code": "HUF",
        "iso4217Number": "348",
        "iso4217MinorUnit": "2",
        "name.en": "Hungarian forint",
        "symbol": "Ft"
      },
      "IDR": {
        "iso4217Code": "IDR",
        "iso4217Number": "360",
        "iso4217MinorUnit": "2",
        "name.en": "Indonesian rupiah",
        "symbol": "Rp"
      },
      "ILS": {
        "iso4217Code": "ILS",
        "iso4217Number": "376",
        "iso4217MinorUnit": "2",
        "name.en": "Israeli new shekel",
        "symbol": "₪"
      },
      "INR": {
        "iso4217Code": "INR",
        "iso4217Number": "356",
        "iso4217MinorUnit": "2",
        "name.en": "Indian rupee",
        "symbol": "₹"
      },
      "IQD": {
        "iso4217Code": "IQD",
        "iso4217Number": "368",
        "iso4217MinorUnit": "3",
        "name.en": "Iraqi dinar",
        "symbol": "ع.د"
      },
      "IRR": {
        "iso4217Code": "IRR",
        "iso4217Number": "364",
        "iso4217MinorUnit": "2",
        "name.en": "Iranian rial",
        "symbol": "﷼"
      },
      "ISK": {
        "iso4217Code": "ISK",
        "iso4217Number": "352",
        "iso4217MinorUnit": "0",
        "name.en": "Icelandic króna (plural: krónur)",
        "symbol": "kr"
      },
      "JMD": {
        "iso4217Code": "JMD",
        "iso4217Number": "388",
        "iso4217MinorUnit": "2",
        "name.en": "Jamaican dollar",
        "symbol": "$"
      },
      "JOD": {
        "iso4217Code": "JOD",
        "iso4217Number": "400",
        "iso4217MinorUnit": "3",
        "name.en": "Jordanian dinar",
        "symbol": "د.ا"
      },
      "JPY": {
        "iso4217Code": "JPY",
        "iso4217Number": "392",
        "iso4217MinorUnit": "0",
        "name.en": "Japanese yen",
        "symbol": "¥"
      },
      "KES": {
        "iso4217Code": "KES",
        "iso4217Number": "404",
        "iso4217MinorUnit": "2",
        "name.en": "Kenyan shilling",
        "symbol": "Sh"
      },
      "KGS": {
        "iso4217Code": "KGS",
        "iso4217Number": "417",
        "iso4217MinorUnit": "2",
        "name.en": "Kyrgyzstani som",
        "symbol": "с"
      },
      "KHR": {
        "iso4217Code": "KHR",
        "iso4217Number": "116",
        "iso4217MinorUnit": "2",
        "name.en": "Cambodian riel",
        "symbol": "៛"
      },
      "KMF": {
        "iso4217Code": "KMF",
        "iso4217Number": "174",
        "iso4217MinorUnit": "0",
        "name.en": "Comoro franc",
        "symbol": "Fr"
      },
      "KPW": {
        "iso4217Code": "KPW",
        "iso4217Number": "408",
        "iso4217MinorUnit": "2",
        "name.en": "North Korean won",
        "symbol": "₩"
      },
      "KRW": {
        "iso4217Code": "KRW",
        "iso4217Number": "410",
        "iso4217MinorUnit": "0",
        "name.en": "South Korean won",
        "symbol": "₩"
      },
      "KWD": {
        "iso4217Code": "KWD",
        "iso4217Number": "414",
        "iso4217MinorUnit": "3",
        "name.en": "Kuwaiti dinar",
        "symbol": "د.ك"
      },
      "KYD": {
        "iso4217Code": "KYD",
        "iso4217Number": "136",
        "iso4217MinorUnit": "2",
        "name.en": "Cayman Islands dollar",
        "symbol": "$"
      },
      "KZT": {
        "iso4217Code": "KZT",
        "iso4217Number": "398",
        "iso4217MinorUnit": "2",
        "name.en": "Kazakhstani tenge",
        "symbol": "₸"
      },
      "LAK": {
        "iso4217Code": "LAK",
        "iso4217Number": "418",
        "iso4217MinorUnit": "2",
        "name.en": "Lao kip",
        "symbol": "₭"
      },
      "LBP": {
        "iso4217Code": "LBP",
        "iso4217Number": "422",
        "iso4217MinorUnit": "2",
        "name.en": "Lebanese pound",
        "symbol": "£L and ل.ل"
      },
      "LKR": {
        "iso4217Code": "LKR",
        "iso4217Number": "144",
        "iso4217MinorUnit": "2",
        "name.en": "Sri Lankan rupee",
        "symbol": "Rs"
      },
      "LRD": {
        "iso4217Code": "LRD",
        "iso4217Number": "430",
        "iso4217MinorUnit": "2",
        "name.en": "Liberian dollar",
        "symbol": "$"
      },
      "LSL": {
        "iso4217Code": "LSL",
        "iso4217Number": "426",
        "iso4217MinorUnit": "2",
        "name.en": "Lesotho loti",
        "symbol": "L"
      },
      "LYD": {
        "iso4217Code": "LYD",
        "iso4217Number": "434",
        "iso4217MinorUnit": "3",
        "name.en": "Libyan dinar",
        "symbol": "ل.د"
      },
      "MAD": {
        "iso4217Code": "MAD",
        "iso4217Number": "504",
        "iso4217MinorUnit": "2",
        "name.en": "Moroccan dirham",
        "symbol": "د.م."
      },
      "MDL": {
        "iso4217Code": "MDL",
        "iso4217Number": "498",
        "iso4217MinorUnit": "2",
        "name.en": "Moldovan leu",
        "symbol": "L"
      },
      "MGA": {
        "iso4217Code": "MGA",
        "iso4217Number": "969",
        "iso4217MinorUnit": "2",
        "name.en": "Malagasy ariary",
        "symbol": "Ar"
      },
      "MKD": {
        "iso4217Code": "MKD",
        "iso4217Number": "807",
        "iso4217MinorUnit": "2",
        "name.en": "Macedonian denar",
        "symbol": "ден"
      },
      "MMK": {
        "iso4217Code": "MMK",
        "iso4217Number": "104",
        "iso4217MinorUnit": "2",
        "name.en": "Myanmar kyat",
        "symbol": "Ks"
      },
      "MNT": {
        "iso4217Code": "MNT",
        "iso4217Number": "496",
        "iso4217MinorUnit": "2",
        "name.en": "Mongolian tögrög",
        "symbol": "₮"
      },
      "MOP": {
        "iso4217Code": "MOP",
        "iso4217Number": "446",
        "iso4217MinorUnit": "2",
        "name.en": "Macanese pataca",
        "symbol": "MOP$"
      },
      "MRU": {
        "iso4217Code": "MRU",
        "iso4217Number": "929",
        "iso4217MinorUnit": "2",
        "name.en": "Mauritanian ouguiya",
        "symbol": "UM"
      },
      "MUR": {
        "iso4217Code": "MUR",
        "iso4217Number": "480",
        "iso4217MinorUnit": "2",
        "name.en": "Mauritian rupee",
        "symbol": "₨"
      },
      "MVR": {
        "iso4217Code": "MVR",
        "iso4217Number": "462",
        "iso4217MinorUnit": "2",
        "name.en": "Maldivian rufiyaa",
        "symbol": ".ރ"
      },
      "MWK": {
        "iso4217Code": "MWK",
        "iso4217Number": "454",
        "iso4217MinorUnit": "2",
        "name.en": "Malawian kwacha",
        "symbol": "MK"
      },
      "MXN": {
        "iso4217Code": "MXN",
        "iso4217Number": "484",
        "iso4217MinorUnit": "2",
        "name.en": "Mexican peso",
        "symbol": "$"
      },
      "MXV": {
        "iso4217Code": "MXV",
        "iso4217Number": "979",
        "iso4217MinorUnit": "2",
        "name.en": "Mexican Unidad de Inversion (UDI) (funds code)",
        "symbol": ""
      },
      "MYR": {
        "iso4217Code": "MYR",
        "iso4217Number": "458",
        "iso4217MinorUnit": "2",
        "name.en": "Malaysian ringgit",
        "symbol": "RM"
      },
      "MZN": {
        "iso4217Code": "MZN",
        "iso4217Number": "943",
        "iso4217MinorUnit": "2",
        "name.en": "Mozambican metical",
        "symbol": "MT"
      },
      "NAD": {
        "iso4217Code": "NAD",
        "iso4217Number": "516",
        "iso4217MinorUnit": "2",
        "name.en": "Namibian dollar",
        "symbol": "$"
      },
      "NGN": {
        "iso4217Code": "NGN",
        "iso4217Number": "566",
        "iso4217MinorUnit": "2",
        "name.en": "Nigerian naira",
        "symbol": "₦"
      },
      "NIO": {
        "iso4217Code": "NIO",
        "iso4217Number": "558",
        "iso4217MinorUnit": "2",
        "name.en": "Nicaraguan córdoba",
        "symbol": "C$"
      },
      "NOK": {
        "iso4217Code": "NOK",
        "iso4217Number": "578",
        "iso4217MinorUnit": "2",
        "name.en": "Norwegian krone",
        "symbol": "kr"
      },
      "NPR": {
        "iso4217Code": "NPR",
        "iso4217Number": "524",
        "iso4217MinorUnit": "2",
        "name.en": "Nepalese rupee",
        "symbol": "रू"
      },
      "NZD": {
        "iso4217Code": "NZD",
        "iso4217Number": "554",
        "iso4217MinorUnit": "2",
        "name.en": "New Zealand dollar",
        "symbol": "$"
      },
      "OMR": {
        "iso4217Code": "OMR",
        "iso4217Number": "512",
        "iso4217MinorUnit": "3",
        "name.en": "Omani rial",
        "symbol": "ر.ع."
      },
      "PAB": {
        "iso4217Code": "PAB",
        "iso4217Number": "590",
        "iso4217MinorUnit": "2",
        "name.en": "Panamanian balboa",
        "symbol": "B/."
      },
      "PEN": {
        "iso4217Code": "PEN",
        "iso4217Number": "604",
        "iso4217MinorUnit": "2",
        "name.en": "Peruvian sol",
        "symbol": "S/."
      },
      "PGK": {
        "iso4217Code": "PGK",
        "iso4217Number": "598",
        "iso4217MinorUnit": "2",
        "name.en": "Papua New Guinean kina",
        "symbol": "K"
      },
      "PHP": {
        "iso4217Code": "PHP",
        "iso4217Number": "608",
        "iso4217MinorUnit": "2",
        "name.en": "Philippine peso",
        "symbol": "₱"
      },
      "PKR": {
        "iso4217Code": "PKR",
        "iso4217Number": "586",
        "iso4217MinorUnit": "2",
        "name.en": "Pakistani rupee",
        "symbol": "₨"
      },
      "PLN": {
        "iso4217Code": "PLN",
        "iso4217Number": "985",
        "iso4217MinorUnit": "2",
        "name.en": "Polish złoty",
        "symbol": "zł"
      },
      "PYG": {
        "iso4217Code": "PYG",
        "iso4217Number": "600",
        "iso4217MinorUnit": "0",
        "name.en": "Paraguayan guaraní",
        "symbol": "₲"
      },
      "QAR": {
        "iso4217Code": "QAR",
        "iso4217Number": "634",
        "iso4217MinorUnit": "2",
        "name.en": "Qatari riyal",
        "symbol": "ر.ق"
      },
      "RON": {
        "iso4217Code": "RON",
        "iso4217Number": "946",
        "iso4217MinorUnit": "2",
        "name.en": "Romanian leu",
        "symbol": "lei"
      },
      "RSD": {
        "iso4217Code": "RSD",
        "iso4217Number": "941",
        "iso4217MinorUnit": "2",
        "name.en": "Serbian dinar",
        "symbol": "дин."
      },
      "CNY": {
        "iso4217Code": "CNY",
        "iso4217Number": "156",
        "iso4217MinorUnit": "2",
        "name.en": "Renminbi",
        "symbol": "元"
      },
      "RUB": {
        "iso4217Code": "RUB",
        "iso4217Number": "643",
        "iso4217MinorUnit": "2",
        "name.en": "Russian ruble",
        "symbol": "₽"
      },
      "RWF": {
        "iso4217Code": "RWF",
        "iso4217Number": "646",
        "iso4217MinorUnit": "0",
        "name.en": "Rwandan franc",
        "symbol": "Fr"
      },
      "SAR": {
        "iso4217Code": "SAR",
        "iso4217Number": "682",
        "iso4217MinorUnit": "2",
        "name.en": "Saudi riyal",
        "symbol": "﷼"
      },
      "SBD": {
        "iso4217Code": "SBD",
        "iso4217Number": "90",
        "iso4217MinorUnit": "2",
        "name.en": "Solomon Islands dollar",
        "symbol": "$"
      },
      "SCR": {
        "iso4217Code": "SCR",
        "iso4217Number": "690",
        "iso4217MinorUnit": "2",
        "name.en": "Seychelles rupee",
        "symbol": "₨"
      },
      "SDG": {
        "iso4217Code": "SDG",
        "iso4217Number": "938",
        "iso4217MinorUnit": "2",
        "name.en": "Sudanese pound",
        "symbol": "ج.س."
      },
      "SEK": {
        "iso4217Code": "SEK",
        "iso4217Number": "752",
        "iso4217MinorUnit": "2",
        "name.en": "Swedish krona (plural: kronor)",
        "symbol": "kr"
      },
      "SGD": {
        "iso4217Code": "SGD",
        "iso4217Number": "702",
        "iso4217MinorUnit": "2",
        "name.en": "Singapore dollar",
        "symbol": "$"
      },
      "SHP": {
        "iso4217Code": "SHP",
        "iso4217Number": "654",
        "iso4217MinorUnit": "2",
        "name.en": "Saint Helena pound",
        "symbol": "£"
      },
      "SLL": {
        "iso4217Code": "SLL",
        "iso4217Number": "694",
        "iso4217MinorUnit": "2",
        "name.en": "Sierra Leonean leone",
        "symbol": "Le"
      },
      "SLE": {
        "iso4217Code": "SLE",
        "iso4217Number": "925",
        "iso4217MinorUnit": "2",
        "name.en": "Sierra Leonean leone",
        "symbol": "Le"
      },
      "SOS": {
        "iso4217Code": "SOS",
        "iso4217Number": "706",
        "iso4217MinorUnit": "2",
        "name.en": "Somali shilling",
        "symbol": "Sh"
      },
      "SRD": {
        "iso4217Code": "SRD",
        "iso4217Number": "968",
        "iso4217MinorUnit": "2",
        "name.en": "Surinamese dollar",
        "symbol": "$"
      },
      "SSP": {
        "iso4217Code": "SSP",
        "iso4217Number": "728",
        "iso4217MinorUnit": "2",
        "name.en": "South Sudanese pound",
        "symbol": "£"
      },
      "STN": {
        "iso4217Code": "STN",
        "iso4217Number": "930",
        "iso4217MinorUnit": "2",
        "name.en": "São Tomé and Príncipe dobra",
        "symbol": "Db"
      },
      "SVC": {
        "iso4217Code": "SVC",
        "iso4217Number": "222",
        "iso4217MinorUnit": "2",
        "name.en": "Salvadoran colón",
        "symbol": ""
      },
      "SYP": {
        "iso4217Code": "SYP",
        "iso4217Number": "760",
        "iso4217MinorUnit": "2",
        "name.en": "Syrian pound",
        "symbol": "ل.س"
      },
      "SZL": {
        "iso4217Code": "SZL",
        "iso4217Number": "748",
        "iso4217MinorUnit": "2",
        "name.en": "Swazi lilangeni",
        "symbol": "L"
      },
      "THB": {
        "iso4217Code": "THB",
        "iso4217Number": "764",
        "iso4217MinorUnit": "2",
        "name.en": "Thai baht",
        "symbol": "฿"
      },
      "TJS": {
        "iso4217Code": "TJS",
        "iso4217Number": "972",
        "iso4217MinorUnit": "2",
        "name.en": "Tajikistani somoni",
        "symbol": "с."
      },
      "TMT": {
        "iso4217Code": "TMT",
        "iso4217Number": "934",
        "iso4217MinorUnit": "2",
        "name.en": "Turkmenistan manat",
        "symbol": "m."
      },
      "TND": {
        "iso4217Code": "TND",
        "iso4217Number": "788",
        "iso4217MinorUnit": "3",
        "name.en": "Tunisian dinar",
        "symbol": "د.ت"
      },
      "TOP": {
        "iso4217Code": "TOP",
        "iso4217Number": "776",
        "iso4217MinorUnit": "2",
        "name.en": "Tongan paʻanga",
        "symbol": "T$"
      },
      "TRY": {
        "iso4217Code": "TRY",
        "iso4217Number": "949",
        "iso4217MinorUnit": "2",
        "name.en": "Turkish lira",
        "symbol": "₺"
      },
      "TTD": {
        "iso4217Code": "TTD",
        "iso4217Number": "780",
        "iso4217MinorUnit": "2",
        "name.en": "Trinidad and Tobago dollar",
        "symbol": "$"
      },
      "TWD": {
        "iso4217Code": "TWD",
        "iso4217Number": "901",
        "iso4217MinorUnit": "2",
        "name.en": "New Taiwan dollar",
        "symbol": "$"
      },
      "TZS": {
        "iso4217Code": "TZS",
        "iso4217Number": "834",
        "iso4217MinorUnit": "2",
        "name.en": "Tanzanian shilling",
        "symbol": "Sh"
      },
      "UAH": {
        "iso4217Code": "UAH",
        "iso4217Number": "980",
        "iso4217MinorUnit": "2",
        "name.en": "Ukrainian hryvnia",
        "symbol": "₴"
      },
      "UGX": {
        "iso4217Code": "UGX",
        "iso4217Number": "800",
        "iso4217MinorUnit": "0",
        "name.en": "Ugandan shilling",
        "symbol": "USh"
      },
      "USD": {
        "iso4217Code": "USD",
        "iso4217Number": "840",
        "iso4217MinorUnit": "2",
        "name.en": "United States dollar",
        "symbol": "$"
      },
      "USN": {
        "iso4217Code": "USN",
        "iso4217Number": "997",
        "iso4217MinorUnit": "2",
        "name.en": "United States dollar (next day) (funds code)",
        "symbol": ""
      },
      "UYI": {
        "iso4217Code": "UYI",
        "iso4217Number": "940",
        "iso4217MinorUnit": "0",
        "name.en": "Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)",
        "symbol": ""
      },
      "UYU": {
        "iso4217Code": "UYU",
        "iso4217Number": "858",
        "iso4217MinorUnit": "2",
        "name.en": "Uruguayan peso",
        "symbol": "$"
      },
      "UYW": {
        "iso4217Code": "UYW",
        "iso4217Number": "927",
        "iso4217MinorUnit": "4",
        "name.en": "Unidad previsional",
        "symbol": ""
      },
      "UZS": {
        "iso4217Code": "UZS",
        "iso4217Number": "860",
        "iso4217MinorUnit": "2",
        "name.en": "Uzbekistan som",
        "symbol": "Sʻ"
      },
      "VED": {
        "iso4217Code": "VED",
        "iso4217Number": "926",
        "iso4217MinorUnit": "2",
        "name.en": "Venezuelan bolívar digital",
        "symbol": "Bs."
      },
      "VES": {
        "iso4217Code": "VES",
        "iso4217Number": "928",
        "iso4217MinorUnit": "2",
        "name.en": "Venezuelan bolívar soberano",
        "symbol": "Bs.S."
      },
      "VND": {
        "iso4217Code": "VND",
        "iso4217Number": "704",
        "iso4217MinorUnit": "0",
        "name.en": "Vietnamese đồng",
        "symbol": "₫"
      },
      "VUV": {
        "iso4217Code": "VUV",
        "iso4217Number": "548",
        "iso4217MinorUnit": "0",
        "name.en": "Vanuatu vatu",
        "symbol": "Vt"
      },
      "WST": {
        "iso4217Code": "WST",
        "iso4217Number": "882",
        "iso4217MinorUnit": "2",
        "name.en": "Samoan tala",
        "symbol": "T"
      },
      "XAF": {
        "iso4217Code": "XAF",
        "iso4217Number": "950",
        "iso4217MinorUnit": "0",
        "name.en": "CFA franc BEAC",
        "symbol": "Fr"
      },
      "XAG": {
        "iso4217Code": "XAG",
        "iso4217Number": "961",
        "iso4217MinorUnit": ".",
        "name.en": "Silver (one troy ounce)",
        "symbol": ""
      },
      "XAU": {
        "iso4217Code": "XAU",
        "iso4217Number": "959",
        "iso4217MinorUnit": ".",
        "name.en": "Gold (one troy ounce)",
        "symbol": ""
      },
      "XBA": {
        "iso4217Code": "XBA",
        "iso4217Number": "955",
        "iso4217MinorUnit": ".",
        "name.en": "European Composite Unit (EURCO) (bond market unit)",
        "symbol": ""
      },
      "XBB": {
        "iso4217Code": "XBB",
        "iso4217Number": "956",
        "iso4217MinorUnit": ".",
        "name.en": "European Monetary Unit (E.M.U.-6) (bond market unit)",
        "symbol": ""
      },
      "XBC": {
        "iso4217Code": "XBC",
        "iso4217Number": "957",
        "iso4217MinorUnit": ".",
        "name.en": "European Unit of Account 9 (E.U.A.-9) (bond market unit)",
        "symbol": ""
      },
      "XBD": {
        "iso4217Code": "XBD",
        "iso4217Number": "958",
        "iso4217MinorUnit": ".",
        "name.en": "European Unit of Account 17 (E.U.A.-17) (bond market unit)",
        "symbol": ""
      },
      "XCD": {
        "iso4217Code": "XCD",
        "iso4217Number": "951",
        "iso4217MinorUnit": "2",
        "name.en": "East Caribbean dollar",
        "symbol": "$"
      },
      "XDR": {
        "iso4217Code": "XDR",
        "iso4217Number": "960",
        "iso4217MinorUnit": ".",
        "name.en": "Special drawing rights",
        "symbol": ""
      },
      "XOF": {
        "iso4217Code": "XOF",
        "iso4217Number": "952",
        "iso4217MinorUnit": "0",
        "name.en": "CFA franc BCEAO",
        "symbol": "Fr"
      },
      "XPD": {
        "iso4217Code": "XPD",
        "iso4217Number": "964",
        "iso4217MinorUnit": ".",
        "name.en": "Palladium (one troy ounce)",
        "symbol": ""
      },
      "XPF": {
        "iso4217Code": "XPF",
        "iso4217Number": "953",
        "iso4217MinorUnit": "0",
        "name.en": "CFP franc (franc Pacifique)",
        "symbol": "₣"
      },
      "XPT": {
        "iso4217Code": "XPT",
        "iso4217Number": "962",
        "iso4217MinorUnit": ".",
        "name.en": "Platinum (one troy ounce)",
        "symbol": ""
      },
      "XSU": {
        "iso4217Code": "XSU",
        "iso4217Number": "994",
        "iso4217MinorUnit": ".",
        "name.en": "SUCRE",
        "symbol": ""
      },
      "XTS": {
        "iso4217Code": "XTS",
        "iso4217Number": "963",
        "iso4217MinorUnit": ".",
        "name.en": "Code reserved for testing",
        "symbol": ""
      },
      "XUA": {
        "iso4217Code": "XUA",
        "iso4217Number": "965",
        "iso4217MinorUnit": ".",
        "name.en": "ADB Unit of Account",
        "symbol": ""
      },
      "XXX": {
        "iso4217Code": "XXX",
        "iso4217Number": "999",
        "iso4217MinorUnit": ".",
        "name.en": "No currency",
        "symbol": ""
      },
      "YER": {
        "iso4217Code": "YER",
        "iso4217Number": "886",
        "iso4217MinorUnit": "2",
        "name.en": "Yemeni rial",
        "symbol": "﷼"
      },
      "ZAR": {
        "iso4217Code": "ZAR",
        "iso4217Number": "710",
        "iso4217MinorUnit": "2",
        "name.en": "South African rand",
        "symbol": "R"
      },
      "ZMW": {
        "iso4217Code": "ZMW",
        "iso4217Number": "967",
        "iso4217MinorUnit": "2",
        "name.en": "Zambian kwacha",
        "symbol": "ZK"
      },
      "ZWL": {
        "iso4217Code": "ZWL",
        "iso4217Number": "932",
        "iso4217MinorUnit": "2",
        "name.en": "Zimbabwean dollar",
        "symbol": ""
      }
    }
  },
  "UnitPersonEnum": {
    "type": "enum",
    "namespace": "org.codex.insurance.core",
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
    "namespace": "org.codex.insurance.core",
    "values": {
      "day": {
        "documentation": "day"
      },
      "consecutiveDay": {
        "documentation": "consecutive day"
      },
      "night": {
        "documentation": "night"
      },
      "month": {
        "documentation": "month"
      },
      "year": {
        "documentation": "year"
      }
    }
  },
  "boolean": {
    "type": "system",
    "documentation": "represent a boolean",
    "namespace": "org.codex.insurance.core.system"
  },
  "number": {
    "type": "system",
    "documentation": "represent a number",
    "namespace": "org.codex.insurance.core.system"
  },
  "string": {
    "type": "system",
    "documentation": "represent a string",
    "namespace": "org.codex.insurance.core.system"
  },
  "Person": {
    "type": "object",
    "inherit": "RiskObject",
    "namespace": "org.codex.insurance.core",
    "properties": {
      "relationToPolicyHolder": {
        "type": "PersonRelationToPolicyHolderEnum"
      },
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "age": {
        "type": "number"
      }
    }
  },
  "PersonRelationToPolicyHolderEnum": {
    "type": "enum",
    "namespace": "org.codex.insurance.core",
    "documentation": {
      "en": "A List of possible relationship of a person to a policyHolder"
    },
    "values": {
      "self": {
        "documentation": "The policyholder"
      },
      "father": {
        "documentation": "The father of policyholder"
      },
      "mother": {
        "documentation": "The mother of the policyholder"
      }
    }
  }
}