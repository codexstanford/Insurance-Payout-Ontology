let datamodel = {
  "Amount": {
    "documentation": "An object representing an Amount",
    "type": "object",
    "properties": {
      "value": {
        "type": "string",
        "documentation": {
          "en": "A string representing a value. Can contain a number, a name variable, or a numerical expression : supporting ( ) + - * / %"
        }
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
        "lob": "legal",
        "documentation": "Legal costs"
      },
      "legalExpenses": {
        "lob": "legal",
        "documentation": "Legal expenses"
      },
      "bailsBond": {
        "lob": "legal",
        "documentation": "Cost of bail bonds"
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
    "documentation": {
      "en": "A List of currency based on iso 4217"
    },
    "values": {
      "AED": {
        "iso4217Code": "AED",
        "iso4217Number": "784",
        "iso4217MinorUnit": "2",
        "name.en": "United Arab Emirates dirham",
        "symbole": "د.إ"
      },
      "AFN": {
        "iso4217Code": "AFN",
        "iso4217Number": "971",
        "iso4217MinorUnit": "2",
        "name.en": "Afghan afghani",
        "symbole": "؋"
      },
      "ALL": {
        "iso4217Code": "ALL",
        "iso4217Number": "8",
        "iso4217MinorUnit": "2",
        "name.en": "Albanian lek",
        "symbole": "L"
      },
      "AMD": {
        "iso4217Code": "AMD",
        "iso4217Number": "51",
        "iso4217MinorUnit": "2",
        "name.en": "Armenian dram",
        "symbole": "֏"
      },
      "ANG": {
        "iso4217Code": "ANG",
        "iso4217Number": "532",
        "iso4217MinorUnit": "2",
        "name.en": "Netherlands Antillean guilder",
        "symbole": "ƒ"
      },
      "AOA": {
        "iso4217Code": "AOA",
        "iso4217Number": "973",
        "iso4217MinorUnit": "2",
        "name.en": "Angolan kwanza",
        "symbole": "Kz"
      },
      "ARS": {
        "iso4217Code": "ARS",
        "iso4217Number": "32",
        "iso4217MinorUnit": "2",
        "name.en": "Argentine peso",
        "symbole": "$"
      },
      "AUD": {
        "iso4217Code": "AUD",
        "iso4217Number": "36",
        "iso4217MinorUnit": "2",
        "name.en": "Australian dollar",
        "symbole": "$"
      },
      "AWG": {
        "iso4217Code": "AWG",
        "iso4217Number": "533",
        "iso4217MinorUnit": "2",
        "name.en": "Aruban florin",
        "symbole": "ƒ"
      },
      "AZN": {
        "iso4217Code": "AZN",
        "iso4217Number": "944",
        "iso4217MinorUnit": "2",
        "name.en": "Azerbaijani manat",
        "symbole": "₼"
      },
      "BAM": {
        "iso4217Code": "BAM",
        "iso4217Number": "977",
        "iso4217MinorUnit": "2",
        "name.en": "Bosnia and Herzegovina convertible mark",
        "symbole": "KM"
      },
      "BBD": {
        "iso4217Code": "BBD",
        "iso4217Number": "52",
        "iso4217MinorUnit": "2",
        "name.en": "Barbados dollar",
        "symbole": "$"
      },
      "BDT": {
        "iso4217Code": "BDT",
        "iso4217Number": "50",
        "iso4217MinorUnit": "2",
        "name.en": "Bangladeshi taka",
        "symbole": "৳"
      },
      "BGN": {
        "iso4217Code": "BGN",
        "iso4217Number": "975",
        "iso4217MinorUnit": "2",
        "name.en": "Bulgarian lev",
        "symbole": "лв."
      },
      "BHD": {
        "iso4217Code": "BHD",
        "iso4217Number": "48",
        "iso4217MinorUnit": "3",
        "name.en": "Bahraini dinar",
        "symbole": ".د.ب"
      },
      "BIF": {
        "iso4217Code": "BIF",
        "iso4217Number": "108",
        "iso4217MinorUnit": "0",
        "name.en": "Burundian franc",
        "symbole": "Fr"
      },
      "BMD": {
        "iso4217Code": "BMD",
        "iso4217Number": "60",
        "iso4217MinorUnit": "2",
        "name.en": "Bermudian dollar",
        "symbole": "$"
      },
      "BND": {
        "iso4217Code": "BND",
        "iso4217Number": "96",
        "iso4217MinorUnit": "2",
        "name.en": "Brunei dollar",
        "symbole": "$"
      },
      "BOB": {
        "iso4217Code": "BOB",
        "iso4217Number": "68",
        "iso4217MinorUnit": "2",
        "name.en": "Boliviano",
        "symbole": "Bs."
      },
      "BOV": {
        "iso4217Code": "BOV",
        "iso4217Number": "984",
        "iso4217MinorUnit": "2",
        "name.en": "Bolivian Mvdol (funds code)",
        "symbole": ""
      },
      "BRL": {
        "iso4217Code": "BRL",
        "iso4217Number": "986",
        "iso4217MinorUnit": "2",
        "name.en": "Brazilian real",
        "symbole": "R$"
      },
      "BSD": {
        "iso4217Code": "BSD",
        "iso4217Number": "44",
        "iso4217MinorUnit": "2",
        "name.en": "Bahamian dollar",
        "symbole": "$"
      },
      "BTN": {
        "iso4217Code": "BTN",
        "iso4217Number": "64",
        "iso4217MinorUnit": "2",
        "name.en": "Bhutanese ngultrum",
        "symbole": "Nu."
      },
      "BWP": {
        "iso4217Code": "BWP",
        "iso4217Number": "72",
        "iso4217MinorUnit": "2",
        "name.en": "Botswana pula",
        "symbole": "P"
      },
      "BYN": {
        "iso4217Code": "BYN",
        "iso4217Number": "933",
        "iso4217MinorUnit": "2",
        "name.en": "Belarusian ruble",
        "symbole": "Br"
      },
      "BZD": {
        "iso4217Code": "BZD",
        "iso4217Number": "84",
        "iso4217MinorUnit": "2",
        "name.en": "Belize dollar",
        "symbole": "$"
      },
      "CAD": {
        "iso4217Code": "CAD",
        "iso4217Number": "124",
        "iso4217MinorUnit": "2",
        "name.en": "Canadian dollar",
        "symbole": "$"
      },
      "CDF": {
        "iso4217Code": "CDF",
        "iso4217Number": "976",
        "iso4217MinorUnit": "2",
        "name.en": "Congolese franc",
        "symbole": "Fr"
      },
      "CHE": {
        "iso4217Code": "CHE",
        "iso4217Number": "947",
        "iso4217MinorUnit": "2",
        "name.en": "WIR euro (complementary currency)",
        "symbole": ""
      },
      "CHF": {
        "iso4217Code": "CHF",
        "iso4217Number": "756",
        "iso4217MinorUnit": "2",
        "name.en": "Swiss franc",
        "symbole": "Fr."
      },
      "CHW": {
        "iso4217Code": "CHW",
        "iso4217Number": "948",
        "iso4217MinorUnit": "2",
        "name.en": "WIR franc (complementary currency)",
        "symbole": ""
      },
      "CLF": {
        "iso4217Code": "CLF",
        "iso4217Number": "990",
        "iso4217MinorUnit": "4",
        "name.en": "Unidad de Fomento (funds code)",
        "symbole": ""
      },
      "CLP": {
        "iso4217Code": "CLP",
        "iso4217Number": "152",
        "iso4217MinorUnit": "0",
        "name.en": "Chilean peso",
        "symbole": "$"
      },
      "COP": {
        "iso4217Code": "COP",
        "iso4217Number": "170",
        "iso4217MinorUnit": "2",
        "name.en": "Colombian peso",
        "symbole": "$"
      },
      "COU": {
        "iso4217Code": "COU",
        "iso4217Number": "970",
        "iso4217MinorUnit": "2",
        "name.en": "Unidad de Valor Real (UVR) (funds code)[9]",
        "symbole": ""
      },
      "CRC": {
        "iso4217Code": "CRC",
        "iso4217Number": "188",
        "iso4217MinorUnit": "2",
        "name.en": "Costa Rican colon",
        "symbole": "₡"
      },
      "CUC": {
        "iso4217Code": "CUC",
        "iso4217Number": "931",
        "iso4217MinorUnit": "2",
        "name.en": "Cuban convertible peso",
        "symbole": ""
      },
      "CUP": {
        "iso4217Code": "CUP",
        "iso4217Number": "192",
        "iso4217MinorUnit": "2",
        "name.en": "Cuban peso",
        "symbole": "$"
      },
      "CVE": {
        "iso4217Code": "CVE",
        "iso4217Number": "132",
        "iso4217MinorUnit": "2",
        "name.en": "Cape Verdean escudo",
        "symbole": "Esc"
      },
      "CZK": {
        "iso4217Code": "CZK",
        "iso4217Number": "203",
        "iso4217MinorUnit": "2",
        "name.en": "Czech koruna",
        "symbole": "Kč"
      },
      "DJF": {
        "iso4217Code": "DJF",
        "iso4217Number": "262",
        "iso4217MinorUnit": "0",
        "name.en": "Djiboutian franc",
        "symbole": "Fr"
      },
      "DKK": {
        "iso4217Code": "DKK",
        "iso4217Number": "208",
        "iso4217MinorUnit": "2",
        "name.en": "Danish krone",
        "symbole": "kr"
      },
      "DOP": {
        "iso4217Code": "DOP",
        "iso4217Number": "214",
        "iso4217MinorUnit": "2",
        "name.en": "Dominican peso",
        "symbole": "RD$"
      },
      "DZD": {
        "iso4217Code": "DZD",
        "iso4217Number": "12",
        "iso4217MinorUnit": "2",
        "name.en": "Algerian dinar",
        "symbole": "د.ج"
      },
      "EGP": {
        "iso4217Code": "EGP",
        "iso4217Number": "818",
        "iso4217MinorUnit": "2",
        "name.en": "Egyptian pound",
        "symbole": " ج.م"
      },
      "ERN": {
        "iso4217Code": "ERN",
        "iso4217Number": "232",
        "iso4217MinorUnit": "2",
        "name.en": "Eritrean nakfa",
        "symbole": "Nfk."
      },
      "ETB": {
        "iso4217Code": "ETB",
        "iso4217Number": "230",
        "iso4217MinorUnit": "2",
        "name.en": "Ethiopian birr",
        "symbole": "Br"
      },
      "EUR": {
        "iso4217Code": "EUR",
        "iso4217Number": "978",
        "iso4217MinorUnit": "2",
        "name.en": "Euro",
        "symbole": "€"
      },
      "FJD": {
        "iso4217Code": "FJD",
        "iso4217Number": "242",
        "iso4217MinorUnit": "2",
        "name.en": "Fiji dollar",
        "symbole": "$"
      },
      "FKP": {
        "iso4217Code": "FKP",
        "iso4217Number": "238",
        "iso4217MinorUnit": "2",
        "name.en": "Falkland Islands pound",
        "symbole": "£"
      },
      "GBP": {
        "iso4217Code": "GBP",
        "iso4217Number": "826",
        "iso4217MinorUnit": "2",
        "name.en": "Pound sterling",
        "symbole": "£"
      },
      "GEL": {
        "iso4217Code": "GEL",
        "iso4217Number": "981",
        "iso4217MinorUnit": "2",
        "name.en": "Georgian lari",
        "symbole": "₾"
      },
      "GHS": {
        "iso4217Code": "GHS",
        "iso4217Number": "936",
        "iso4217MinorUnit": "2",
        "name.en": "Ghanaian cedi",
        "symbole": "₵"
      },
      "GIP": {
        "iso4217Code": "GIP",
        "iso4217Number": "292",
        "iso4217MinorUnit": "2",
        "name.en": "Gibraltar pound",
        "symbole": "£"
      },
      "GMD": {
        "iso4217Code": "GMD",
        "iso4217Number": "270",
        "iso4217MinorUnit": "2",
        "name.en": "Gambian dalasi",
        "symbole": "D"
      },
      "GNF": {
        "iso4217Code": "GNF",
        "iso4217Number": "324",
        "iso4217MinorUnit": "0",
        "name.en": "Guinean franc",
        "symbole": "Fr"
      },
      "GTQ": {
        "iso4217Code": "GTQ",
        "iso4217Number": "320",
        "iso4217MinorUnit": "2",
        "name.en": "Guatemalan quetzal",
        "symbole": "Q"
      },
      "GYD": {
        "iso4217Code": "GYD",
        "iso4217Number": "328",
        "iso4217MinorUnit": "2",
        "name.en": "Guyanese dollar",
        "symbole": "$"
      },
      "HKD": {
        "iso4217Code": "HKD",
        "iso4217Number": "344",
        "iso4217MinorUnit": "2",
        "name.en": "Hong Kong dollar",
        "symbole": "$"
      },
      "HNL": {
        "iso4217Code": "HNL",
        "iso4217Number": "340",
        "iso4217MinorUnit": "2",
        "name.en": "Honduran lempira",
        "symbole": "L"
      },
      "HRK": {
        "iso4217Code": "HRK",
        "iso4217Number": "191",
        "iso4217MinorUnit": "2",
        "name.en": "Croatian kuna",
        "symbole": "kn"
      },
      "HTG": {
        "iso4217Code": "HTG",
        "iso4217Number": "332",
        "iso4217MinorUnit": "2",
        "name.en": "Haitian gourde",
        "symbole": "G"
      },
      "HUF": {
        "iso4217Code": "HUF",
        "iso4217Number": "348",
        "iso4217MinorUnit": "2",
        "name.en": "Hungarian forint",
        "symbole": "Ft"
      },
      "IDR": {
        "iso4217Code": "IDR",
        "iso4217Number": "360",
        "iso4217MinorUnit": "2",
        "name.en": "Indonesian rupiah",
        "symbole": "Rp"
      },
      "ILS": {
        "iso4217Code": "ILS",
        "iso4217Number": "376",
        "iso4217MinorUnit": "2",
        "name.en": "Israeli new shekel",
        "symbole": "₪"
      },
      "INR": {
        "iso4217Code": "INR",
        "iso4217Number": "356",
        "iso4217MinorUnit": "2",
        "name.en": "Indian rupee",
        "symbole": "₹"
      },
      "IQD": {
        "iso4217Code": "IQD",
        "iso4217Number": "368",
        "iso4217MinorUnit": "3",
        "name.en": "Iraqi dinar",
        "symbole": "ع.د"
      },
      "IRR": {
        "iso4217Code": "IRR",
        "iso4217Number": "364",
        "iso4217MinorUnit": "2",
        "name.en": "Iranian rial",
        "symbole": "﷼"
      },
      "ISK": {
        "iso4217Code": "ISK",
        "iso4217Number": "352",
        "iso4217MinorUnit": "0",
        "name.en": "Icelandic króna (plural: krónur)",
        "symbole": "kr"
      },
      "JMD": {
        "iso4217Code": "JMD",
        "iso4217Number": "388",
        "iso4217MinorUnit": "2",
        "name.en": "Jamaican dollar",
        "symbole": "$"
      },
      "JOD": {
        "iso4217Code": "JOD",
        "iso4217Number": "400",
        "iso4217MinorUnit": "3",
        "name.en": "Jordanian dinar",
        "symbole": "د.ا"
      },
      "JPY": {
        "iso4217Code": "JPY",
        "iso4217Number": "392",
        "iso4217MinorUnit": "0",
        "name.en": "Japanese yen",
        "symbole": "¥"
      },
      "KES": {
        "iso4217Code": "KES",
        "iso4217Number": "404",
        "iso4217MinorUnit": "2",
        "name.en": "Kenyan shilling",
        "symbole": "Sh"
      },
      "KGS": {
        "iso4217Code": "KGS",
        "iso4217Number": "417",
        "iso4217MinorUnit": "2",
        "name.en": "Kyrgyzstani som",
        "symbole": "с"
      },
      "KHR": {
        "iso4217Code": "KHR",
        "iso4217Number": "116",
        "iso4217MinorUnit": "2",
        "name.en": "Cambodian riel",
        "symbole": "៛"
      },
      "KMF": {
        "iso4217Code": "KMF",
        "iso4217Number": "174",
        "iso4217MinorUnit": "0",
        "name.en": "Comoro franc",
        "symbole": "Fr"
      },
      "KPW": {
        "iso4217Code": "KPW",
        "iso4217Number": "408",
        "iso4217MinorUnit": "2",
        "name.en": "North Korean won",
        "symbole": "₩"
      },
      "KRW": {
        "iso4217Code": "KRW",
        "iso4217Number": "410",
        "iso4217MinorUnit": "0",
        "name.en": "South Korean won",
        "symbole": "₩"
      },
      "KWD": {
        "iso4217Code": "KWD",
        "iso4217Number": "414",
        "iso4217MinorUnit": "3",
        "name.en": "Kuwaiti dinar",
        "symbole": "د.ك"
      },
      "KYD": {
        "iso4217Code": "KYD",
        "iso4217Number": "136",
        "iso4217MinorUnit": "2",
        "name.en": "Cayman Islands dollar",
        "symbole": "$"
      },
      "KZT": {
        "iso4217Code": "KZT",
        "iso4217Number": "398",
        "iso4217MinorUnit": "2",
        "name.en": "Kazakhstani tenge",
        "symbole": "₸"
      },
      "LAK": {
        "iso4217Code": "LAK",
        "iso4217Number": "418",
        "iso4217MinorUnit": "2",
        "name.en": "Lao kip",
        "symbole": "₭"
      },
      "LBP": {
        "iso4217Code": "LBP",
        "iso4217Number": "422",
        "iso4217MinorUnit": "2",
        "name.en": "Lebanese pound",
        "symbole": "£L and ل.ل"
      },
      "LKR": {
        "iso4217Code": "LKR",
        "iso4217Number": "144",
        "iso4217MinorUnit": "2",
        "name.en": "Sri Lankan rupee",
        "symbole": "Rs"
      },
      "LRD": {
        "iso4217Code": "LRD",
        "iso4217Number": "430",
        "iso4217MinorUnit": "2",
        "name.en": "Liberian dollar",
        "symbole": "$"
      },
      "LSL": {
        "iso4217Code": "LSL",
        "iso4217Number": "426",
        "iso4217MinorUnit": "2",
        "name.en": "Lesotho loti",
        "symbole": "L"
      },
      "LYD": {
        "iso4217Code": "LYD",
        "iso4217Number": "434",
        "iso4217MinorUnit": "3",
        "name.en": "Libyan dinar",
        "symbole": "ل.د"
      },
      "MAD": {
        "iso4217Code": "MAD",
        "iso4217Number": "504",
        "iso4217MinorUnit": "2",
        "name.en": "Moroccan dirham",
        "symbole": "د.م."
      },
      "MDL": {
        "iso4217Code": "MDL",
        "iso4217Number": "498",
        "iso4217MinorUnit": "2",
        "name.en": "Moldovan leu",
        "symbole": "L"
      },
      "MGA": {
        "iso4217Code": "MGA",
        "iso4217Number": "969",
        "iso4217MinorUnit": "2",
        "name.en": "Malagasy ariary",
        "symbole": "Ar"
      },
      "MKD": {
        "iso4217Code": "MKD",
        "iso4217Number": "807",
        "iso4217MinorUnit": "2",
        "name.en": "Macedonian denar",
        "symbole": "ден"
      },
      "MMK": {
        "iso4217Code": "MMK",
        "iso4217Number": "104",
        "iso4217MinorUnit": "2",
        "name.en": "Myanmar kyat",
        "symbole": "Ks"
      },
      "MNT": {
        "iso4217Code": "MNT",
        "iso4217Number": "496",
        "iso4217MinorUnit": "2",
        "name.en": "Mongolian tögrög",
        "symbole": "₮"
      },
      "MOP": {
        "iso4217Code": "MOP",
        "iso4217Number": "446",
        "iso4217MinorUnit": "2",
        "name.en": "Macanese pataca",
        "symbole": "MOP$"
      },
      "MRU": {
        "iso4217Code": "MRU",
        "iso4217Number": "929",
        "iso4217MinorUnit": "2",
        "name.en": "Mauritanian ouguiya",
        "symbole": "UM"
      },
      "MUR": {
        "iso4217Code": "MUR",
        "iso4217Number": "480",
        "iso4217MinorUnit": "2",
        "name.en": "Mauritian rupee",
        "symbole": "₨"
      },
      "MVR": {
        "iso4217Code": "MVR",
        "iso4217Number": "462",
        "iso4217MinorUnit": "2",
        "name.en": "Maldivian rufiyaa",
        "symbole": ".ރ"
      },
      "MWK": {
        "iso4217Code": "MWK",
        "iso4217Number": "454",
        "iso4217MinorUnit": "2",
        "name.en": "Malawian kwacha",
        "symbole": "MK"
      },
      "MXN": {
        "iso4217Code": "MXN",
        "iso4217Number": "484",
        "iso4217MinorUnit": "2",
        "name.en": "Mexican peso",
        "symbole": "$"
      },
      "MXV": {
        "iso4217Code": "MXV",
        "iso4217Number": "979",
        "iso4217MinorUnit": "2",
        "name.en": "Mexican Unidad de Inversion (UDI) (funds code)",
        "symbole": ""
      },
      "MYR": {
        "iso4217Code": "MYR",
        "iso4217Number": "458",
        "iso4217MinorUnit": "2",
        "name.en": "Malaysian ringgit",
        "symbole": "RM"
      },
      "MZN": {
        "iso4217Code": "MZN",
        "iso4217Number": "943",
        "iso4217MinorUnit": "2",
        "name.en": "Mozambican metical",
        "symbole": "MT"
      },
      "NAD": {
        "iso4217Code": "NAD",
        "iso4217Number": "516",
        "iso4217MinorUnit": "2",
        "name.en": "Namibian dollar",
        "symbole": "$"
      },
      "NGN": {
        "iso4217Code": "NGN",
        "iso4217Number": "566",
        "iso4217MinorUnit": "2",
        "name.en": "Nigerian naira",
        "symbole": "₦"
      },
      "NIO": {
        "iso4217Code": "NIO",
        "iso4217Number": "558",
        "iso4217MinorUnit": "2",
        "name.en": "Nicaraguan córdoba",
        "symbole": "C$"
      },
      "NOK": {
        "iso4217Code": "NOK",
        "iso4217Number": "578",
        "iso4217MinorUnit": "2",
        "name.en": "Norwegian krone",
        "symbole": "kr"
      },
      "NPR": {
        "iso4217Code": "NPR",
        "iso4217Number": "524",
        "iso4217MinorUnit": "2",
        "name.en": "Nepalese rupee",
        "symbole": "रू"
      },
      "NZD": {
        "iso4217Code": "NZD",
        "iso4217Number": "554",
        "iso4217MinorUnit": "2",
        "name.en": "New Zealand dollar",
        "symbole": "$"
      },
      "OMR": {
        "iso4217Code": "OMR",
        "iso4217Number": "512",
        "iso4217MinorUnit": "3",
        "name.en": "Omani rial",
        "symbole": "ر.ع."
      },
      "PAB": {
        "iso4217Code": "PAB",
        "iso4217Number": "590",
        "iso4217MinorUnit": "2",
        "name.en": "Panamanian balboa",
        "symbole": "B/."
      },
      "PEN": {
        "iso4217Code": "PEN",
        "iso4217Number": "604",
        "iso4217MinorUnit": "2",
        "name.en": "Peruvian sol",
        "symbole": "S/."
      },
      "PGK": {
        "iso4217Code": "PGK",
        "iso4217Number": "598",
        "iso4217MinorUnit": "2",
        "name.en": "Papua New Guinean kina",
        "symbole": "K"
      },
      "PHP": {
        "iso4217Code": "PHP",
        "iso4217Number": "608",
        "iso4217MinorUnit": "2",
        "name.en": "Philippine peso",
        "symbole": "₱"
      },
      "PKR": {
        "iso4217Code": "PKR",
        "iso4217Number": "586",
        "iso4217MinorUnit": "2",
        "name.en": "Pakistani rupee",
        "symbole": "₨"
      },
      "PLN": {
        "iso4217Code": "PLN",
        "iso4217Number": "985",
        "iso4217MinorUnit": "2",
        "name.en": "Polish złoty",
        "symbole": "zł"
      },
      "PYG": {
        "iso4217Code": "PYG",
        "iso4217Number": "600",
        "iso4217MinorUnit": "0",
        "name.en": "Paraguayan guaraní",
        "symbole": "₲"
      },
      "QAR": {
        "iso4217Code": "QAR",
        "iso4217Number": "634",
        "iso4217MinorUnit": "2",
        "name.en": "Qatari riyal",
        "symbole": "ر.ق"
      },
      "RON": {
        "iso4217Code": "RON",
        "iso4217Number": "946",
        "iso4217MinorUnit": "2",
        "name.en": "Romanian leu",
        "symbole": "lei"
      },
      "RSD": {
        "iso4217Code": "RSD",
        "iso4217Number": "941",
        "iso4217MinorUnit": "2",
        "name.en": "Serbian dinar",
        "symbole": "дин."
      },
      "CNY": {
        "iso4217Code": "CNY",
        "iso4217Number": "156",
        "iso4217MinorUnit": "2",
        "name.en": "Renminbi",
        "symbole": "元"
      },
      "RUB": {
        "iso4217Code": "RUB",
        "iso4217Number": "643",
        "iso4217MinorUnit": "2",
        "name.en": "Russian ruble",
        "symbole": "₽"
      },
      "RWF": {
        "iso4217Code": "RWF",
        "iso4217Number": "646",
        "iso4217MinorUnit": "0",
        "name.en": "Rwandan franc",
        "symbole": "Fr"
      },
      "SAR": {
        "iso4217Code": "SAR",
        "iso4217Number": "682",
        "iso4217MinorUnit": "2",
        "name.en": "Saudi riyal",
        "symbole": "﷼"
      },
      "SBD": {
        "iso4217Code": "SBD",
        "iso4217Number": "90",
        "iso4217MinorUnit": "2",
        "name.en": "Solomon Islands dollar",
        "symbole": "$"
      },
      "SCR": {
        "iso4217Code": "SCR",
        "iso4217Number": "690",
        "iso4217MinorUnit": "2",
        "name.en": "Seychelles rupee",
        "symbole": "₨"
      },
      "SDG": {
        "iso4217Code": "SDG",
        "iso4217Number": "938",
        "iso4217MinorUnit": "2",
        "name.en": "Sudanese pound",
        "symbole": "ج.س."
      },
      "SEK": {
        "iso4217Code": "SEK",
        "iso4217Number": "752",
        "iso4217MinorUnit": "2",
        "name.en": "Swedish krona (plural: kronor)",
        "symbole": "kr"
      },
      "SGD": {
        "iso4217Code": "SGD",
        "iso4217Number": "702",
        "iso4217MinorUnit": "2",
        "name.en": "Singapore dollar",
        "symbole": "$"
      },
      "SHP": {
        "iso4217Code": "SHP",
        "iso4217Number": "654",
        "iso4217MinorUnit": "2",
        "name.en": "Saint Helena pound",
        "symbole": "£"
      },
      "SLL": {
        "iso4217Code": "SLL",
        "iso4217Number": "694",
        "iso4217MinorUnit": "2",
        "name.en": "Sierra Leonean leone",
        "symbole": "Le"
      },
      "SLE": {
        "iso4217Code": "SLE",
        "iso4217Number": "925",
        "iso4217MinorUnit": "2",
        "name.en": "Sierra Leonean leone",
        "symbole": "Le"
      },
      "SOS": {
        "iso4217Code": "SOS",
        "iso4217Number": "706",
        "iso4217MinorUnit": "2",
        "name.en": "Somali shilling",
        "symbole": "Sh"
      },
      "SRD": {
        "iso4217Code": "SRD",
        "iso4217Number": "968",
        "iso4217MinorUnit": "2",
        "name.en": "Surinamese dollar",
        "symbole": "$"
      },
      "SSP": {
        "iso4217Code": "SSP",
        "iso4217Number": "728",
        "iso4217MinorUnit": "2",
        "name.en": "South Sudanese pound",
        "symbole": "£"
      },
      "STN": {
        "iso4217Code": "STN",
        "iso4217Number": "930",
        "iso4217MinorUnit": "2",
        "name.en": "São Tomé and Príncipe dobra",
        "symbole": "Db"
      },
      "SVC": {
        "iso4217Code": "SVC",
        "iso4217Number": "222",
        "iso4217MinorUnit": "2",
        "name.en": "Salvadoran colón",
        "symbole": ""
      },
      "SYP": {
        "iso4217Code": "SYP",
        "iso4217Number": "760",
        "iso4217MinorUnit": "2",
        "name.en": "Syrian pound",
        "symbole": "ل.س"
      },
      "SZL": {
        "iso4217Code": "SZL",
        "iso4217Number": "748",
        "iso4217MinorUnit": "2",
        "name.en": "Swazi lilangeni",
        "symbole": "L"
      },
      "THB": {
        "iso4217Code": "THB",
        "iso4217Number": "764",
        "iso4217MinorUnit": "2",
        "name.en": "Thai baht",
        "symbole": "฿"
      },
      "TJS": {
        "iso4217Code": "TJS",
        "iso4217Number": "972",
        "iso4217MinorUnit": "2",
        "name.en": "Tajikistani somoni",
        "symbole": "с."
      },
      "TMT": {
        "iso4217Code": "TMT",
        "iso4217Number": "934",
        "iso4217MinorUnit": "2",
        "name.en": "Turkmenistan manat",
        "symbole": "m."
      },
      "TND": {
        "iso4217Code": "TND",
        "iso4217Number": "788",
        "iso4217MinorUnit": "3",
        "name.en": "Tunisian dinar",
        "symbole": "د.ت"
      },
      "TOP": {
        "iso4217Code": "TOP",
        "iso4217Number": "776",
        "iso4217MinorUnit": "2",
        "name.en": "Tongan paʻanga",
        "symbole": "T$"
      },
      "TRY": {
        "iso4217Code": "TRY",
        "iso4217Number": "949",
        "iso4217MinorUnit": "2",
        "name.en": "Turkish lira",
        "symbole": "₺"
      },
      "TTD": {
        "iso4217Code": "TTD",
        "iso4217Number": "780",
        "iso4217MinorUnit": "2",
        "name.en": "Trinidad and Tobago dollar",
        "symbole": "$"
      },
      "TWD": {
        "iso4217Code": "TWD",
        "iso4217Number": "901",
        "iso4217MinorUnit": "2",
        "name.en": "New Taiwan dollar",
        "symbole": "$"
      },
      "TZS": {
        "iso4217Code": "TZS",
        "iso4217Number": "834",
        "iso4217MinorUnit": "2",
        "name.en": "Tanzanian shilling",
        "symbole": "Sh"
      },
      "UAH": {
        "iso4217Code": "UAH",
        "iso4217Number": "980",
        "iso4217MinorUnit": "2",
        "name.en": "Ukrainian hryvnia",
        "symbole": "₴"
      },
      "UGX": {
        "iso4217Code": "UGX",
        "iso4217Number": "800",
        "iso4217MinorUnit": "0",
        "name.en": "Ugandan shilling",
        "symbole": "USh"
      },
      "USD": {
        "iso4217Code": "USD",
        "iso4217Number": "840",
        "iso4217MinorUnit": "2",
        "name.en": "United States dollar",
        "symbole": "$"
      },
      "USN": {
        "iso4217Code": "USN",
        "iso4217Number": "997",
        "iso4217MinorUnit": "2",
        "name.en": "United States dollar (next day) (funds code)",
        "symbole": ""
      },
      "UYI": {
        "iso4217Code": "UYI",
        "iso4217Number": "940",
        "iso4217MinorUnit": "0",
        "name.en": "Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)",
        "symbole": ""
      },
      "UYU": {
        "iso4217Code": "UYU",
        "iso4217Number": "858",
        "iso4217MinorUnit": "2",
        "name.en": "Uruguayan peso",
        "symbole": "$"
      },
      "UYW": {
        "iso4217Code": "UYW",
        "iso4217Number": "927",
        "iso4217MinorUnit": "4",
        "name.en": "Unidad previsional",
        "symbole": ""
      },
      "UZS": {
        "iso4217Code": "UZS",
        "iso4217Number": "860",
        "iso4217MinorUnit": "2",
        "name.en": "Uzbekistan som",
        "symbole": "Sʻ"
      },
      "VED": {
        "iso4217Code": "VED",
        "iso4217Number": "926",
        "iso4217MinorUnit": "2",
        "name.en": "Venezuelan bolívar digital",
        "symbole": "Bs."
      },
      "VES": {
        "iso4217Code": "VES",
        "iso4217Number": "928",
        "iso4217MinorUnit": "2",
        "name.en": "Venezuelan bolívar soberano",
        "symbole": "Bs.S."
      },
      "VND": {
        "iso4217Code": "VND",
        "iso4217Number": "704",
        "iso4217MinorUnit": "0",
        "name.en": "Vietnamese đồng",
        "symbole": "₫"
      },
      "VUV": {
        "iso4217Code": "VUV",
        "iso4217Number": "548",
        "iso4217MinorUnit": "0",
        "name.en": "Vanuatu vatu",
        "symbole": "Vt"
      },
      "WST": {
        "iso4217Code": "WST",
        "iso4217Number": "882",
        "iso4217MinorUnit": "2",
        "name.en": "Samoan tala",
        "symbole": "T"
      },
      "XAF": {
        "iso4217Code": "XAF",
        "iso4217Number": "950",
        "iso4217MinorUnit": "0",
        "name.en": "CFA franc BEAC",
        "symbole": "Fr"
      },
      "XAG": {
        "iso4217Code": "XAG",
        "iso4217Number": "961",
        "iso4217MinorUnit": ".",
        "name.en": "Silver (one troy ounce)",
        "symbole": ""
      },
      "XAU": {
        "iso4217Code": "XAU",
        "iso4217Number": "959",
        "iso4217MinorUnit": ".",
        "name.en": "Gold (one troy ounce)",
        "symbole": ""
      },
      "XBA": {
        "iso4217Code": "XBA",
        "iso4217Number": "955",
        "iso4217MinorUnit": ".",
        "name.en": "European Composite Unit (EURCO) (bond market unit)",
        "symbole": ""
      },
      "XBB": {
        "iso4217Code": "XBB",
        "iso4217Number": "956",
        "iso4217MinorUnit": ".",
        "name.en": "European Monetary Unit (E.M.U.-6) (bond market unit)",
        "symbole": ""
      },
      "XBC": {
        "iso4217Code": "XBC",
        "iso4217Number": "957",
        "iso4217MinorUnit": ".",
        "name.en": "European Unit of Account 9 (E.U.A.-9) (bond market unit)",
        "symbole": ""
      },
      "XBD": {
        "iso4217Code": "XBD",
        "iso4217Number": "958",
        "iso4217MinorUnit": ".",
        "name.en": "European Unit of Account 17 (E.U.A.-17) (bond market unit)",
        "symbole": ""
      },
      "XCD": {
        "iso4217Code": "XCD",
        "iso4217Number": "951",
        "iso4217MinorUnit": "2",
        "name.en": "East Caribbean dollar",
        "symbole": "$"
      },
      "XDR": {
        "iso4217Code": "XDR",
        "iso4217Number": "960",
        "iso4217MinorUnit": ".",
        "name.en": "Special drawing rights",
        "symbole": ""
      },
      "XOF": {
        "iso4217Code": "XOF",
        "iso4217Number": "952",
        "iso4217MinorUnit": "0",
        "name.en": "CFA franc BCEAO",
        "symbole": "Fr"
      },
      "XPD": {
        "iso4217Code": "XPD",
        "iso4217Number": "964",
        "iso4217MinorUnit": ".",
        "name.en": "Palladium (one troy ounce)",
        "symbole": ""
      },
      "XPF": {
        "iso4217Code": "XPF",
        "iso4217Number": "953",
        "iso4217MinorUnit": "0",
        "name.en": "CFP franc (franc Pacifique)",
        "symbole": "₣"
      },
      "XPT": {
        "iso4217Code": "XPT",
        "iso4217Number": "962",
        "iso4217MinorUnit": ".",
        "name.en": "Platinum (one troy ounce)",
        "symbole": ""
      },
      "XSU": {
        "iso4217Code": "XSU",
        "iso4217Number": "994",
        "iso4217MinorUnit": ".",
        "name.en": "SUCRE",
        "symbole": ""
      },
      "XTS": {
        "iso4217Code": "XTS",
        "iso4217Number": "963",
        "iso4217MinorUnit": ".",
        "name.en": "Code reserved for testing",
        "symbole": ""
      },
      "XUA": {
        "iso4217Code": "XUA",
        "iso4217Number": "965",
        "iso4217MinorUnit": ".",
        "name.en": "ADB Unit of Account",
        "symbole": ""
      },
      "XXX": {
        "iso4217Code": "XXX",
        "iso4217Number": "999",
        "iso4217MinorUnit": ".",
        "name.en": "No currency",
        "symbole": ""
      },
      "YER": {
        "iso4217Code": "YER",
        "iso4217Number": "886",
        "iso4217MinorUnit": "2",
        "name.en": "Yemeni rial",
        "symbole": "﷼"
      },
      "ZAR": {
        "iso4217Code": "ZAR",
        "iso4217Number": "710",
        "iso4217MinorUnit": "2",
        "name.en": "South African rand",
        "symbole": "R"
      },
      "ZMW": {
        "iso4217Code": "ZMW",
        "iso4217Number": "967",
        "iso4217MinorUnit": "2",
        "name.en": "Zambian kwacha",
        "symbole": "ZK"
      },
      "ZWL": {
        "iso4217Code": "ZWL",
        "iso4217Number": "932",
        "iso4217MinorUnit": "2",
        "name.en": "Zimbabwean dollar",
        "symbole": ""
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