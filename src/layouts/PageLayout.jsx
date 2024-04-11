export default function PageLayout({ children }) {
    return (
        <div className={`mb-32 flex flex-col gap-[150px]`} >
            {children}
        </div>
    );
}
