function CardElement({ title, imgUrl, isVisited, children }) {
  const visitedLabel = isVisited ? "✅ Visitata" : "❌ Non Visitata";
  return (
    <div className="bg-zinc-950">
      <img src={imgUrl} alt="" />
      <div className="flex flex-col p-4">
        <h2 className="text-2xl text-white font-bold">{title}</h2>
        <p className="text-gray-500">{children}</p>
        <span>{visitedLabel}</span>
      </div>
    </div>
  );
}

export default CardElement;
