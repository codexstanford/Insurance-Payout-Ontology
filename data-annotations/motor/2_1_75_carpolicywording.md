# @key country
UK  

# @key insurer
axa

---
your keys (or keyless entry system) were stolen by a person knowing the location of your car and you continue to be insured with us (the maximum we will pay in this instance is £500);
        

```
  payoutType=Limit
  amount.value=500
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  for=indemnity
```
---
The most we will pay is up to a maximum of £20,000,000
(including all legal and other expenses) for any one claim or number of claims arising from one cause.
```
  payoutType=Limit
  amount.value=20000000
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  multipliers.occurence=perClaim
  for=indemnity
  for=legalCost
  for=legalExpenses
```

---
the most we will pay is £50 for any windscreen repair.
        
```
  payoutType=Limit
  amount.value=50
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  for=windscreenRepair
```

---
the most we will pay for any windscreen replacement claim under this section is £100

        
```
  payoutType=Limit
  amount.value=100
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  for=windscreenReplacement
```

---
The most we will pay for your loss of earnings is £5,000 per calendar month 

        
```
  payoutType=Limit
  amount.value=5000
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  multipliers.time=perCalendarMonth
  for=indemnity
  isExtra=false
```

---
we will repay your alternative travelling costs up to a maximum of £15 per day.
        
```
  payoutType=Limit
  amount.value=15
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  multipliers.time=perDay
  for=travelingCost
```

---
The most we will pay for a courtesy car  is up to 14 consecutive days

        
```
  payoutType=Limit
  amount.value=14
  amount.unit.name=consecutiveDay
  amount.unit.dimension=Time
  for=courtesyCar
```

---
The most we will pay: for a courtesy car is up to 21 days in any period of insurance.
```
  payoutType=Limit
  amount.value=21
  amount.unit.name=day
  amount.unit.dimension=Time
  multipliers.time=perPeriodOfInsurance
  for=courtesyCar
```

---
The most we will pay will be £100,000 for any claim or claims arising from any one incident.
```
  payoutType=Limit
  amount.value=100000
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  multipliers.occurence=perIncident
  for=indemnity
```

---
if our rescue team decide to provide overnight accommodation, we will pay a maximum of £60 for a lone traveller or £40 per person for one night for you and up to 6 passengers. The maximum per incident is £240;

```
  payoutType=Limit
  amount.value=60
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  multipliers.person=perLoneTraveler
  for=overnightAccomodation
```

```
  payoutType=Limit
  amount.value=40
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  amount_1.value=1
  amount_1.unit.name=night
  amount_1.unit.dimension=Time
  amount_2.value=1
  amount_2.unit.name=policyholder
  amount_2.unit.dimension=Person
  amount_3.value=6
  amount_3.unit.name=passenger
  amount_3.unit.dimension=Person
  multipliers.occurence=perIncident
  multipliers.person=perPerson
  for=overnightAccomodation
```

```
  payoutType=Limit
  amount.value=240
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  multipliers.occurence=perIncident
  for=overnightAccomodation
```


---
we will pay up to £100 (maximum) towards the cost of alternative transport or car hire
```
  payoutType=Limit
  amount.value=100
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  forComposition=or
  for=alternativeTransport
  for=carHire
```

---
2. The cost of hiring another car while your car is being repaired. We will pay up to £70 a day and £750 in total, as long as you are able to meet the conditions of the hire-car company.
```
  payoutType=Limit
  amount.value=70
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  multipliers.time=perDay
  for=carHire
```

```
  payoutType=Limit
  amount.value=750
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  multipliers.occurence=perIncident
  for=carHire
```


---
3. We will pay for bed and breakfast costs of up to £30 for each person each day (£500 in total for everyone in your group)
```
  payoutType=Limit
  amount.value=30
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  multipliers.time=perDay
  multipliers.person=perPerson
  for=bedAndBreakfast
```
```
  payoutType=Limit
  amount.value=500
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  multipliers.occurence=perIncident
  for=bedAndBreakfast
```
---
If after a breakdown your car is still not repaired or safe to drive when it is time for you to go home, we will pay for suitable transport to get you, your passengers and your luggage home, and up to £150 towards other travel costs in the UK while you wait for your own car. We will select the most appropriate solution from one of the following options:  pay the cost of one rail or sea ticket (or an air ticket if the rail or sea trip would take more
than 12 hours) for you to go to get your car once it has been repaired or found;
```
  payoutType=Limit
  amount.value=150
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  amount_1.value=1
  amount_1.unit.name=person
  amount_1.unit.dimension=Person
  for=alternativeTransport
```

---
pay any storage charges (up to £100) while your car is waiting to be repaired, collected or
taken home.
```
  payoutType=Limit
  amount.value=100
  amount.unit.name=GBP
  amount.unit.dimension=Monetary
  multipliers.occurence=perClaim
  for=carStorageFee
```