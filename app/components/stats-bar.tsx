type Props = {
  label: string;
  value: number;
};

const StatsBar = ({ label, value }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <p className="w-24 text-sm capitalize">{label}</p>

      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-primary-green h-full"
          style={{ width: `${Math.min(value, 100)}%` }}
        />
      </div>

      <p className="w-10 text-xs text-right">{value}</p>
    </div>
  );
};

export default StatsBar;
