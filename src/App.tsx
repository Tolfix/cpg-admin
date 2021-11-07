import { Admin, ListGuesser, Resource } from 'react-admin';
import Dashboard from "./components/Dashboard";
import authProvider from "./components/authProvider";
import dataProvider from './components/dataProvider';
import { CustomerList } from "./components/customers/Field";
import { CreateCustomer } from "./components/customers/Create";
import { EditCustomer } from "./components/customers/Edit";
import { CreateInvoices } from "./components/invoices/Create";
import { ShowInvoices } from "./components/invoices/Show";
import { InvoicesList } from "./components/invoices/List";
import { EditInvoices } from "./components/invoices/Edit";
import { CreateTransactions } from "./components/transactions/Create";
import { ListTransactions } from "./components/transactions/List";
import { CreateProducts } from './components/products/Create';
import { CreateCategory } from './components/categories/Create';
import { ListProducts } from './components/products/List';
import { EditProducts } from './components/products/Edit';
import { CreateOrders } from './components/orders/Create';
import { OrderList } from './components/orders/List';
import { EditOrders } from './components/orders/Edit';
import { EditTrans } from './components/transactions/Edit';

function App() {
  return (
    <>
    
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="categories" list={ListGuesser} create={CreateCategory} />
        <Resource name="customers" list={CustomerList} create={CreateCustomer} edit={EditCustomer} />
        <Resource name="invoices" list={InvoicesList} show={ShowInvoices} create={CreateInvoices} edit={EditInvoices} />
        <Resource name="products" list={ListProducts} create={CreateProducts} edit={EditProducts} />
        <Resource name="orders" list={OrderList} create={CreateOrders} edit={EditOrders} />
        <Resource name="transactions" list={ListTransactions} create={CreateTransactions} edit={EditTrans} />
    </Admin>
    
    </>
  );
}

export default App;
