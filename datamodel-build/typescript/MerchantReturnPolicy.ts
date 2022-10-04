import { MerchantReturnEnumeration } from "./MerchantReturnEnumeration";
import { Country,string } from "./Country,string";
import { MonetaryAmount,number } from "./MonetaryAmount,number";
import { MonetaryAmount } from "./MonetaryAmount";
import { ReturnFeesEnumeration } from "./ReturnFeesEnumeration";
import { OfferItemCondition } from "./OfferItemCondition";
import { ReturnLabelSourceEnumeration } from "./ReturnLabelSourceEnumeration";
import { RefundTypeEnumeration } from "./RefundTypeEnumeration";
import { dateTime,number,date } from "./dateTime,number,date";
import { ReturnMethodEnumeration } from "./ReturnMethodEnumeration";
import { PropertyValue } from "./PropertyValue";
import { MerchantReturnPolicySeasonalOverride } from "./MerchantReturnPolicySeasonalOverride";
import { string,Country } from "./string,Country";


export class MerchantReturnPolicy extends Intangible {
  returnPolicyCategory: MerchantReturnEnumeration;
  returnPolicyCountry: Country,string;
  merchantReturnLink: string;
  restockingFee: MonetaryAmount,number;
  itemDefectReturnShippingFeesAmount: MonetaryAmount;
  itemDefectReturnFees: ReturnFeesEnumeration;
  inStoreReturnsOffered: boolean;
  itemCondition: OfferItemCondition;
  itemDefectReturnLabelSource: ReturnLabelSourceEnumeration;
  returnLabelSource: ReturnLabelSourceEnumeration;
  customerRemorseReturnShippingFeesAmount: MonetaryAmount;
  refundType: RefundTypeEnumeration;
  returnShippingFeesAmount: MonetaryAmount;
  merchantReturnDays: dateTime,number,date;
  returnMethod: ReturnMethodEnumeration;
  additionalProperty: PropertyValue;
  customerRemorseReturnLabelSource: ReturnLabelSourceEnumeration;
  customerRemorseReturnFees: ReturnFeesEnumeration;
  returnPolicySeasonalOverride: MerchantReturnPolicySeasonalOverride;
  applicableCountry: string,Country;
  returnFees: ReturnFeesEnumeration;


}
