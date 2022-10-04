import { MonetaryAmount,PriceSpecification } from "./MonetaryAmount,PriceSpecification";
import { Duration } from "./Duration";
import { Order } from "./Order";
import { string,string,PhysicalActivityCategory,Thing,CategoryCode } from "./string,string,PhysicalActivityCategory,Thing,CategoryCode";
import { date } from "./date";
import { Organization,Person } from "./Organization,Person";
import { dateTime,date } from "./dateTime,date";
import { Person,Organization } from "./Person,Organization";
import { PaymentStatusType,string } from "./PaymentStatusType,string";
import { dateTime } from "./dateTime";
import { PaymentMethod } from "./PaymentMethod";


export class Invoice extends Intangible {
  totalPaymentDue: MonetaryAmount,PriceSpecification;
  billingPeriod: Duration;
  referencesOrder: Order;
  accountId: string;
  category: string,string,PhysicalActivityCategory,Thing,CategoryCode;
  scheduledPaymentDate: date;
  confirmationNumber: string;
  customer: Organization,Person;
  provider: Organization,Person;
  minimumPaymentDue: MonetaryAmount,PriceSpecification;
  paymentDueDate: dateTime,date;
  broker: Person,Organization;
  paymentStatus: PaymentStatusType,string;
  paymentMethodId: string;
  paymentDue: dateTime;
  paymentMethod: PaymentMethod;


}
