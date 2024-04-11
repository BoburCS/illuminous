
export default function Text({ children, type, style }) {
    let styles;

    switch(type) {
        case "40": {
            styles = "text-4xl font-semibold";
            break;
        }
        case "36": {
            styles = "text-[2.25rem] font-semibold";
            break;
        }
        case "32": {
            styles = "text-[32px] font-semibold";
            break;
        }
        case "30": {
            styles = "text-3xl font-semibold";
            break;
        }
        case "24-semibold": {
            styles = "text-2xl font-semibold leading-[30px]";
            break;
        } 
        case "24-medium": {
            styles = "text-2xl font-medium leading-[30px]";
            break; 
        }
        case "20": {
            styles = "text-xl font-semibold mb-4 text-center";
            break;
        }
        case "18-semibold": {
            styles = "text-lg font-semibold";
            break;
        }
        case "18": {
            styles = "text-lg font-medium";
            break;
        }
        case "14": {
            styles = "text-sm font-normal leading-4"
            break;
        }
        case "13": {
            styles = "text-[13px] font-semibold"
        }
        case "12": {
            styles = "text-xs font-medium";
            break;
        }
        default: {
            styles = "text-base font-normal";
        }
    }

    return (
        <p className={`${styles} ${style}`}>
            {children}
        </p>
    );
}
