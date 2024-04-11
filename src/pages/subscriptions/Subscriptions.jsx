import PageLayout from "@layouts/PageLayout";
import Hero from "@containers/Hero";
import SubscriptionsSection from "@components/Subscriptions";
import CardDetails from "@containers/CardDetails";

export default function Subscriptions() {
    return (
        <PageLayout>
            <Hero bg={"bg-black"} Banner={SubscriptionsBanner} />
            <CardDetails />
        </PageLayout>
    );
}

function SubscriptionsBanner() {
    return (
        <div className="pt-20 flex h-auto items-center justify-center">
            <SubscriptionsSection />
        </div>
    );
}