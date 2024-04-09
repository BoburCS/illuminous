
export default function TabPanel({ tabs, handleTabClick }) {
    return (
        <div className="mb-20 px-10 rounded-medium bg-light-dark flex items-center gap-20">
            {tabs.map((tab) => (
                <div onClick={() => handleTabClick(tab.id)} className="cursor-pointer" key={tab.id}>
                    <h2 className={`font-medium text-base py-6 ${tab.active ? 'border-b-2 border-red' : ''}`}>{tab.title}</h2>
                </div>
            ))}
        </div>
    );
}
