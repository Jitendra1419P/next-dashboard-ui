const RightButton = ({ texts }: { texts: string }) => {
  return (
    <div className="px-3 py-2 bg-lamaSkyBlue flex items-center justify-center gap-2 rounded-lg text-white">
      <span className="text-xs">{texts}</span>
    </div>
  );
};

export default RightButton;
