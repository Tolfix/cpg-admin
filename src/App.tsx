import { Admin, ListGuesser, Resource } from 'react-admin';
import Dashboard from "./components/Dashboard";
import authProvider from "./components/authProvider";
import { CustomerList } from "./components/customers/Field";
import { CreateCustomer } from "./components/customers/Create";
import { EditCustomer } from "./components/customers/Edit";
import { CreateInvoices } from "./components/invoices/Create";
import { ShowInvoices } from "./components/invoices/Show";
import { InvoicesList } from "./components/invoices/List";
import { EditInvoices } from "./components/invoices/Edit";
import { CreateTransactions } from "./components/transactions/Create";
import { ListTransactions } from "./components/transactions/List";
import dataProvider from './components/dataProvider';

function App() {
  return (
    <>
    
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="categories" list={ListGuesser} />
        <Resource name="customers" list={CustomerList} create={CreateCustomer} edit={EditCustomer} />
        <Resource name="invoices" list={InvoicesList} show={ShowInvoices} create={CreateInvoices} edit={EditInvoices} />
        <Resource name="transactions" list={ListTransactions} create={CreateTransactions} />
    </Admin>
    
    </>
  );
}

export default App;
