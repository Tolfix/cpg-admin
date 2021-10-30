import "./index.css";
import { Admin, fetchUtils, ListGuesser, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
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

const fetchJson = (url: string, options: any = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('Authorization', `Bearer ${JSON.parse(localStorage.getItem("auth") ?? "{}").token}`);
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider(process.env.REACT_APP_CPG_DOMAIN, fetchJson);

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
