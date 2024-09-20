import "./metric.css";

interface MetricProps{
    label: string;
    value: string;
}

export default function Metric ({ label, value }: MetricProps) {
    return(
        <div className="metric">
            <div className="metric-value">{value}</div>
            <div className="metric-label">{label}</div>
        </div>
    )
}