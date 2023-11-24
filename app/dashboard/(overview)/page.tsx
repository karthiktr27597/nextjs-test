import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {
    users,
    customers,
    invoices,
    revenue,
} from '@/app/lib/placeholder-data';

export default async function Page() {

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="Collected" value={1106.36} type="collected" />
                <Card title="Pending" value={1339.11} type="pending" />
                <Card title="Total Invoices" value={1000} type="invoices" />
                <Card
                    title="Total Customers"
                    value={100}
                    type="customers"
                />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <RevenueChart revenue={revenue} />
                <LatestInvoices latestInvoices={invoices} />
            </div>
        </main>
    );
}